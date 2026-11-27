// Fasit-tester for mattegeneratorene. Hver fasit regnes ut på nytt her, uavhengig av generatorkoden.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GENERATORER, normaliser, felter, lagData, arkHTML } from '../src/ark.js';
import { klokkeord } from '../src/gen/klokka.js';
import { harOvergang } from '../src/gen/plussminus.js';

const KODER = Array.from({ length: 60 }, (_, i) => `T${i}X`);
const G = GENERATORER;

// Alle kombinasjoner av trinn og ett annet felt (resten standard)
function* kombinasjoner(gen) {
  for (let t = gen.trinn[0]; t <= gen.trinn[1]; t++) {
    const base = normaliser(gen, { trinn: t });
    yield base;
    for (const fe of felter(gen, base)) {
      if (fe.id === 'trinn' || fe.multi) continue;
      for (const [v] of fe.valg) yield normaliser(gen, { trinn: t, [fe.id]: v });
    }
  }
}
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));

test('gangetabell: alle svar er riktige', () => {
  for (const o of kombinasjoner(G.gangetabell)) for (const k of KODER.slice(0, 15)) {
    const d = lagData(G.gangetabell, o, k);
    if (!d.items) continue;
    for (const i of d.items) {
      assert.equal(i.svar, i.a * i.b);
      if (d.type !== 'rekke') assert.ok(o.tabeller.map(Number).includes(i.a) || o.tabeller.map(Number).includes(i.b), `tabell ${i.a}·${i.b}`);
      assert.ok(i.a >= 1 && i.a <= 10 && i.b >= 1 && i.b <= 10);
    }
    if (d.type === 'blandet' || d.type === 'mangler') assert.equal(d.items.length, Number(o.antall));
  }
});

test('pluss og minus: riktige svar, tallområde, tierovergang og ingen negative svar', () => {
  for (const o of kombinasjoner(G.plussminus)) for (const k of KODER.slice(0, 15)) {
    const d = lagData(G.plussminus, o, k);
    assert.equal(d.items.length, Number(o.antall));
    for (const i of d.items) {
      const fasit = i.op === '+' ? i.a + i.b : i.a - i.b;
      assert.equal(i.svar, fasit);
      assert.ok(fasit >= 0, 'negativt svar');
      assert.ok(Math.max(i.a, i.b, fasit) <= Number(o.omrade), `utenfor tallområdet: ${i.a}${i.op}${i.b}`);
      if (o.regning === 'pluss') assert.equal(i.op, '+');
      if (o.regning === 'minus') assert.equal(i.op, '−');
      if (Number(o.omrade) > 10 && o.tierovergang !== 'blandet') {
        // uavhengig sjekk av mente/veksling kolonne for kolonne
        const a = String(i.a).split('').reverse().map(Number), b = String(i.b).split('').reverse().map(Number);
        let over = false;
        for (let p = 0; p < Math.max(a.length, b.length); p++) {
          const x = a[p] || 0, y = b[p] || 0;
          if (i.op === '+' ? x + y >= 10 : x < y) over = true;
        }
        assert.equal(over, o.tierovergang === 'med', `${i.a} ${i.op} ${i.b} tierovergang=${o.tierovergang}`);
      }
    }
  }
  assert.equal(harOvergang(8, 5, '+'), true);
  assert.equal(harOvergang(12, 5, '+'), false);
  assert.equal(harOvergang(52, 7, '-'), true);
  assert.equal(harOvergang(58, 23, '-'), false);
});

test('divisjon: kvotient og rest stemmer', () => {
  for (const o of kombinasjoner(G.divisjon)) for (const k of KODER.slice(0, 20)) {
    const d = lagData(G.divisjon, o, k);
    for (const i of d.items) {
      assert.equal(i.svar * i.b + i.rest, i.a);
      assert.ok(i.rest >= 0 && i.rest < i.b);
      if (o.type === 'tabell' || o.type === 'store') assert.equal(i.rest, 0);
      if (o.type === 'tabell') assert.ok(i.b <= 10 && i.svar <= 10);
    }
  }
});

test('brøk: alle fasitsvar stemmer og er forkortet', () => {
  let antall = 0;
  for (const o of kombinasjoner(G.brok)) for (const k of KODER.slice(0, 15)) {
    const d = lagData(G.brok, o, k);
    for (const del of d.deler) for (const x of del.items) {
      antall++;
      const html = arkHTML(G.brok, o, k).fasit;
      assert.ok(html.length > 0);
      const v = (b) => b[0] / b[1];
      switch (x.type) {
        case 'del': assert.ok(x.k > 0 && x.k < x.n); break;
        case 'sammenlign': {
          const l = x.a[0] * x.b[1], r = x.b[0] * x.a[1];
          const tegn = l < r ? '<' : l > r ? '>' : '=';
          assert.ok(html.includes(`fylt">${tegn}<`));
          break;
        }
        case 'mengde': assert.equal((x.hel * x.t) % x.n, 0); break;
        case 'pluss-lik': case 'pluss-ulik': {
          const n = x.a[1] * x.b[1], t = x.op === '+' ? x.a[0] * x.b[1] + x.b[0] * x.a[1] : x.a[0] * x.b[1] - x.b[0] * x.a[1];
          assert.ok(t > 0, 'svaret skal være positivt');
          if (x.type === 'pluss-lik') assert.equal(x.a[1], x.b[1]); else assert.notEqual(x.a[1], x.b[1]);
          break;
        }
        case 'forkort': assert.ok(gcd(x.t, x.n) > 1); break;
        case 'desimal': assert.equal((x.t * 100) % x.n, 0); break;
      }
    }
  }
  assert.ok(antall > 1000);
});

test('brøk: svar() regner riktig (uavhengig kontroll)', async () => {
  const { svar } = await import('../src/gen/brok.js');
  const lik = (s, t, n) => { assert.equal(gcd(s.t, s.n), 1, 'ikke forkortet'); assert.equal(s.t * n, t * s.n); };
  lik(svar({ type: 'pluss-ulik', op: '+', a: [1, 2], b: [1, 3] }), 5, 6);
  lik(svar({ type: 'pluss-ulik', op: '−', a: [3, 4], b: [1, 6] }), 7, 12);
  lik(svar({ type: 'pluss-lik', op: '+', a: [3, 4], b: [3, 4] }), 3, 2);
  lik(svar({ type: 'forkort', t: 12, n: 18 }), 2, 3);
  lik(svar({ type: 'gange', k: 3, t: 2, n: 5 }), 6, 5);
  assert.deepEqual(svar({ type: 'blandet-tall', retning: 'tilBlandet', hel: 2, r: 1, n: 4 }), { hel: 2, t: 1, n: 4 });
  assert.deepEqual(svar({ type: 'blandet-tall', retning: 'tilUekte', hel: 2, r: 1, n: 4 }), { t: 9, n: 4 });
  assert.deepEqual(svar({ type: 'mengde', t: 3, n: 4, hel: 20 }), { tall: 15 });
  assert.deepEqual(svar({ type: 'desimal', t: 3, n: 4 }), { hundredeler: 75 });
  assert.deepEqual(svar({ type: 'utvid', t: 2, n: 3, f: 4, mangler: 't' }), { tall: 8 });
  assert.deepEqual(svar({ type: 'sammenlign', a: [1, 2], b: [2, 4] }), { tegn: '=' });
  // Tilfeldig: sammenlign med flyttall, pluss med kryssmultiplikasjon
  for (const o of kombinasjoner(G.brok)) for (const k of KODER.slice(0, 10)) {
    for (const del of lagData(G.brok, o, k).deler) for (const x of del.items) {
      const s = svar(x);
      if (x.type === 'pluss-lik' || x.type === 'pluss-ulik') {
        const forventet = x.op === '+' ? x.a[0] / x.a[1] + x.b[0] / x.b[1] : x.a[0] / x.a[1] - x.b[0] / x.b[1];
        assert.ok(Math.abs(s.t / s.n - forventet) < 1e-9); assert.equal(gcd(s.t, s.n), 1);
      }
      if (x.type === 'gange') { assert.ok(Math.abs(s.t / s.n - (x.k * x.t) / x.n) < 1e-9); assert.equal(gcd(s.t, s.n), 1); }
      if (x.type === 'forkort') { assert.ok(Math.abs(s.t / s.n - x.t / x.n) < 1e-9); assert.equal(gcd(s.t, s.n), 1); }
      if (x.type === 'mengde') assert.equal(s.tall, (x.hel / x.n) * x.t);
      if (x.type === 'desimal') assert.ok(Math.abs(s.hundredeler / 100 - x.t / x.n) < 1e-9);
      if (x.type === 'utvid') assert.equal(x.mangler === 't' ? s.tall / (x.n * x.f) : x.t * x.f / s.tall, x.t / x.n);
    }
  }
});

test('klokka: ord for klokkeslett følger norsk talemåte', () => {
  const forventet = {
    '3:00': 'klokka tre', '3:05': 'fem over tre', '3:10': 'ti over tre', '3:15': 'kvart over tre', '3:20': 'ti på halv fire',
    '3:25': 'fem på halv fire', '3:30': 'halv fire', '3:35': 'fem over halv fire', '3:40': 'ti over halv fire', '3:45': 'kvart på fire',
    '3:50': 'ti på fire', '3:55': 'fem på fire', '12:30': 'halv ett', '12:45': 'kvart på ett', '11:50': 'ti på tolv', '1:00': 'klokka ett',
    '7:01': 'ett minutt over sju', '7:29': 'ett minutt på halv åtte', '7:31': 'ett minutt over halv åtte', '7:59': 'ett minutt på åtte', '9:17': 'sytten over ni', '9:23': 'sju på halv ti',
  };
  for (const [k, v] of Object.entries(forventet)) { const [h, m] = k.split(':').map(Number); assert.equal(klokkeord(h, m), v, k); }
  assert.equal(klokkeord(1, 0, 'nn'), 'klokka eitt');
  assert.equal(klokkeord(12, 30, 'nn'), 'halv eitt');
});

test('klokka: klokkeslett og tidsregning stemmer med nivået', () => {
  const lov = { 'hel-halv': [0, 30], kvart: [0, 15, 30, 45], fem: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] };
  for (const o of kombinasjoner(G.klokka)) for (const k of KODER.slice(0, 15)) {
    const d = lagData(G.klokka, o, k);
    for (const i of d.items) {
      if (d.tid) {
        if (i.slag === 'varighet') assert.equal(i.svar, i.til - i.fra);
        else assert.equal(i.svar, i.fra + i.pluss);
        assert.ok(i.svar > 0);
      } else {
        assert.ok(i.h >= 1 && i.h <= 12 && i.m >= 0 && i.m < 60);
        if (lov[o.niva]) assert.ok(lov[o.niva].includes(i.m), `${o.niva} ${i.h}:${i.m}`);
      }
    }
  }
});

test('kroner og øre: summer og vekslepenger stemmer', () => {
  for (const o of kombinasjoner(G.kroner)) for (const k of KODER.slice(0, 20)) {
    const d = lagData(G.kroner, o, k);
    assert.ok(d.items.length > 0);
    for (const i of d.items) {
      if (i.type === 'tell') { assert.equal(i.svar, i.verdier.reduce((a, b) => a + b, 0) * 100); assert.ok(i.verdier.every((v) => [1, 5, 10, 20, 50, 100, 200].includes(v))); }
      if (i.type === 'handle') assert.equal(i.svar, i.varer.reduce((a, x) => a + x.pris * x.stk, 0));
      if (i.type === 'veksle') { assert.equal(i.svar, i.betal - i.pris); assert.ok(i.svar > 0); }
      if (i.type === 'ore') assert.equal(i.svar, i.ore);
      if (o.trinn <= 3 && i.type !== 'ore') {
        const alle = i.type === 'handle' ? i.varer.map((x) => x.pris) : i.type === 'veksle' ? [i.pris] : [i.svar];
        assert.ok(alle.every((p) => p % 100 === 0), 'hele kroner til og med 3. trinn');
      }
    }
  }
});

test('tallinje: pilene peker på riktige tall', () => {
  for (const o of kombinasjoner(G.tallinje)) for (const k of KODER.slice(0, 25)) {
    const d = lagData(G.tallinje, o, k);
    assert.equal(d.linjer.length, Number(o.antall));
    for (const l of d.linjer) {
      assert.ok(l.piler.length >= 2);
      l.piler.forEach((p, j) => {
        assert.equal(l.svar[j], l.start + p * l.steg);
        assert.ok(!l.etiketter.includes(p), 'pil på et tall som allerede står');
        assert.ok(p > 0 && p < l.intervaller);
      });
      for (let j = 1; j < l.piler.length; j++) assert.ok(l.piler[j] - l.piler[j - 1] >= 2, 'boksene overlapper');
      if (o.trinn <= 4) assert.ok(l.start >= 0, 'ingen negative tall før 6. trinn');
    }
  }
});

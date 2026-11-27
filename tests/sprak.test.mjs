// Tester for norsk og engelsk: ordleting, kryssord, staveord, setninger, gloser og ordlistene.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GENERATORER, normaliser, felter, lagData, arkHTML } from '../src/ark.js';
import { finnAlle, styggeIRutenett, STYGGE } from '../src/lib/filter.js';
import STAVEORD from '../src/data/staveord.js';
import TEMAER from '../src/data/temaer.js';
import SETNINGER from '../src/data/setninger.js';
import GLOSER from '../src/data/gloser.js';

const KODER = Array.from({ length: 25 }, (_, i) => `S${i}Q`);
const G = GENERATORER;

function sjekkOrdleting(d, alfabet) {
  const str = d.grid.length;
  for (const rad of d.grid) { assert.equal(rad.length, str); for (const x of rad) assert.match(x, alfabet); }
  for (const p of d.ord) {
    for (let i = 0; i < p.ord.length; i++) assert.equal(d.grid[p.r + p.dr * i][p.c + p.dc * i], p.ord[i], `${p.ord} ligger ikke der fasiten sier`);
    const n = finnAlle(d.grid, p.ord).length;
    const pal = p.ord === [...p.ord].reverse().join('');
    assert.equal(n, pal ? 2 : 1, `${p.ord} finnes ${n} ganger`);
  }
  assert.deepEqual(styggeIRutenett(d.grid, d.ord.map((p) => p.ord)), []);
}

test('ordleting: hvert ord ligger der fasiten sier, én gang, og ingen stygge ord', () => {
  for (const tm of TEMAER) for (let t = 1; t <= 7; t++) for (const k of KODER.slice(0, 6)) {
    const o = normaliser(G.ordleting, { trinn: t, tema: tm.id });
    const d = lagData(G.ordleting, o, k);
    sjekkOrdleting(d, /^[A-ZÆØÅ]$/);
    assert.ok(d.ord.length >= Math.min(6, tm.ord.length - 5), `${tm.id} trinn ${t}: bare ${d.ord.length} ord`);
    // retninger i tråd med trinnet
    for (const p of d.ord) {
      if (t <= 2) assert.ok((p.dr === 0 && p.dc === 1) || (p.dr === 1 && p.dc === 0), 'bare bortover/nedover på 1.–2. trinn');
      if (t <= 4) assert.ok(p.dr >= 0 && p.dc >= 0, 'ingen baklengs før 5. trinn');
    }
  }
});

test('kryssord: rutenettet stemmer med svarene, og ingen utilsiktede ord', () => {
  for (const tm of TEMAER) for (let t = 1; t <= 7; t++) for (const k of KODER.slice(0, 4)) {
    const o = normaliser(G.kryssord, { trinn: t, tema: tm.id });
    const d = lagData(G.kryssord, o, k);
    assert.ok(d.ord.length >= Math.min(Number(o.antall), 5), `${tm.id} trinn ${t}: bare ${d.ord.length} ord`);
    const brukt = new Set();
    for (const p of d.ord) {
      for (let i = 0; i < p.ord.length; i++) {
        const r = p.r + (p.retning === 'l' ? i : 0), c = p.c + (p.retning === 'v' ? i : 0);
        assert.equal(d.grid[r][c], p.ord[i]); brukt.add(`${r},${c}`);
      }
      assert.ok(tm.ord.some((w) => w.ord.toUpperCase() === p.ord && w.hint === p.hint), 'hint hører til ordet');
    }
    // alle bokstaver hører til et ord, og alle sammenhengende rekker (≥2) er ord i lista
    const ordSett = new Set(d.ord.map((p) => `${p.retning}:${p.r},${p.c}:${p.ord}`));
    for (let r = 0; r < d.hoyde; r++) for (let c = 0; c < d.bredde; c++) {
      if (d.grid[r][c]) assert.ok(brukt.has(`${r},${c}`));
      for (const [ret, dr, dc] of [['v', 0, 1], ['l', 1, 0]]) {
        const forrige = d.grid[r - dr]?.[c - dc];
        if (!d.grid[r][c] || forrige) continue;
        let w = '', rr = r, cc = c;
        while (d.grid[rr]?.[cc]) { w += d.grid[rr][cc]; rr += dr; cc += dc; }
        if (w.length >= 2) assert.ok(ordSett.has(`${ret}:${r},${c}:${w}`), `utilsiktet ord ${w}`);
      }
    }
    // nummerering i leserekkefølge
    const nr = d.ord.map((p) => [p.nr, p.r, p.c]).sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < nr.length; i++) assert.ok(nr[i][1] > nr[i - 1][1] || (nr[i][1] === nr[i - 1][1] && nr[i][2] >= nr[i - 1][2]));
    // sammenhengende
    const celler = [...brukt], sett = new Set([celler[0]]), ko = [celler[0]];
    while (ko.length) { const [r, c] = ko.pop().split(',').map(Number); for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const n = `${r + a},${c + b}`; if (brukt.has(n) && !sett.has(n)) { sett.add(n); ko.push(n); } } }
    assert.equal(sett.size, brukt.size, 'kryssordet henger ikke sammen');
  }
});

test('staveord: blanke felt og stokkede ord stemmer med ordet', () => {
  for (let t = 1; t <= 7; t++) {
    const gen = G.staveord;
    for (const fe of felter(gen, normaliser(gen, { trinn: t }))) {
      if (fe.id !== 'gruppe') continue;
      for (const [g] of fe.valg) for (const type of ['blandet', 'mangler', 'stokk', 'ove']) for (const k of KODER.slice(0, 4)) {
        const o = normaliser(gen, { trinn: t, gruppe: g, type });
        const d = lagData(gen, o, k);
        const lov = new Set((g === 'alle' ? STAVEORD[t] : [STAVEORD[t][Number(g)]]).flatMap((x) => x.ord));
        for (const w of d.ord) assert.ok(lov.has(w), `${w} hører ikke til gruppen`);
        for (const del of d.deler) for (const i of del.items) {
          if (del.type === 'mangler') { assert.ok(i.lengde >= 1 && i.lengde < i.ord.length && i.start >= 0 && i.start + i.lengde <= i.ord.length); }
          if (del.type === 'stokk') { assert.notEqual(i.stokket, i.ord); assert.deepEqual([...i.stokket].sort(), [...i.ord].sort()); }
        }
        const h = arkHTML(gen, o, k);
        assert.ok(!/undefined|NaN/.test(h.ark + h.fasit));
      }
    }
  }
});

test('staveord: fokusbokstavene finnes i hvert ord i gruppa', () => {
  for (const [t, grupper] of Object.entries(STAVEORD)) for (const g of grupper) {
    assert.ok(g.ord.length >= 8, `${t}: ${g.regel} har for få ord`);
    for (const w of g.ord) {
      assert.match(w, /^[a-zæøå]+$/);
      if (g.fokus.length) assert.ok(g.fokus.some((f) => w.includes(f)), `${w} mangler fokus i «${g.regel}»`);
    }
  }
});

test('setninger: én blank, svar i ordbanken, unike svar', () => {
  for (const s of [...SETNINGER.ordbank, ...SETNINGER.ogaa]) {
    assert.equal(s.setning.split('___').length, 2, s.setning);
    assert.match(s.setning, /^[A-ZÆØÅ_]/);
    assert.match(s.setning, /[.!?]$/);
  }
  for (const s of SETNINGER.ogaa) assert.ok(['og', 'å'].includes(s.svar));
  for (let t = 1; t <= 7; t++) for (const type of ['ordbank', 'ogaa']) for (const k of KODER) {
    const o = normaliser(G.setninger, { trinn: t, type });
    const d = lagData(G.setninger, o, k);
    assert.equal(d.items.length, Number(o.antall));
    if (type === 'ordbank') {
      assert.equal(new Set(d.bank).size, d.bank.length);
      assert.deepEqual([...d.bank].sort(), d.items.map((s) => s.svar).sort());
    }
  }
});

test('gloser: oversettelser, koble-fasit og engelsk ordleting stemmer', () => {
  for (const tm of GLOSER) {
    const en = new Set(), no = new Set();
    for (const p of tm.par) {
      assert.match(p.en, /^[A-Za-z]+$/); assert.ok(!en.has(p.en) && !no.has(p.no), `dobbel ${p.en}/${p.no}`);
      en.add(p.en); no.add(p.no);
    }
    for (let t = 1; t <= 7; t++) for (const type of ['tilengelsk', 'tilnorsk', 'koble', 'ordleting']) for (const k of KODER.slice(0, 3)) {
      const o = normaliser(G.gloser, { trinn: t, tema: tm.id, type });
      const d = lagData(G.gloser, o, k);
      assert.ok(d.par.length >= 6, `${tm.id} ${type} trinn ${t}: ${d.par.length} par`);
      for (const p of d.par) assert.ok(tm.par.includes(p));
      if (type === 'koble') {
        assert.deepEqual([...d.hoyre].sort((a, b) => a - b), d.par.map((_, i) => i));
        const html = arkHTML(G.gloser, o, k).fasit;
        d.par.forEach((p, i) => { const rad = d.hoyre.indexOf(i); assert.equal(d.par[d.hoyre[rad]], p); assert.ok(html.includes(`<b>${i + 1} – ${String.fromCharCode(65 + rad)}</b>`)); });
      }
      if (type === 'ordleting') {
        sjekkOrdleting(d, /^[A-Z]$/);
        d.ord.forEach((w) => assert.ok(d.par.some((p) => p.en.toUpperCase() === w.ord)));
      }
    }
  }
});

test('ordlistene: gyldige tegn, ingen dubletter, ingen stygge ord', () => {
  for (const tm of TEMAER) {
    const sett = new Set();
    for (const w of tm.ord) {
      assert.match(w.ord, /^[a-zæøå]{3,11}$/); assert.ok(!sett.has(w.ord), `dublett ${w.ord}`); sett.add(w.ord);
      assert.ok(w.hint && w.hint.length <= 60 && !w.hint.toLowerCase().includes(w.ord), `hint for ${w.ord}`);
      assert.ok([1, 2, 3].includes(w.niva));
      assert.ok(!STYGGE.includes(w.ord.toUpperCase()));
    }
  }
});

test('alle ark kan lages uten feil for alle valg', () => {
  for (const gen of Object.values(G)) for (let t = gen.trinn[0]; t <= gen.trinn[1]; t++) {
    const base = normaliser(gen, { trinn: t });
    for (const fe of felter(gen, base)) {
      if (fe.id === 'trinn' || fe.multi) continue;
      for (const [v] of fe.valg) {
        const o = normaliser(gen, { trinn: t, [fe.id]: v });
        const h = arkHTML(gen, o, 'ALLE1');
        assert.ok(!/undefined|NaN|\[object/.test(h.ark + h.fasit), `${gen.id} trinn ${t} ${fe.id}=${v}`);
        assert.equal(arkHTML(gen, o, 'ALLE1').ark, h.ark, 'samme kode skal gi samme ark');
      }
    }
  }
});

test('gloser: ord med nesten lik betydning havner ikke på samme ark', async () => {
  const { SAMME } = await import('../src/gen/gloser.js');
  for (const tm of GLOSER) for (let t = 1; t <= 7; t++) for (const k of KODER) {
    const d = lagData(G.gloser, normaliser(G.gloser, { trinn: t, tema: tm.id, type: 'koble', antall: '16' }), k);
    for (const g of SAMME) assert.ok(d.par.filter((p) => g.includes(p.no)).length <= 1, `${g.join('/')} på samme ark`);
  }
});

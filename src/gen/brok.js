import { unike } from '../lib/rng.js';
import { liste, linje, boks, brok, brokSvar, forkort, gcd, lcm, desimal, t } from '../lib/fmt.js';
import { brokfigur } from '../lib/svg.js';

const MIKS = {
  3: ['del'], 4: ['del', 'sammenlign', 'mengde'], 5: ['pluss-lik', 'utvid', 'mengde', 'sammenlign'],
  6: ['forkort', 'blandet-tall', 'utvid', 'gange', 'sammenlign'], 7: ['pluss-ulik', 'gange', 'mengde', 'desimal', 'forkort'],
};
const TYPER = [['miks', 'Blandet for trinnet'], ['del'], ['sammenlign'], ['mengde'], ['pluss-lik'], ['utvid'], ['forkort'], ['blandet-tall'], ['pluss-ulik'], ['gange'], ['desimal']];
const NAVN = { del: 'Hvor stor del er skravert?', sammenlign: 'Sammenlign brøker', mengde: 'Brøkdel av et tall', 'pluss-lik': 'Pluss og minus, lik nevner', utvid: 'Utvid brøken', forkort: 'Forkort brøken', 'blandet-tall': 'Uekte brøk og blandet tall', 'pluss-ulik': 'Pluss og minus, ulik nevner', gange: 'Gange brøk med heltall', desimal: 'Brøk, desimaltall og prosent' };
const NAVN_NN = { del: 'Kor stor del er skravert?', sammenlign: 'Samanlikn brøkar', mengde: 'Brøkdel av eit tal', 'pluss-lik': 'Pluss og minus, lik nemnar', utvid: 'Utvid brøken', forkort: 'Forkort brøken', 'blandet-tall': 'Uekte brøk og blanda tal', 'pluss-ulik': 'Pluss og minus, ulik nemnar', gange: 'Gonge brøk med heiltal', desimal: 'Brøk, desimaltal og prosent' };
const INSTRUKS = {
  del: ['Skriv brøken som viser hvor stor del av figuren som er skravert.', 'Skriv brøken som viser kor stor del av figuren som er skravert.'],
  sammenlign: ['Skriv <, > eller = i boksen.', 'Skriv <, > eller = i boksen.'],
  mengde: ['Regn ut.', 'Rekn ut.'],
  'pluss-lik': ['Regn ut. Forkort svaret hvis du kan.', 'Rekn ut. Forkort svaret om du kan.'],
  utvid: ['Skriv tallet som mangler, så brøkene blir like store.', 'Skriv talet som manglar, så brøkane blir like store.'],
  forkort: ['Forkort brøken så mye som mulig.', 'Forkort brøken så mykje som mogleg.'],
  'blandet-tall': ['Skriv uekte brøk som blandet tall, og blandet tall som uekte brøk.', 'Skriv uekte brøk som blanda tal, og blanda tal som uekte brøk.'],
  'pluss-ulik': ['Finn felles nevner og regn ut. Forkort svaret.', 'Finn felles nemnar og rekn ut. Forkort svaret.'],
  gange: ['Regn ut. Skriv svaret som blandet tall hvis det er større enn 1.', 'Rekn ut. Skriv svaret som blanda tal om det er større enn 1.'],
  desimal: ['Skriv brøken som desimaltall og som prosent.', 'Skriv brøken som desimaltal og som prosent.'],
};

function lagOppgave(rng, type, trinn) {
  switch (type) {
    case 'del': {
      const form = rng.pick(['sirkel', 'stav', 'rute']);
      let n, rader = 1;
      if (form === 'sirkel') n = rng.pick([2, 3, 4, 5, 6, 8]);
      else if (form === 'stav') n = rng.pick([2, 3, 4, 5, 6, 8, 10]);
      else { [rader, n] = rng.pick([[2, 4], [2, 6], [2, 8], [3, 9], [2, 10], [3, 12]]); }
      const k = rng.int(1, n - 1);
      return { type, form, n, rader, k };
    }
    case 'sammenlign': {
      if (trinn <= 5) { const n = rng.pick([3, 4, 5, 6, 8, 10]); const a = rng.int(1, n - 1); let b = rng.int(1, n - 1); if (a === b) b = a === 1 ? 2 : a - 1; return { type, a: [a, n], b: [b, n] }; }
      if (rng.chance(0.2)) { const n = rng.pick([2, 3, 4, 5]); const a = rng.int(1, n - 1), m = rng.int(2, 4); return { type, a: [a, n], b: [a * m, n * m] }; }
      const n1 = rng.pick([2, 3, 4, 5, 6, 8, 10]), n2 = rng.pick([2, 3, 4, 5, 6, 8, 10, 12]);
      if (n1 === n2) return null;
      return { type, a: [rng.int(1, n1 - 1), n1], b: [rng.int(1, n2 - 1), n2] };
    }
    case 'mengde': {
      const n = rng.pick([2, 3, 4, 5, 6, 8, 10]);
      const tt = trinn <= 4 ? 1 : rng.int(1, n - 1);
      const hel = n * rng.int(2, trinn <= 4 ? 6 : 12);
      return { type, t: tt, n, hel };
    }
    case 'pluss-lik': {
      const n = rng.pick([3, 4, 5, 6, 7, 8, 9, 10, 12]);
      const op = rng.chance(0.5) ? '+' : '−';
      let a = rng.int(1, n - 1), b = rng.int(1, n - 1);
      if (op === '−') { if (a === b) return null; if (a < b) [a, b] = [b, a]; }
      return { type, op, a: [a, n], b: [b, n] };
    }
    case 'utvid': {
      const n = rng.pick([2, 3, 4, 5, 6, 8, 10]), tt = rng.int(1, n - 1);
      if (gcd(tt, n) !== 1) return null;
      return { type, t: tt, n, f: rng.int(2, trinn <= 5 ? 5 : 9), mangler: rng.chance(0.5) ? 't' : 'n' };
    }
    case 'forkort': {
      const n0 = rng.pick([2, 3, 4, 5, 6, 7, 8, 9, 10]), t0 = rng.int(1, n0 - 1);
      if (gcd(t0, n0) !== 1) return null;
      const g = rng.int(2, trinn <= 6 ? 6 : 12);
      return { type, t: t0 * g, n: n0 * g };
    }
    case 'blandet-tall': {
      const n = rng.pick([2, 3, 4, 5, 6, 8, 10]), hel = rng.int(1, 5), r = rng.int(1, n - 1);
      if (gcd(r, n) !== 1) return null;
      return { type, retning: rng.chance(0.5) ? 'tilBlandet' : 'tilUekte', hel, r, n };
    }
    case 'pluss-ulik': {
      const d = [2, 3, 4, 5, 6, 8, 10, 12];
      const n1 = rng.pick(d), n2 = rng.pick(d);
      if (n1 === n2 || lcm(n1, n2) > 24) return null;
      let a = [rng.int(1, n1 - 1), n1], b = [rng.int(1, n2 - 1), n2];
      const op = rng.chance(0.5) ? '+' : '−';
      if (op === '−') { const diff = a[0] * b[1] - b[0] * a[1]; if (diff === 0) return null; if (diff < 0) [a, b] = [b, a]; }
      return { type, op, a, b };
    }
    case 'gange': {
      const n = rng.pick([2, 3, 4, 5, 6, 8, 10]), tt = rng.int(1, n - 1), k = rng.int(2, 9);
      return { type, k, t: tt, n };
    }
    case 'desimal': {
      const n = rng.pick([2, 4, 5, 10, 20, 25, 50, 100]), tt = rng.int(1, n - 1);
      return { type, t: tt, n };
    }
  }
  return null;
}

// Fasit regnes ut her (testene regner uavhengig og sammenligner)
export function svar(o) {
  switch (o.type) {
    case 'del': return { t: o.k, n: o.n };
    case 'sammenlign': { const x = o.a[0] * o.b[1], y = o.b[0] * o.a[1]; return { tegn: x < y ? '<' : x > y ? '>' : '=' }; }
    case 'mengde': return { tall: (o.hel / o.n) * o.t };
    case 'pluss-lik': case 'pluss-ulik': {
      const n = lcm(o.a[1], o.b[1]); const ta = o.a[0] * (n / o.a[1]), tb = o.b[0] * (n / o.b[1]);
      const [tt, nn] = forkort(o.op === '+' ? ta + tb : ta - tb, n); return { t: tt, n: nn };
    }
    case 'utvid': return { tall: o.mangler === 't' ? o.t * o.f : o.n * o.f };
    case 'forkort': { const [tt, nn] = forkort(o.t, o.n); return { t: tt, n: nn }; }
    case 'blandet-tall': return o.retning === 'tilBlandet' ? { hel: o.hel, t: o.r, n: o.n } : { t: o.hel * o.n + o.r, n: o.n };
    case 'gange': { const [tt, nn] = forkort(o.k * o.t, o.n); return { t: tt, n: nn }; }
    case 'desimal': { const hundredeler = (o.t * 100) / o.n; return { hundredeler }; }
  }
}

function visOppgave(o, f, opts) {
  const s = f ? svar(o) : null;
  const b = (x) => `<b>${x}</b>`;
  switch (o.type) {
    case 'del': return `<div class="figuroppgave">${brokfigur(o.form, o.n, o.k, { rader: o.rader })}<span>${f ? b(brok(o.k, o.n)) + (gcd(o.k, o.n) > 1 ? ` (= ${brok(...forkort(o.k, o.n))})` : '') : `<span class="brokboks"><span></span><span></span></span>`}</span></div>`;
    case 'sammenlign': return `${brok(...o.a)} ${f ? `<span class="svarboks fylt">${s.tegn}</span>` : boks()} ${brok(...o.b)}`;
    case 'mengde': return `${brok(o.t, o.n)} ${t(opts, 'av', 'av')} ${o.hel} = ${f ? b(s.tall) : linje('s')}`;
    case 'pluss-lik': case 'pluss-ulik': return `${brok(...o.a)} ${o.op} ${brok(...o.b)} = ${f ? b(brokSvar(s.t, s.n)) : linje('m')}`;
    case 'utvid': return o.mangler === 't'
      ? `${brok(o.t, o.n)} = ${brok(f ? b(s.tall) : boks('liten'), o.n * o.f)}`
      : `${brok(o.t, o.n)} = ${brok(o.t * o.f, f ? b(s.tall) : boks('liten'))}`;
    case 'forkort': return `${brok(o.t, o.n)} = ${f ? b(brok(s.t, s.n)) : linje('m')}`;
    case 'blandet-tall': return o.retning === 'tilBlandet'
      ? `${brok(o.hel * o.n + o.r, o.n)} = ${f ? b(`${s.hel} ${brok(s.t, s.n)}`) : linje('m')}`
      : `${o.hel} ${brok(o.r, o.n)} = ${f ? b(brok(s.t, s.n)) : linje('m')}`;
    case 'gange': return `${o.k} · ${brok(o.t, o.n)} = ${f ? b(brokSvar(s.t, s.n)) : linje('m')}`;
    case 'desimal': return `${brok(o.t, o.n)} = ${f ? b(desimal(s.hundredeler, 2)) : linje('s')} = ${f ? b(`${s.hundredeler} %`) : linje('s')}`;
  }
}

export default {
  id: 'brok', fag: 'matte', navn: 'Brøk', trinn: [3, 7],
  felter: (o) => [
    { id: 'type', navn: 'Oppgaver', valg: TYPER.map(([v, n]) => [v, n || NAVN[v]]) },
    { id: 'antall', navn: 'Antall', valg: (o.type === 'miks' ? [12, 16, 20] : [12, 16, 20, 24]).map((x) => [String(x), String(x)]) },
  ],
  standard: (trinn) => ({ type: 'miks', antall: trinn <= 4 ? '12' : '20' }),

  lag(rng, o) {
    const typer = o.type === 'miks' ? MIKS[o.trinn] || MIKS[5] : [o.type];
    const kolFor = (ty) => (ty === 'del' ? 4 : ['desimal', 'pluss-ulik', 'pluss-lik'].includes(ty) ? 2 : 4);
    const perFor = (ty) => (typer.length === 1 ? Number(o.antall) : Math.max(1, Math.round(Number(o.antall) / typer.length / kolFor(ty))) * kolFor(ty));
    const deler = typer.map((type) => ({ type, items: unike(type === 'del' ? Math.min(perFor(type), 12) : perFor(type), () => lagOppgave(rng, type, o.trinn)) }));
    return { deler: deler.filter((d) => d.items.length) };
  },

  vis(d, o) {
    const blokk = (f) => d.deler.map((del) => {
      const kol = del.type === 'del' ? 4 : ['desimal', 'pluss-ulik', 'pluss-lik'].includes(del.type) ? 2 : 4;
      return `${d.deler.length > 1 ? `<h3 class="delttittel">${t(o, NAVN[del.type], NAVN_NN[del.type])}</h3><p class="delinstruks">${t(o, ...INSTRUKS[del.type])}</p>` : ''}${liste(del.items.map((x) => visOppgave(x, f, o)), kol, 'brokliste')}`;
    }).join('');
    const en = d.deler.length === 1 ? d.deler[0].type : null;
    return {
      tittel: en ? t(o, NAVN[en], NAVN_NN[en]) : t(o, 'Brøk', 'Brøk'),
      instruks: en ? t(o, ...INSTRUKS[en]) : t(o, 'Les oppgaveteksten for hver del.', 'Les oppgåveteksten for kvar del.'),
      html: blokk(false), fasit: blokk(true),
    };
  },
};

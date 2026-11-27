import { unike } from '../lib/rng.js';
import { liste, linje, boks, t } from '../lib/fmt.js';

const TABELLER = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default {
  id: 'gangetabell', fag: 'matte', navn: 'Gangetabell', trinn: [2, 7],
  felter: () => [
    { id: 'type', navn: 'Type', valg: [['blandet', 'Blandede gangestykker'], ['mangler', 'Finn tallet som mangler'], ['rekke', 'Gangetabellen i rekkefølge'], ['rutenett', 'Fyll ut gangetabellen'], ['plakat', 'Plakat (hele gangetabellen)']] },
    { id: 'tabeller', navn: 'Tabeller', multi: true, valg: TABELLER.map((x) => [x, `${x}-gangen`]) },
    { id: 'antall', navn: 'Antall', valg: [['20', '20'], ['30', '30'], ['40', '40'], ['60', '60']] },
  ],
  standard: (trinn) => ({
    type: 'blandet',
    tabeller: trinn <= 2 ? ['2', '5', '10'] : trinn === 3 ? ['1', '2', '3', '4', '5', '10'] : TABELLER.slice(),
    antall: trinn <= 2 ? '20' : trinn === 3 ? '30' : '40',
  }),

  lag(rng, o) {
    const tab = (o.tabeller.length ? o.tabeller : TABELLER).map(Number).sort((a, b) => a - b);
    const n = Number(o.antall);
    if (o.type === 'plakat') return { type: 'plakat' };
    if (o.type === 'rutenett') {
      // 10×10, vis ca. 30 % av cellene (alltid 1-raden og 1-kolonnen som hjelp ved lave trinn er ikke nødvendig)
      const vis = [];
      for (let a = 1; a <= 10; a++) for (let b = 1; b <= 10; b++) vis.push(rng.chance(0.3) ? 1 : 0);
      return { type: 'rutenett', vis };
    }
    if (o.type === 'rekke') {
      const valgt = tab.slice(0, Math.max(1, Math.floor(n / 10)));
      const items = [];
      for (const a of valgt) for (let b = 1; b <= 10; b++) items.push({ a, b, svar: a * b });
      return { type: 'rekke', items, tabeller: valgt };
    }
    const lag = () => {
      const a = rng.pick(tab), b = rng.int(1, 10);
      const [x, y] = rng.chance(0.5) ? [a, b] : [b, a];
      const it = { a: x, b: y, svar: x * y };
      if (o.type === 'mangler') it.mangler = rng.chance(0.5) ? 'a' : 'b';
      return it;
    };
    return { type: o.type, items: unike(n, lag, (i) => `${i.a}x${i.b}${i.mangler || ''}`) };
  },

  vis(d, o) {
    if (d.type === 'plakat' || d.type === 'rutenett') {
      const celle = (a, b, i) => (d.vis[i] ? a * b : '');
      const tabell = (fasit) => {
        let h = '<table class="gangetabell"><tr><th>·</th>';
        for (let b = 1; b <= 10; b++) h += `<th>${b}</th>`;
        h += '</tr>';
        for (let a = 1; a <= 10; a++) {
          h += `<tr><th>${a}</th>`;
          for (let b = 1; b <= 10; b++) {
            const i = (a - 1) * 10 + (b - 1);
            const v = fasit ? a * b : celle(a, b, i);
            h += `<td class="${a === b ? 'diag' : ''}${!fasit && v === '' ? ' tom' : ''}">${v}</td>`;
          }
          h += '</tr>';
        }
        return h + '</table>';
      };
      if (d.type === 'plakat') return { tittel: t(o, 'Gangetabellen', 'Gangetabellen'), instruks: t(o, 'Gangetabellen fra 1 til 10. Finn raden og kolonnen – svaret står der de møtes.', 'Gangetabellen frå 1 til 10. Finn rada og kolonnen – svaret står der dei møtest.'), html: tabell(true), fasit: null };
      return { tittel: t(o, 'Fyll ut gangetabellen', 'Fyll ut gangetabellen'), instruks: t(o, 'Skriv svaret i hver tomme rute. Gang tallet til venstre med tallet øverst.', 'Skriv svaret i kvar tom rute. Gong talet til venstre med talet øvst.'), html: tabell(false), fasit: tabell(true) };
    }
    const stykke = (i, fasit) => {
      if (i.mangler === 'a') return `${fasit ? `<b>${i.a}</b>` : boks()} · ${i.b} = ${i.svar}`;
      if (i.mangler === 'b') return `${i.a} · ${fasit ? `<b>${i.b}</b>` : boks()} = ${i.svar}`;
      return `${i.a} · ${i.b} = ${fasit ? `<b>${i.svar}</b>` : linje('s')}`;
    };
    const kol = d.type === 'rekke' ? Math.min(4, d.tabeller.length) : d.items.length > 30 ? 4 : 3;
    const cls = d.type === 'rekke' ? 'kolonnevis' : '';
    const tittel = d.type === 'rekke' ? (d.tabeller.length === 1 ? `${d.tabeller[0]}-gangen` : t(o, 'Gangetabellen', 'Gangetabellen')) : t(o, 'Gangestykker', 'Gangestykke');
    return {
      tittel,
      instruks: d.type === 'mangler' ? t(o, 'Skriv tallet som mangler i boksen.', 'Skriv talet som manglar i boksen.') : t(o, 'Regn ut.', 'Rekn ut.'),
      html: liste(d.items.map((i) => stykke(i, false)), kol, `${d.items.length > 40 ? 'kompakt' : 'stor'} ${cls}`),
      fasit: liste(d.items.map((i) => stykke(i, true)), kol, `${d.items.length > 40 ? 'kompakt' : 'stor'} ${cls}`),
    };
  },
};

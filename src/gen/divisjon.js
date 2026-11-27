import { unike } from '../lib/rng.js';
import { liste, linje, tall, t } from '../lib/fmt.js';

const TYPE = { 3: 'tabell', 4: 'tabell', 5: 'rest', 6: 'store', 7: 'storerest' };

export default {
  id: 'divisjon', fag: 'matte', navn: 'Divisjon', trinn: [3, 7],
  felter: (o) => [
    { id: 'type', navn: 'Type', valg: [['tabell', 'Innenfor gangetabellen'], ['rest', 'Med rest (opp til 100)'], ['store', 'Store tall, går opp'], ['storerest', 'Store tall med rest']] },
    { id: 'antall', navn: 'Antall', valg: (o.type === 'tabell' ? [15, 20, 30, 40] : [12, 16, 20, 24]).map((x) => [String(x), String(x)]) },
  ],
  standard: (trinn) => ({ type: TYPE[trinn], antall: trinn <= 4 ? '30' : trinn === 5 ? '20' : '16' }),

  lag(rng, o) {
    const n = Number(o.antall);
    const lag = {
      tabell: () => { const b = rng.int(2, 10), q = rng.int(1, 10); return { a: b * q, b }; },
      rest: () => {
        const b = rng.int(2, 9), a = rng.int(b + 1, 99);
        if (a % b === 0 && rng.chance(0.8)) return null; // stort sett med rest
        return { a, b };
      },
      store: () => { const b = rng.int(2, 9), q = rng.int(Math.ceil(100 / b), Math.floor(9999 / b)); if (q < 12) return null; const a = b * q; return a > 9999 ? null : { a, b }; },
      storerest: () => { const b = rng.int(2, 9), a = rng.int(100, 2999); return { a, b }; },
    }[o.type];
    const items = unike(n, lag, (i) => `${i.a}:${i.b}`).map(({ a, b }) => ({ a, b, svar: Math.floor(a / b), rest: a % b }));
    return { items, medRest: o.type === 'rest' || o.type === 'storerest' };
  },

  vis(d, o) {
    const sv = (i) => `<b>${tall(i.svar)}${i.rest ? ` ${t(o, 'rest', 'rest')} ${i.rest}` : ''}</b>`;
    const s = (i, f) => `${tall(i.a)} : ${i.b} = ${f ? sv(i) : linje(d.medRest ? 'l' : 's')}`;
    const kol = d.medRest || d.items.some((i) => i.a >= 1000) ? 2 : 3;
    return {
      tittel: t(o, 'Divisjon', 'Divisjon'),
      instruks: d.medRest ? t(o, 'Regn ut. Skriv resten hvis det ikke går opp, for eksempel 7 rest 3.', 'Rekn ut. Skriv resten viss det ikkje går opp, til dømes 7 rest 3.') : t(o, 'Regn ut.', 'Rekn ut.'),
      html: liste(d.items.map((i) => s(i, false)), kol, 'stor'),
      fasit: liste(d.items.map((i) => s(i, true)), kol, 'stor'),
    };
  },
};

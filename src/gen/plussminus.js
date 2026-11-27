import { unike } from '../lib/rng.js';
import { liste, linje, tall, t } from '../lib/fmt.js';

// Mente (pluss) eller veksling (minus) i minst én kolonne
export function harOvergang(a, b, op) {
  while (a > 0 || b > 0) {
    const x = a % 10, y = b % 10;
    if (op === '+' ? x + y >= 10 : x < y) return true;
    a = Math.floor(a / 10); b = Math.floor(b / 10);
  }
  return false;
}

const OMRADE = { 1: '10', 2: '20', 3: '100', 4: '1000', 5: '10000', 6: '10000', 7: '10000' };

export default {
  id: 'plussminus', fag: 'matte', navn: 'Pluss og minus', trinn: [1, 7],
  felter: () => [
    { id: 'omrade', navn: 'Tallområde', valg: [['10', '0–10'], ['20', '0–20'], ['100', '0–100'], ['1000', '0–1000'], ['10000', '0–10 000']] },
    { id: 'regning', navn: 'Regneart', valg: [['begge', 'Pluss og minus'], ['pluss', 'Bare pluss'], ['minus', 'Bare minus']] },
    { id: 'tierovergang', navn: 'Tierovergang', valg: [['blandet', 'Blandet'], ['uten', 'Uten tierovergang'], ['med', 'Med tierovergang']] },
    { id: 'oppsett', navn: 'Oppsett', valg: [['vannrett', 'Vannrett'], ['loddrett', 'Oppstilling']] },
    { id: 'antall', navn: 'Antall', valg: [['15', '15'], ['20', '20'], ['30', '30'], ['40', '40']] },
  ],
  standard: (trinn) => ({
    omrade: OMRADE[trinn], regning: 'begge', tierovergang: trinn === 2 ? 'med' : 'blandet',
    oppsett: trinn >= 4 ? 'loddrett' : 'vannrett', antall: trinn >= 4 ? '20' : '30',
  }),

  lag(rng, o) {
    const maks = Number(o.omrade), n = Number(o.antall);
    // minste ledd: små tall unngås i store tallområder
    const min = maks >= 1000 ? Math.floor(maks / 20) : maks >= 100 ? 10 : maks >= 20 ? 2 : 0;
    const items = unike(n, () => {
      const op = o.regning === 'pluss' ? '+' : o.regning === 'minus' ? '−' : rng.chance(0.5) ? '+' : '−';
      let a, b;
      if (op === '+') { const s = rng.int(Math.max(min * 2, maks >= 20 ? 11 : 2), maks); a = rng.int(Math.max(min, 1), s - Math.max(min, 1)); b = s - a; }
      else { a = rng.int(Math.max(min * 2, 2), maks); b = rng.int(Math.max(min, 1), a - (maks >= 20 ? 1 : 0)); }
      if (b < 1 || a < 0) return null;
      if (maks > 10 && o.tierovergang !== 'blandet') {
        const over = harOvergang(a, b, op === '+' ? '+' : '-');
        if ((o.tierovergang === 'med') !== over) return null;
      }
      return { a, b, op, svar: op === '+' ? a + b : a - b };
    }, (i) => `${i.a}${i.op}${i.b}`, n * 2000);
    // Blandet: sørg for omtrent halvparten med tierovergang når det er mulig
    return { items, loddrett: o.oppsett === 'loddrett' };
  },

  vis(d, o) {
    const ins = d.loddrett ? t(o, 'Regn ut. Husk mente og veksling.', 'Rekn ut. Hugs mente og veksling.') : t(o, 'Regn ut.', 'Rekn ut.');
    if (d.loddrett) {
      const opp = (i, f) => `<div class="oppstilt"><span></span><span>${tall(i.a)}</span><span>${i.op}</span><span>${tall(i.b)}</span><span class="strek"></span><span class="strek">${f ? `<b>${tall(i.svar)}</b>` : '&nbsp;'}</span></div>`;
      return { tittel: t(o, 'Pluss og minus', 'Pluss og minus'), instruks: ins, html: liste(d.items.map((i) => opp(i, false)), 5, 'oppstilling'), fasit: liste(d.items.map((i) => opp(i, true)), 5, 'oppstilling') };
    }
    const s = (i, f) => `${tall(i.a)} ${i.op} ${tall(i.b)} = ${f ? `<b>${tall(i.svar)}</b>` : linje(Number(i.svar) >= 100 ? 'm' : 's')}`;
    const kol = d.items[0] && Math.max(...d.items.map((i) => i.a)) >= 1000 ? 2 : 3;
    return { tittel: t(o, 'Pluss og minus', 'Pluss og minus'), instruks: ins, html: liste(d.items.map((i) => s(i, false)), kol, 'stor'), fasit: liste(d.items.map((i) => s(i, true)), kol, 'stor') };
  },
};

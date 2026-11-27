import TEMAER from '../data/temaer.js';
import { lagOrdleting, visRutenett, RETNINGSSETT } from '../lib/ordleting.js';
import { esc } from '../lib/fmt.js';

// Størrelse, retninger, nivå og antall ord per trinn
export const OPPSETT = {
  1: { str: 8, ret: 'enkel', niva: 1, antall: 6 },
  2: { str: 10, ret: 'enkel', niva: 1, antall: 8 },
  3: { str: 10, ret: 'diagonal', niva: 2, antall: 10 },
  4: { str: 12, ret: 'diagonal', niva: 2, antall: 12 },
  5: { str: 13, ret: 'alle', niva: 3, antall: 14 },
  6: { str: 15, ret: 'alle', niva: 3, antall: 16 },
  7: { str: 15, ret: 'alle', niva: 3, antall: 18 },
};
const RET_TEKST = { enkel: 'Ordene står bortover og nedover.', diagonal: 'Ordene står bortover, nedover og på skrå.', alle: 'Ordene kan stå i alle retninger, også baklengs.' };

export const tema = (id) => TEMAER.find((x) => x.id === id) || TEMAER[0];

// Velg ord som ikke står inni hverandre
export function velgOrd(rng, ord, antall) {
  const ut = [];
  for (const w of rng.shuffle(ord)) {
    const W = w.toUpperCase(), R = [...W].reverse().join('');
    if (ut.some((v) => { const V = v.toUpperCase(); return V.includes(W) || V.includes(R) || W.includes(V) || R.includes(V); })) continue;
    ut.push(w);
    if (ut.length >= antall) break;
  }
  return ut;
}

export default {
  id: 'ordleting', fag: 'norsk', navn: 'Ordleting', trinn: [1, 7],
  felter: () => [{ id: 'tema', navn: 'Tema', valg: TEMAER.map((x) => [x.id, x.navn]) }],
  standard: () => ({ tema: 'dyr' }),

  lag(rng, o) {
    const op = OPPSETT[o.trinn], tm = tema(o.tema);
    const kandidater = tm.ord.filter((w) => w.niva <= op.niva && w.ord.length <= op.str).map((w) => w.ord);
    const ord = velgOrd(rng, kandidater, op.antall);
    const res = lagOrdleting(rng, ord, { str: op.str, retninger: RETNINGSSETT[op.ret] });
    res.ord.sort((a, b) => a.ord.localeCompare(b.ord, 'nb'));
    return { ...res, ret: op.ret, tema: tm.navn };
  },

  vis(d) {
    const liste = `<ul class="ordliste-finn">${d.ord.map((p) => `<li>${esc(p.ord)}</li>`).join('')}</ul>`;
    return {
      tittel: `Ordleting: ${d.tema}`,
      instruks: `Finn ordene i rutenettet og sett ring rundt dem. ${RET_TEKST[d.ret]} Kryss av i lista når du har funnet et ord.`,
      html: `<div class="ordleting-ramme">${visRutenett(d.grid)}${liste}</div>`,
      fasit: `<div class="ordleting-ramme">${visRutenett(d.grid, d.ord)}${liste}</div>`,
    };
  },
};

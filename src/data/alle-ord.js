// Samler alle norske ord fra ordlistene (brukes av tools/ordsjekk.mjs).
import STAVEORD from './staveord.js';
import TEMAER from './temaer.js';
import SETNINGER from './setninger.js';
import GLOSER from './gloser.js';

const ordI = (tekst) => tekst.toLowerCase().replace(/___/g, ' ').match(/[a-zæøåéèêóòôü]+/g) || [];
export function norskeOrd() {
  const ut = new Set();
  for (const grupper of Object.values(STAVEORD)) for (const g of grupper) g.ord.forEach((w) => ut.add(w));
  for (const t of TEMAER) for (const w of t.ord) { ut.add(w.ord); ordI(w.hint).forEach((x) => ut.add(x)); }
  for (const s of [...SETNINGER.ordbank, ...SETNINGER.ogaa]) { ordI(s.setning).forEach((x) => ut.add(x)); ut.add(s.svar.toLowerCase()); }
  for (const t of GLOSER) for (const p of t.par) ordI(p.no).forEach((x) => ut.add(x));
  return [...ut].sort();
}

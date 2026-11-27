import TEMAER from '../data/temaer.js';
import { lagKryssord, visKryssord } from '../lib/kryssord.js';
import { esc } from '../lib/fmt.js';

const NIVA = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 3 };

export default {
  id: 'kryssord', fag: 'norsk', navn: 'Kryssord for barn', trinn: [1, 7],
  felter: () => [
    { id: 'tema', navn: 'Tema', valg: TEMAER.map((x) => [x.id, x.navn]) },
    { id: 'antall', navn: 'Antall ord', valg: [['6', '6'], ['8', '8'], ['10', '10']] },
  ],
  standard: (trinn) => ({ tema: 'dyr', antall: trinn <= 2 ? '6' : trinn <= 4 ? '8' : '10' }),

  lag(rng, o) {
    const tm = TEMAER.find((x) => x.id === o.tema) || TEMAER[0];
    const ord = tm.ord.filter((w) => w.niva <= NIVA[o.trinn] && w.ord.length >= 3 && w.ord.length <= 10);
    const k = lagKryssord(rng, ord, { antall: Number(o.antall), maksBredde: 14, maksHoyde: 14 });
    return { ...k, tema: tm.navn };
  },

  vis(d) {
    const hint = (ret) => d.ord.filter((p) => p.retning === ret).map((p) => `<li value="${p.nr}">${esc(p.hint)} <span class="antall">(${p.ord.length})</span></li>`).join('');
    const hint2 = (f) => `<div class="hint"><div><h3>Vannrett →</h3><ol>${hint('v')}</ol></div><div><h3>Loddrett ↓</h3><ol>${hint('l')}</ol></div></div>`;
    const svar = `<div class="hint"><div><h3>Vannrett</h3><ol>${d.ord.filter((p) => p.retning === 'v').map((p) => `<li value="${p.nr}"><b>${esc(p.ord)}</b></li>`).join('')}</ol></div><div><h3>Loddrett</h3><ol>${d.ord.filter((p) => p.retning === 'l').map((p) => `<li value="${p.nr}"><b>${esc(p.ord)}</b></li>`).join('')}</ol></div></div>`;
    return {
      tittel: `Kryssord: ${d.tema}`,
      instruks: 'Les hintene og skriv ett ord i rutene for hvert nummer. Tallet i parentes forteller hvor mange bokstaver ordet har.',
      html: `<div class="kryssord-ramme">${visKryssord(d, false)}</div>${hint2(false)}`,
      fasit: `<div class="kryssord-ramme">${visKryssord(d, true)}</div>${svar}`,
    };
  },
};

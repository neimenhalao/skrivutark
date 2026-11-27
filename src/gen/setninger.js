import SETNINGER from '../data/setninger.js';
import { esc } from '../lib/fmt.js';

export const nivaFor = (trinn) => (trinn <= 2 ? 1 : trinn <= 4 ? 2 : 3);

export default {
  id: 'setninger', fag: 'norsk', navn: 'Setninger', trinn: [1, 7],
  felter: () => [
    { id: 'type', navn: 'Oppgaver', valg: [['ordbank', 'Fullfør setningen (ordbank)'], ['ogaa', 'Og eller å?']] },
    { id: 'antall', navn: 'Antall setninger', valg: [['8', '8'], ['10', '10'], ['12', '12'], ['15', '15']] },
  ],
  standard: (trinn) => ({ type: 'ordbank', antall: trinn <= 2 ? '8' : '12' }),

  lag(rng, o) {
    const n = Number(o.antall);
    if (o.type === 'ogaa') {
      const niva = Math.max(2, nivaFor(o.trinn));
      const items = rng.sample(SETNINGER.ogaa.filter((s) => s.niva === niva), n);
      return { type: 'ogaa', items };
    }
    const niva = nivaFor(o.trinn);
    const pool = SETNINGER.ordbank.filter((s) => s.niva === niva);
    const items = [], brukt = new Set();
    for (const s of rng.shuffle(pool)) { if (brukt.has(s.svar)) continue; brukt.add(s.svar); items.push(s); if (items.length >= n) break; }
    const bank = items.map((s) => s.svar).sort((a, b) => a.localeCompare(b, 'nb'));
    return { type: 'ordbank', items, bank };
  },

  vis(d) {
    const fyll = (s, f, valg) => esc(s.setning).replace('___', f ? `<b class="fylt">${esc(s.svar)}</b>` : `<span class="svarlinje ${valg ? 's' : 'l'}"></span>`);
    if (d.type === 'ogaa') {
      const li = (f) => `<ol class="oppgaver k1 setninger">${d.items.map((s) => `<li>${fyll(s, f, true)}</li>`).join('')}</ol>`;
      return {
        tittel: 'Og eller å?', instruks: 'Skriv og eller å på linja. Tips: Står det et verb i infinitiv etter ordet (å lese, å spille), skal det ofte være å. Binder ordet sammen to like ledd, skal det være og.',
        html: li(false), fasit: li(true),
      };
    }
    const bank = `<div class="ordbank"><b>Ordbank:</b> ${d.bank.map((w) => `<span>${esc(w)}</span>`).join('')}</div>`;
    const li = (f) => `<ol class="oppgaver k1 setninger">${d.items.map((s) => `<li>${fyll(s, f, false)}</li>`).join('')}</ol>`;
    return { tittel: 'Fullfør setningen', instruks: 'Velg riktig ord fra ordbanken og skriv det på linja. Hvert ord skal brukes én gang.', html: bank + li(false), fasit: li(true) };
  },
};

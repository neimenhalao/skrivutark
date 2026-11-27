import GLOSER from '../data/gloser.js';
import { lagOrdleting, visRutenett, RETNINGSSETT } from '../lib/ordleting.js';
import { velgOrd } from './ordleting.js';
import { esc } from '../lib/fmt.js';

const nivaFor = (trinn) => (trinn <= 4 ? 1 : trinn <= 6 ? 2 : 3);
const RUTE = { 1: [9, 'enkel'], 2: [10, 'enkel'], 3: [10, 'diagonal'], 4: [12, 'diagonal'], 5: [12, 'alle'], 6: [13, 'alle'], 7: [14, 'alle'] };
// Ord med nesten lik betydning skal ikke stå på samme ark (ellers blir koble-oppgaven tvetydig)
export const SAMME = [['mor', 'mamma'], ['far', 'pappa'], ['sang', 'julesang'], ['båt', 'skip'], ['gave', 'pakke'], ['glad', 'fornøyd'], ['hus', 'hjem'], ['sol', 'solskinn'], ['by', 'gate']];
const kolliderer = (valgt, p) => SAMME.some((g) => g.includes(p.no) && valgt.some((v) => v !== p && g.includes(v.no)));
function trekk(rng, pool, n) { const ut = []; for (const p of rng.shuffle(pool)) { if (ut.length >= n) break; if (!kolliderer(ut, p)) ut.push(p); } return ut; }
const enAlle = (p) => [p.en, ...(p.alt || [])].join(' / ');

export default {
  id: 'gloser', fag: 'engelsk', navn: 'Engelske gloser', trinn: [1, 7],
  felter: (o) => [
    { id: 'tema', navn: 'Tema', valg: GLOSER.map((x) => [x.id, `${x.navn} (${x.engelsk})`]) },
    { id: 'type', navn: 'Oppgaver', valg: [['tilengelsk', 'Oversett til engelsk'], ['tilnorsk', 'Oversett til norsk'], ['koble', 'Koble ordene'], ['ordleting', 'Engelsk ordleting']] },
    { id: 'antall', navn: 'Antall ord', valg: (o.type === 'koble' ? [8, 10, 12] : [8, 10, 12, 16]).map((x) => [String(x), String(x)]) },
  ],
  standard: (trinn) => ({ tema: 'dyr', type: 'tilengelsk', antall: trinn <= 2 ? '8' : trinn <= 4 ? '10' : '12' }),

  lag(rng, o) {
    const tm = GLOSER.find((x) => x.id === o.tema) || GLOSER[0];
    const niva = nivaFor(o.trinn);
    const pool = tm.par.filter((p) => p.niva <= niva);
    const n = Math.min(Number(o.antall), pool.length);
    if (o.type === 'ordleting') {
      const [str, ret] = RUTE[o.trinn];
      const egnet = trekk(rng, pool.filter((p) => p.en.length >= 3 && p.en.length <= str), 99);
      const valgt = velgOrd(rng, egnet.map((p) => p.en), n);
      const res = lagOrdleting(rng, valgt, { str, retninger: RETNINGSSETT[ret], alfabet: 'en' });
      const par = res.ord.map((w) => egnet.find((p) => p.en.toUpperCase() === w.ord)).sort((a, b) => a.no.localeCompare(b.no, 'nb'));
      return { type: 'ordleting', tema: tm, grid: res.grid, ord: res.ord, par, ret };
    }
    const par = trekk(rng, pool, n);
    if (o.type === 'koble') {
      const hoyre = rng.shuffle(par.map((_, i) => i));
      // unngå at for mange står rett overfor hverandre
      return { type: 'koble', tema: tm, par, hoyre };
    }
    return { type: o.type, tema: tm, par };
  },

  vis(d) {
    const tittel = `${d.tema.engelsk} – ${d.tema.navn.toLowerCase()}`;
    if (d.type === 'ordleting') {
      const liste = (f) => `<ul class="ordliste-finn">${d.par.map((p) => `<li>${esc(p.no)}${f ? ` – <b>${esc(p.en)}</b>` : ''}</li>`).join('')}</ul>`;
      return {
        tittel: `Find the words: ${d.tema.engelsk}`, instruks: `Finn det engelske ordet for hvert norske ord i lista, og sett ring rundt det i rutenettet. ${d.ret === 'alle' ? 'Ordene kan stå i alle retninger.' : d.ret === 'diagonal' ? 'Ordene står bortover, nedover og på skrå.' : 'Ordene står bortover og nedover.'}`,
        html: `<div class="ordleting-ramme">${visRutenett(d.grid)}${liste(false)}</div>`,
        fasit: `<div class="ordleting-ramme">${visRutenett(d.grid, d.ord)}${liste(true)}</div>`,
      };
    }
    if (d.type === 'koble') {
      const bokstav = (i) => String.fromCharCode(65 + i);
      const tabell = (f) => `<table class="koble"><tbody>${d.par.map((p, i) => `<tr><td class="no">${i + 1}. ${esc(p.no)}</td><td class="prikk">•</td><td class="mellom">${f ? `<b>${i + 1} – ${bokstav(d.hoyre.indexOf(i))}</b>` : ''}</td><td class="prikk">•</td><td class="en">${bokstav(i)}. ${esc(d.par[d.hoyre[i]].en)}</td></tr>`).join('')}</tbody></table>`;
      return { tittel, instruks: 'Trekk en strek fra hvert norske ord til det engelske ordet som betyr det samme.', html: tabell(false), fasit: tabell(true) };
    }
    const tilEn = d.type === 'tilengelsk';
    const li = (f) => `<table class="gloser"><thead><tr><th>${tilEn ? 'Norsk' : 'English'}</th><th>${tilEn ? 'English' : 'Norsk'}</th></tr></thead><tbody>${d.par.map((p) => `<tr><td>${esc(tilEn ? p.no : p.en)}</td><td>${f ? `<b>${esc(tilEn ? enAlle(p) : p.no)}</b>` : ''}</td></tr>`).join('')}</tbody></table>`;
    return { tittel, instruks: tilEn ? 'Skriv det engelske ordet.' : 'Skriv det norske ordet.', html: li(false), fasit: li(true) };
  },
};

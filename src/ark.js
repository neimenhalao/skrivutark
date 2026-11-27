// Felles: generatorregister, valg (opts), arkkode og A4-ark med fasit. Brukes både i nettleseren og i byggesteget.
import gangetabell from './gen/gangetabell.js';
import plussminus from './gen/plussminus.js';
import divisjon from './gen/divisjon.js';
import brok from './gen/brok.js';
import klokka from './gen/klokka.js';
import kroner from './gen/kroner.js';
import tallinje from './gen/tallinje.js';
import staveord from './gen/staveord.js';
import ordleting from './gen/ordleting.js';
import kryssord from './gen/kryssord.js';
import setninger from './gen/setninger.js';
import gloser from './gen/gloser.js';
import { lagRng, gyldigKode } from './lib/rng.js';
import { esc } from './lib/fmt.js';

export const GENERATORER = { gangetabell, plussminus, divisjon, brok, klokka, kroner, tallinje, staveord, ordleting, kryssord, setninger, gloser };
export const FAGNAVN = { matte: 'Matte', norsk: 'Norsk', engelsk: 'Engelsk' };
export const NETTSTED = 'skrivutark.no';

// Alle felter for en generator, inkludert trinn og (for matte) målform
export function felter(gen, o) {
  const f = [{ id: 'trinn', navn: 'Trinn', valg: range(gen.trinn[0], gen.trinn[1]).map((x) => [String(x), `${x}. trinn`]) }, ...gen.felter(o)];
  if (gen.fag === 'matte') f.push({ id: 'sprak', navn: 'Målform', valg: [['nb', 'Bokmål'], ['nn', 'Nynorsk']] });
  return f;
}
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

// Lag gyldige valg: standard for trinnet + det som er gitt (ugyldige verdier forkastes)
export function normaliser(gen, raw = {}) {
  let trinn = Number(raw.trinn);
  if (!(trinn >= gen.trinn[0] && trinn <= gen.trinn[1])) trinn = Math.max(gen.trinn[0], Math.min(gen.trinn[1], 3));
  const o = { trinn, sprak: 'nb', ...gen.standard(trinn) };
  o.trinn = trinn;
  // to runder: noen felt (f.eks. antall) har valg som avhenger av andre felt (f.eks. type)
  for (let runde = 0; runde < 2; runde++) for (const fe of felter(gen, o)) {
    if (fe.id === 'trinn' || !(fe.id in raw) || raw[fe.id] == null) continue;
    const lov = new Set(fe.valg.map((v) => v[0]));
    if (fe.multi) {
      const verdier = (Array.isArray(raw[fe.id]) ? raw[fe.id] : String(raw[fe.id]).split(',')).map(String).filter((v) => lov.has(v));
      if (verdier.length) o[fe.id] = [...new Set(verdier)].sort((a, b) => Number(a) - Number(b));
    } else if (lov.has(String(raw[fe.id]))) o[fe.id] = String(raw[fe.id]);
  }
  // Verdier som ikke finnes blant valgene (f.eks. antall etter bytte av type) → nærmeste gyldige
  for (const fe of felter(gen, o)) {
    if (fe.multi || fe.id === 'trinn') continue;
    const lov = fe.valg.map((v) => v[0]);
    if (lov.includes(String(o[fe.id]))) continue;
    const tall = Number(o[fe.id]);
    o[fe.id] = Number.isFinite(tall) && lov.every((v) => Number.isFinite(Number(v)))
      ? lov.reduce((a, b) => (Math.abs(Number(b) - tall) < Math.abs(Number(a) - tall) ? b : a))
      : lov[0];
  }
  if (gen.fag !== 'matte') delete o.sprak;
  return o;
}

// Valg → URL-parametre (bare det som avviker fra standard for trinnet, pluss trinn)
export function tilParametre(gen, o, kode) {
  const std = normaliser(gen, { trinn: o.trinn });
  const p = new URLSearchParams();
  p.set('trinn', o.trinn);
  for (const [k, v] of Object.entries(o)) {
    if (k === 'trinn') continue;
    const s = Array.isArray(v) ? v.join(',') : String(v);
    const ss = Array.isArray(std[k]) ? std[k].join(',') : String(std[k]);
    if (s !== ss) p.set(k, s);
  }
  if (kode) p.set('kode', kode);
  return p;
}

export function fraParametre(gen, search) {
  const p = new URLSearchParams(search), raw = {};
  for (const [k, v] of p) raw[k] = v;
  const kode = gyldigKode(p.get('kode')) ? p.get('kode') : null;
  return { opts: normaliser(gen, raw), kode };
}

// Frø: arkkode + generator + valg. Samme kode og valg gir samme ark.
export function frø(gen, o, kode) {
  const sortert = Object.keys(o).sort().map((k) => `${k}=${Array.isArray(o[k]) ? o[k].join(',') : o[k]}`).join('&');
  return `${kode}|${gen.id}|${sortert}`;
}

export function lagData(gen, o, kode) {
  return gen.lag(lagRng(frø(gen, o, kode)), o);
}

export function arkHTML(gen, o, kode, data = lagData(gen, o, kode)) {
  const v = gen.vis(data, o);
  const nn = o.sprak === 'nn';
  const under = [`${o.trinn}. trinn`, FAGNAVN[gen.fag], v.undertittel].filter(Boolean).join(' · ');
  const topp = (fasit) => `<header class="ark-topp"><div class="ark-navn">${fasit ? '<b>Fasit</b>' : `${nn ? 'Namn' : 'Navn'}: <span></span>`}</div><div class="ark-dato">${fasit ? `Arkkode ${esc(kode)}` : `Dato: <span></span>`}</div></header>`;
  const bunn = `<footer class="ark-bunn"><span>${NETTSTED} – gratis oppgaveark med fasit</span><span>Arkkode ${esc(kode)}</span></footer>`;
  const ark = `<article class="ark oppgaveark" aria-label="Oppgaveark">${topp(false)}<h2 class="ark-tittel">${esc(v.tittel)}</h2><p class="ark-under">${esc(under)}</p><p class="ark-instruks">${esc(v.instruks)}</p><div class="ark-innhold gen-${gen.id}">${v.html}</div>${bunn}</article>`;
  const fasit = v.fasit ? `<article class="ark fasitark" aria-label="Fasit">${topp(true)}<h2 class="ark-tittel">Fasit: ${esc(v.tittel)}</h2><p class="ark-under">${esc(under)}</p><div class="ark-innhold gen-${gen.id} fasit">${v.fasit}</div>${bunn}</article>` : '';
  return { ark, fasit, tittel: v.tittel, harFasit: Boolean(v.fasit) };
}

// Kontrollpanel (samme HTML i bygget og i nettleseren)
export function kontrollerHTML(gen, o) {
  return felter(gen, o).map((fe) => {
    if (fe.multi) {
      return `<fieldset class="felt multi"><legend>${esc(fe.navn)}</legend><div class="avkrysning">${fe.valg.map(([v, n]) => `<label><input type="checkbox" name="${fe.id}" value="${esc(v)}"${o[fe.id]?.includes(v) ? ' checked' : ''}><span>${esc(n.replace('-gangen', ''))}</span></label>`).join('')}</div></fieldset>`;
    }
    return `<label class="felt"><span>${esc(fe.navn)}</span><select name="${fe.id}">${fe.valg.map(([v, n]) => `<option value="${esc(v)}"${String(o[fe.id]) === v ? ' selected' : ''}>${esc(n)}</option>`).join('')}</select></label>`;
  }).join('');
}

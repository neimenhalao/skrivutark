// Nettleserdelen: valg, «Lag nytt ark», utskrift, fasit, deling og skalering av A4-arket.
import { GENERATORER, normaliser, arkHTML, kontrollerHTML, tilParametre, fraParametre } from './ark.js';
import { nyKode } from './lib/rng.js';

const A4_BREDDE = 794; // 210 mm ved 96 dpi

function hendelse(navn, gen) {
  try { window.goatcounter?.count?.({ path: `hendelse-${navn}/${gen}`, title: navn, event: true }); } catch {}
}

function skaler() {
  for (const s of document.querySelectorAll('.arkramme .arkskala, .fasitramme .arkskala')) {
    const bredde = s.parentElement.clientWidth;
    if (!bredde) continue;
    s.style.zoom = String(Math.min(1, bredde / A4_BREDDE));
  }
}

function start(el) {
  const oppsett = JSON.parse(el.dataset.oppsett);
  const gen = GENERATORER[oppsett.gen];
  let opts = oppsett.opts, kode = oppsett.kode, endret = false;
  const forhånd = { opts: JSON.stringify(opts), kode };

  // Lenke med valg og arkkode (f.eks. delt av en kollega)
  if (location.search) {
    const p = fraParametre(gen, location.search);
    if (p.kode || new URLSearchParams(location.search).has('trinn')) { opts = p.opts; kode = p.kode || kode; endret = true; }
  }

  const skjema = el.querySelector('form.valg');
  const arkboks = el.querySelector('.arkramme .arkskala');
  const fasitramme = el.querySelector('.fasitramme');
  const fasitboks = fasitramme.querySelector('.arkskala');
  const kodeEl = el.querySelector('.kode');
  let tittel = '';

  function tegn({ kontroller = false } = {}) {
    try {
      const a = arkHTML(gen, opts, kode);
      arkboks.innerHTML = a.ark;
      fasitboks.innerHTML = a.fasit;
      tittel = a.tittel;
    } catch (e) {
      arkboks.innerHTML = `<p class="merknad">Noe gikk galt da arket skulle lages. Prøv «Lag nytt ark».</p>`;
      console.error(e);
    }
    if (kontroller) skjema.innerHTML = kontrollerHTML(gen, opts);
    kodeEl.textContent = kode;
    skaler();
  }

  function oppdaterAdresse() {
    const erForhånd = JSON.stringify(opts) === forhånd.opts && kode === forhånd.kode;
    const url = erForhånd ? location.pathname : `${location.pathname}?${tilParametre(gen, opts, kode)}`;
    history.replaceState(null, '', url);
  }

  skjema.addEventListener('change', (e) => {
    const navn = e.target.name;
    if (navn === 'trinn') {
      // nytt trinn → standardvalg for trinnet, men behold tema og målform
      const behold = {};
      for (const k of ['tema', 'sprak']) if (opts[k]) behold[k] = opts[k];
      opts = normaliser(gen, { trinn: e.target.value, ...behold });
      tegn({ kontroller: true });
      skjema.querySelector('[name="trinn"]')?.focus();
    } else {
      const raw = { ...opts };
      if (e.target.type === 'checkbox') raw[navn] = [...skjema.querySelectorAll(`input[name="${navn}"]:checked`)].map((x) => x.value);
      else raw[navn] = e.target.value;
      opts = normaliser(gen, raw);
      tegn({ kontroller: true });
      const fokus = e.target.type === 'checkbox' ? skjema.querySelector(`input[name="${navn}"][value="${e.target.value}"]`) : skjema.querySelector(`[name="${navn}"]`);
      fokus?.focus();
    }
    oppdaterAdresse();
    hendelse('valg', gen.id);
  });

  el.addEventListener('click', async (e) => {
    const knapp = e.target.closest('[data-handling]');
    if (!knapp) return;
    const h = knapp.dataset.handling;
    if (h === 'nytt') {
      kode = nyKode();
      tegn(); oppdaterAdresse();
      arkboks.firstElementChild?.animate?.([{ opacity: 0.35, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 260, easing: 'ease-out' });
      hendelse('nytt-ark', gen.id);
    } else if (h === 'skriv-ark' || h === 'skriv-fasit') {
      skrivUt(h === 'skriv-fasit' ? 'fasit' : 'ark');
      hendelse(h, gen.id);
    } else if (h === 'vis-fasit') {
      const vis = fasitramme.hidden;
      fasitramme.hidden = !vis;
      knapp.setAttribute('aria-expanded', String(vis));
      knapp.textContent = vis ? 'Skjul fasit' : 'Vis fasit';
      if (vis) { skaler(); fasitramme.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    } else if (h === 'del') {
      const url = `${location.origin}${location.pathname}?${tilParametre(gen, opts, kode)}`;
      history.replaceState(null, '', url);
      let ok = false;
      try { await navigator.clipboard.writeText(url); ok = true; } catch {}
      const før = knapp.innerHTML;
      knapp.textContent = ok ? 'Lenken er kopiert' : 'Kopier lenken i adressefeltet';
      setTimeout(() => { knapp.innerHTML = før; }, 2200);
      hendelse('del', gen.id);
    }
  });

  function skrivUt(hva) {
    const gammel = document.title;
    document.title = `${hva === 'fasit' ? 'Fasit – ' : ''}${tittel} – ${opts.trinn}. trinn – ${kode}`;
    document.body.dataset.skriv = hva;
    const ferdig = () => { delete document.body.dataset.skriv; document.title = gammel; window.removeEventListener('afterprint', ferdig); };
    window.addEventListener('afterprint', ferdig);
    window.print();
  }

  if (endret) tegn({ kontroller: true });
  else tegn();
}

for (const el of document.querySelectorAll('.generator')) start(el);
// ?utskrift=fasit gir fasiten ved utskrift (brukes i utskriftstesten)
if (new URLSearchParams(location.search).get('utskrift') === 'fasit') document.body.dataset.skriv = 'fasit';
skaler();
addEventListener('resize', skaler);
// Ctrl+P skriver ut arket (ikke fasiten) – det er standard i CSS.

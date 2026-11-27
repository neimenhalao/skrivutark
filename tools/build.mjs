// Bygger dist/: landingssider med forhåndsvist ark, fag- og trinnsider, om/personvern, sitemap og robots.
// Miljø: SITE_DOMAIN (tom = neimenhalao.github.io/skrivutark), BASE_PATH, NOINDEX=1, GOATCOUNTER=<kode>
import { readFile, writeFile, mkdir, cp, rm, readdir } from 'node:fs/promises';
import path from 'node:path';
import { GENERATORER, FAGNAVN, normaliser, arkHTML, kontrollerHTML, tilParametre } from '../src/ark.js';
import { sider, fag, gruppenavn, trinnsider, temasider } from '../src/sider.js';
import { kodeFra } from '../src/lib/rng.js';
import { esc } from '../src/lib/fmt.js';
import TM from '../src/data/tekster-matte.js';
import TS from '../src/data/tekster-sprak.js';

const TEKST = { ...TM, ...TS };
const DOMAIN = process.env.SITE_DOMAIN || 'neimenhalao.github.io';
const BP = (process.env.BASE_PATH || (process.env.SITE_DOMAIN ? '' : '/skrivutark')).replace(/\/$/, '');
const NOINDEX = process.env.NOINDEX === '1';
const GOAT = process.env.GOATCOUNTER || '';
const BASE = `https://${DOMAIN}${BP}`;
const NAVN = 'Skrivutark';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('site', 'dist', { recursive: true });
// JavaScript til nettleseren: generatorene, bibliotekene og ordlistene (ikke sidetekstene)
for (const d of ['gen', 'lib']) await cp(path.join('src', d), path.join('dist/js', d), { recursive: true });
await mkdir('dist/js/data', { recursive: true });
for (const f of ['staveord.js', 'temaer.js', 'setninger.js', 'gloser.js']) await cp(`src/data/${f}`, `dist/js/data/${f}`);
await cp('src/ark.js', 'dist/js/ark.js');
await cp('src/app.js', 'dist/js/app.js');
const versjon = Date.now().toString(36);

const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true" class="logo-ikon"><path d="M8 4h17l7 7v25H8z" fill="#fff" stroke="var(--blekk)" stroke-width="2.4" stroke-linejoin="round"/><path d="M25 4v7h7" fill="none" stroke="var(--blekk)" stroke-width="2.4" stroke-linejoin="round"/><path d="M13 17h13M13 22h13M13 27h8" stroke="var(--blekk)" stroke-width="2.2" stroke-linecap="round"/><g transform="rotate(40 30 28)"><rect x="27" y="14" width="7" height="20" rx="1.2" fill="var(--blyant)" stroke="var(--blekk)" stroke-width="1.8"/><path d="M27 34l3.5 6 3.5-6z" fill="#f3dcb4" stroke="var(--blekk)" stroke-width="1.8" stroke-linejoin="round"/></g></svg>`;

const urls = [];
async function write(rel, html, { sitemap = true, prioritet = '0.6' } = {}) {
  const f = path.join('dist', rel);
  await mkdir(path.dirname(f), { recursive: true });
  if (rel.endsWith('.html')) {
    if (BP) html = html.replace(/(href|src|action)="\/(?!\/)/g, `$1="${BP}/`);
    if (sitemap) urls.push([('/' + rel.split(path.sep).join('/')).replace(/\/+/g, '/').replace(/index\.html$/, ''), prioritet]);
  }
  await writeFile(f, html);
}

const jsonld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const smuler = (liste) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: liste.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: BASE + u })) });
const smuleHTML = (liste) => `<nav class="smuler" aria-label="Brødsmuler">${liste.map(([n, u], i) => (i < liste.length - 1 ? `<a href="${u}">${esc(n)}</a>` : `<span aria-current="page">${esc(n)}</span>`)).join('<span aria-hidden="true">›</span>')}</nav>`;

function layout({ title, description, canonical, body, ld = [], noindex = false, scripts = '' }) {
  return `<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${BASE}${canonical}">
${noindex || NOINDEX ? '<meta name="robots" content="noindex">\n' : ''}<meta property="og:type" content="website">
<meta property="og:site_name" content="${NAVN}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${BASE}${canonical}">
<meta property="og:image" content="${BASE}/og.png">
<meta property="og:locale" content="nb_NO">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1d3b53">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/andika-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/stil.css?v=${versjon}">
${ld.map(jsonld).join('\n')}
${GOAT ? `<script data-goatcounter="https://${GOAT}.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>` : ''}
</head>
<body>
<a class="hopp" href="#innhold">Hopp til innholdet</a>
<header class="topp"><div class="indre">
<a class="logo" href="/" aria-label="Skrivutark – til forsiden">${LOGO}<span>skriv<em>ut</em>ark</span></a>
<nav class="hovednav" aria-label="Hovedmeny"><a href="/matte/">Matte</a><a href="/norsk/">Norsk</a><a href="/engelsk/">Engelsk</a><a href="/#trinn">Trinn</a><a href="/om/">Om</a></nav>
</div></header>
<main id="innhold">
${body}
</main>
<footer class="bunn"><div class="indre">
<div class="bunn-kol"><p class="logo liten">${LOGO}<span>skriv<em>ut</em>ark</span></p><p>Gratis oppgaveark med fasit for 1.–7. trinn. Nye ark hver gang, klare til utskrift på A4. Ingen innlogging og ingen sporingscookies.</p></div>
<div class="bunn-kol"><h2>Fag</h2><ul>${fag.map((f) => `<li><a href="${f.slug}">${f.navn}</a></li>`).join('')}</ul></div>
<div class="bunn-kol"><h2>Trinn</h2><ul class="trinnliste">${trinnsider.map((t) => `<li><a href="${t.slug}">${t.navn}</a></li>`).join('')}</ul></div>
<div class="bunn-kol"><h2>Om</h2><ul><li><a href="/om/">Om Skrivutark</a></li><li><a href="/om/#kilder">Kilder og lisenser</a></li><li><a href="/personvern/">Personvern</a></li></ul></div>
</div></footer>
${scripts}
</body>
</html>`;
}

// ---------- byggeklosser ----------
const genSider = (gruppe) => sider.filter((s) => s.gruppe === gruppe);
const hubFor = (gruppe) => sider.find((s) => s.gruppe === gruppe && s.hub);
const fagFor = (gruppe) => fag.find((f) => f.grupper.includes(gruppe));
const kortNavn = (s) => (s.hub ? 'Oversikt' : s.navn.replace(gruppenavn[s.gruppe] + ' ', '').replace(/^(Penger|Kroner og øre|Ordleting|Kryssord|Engelske gloser:|Tallinje med) /, ''));

function generatorBlokk(s) {
  const gen = GENERATORER[s.gen];
  const o = normaliser(gen, s.opts);
  const kode = kodeFra(s.slug);
  const a = arkHTML(gen, o, kode);
  const data = { gen: gen.id, opts: o, kode, standard: Object.fromEntries(tilParametre(gen, o)) };
  return `<section class="generator" data-oppsett='${esc(JSON.stringify(data))}'>
<div class="verktoy">
<form class="valg" aria-label="Valg for arket">${kontrollerHTML(gen, o)}</form>
<div class="knapper">
<button type="button" class="knapp hoved" data-handling="nytt">${IKON.nytt}Lag nytt ark</button>
<button type="button" class="knapp" data-handling="skriv-ark">${IKON.skriv}Skriv ut ark</button>
${a.harFasit ? `<button type="button" class="knapp" data-handling="skriv-fasit">${IKON.skriv}Skriv ut fasit</button>
<button type="button" class="knapp lys" data-handling="vis-fasit" aria-expanded="false">Vis fasit</button>` : ''}
<button type="button" class="knapp lys" data-handling="del">${IKON.lenke}Kopier lenke</button>
</div>
<p class="arkinfo">Arkkode <b class="kode">${kode}</b>. Lenken til arket gir alltid de samme oppgavene. Vil du ha PDF, velg «Lagre som PDF» i utskriftsvinduet.</p>
</div>
<div class="arkramme"><div class="arkskala">${a.ark}</div></div>
<div class="fasitramme" hidden><div class="arkskala">${a.fasit}</div></div>
<noscript><p class="merknad">Slå på JavaScript for å lage nye ark. Arket over kan skrives ut som det er.</p></noscript>
</section>`;
}
const IKON = {
  nytt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  skriv: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V3h10v6M7 18H4v-8h16v8h-3M7 14h10v7H7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  lenke: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

function tekstHTML(t) {
  return `${t.avsnitt.map((a) => `<section><h2>${esc(a.h)}</h2>${a.p.map((p) => `<p>${esc(p)}</p>`).join('')}</section>`).join('')}${t.sporsmal?.length ? `<section class="sporsmal"><h2>Spørsmål og svar</h2>${t.sporsmal.map((q) => `<details><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}</section>` : ''}`;
}
const faqLd = (t) => (t.sporsmal?.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: t.sporsmal.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })) }] : []);

const kort = (s, beskr) => `<a class="kort" href="${s.slug}"><b>${esc(s.navn)}</b>${beskr ? `<span>${esc(beskr)}</span>` : ''}</a>`;

// ---------- generatorsider ----------
for (const s of sider) {
  const t = TEKST[s.slug];
  const f = fagFor(s.gruppe);
  const hub = hubFor(s.gruppe);
  const gen = GENERATORER[s.gen];
  const o = normaliser(gen, s.opts);
  const sm = [['Forside', '/'], [f.navn, f.slug], ...(s.hub ? [] : [[gruppenavn[s.gruppe], hub.slug]]), [s.hub ? gruppenavn[s.gruppe] : kortNavn(s), s.slug]];
  const sosken = genSider(s.gruppe);
  const faner = `<nav class="faner" aria-label="${esc(gruppenavn[s.gruppe])}">${sosken.map((x) => (x.slug === s.slug ? `<span aria-current="page">${esc(kortNavn(x))}</span>` : `<a href="${x.slug}">${esc(kortNavn(x))}</a>`)).join('')}</nav>`;
  const sammeTrinn = sider.filter((x) => x.gruppe !== s.gruppe && !x.hub && x.opts.trinn === o.trinn).slice(0, 8);
  const relatert = `<section class="relatert"><h2>Flere ark</h2>
<div class="kortrad">${sosken.filter((x) => x.slug !== s.slug).map((x) => kort(x, TEKST[x.slug]?.h1)).join('')}</div>
${sammeTrinn.length ? `<h3>Andre ark for ${o.trinn}. trinn</h3><div class="kortrad">${sammeTrinn.map((x) => kort(x)).join('')}</div><p><a href="/${o.trinn}-trinn/">Alle ark for ${o.trinn}. trinn →</a></p>` : ''}
</section>`;
  const body = `<div class="indre side">${smuleHTML(sm)}
<header class="sidetopp"><h1>${esc(t.h1)}</h1><p class="ingress">${esc(t.ingress)}</p>${sosken.length > 1 ? faner : ''}</header>
${generatorBlokk(s)}
<article class="tekst">${tekstHTML(t)}</article>
${relatert}
</div>`;
  const ld = [
    smuler(sm),
    { '@context': 'https://schema.org', '@type': 'LearningResource', name: t.h1, description: t.beskrivelse, url: BASE + s.slug, inLanguage: 'nb', isAccessibleForFree: true, learningResourceType: ['Oppgaveark', 'Arbeidsark'], educationalLevel: `${o.trinn}. trinn`, teaches: gruppenavn[s.gruppe], audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' }, provider: { '@type': 'Organization', name: NAVN, url: BASE + '/' } },
    ...faqLd(t),
  ];
  await write(path.join(s.slug, 'index.html'), layout({ title: `${t.tittel} | ${NAVN}`, description: t.beskrivelse, canonical: s.slug, body, ld, scripts: `<script type="module" src="/js/app.js?v=${versjon}"></script>` }), { prioritet: s.hub ? '0.8' : '0.7' });
}

// ---------- fagsider ----------
for (const f of fag) {
  const t = TEKST[f.slug];
  const sm = [['Forside', '/'], [f.navn, f.slug]];
  const grupper = f.grupper.map((g) => `<section class="gruppe"><h2><a href="${hubFor(g).slug}">${esc(gruppenavn[g])}</a></h2><p>${esc(TEKST[hubFor(g).slug].ingress)}</p><div class="kortrad">${genSider(g).map((x) => kort(x)).join('')}</div></section>`).join('');
  const body = `<div class="indre side">${smuleHTML(sm)}<header class="sidetopp"><h1>${esc(t.h1)}</h1><p class="ingress">${esc(t.ingress)}</p></header>${grupper}<article class="tekst">${tekstHTML(t)}</article></div>`;
  await write(path.join(f.slug, 'index.html'), layout({ title: `${t.tittel} | ${NAVN}`, description: t.beskrivelse, canonical: f.slug, body, ld: [smuler(sm), ...faqLd(t)] }), { prioritet: '0.9' });
}

// ---------- trinnsider ----------
const passerTrinn = (s, tr) => {
  const g = GENERATORER[s.gen];
  return s.opts.trinn === tr || (s.hub && g.trinn[0] <= tr && g.trinn[1] >= tr && !sider.some((x) => x.gruppe === s.gruppe && !x.hub && x.opts.trinn === tr));
};
for (const ts of trinnsider) {
  const t = TEKST[ts.slug];
  const sm = [['Forside', '/'], [ts.navn, ts.slug]];
  const perFag = fag.map((f) => {
    const liste = sider.filter((s) => f.grupper.includes(s.gruppe) && passerTrinn(s, ts.trinn));
    return liste.length ? `<section class="gruppe"><h2>${f.navn}</h2><div class="kortrad">${liste.map((x) => kort({ ...x, navn: x.hub ? `${gruppenavn[x.gruppe]} (velg ${ts.trinn}. trinn)` : x.navn })).join('')}</div></section>` : '';
  }).join('');
  const body = `<div class="indre side">${smuleHTML(sm)}<header class="sidetopp"><h1>${esc(t.h1)}</h1><p class="ingress">${esc(t.ingress)}</p><nav class="faner" aria-label="Trinn">${trinnsider.map((x) => (x.trinn === ts.trinn ? `<span aria-current="page">${x.navn}</span>` : `<a href="${x.slug}">${x.navn}</a>`)).join('')}</nav></header>${perFag}<article class="tekst">${tekstHTML(t)}</article></div>`;
  await write(path.join(ts.slug, 'index.html'), layout({ title: `${t.tittel} | ${NAVN}`, description: t.beskrivelse, canonical: ts.slug, body, ld: [smuler(sm), ...faqLd(t)] }), { prioritet: '0.8' });
}

// ---------- forside ----------
{
  const forhånd = sider.find((s) => s.slug === '/gangetabell/3-trinn/');
  const fagKort = fag.map((f) => `<section class="fagkort ${f.id}"><h2><a href="${f.slug}">${f.navn}</a></h2><ul>${f.grupper.map((g) => `<li><a href="${hubFor(g).slug}">${esc(gruppenavn[g])}</a></li>`).join('')}</ul></section>`).join('');
  const populaere = ['/gangetabell/', '/brok/5-trinn/', '/staveord/3-trinn/', '/ordleting/jul/', '/klokka/', '/kryssord-for-barn/', '/pluss-og-minus/tierovergang/', '/engelske-gloser/dyr/', '/og-eller-a/', '/divisjon/5-trinn/'].map((u) => sider.find((s) => s.slug === u));
  const body = `<section class="helt"><div class="indre helt-indre">
<div class="helt-tekst"><h1>Oppgaveark med fasit – nye hver gang</h1>
<p class="ingress">Gratis ark i matte, norsk og engelsk for 1.–7. trinn. Velg tema og trinn, trykk «Lag nytt ark», og skriv ut på A4. Fasiten kommer på egen side.</p>
<ul class="fordeler"><li>Unike ark: gi hver elev sitt eget</li><li>Fasit som alltid stemmer – regnet ut og testet automatisk</li><li>Del lenken, så får andre nøyaktig samme ark</li><li>Ingen innlogging, ingen reklame, ingen sporingscookies</li></ul>
<p><a class="knapp hoved stor" href="${forhånd.slug}">Prøv med gangetabellen</a></p></div>
<div class="helt-ark" aria-hidden="true"><div class="arkskala mini">${arkHTML(GENERATORER.gangetabell, normaliser(GENERATORER.gangetabell, forhånd.opts), 'FORSIDE').ark}</div></div>
</div></section>
<div class="indre side">
<section class="fagrad">${fagKort}</section>
<section class="trinnvalg" id="trinn"><h2>Velg trinn</h2><div class="trinnknapper">${trinnsider.map((t) => `<a href="${t.slug}"><b>${t.trinn}.</b> trinn</a>`).join('')}</div></section>
<section class="relatert"><h2>I sesong nå</h2><div class="kortrad">${temasider.map((x) => kort(x, TEKST[x.slug].h1)).join('')}</div></section>
<section class="relatert"><h2>Mye brukt</h2><div class="kortrad">${populaere.map((x) => kort(x, TEKST[x.slug].h1)).join('')}</div></section>
<article class="tekst forsidetekst">
<section><h2>Slik fungerer Skrivutark</h2><p>Hvert ark lages av en generator i det øyeblikket du trykker. Mattestykkene regnes ut av programmet, og ordoppgavene bygges av egne ordlister som er kontrollert mot Bokmålsordboka. Derfor kan du lage så mange ark du vil, og fasiten stemmer alltid med arket.</p><p>Hvert ark har en arkkode nederst. Lenken til arket inneholder koden, så en kollega eller forelder som åpner lenken, får nøyaktig de samme oppgavene. Trykk «Lag nytt ark» for nye oppgaver med samme vanskegrad.</p></section>
<section><h2>Laget for klasserommet</h2><p>Arkene er laget for vanlig skriver og A4. Navn og dato står øverst, oppgavene har god luft, og skrifttypen har bokstaver som ligner håndskrift. Matteoppgavene kan vises på bokmål eller nynorsk. Velg «Lagre som PDF» i utskriftsvinduet hvis du vil dele arket digitalt.</p></section>
</article>
</div>`;
  const ld = [{ '@context': 'https://schema.org', '@type': 'WebSite', name: NAVN, url: BASE + '/', inLanguage: 'nb', description: 'Gratis generator for oppgaveark med fasit for barneskolen.' }];
  await write('index.html', layout({ title: 'Skrivutark – gratis oppgaveark med fasit for 1.–7. trinn', description: 'Lag gratis oppgaveark med fasit i matte, norsk og engelsk for 1.–7. trinn. Nye ark hver gang, klare til utskrift på A4. Ingen innlogging.', canonical: '/', body, ld }), { prioritet: '1.0' });
}

// ---------- sesongsider (juleoppgaver, vinteroppgaver) ----------
for (const ts of temasider) {
  const t = TEKST[ts.slug];
  const sm = [['Forside', '/'], [ts.navn, ts.slug]];
  const ark = ts.ark.map(([slug, kol, fraTil]) => ({ s: sider.find((x) => x.slug === slug), kol, fraTil }));
  const lenke = (a, tr) => {
    const gen = GENERATORER[a.s.gen];
    return `${a.s.slug}?${tilParametre(gen, normaliser(gen, { ...a.s.opts, trinn: tr }))}`;
  };
  const rader = [1, 2, 3, 4, 5, 6, 7].map((tr) => `<tr><th scope="row">${tr}. trinn</th>${ark.map((a) => `<td>${tr >= a.fraTil[0] && tr <= a.fraTil[1] ? `<a href="${esc(lenke(a, tr))}">${esc(a.kol)}</a>` : '<span aria-label="Ikke anbefalt">–</span>'}</td>`).join('')}</tr>`).join('');
  const tabell = `<section class="gruppe"><h2>Velg trinn</h2><p>Hver lenke åpner arket ferdig innstilt for trinnet. Trykk «Lag nytt ark» for flere ulike ark.</p><div class="tabellramme"><table class="trinntabell"><thead><tr><th scope="col">Trinn</th>${ark.map((a) => `<th scope="col">${esc(a.kol)}</th>`).join('')}</tr></thead><tbody>${rader}</tbody></table></div></section>`;
  const kortene = `<section class="gruppe"><h2>Arkene</h2><div class="kortrad">${ark.map((a) => kort(a.s, TEKST[a.s.slug]?.h1)).join('')}</div></section>`;
  const andre = temasider.filter((x) => x.slug !== ts.slug).map((x) => kort(x)).join('');
  const body = `<div class="indre side">${smuleHTML(sm)}<header class="sidetopp"><h1>${esc(t.h1)}</h1><p class="ingress">${esc(t.ingress)}</p></header>${tabell}${kortene}<article class="tekst">${tekstHTML(t)}</article><section class="relatert"><h2>Flere sesongark</h2><div class="kortrad">${andre}</div></section></div>`;
  await write(path.join(ts.slug, 'index.html'), layout({ title: `${t.tittel} | ${NAVN}`, description: t.beskrivelse, canonical: ts.slug, body, ld: [smuler(sm), ...faqLd(t)] }), { prioritet: '0.8' });
}

// ---------- om og personvern ----------
{
  const omTekst = await readFile('src/sider/om.html', 'utf8');
  const pvTekst = await readFile('src/sider/personvern.html', 'utf8');
  await write('om/index.html', layout({ title: `Om Skrivutark – kilder og lisenser | ${NAVN}`, description: 'Om Skrivutark: hvordan arkene lages, hvordan fasiten kontrolleres, og hvilke kilder og lisenser ordlistene bygger på.', canonical: '/om/', body: `<div class="indre side">${smuleHTML([['Forside', '/'], ['Om', '/om/']])}<article class="tekst bred">${omTekst}</article></div>`, ld: [smuler([['Forside', '/'], ['Om', '/om/']])] }), { prioritet: '0.3' });
  await write('personvern/index.html', layout({ title: `Personvern | ${NAVN}`, description: 'Skrivutark bruker ingen sporingscookies og samler ikke inn personopplysninger. Her står det hva vi måler og hvordan.', canonical: '/personvern/', body: `<div class="indre side">${smuleHTML([['Forside', '/'], ['Personvern', '/personvern/']])}<article class="tekst bred">${pvTekst.replace('{{GOAT}}', GOAT ? 'Vi bruker GoatCounter' : 'Når statistikk er slått på, bruker vi GoatCounter')}</article></div>` }), { prioritet: '0.2' });
}

await write('404.html', layout({ title: `Fant ikke siden | ${NAVN}`, description: 'Siden finnes ikke.', canonical: '/404', noindex: true, body: `<div class="indre side tekst"><h1>Denne siden finnes ikke</h1><p>Kanskje lenken er gammel. Her er noen steder å begynne:</p><div class="kortrad">${fag.map((f) => kort(f)).join('')}${kort({ slug: '/', navn: 'Forsiden' })}</div></div>` }), { sitemap: false });

await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([u, p]) => `<url><loc>${BASE}${u}</loc><priority>${p}</priority></url>`).join('\n')}\n</urlset>\n`);
await write('robots.txt', NOINDEX ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`);
await write('.nojekyll', '');
if (process.env.SITE_DOMAIN) await write('CNAME', `${process.env.SITE_DOMAIN}\n`);
await write('indexnow.json', JSON.stringify(urls.map(([u]) => BASE + u)));
console.log(`Bygget ${urls.length} sider til ${BASE}${NOINDEX ? ' (noindex)' : ''}`);

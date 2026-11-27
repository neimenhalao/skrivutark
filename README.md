# Skrivutark

Gratis generator for A4-oppgaveark med fasit for barneskolen (1.–7. trinn): matte, norsk og engelsk.
Statisk nettsted (GitHub Pages). Arkene lages i nettleseren fra en arkkode, så samme lenke gir samme ark.

## Struktur
- `src/gen/*.js` – én generator per arktype (`lag()` gir data, `vis()` gir HTML for ark og fasit)
- `src/lib/` – tilfeldighet med frø, formatering, SVG (klokke, brøk, tallinje, penger), ordleting, kryssord, filter
- `src/data/` – egne ordlister (staveord, temaord med hint, setninger, gloser) og sidetekster
- `src/sider.js` – landingssidene (tema × trinn) med forhåndsvalg
- `src/ark.js` – felles for nettleser og bygg: valg, arkkode, A4-ark
- `src/app.js` – nettleserdelen (valg, nytt ark, utskrift, deling)
- `tools/build.mjs` – bygger `dist/`; `tools/serve.mjs` – lokal server; `tools/utskriftstest.mjs` – PDF-test (én A4-side)
- `tools/ordsjekk.mjs` – stavekontroll mot ord.uib.no; `tools/indexnow.mjs`; `tools/make-og.mjs`

## Kommandoer
- `npm test` – fasit-tester for alle generatorer (kjøres også i GitHub Actions før publisering)
- `npm run build` og `npm run serve` → http://localhost:4340/skrivutark/
- `node tools/utskriftstest.mjs [--alle]` – krever at serveren kjører

## Innstillinger (GitHub → Settings → Variables)
- `SITE_DOMAIN` – tom/ikke satt = https://neimenhalao.github.io/skrivutark/, ellers f.eks. `skrivutark.no`
- `NOINDEX` – `1` til domenet er koblet
- `GOATCOUNTER` – kode for besøkstall uten cookies (f.eks. `skrivutark`)
- `BASE_PATH` – bare hvis stien må overstyres

Skrift: Andika (SIL OFL 1.1). Stavekontroll: Bokmålsordboka (UiB og Språkrådet) via ord.uib.no.

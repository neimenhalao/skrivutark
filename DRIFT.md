# Driftshåndbok – Skrivutark

Brukes av COO-ens daglige økt og av team som jobber med Skrivutark. Hold dokumentet oppdatert – det er hukommelsen mellom øktene.

## Mål og roller
- **Mål:** over 100 000 sidevisninger per måned organisk (SEO, deling mellom lærere, gjenbesøk) uten annonsebudsjett, og en inntektsplan ved målet (se `KOMMERSIALISERING.md`).
- **Målgruppe:** lærere på 1.–7. trinn (hovedmålgruppe), deretter foreldre og spesialpedagoger.
- **Eier** betaler domenet og gjør bare innlogging, betaling og DNS. **All vekst er COO-ens og teamets ansvar.** Be aldri eieren poste, dele, sende e-post eller verve brukere.
- Meldinger eller innlegg i prosjektets navn til andre (e-post, Facebook-grupper, skjemaer) krever eierens godkjenning. Samle dem og be om ett samlet ja.
- Utelukket innhold (COO.md): helse-/medisinråd, finansråd, gambling, voksent innhold, politikk, etterligning av ekte organisasjoner. Eierens navn skal ikke stå synlig.

## Systemet
- **Kode:** `C:\Users\DanErikLinde\OneDrive - AREALUTVIKLING AS\Dokumenter\Claude code\skrivutark`, repo `neimenhalao/skrivutark` (offentlig), gren `main`.
- **Nettsted nå:** https://neimenhalao.github.io/skrivutark/ (NOINDEX, robots.txt blokkerer alt). Eget domene: `skrivutark.no` når det er kjøpt.
- **Hosting:** GitHub Pages via Actions (`.github/workflows/deploy.yml`). Ved hver push til `main`: fasit-testene kjøres først – feiler en test, publiseres ingenting. Så bygg og publisering. IndexNow kjøres bare når `SITE_DOMAIN` er satt og `NOINDEX` ikke er `1`.
- **Repo-variabler:** `NOINDEX=1` (satt). `SITE_DOMAIN` er ikke satt (GitHub tillater ikke tomme variabler; «ikke satt» betyr github.io-adressen med stien `/skrivutark`). `GOATCOUNTER=skrivutark` (satt 2026-11-27; endring av variabler krever nytt bygg). `BASE_PATH` trengs ikke.
- **Statistikk:** GoatCounter (uten cookies) når eieren har laget `skrivutark.goatcounter.com`. Hendelser: `hendelse-nytt-ark/<generator>`, `hendelse-skriv-ark/…`, `hendelse-skriv-fasit/…`, `hendelse-del/…`, `hendelse-valg/…`.
- **IndexNow-nøkkel:** `site/de339c0fa08ebd8cc37da7baa96664b1.txt`.
- **Lokal forhåndsvisning:** `npm run build` og `npm run serve` → http://localhost:4340/skrivutark/ (preview-navn «skrivutark» i `Claude code/.claude/launch.json`).

### Kodeoversikt
- `src/gen/*.js` – 12 generatorer: gangetabell, plussminus, divisjon, brok, klokka, kroner, tallinje, staveord, ordleting, kryssord, setninger, gloser. Hver har `felter()`, `standard(trinn)`, `lag(rng, opts)` (rene data, testbare) og `vis(data, opts)` (HTML for ark og fasit).
- `src/ark.js` – generatorregister, normalisering av valg, URL-parametre, arkkode/frø og A4-rammen. Brukes både i nettleseren og i bygget.
- `src/app.js` – nettleseren: valg, «Lag nytt ark», «Skriv ut ark», «Skriv ut fasit», «Vis fasit», «Kopier lenke», skalering av arket på mobil.
- `src/sider.js` – alle landingssider (slug, generator, forhåndsvalg). Tekstene ligger i `src/data/tekster-matte.js` og `src/data/tekster-sprak.js` (nøkkel = slug).
- `src/data/` – egne ordlister: `staveord.js` (per trinn og regel), `temaer.js` (20 temaer med hint og nivå), `setninger.js` (ordbank og og/å), `gloser.js` (18 temaer).
- `tools/build.mjs` – bygger `dist/` (97 sider, sitemap, robots, 404, JSON-LD: BreadcrumbList, LearningResource, FAQPage, WebSite).
- `tests/` – fasit-tester (`npm test`, 19 tester, ca. 10 s).
- `tools/utskriftstest.mjs` – skriver ut ark og fasit til PDF med Chrome uten vindu og sjekker at alt får plass på én A4-side (`--alle` tester hver generator × trinn × type med største antall).
- `tools/ordsjekk.mjs` – stavekontroll mot ord.uib.no (Bokmålsordboka). Kjør fra PowerShell (Bash-sandkassen når ikke nettet). Kjente unntak: Afrika, Eidsvoll, Norges, Oslo, Svalbard, dyrenes, familiens, nissens, skogens.

### Kvalitetsregler (må holdes)
1. Ny generator eller ny arktype → tester som regner fasiten ut på nytt uavhengig, i `tests/`.
2. Nye ord → `node tools/ordsjekk.mjs` (PowerShell) skal gi 0 «ikke funnet» utenom kjente unntak.
3. Endring i layout eller antall → `node tools/utskriftstest.mjs --alle` med serveren i gang. Alt skal være én A4-side.
4. Ingen kopiering fra lærebøker eller konkurrenter. Lesetekster skal være egne, faktasjekket og passe for alderen.
5. Hver landingsside skal ha egen, nyttig tekst (150–280 ord). Ingen tynne masseproduserte sider.

## Lansering på eget domene (når eieren har kjøpt skrivutark.no)
Eieren gjør punkt 1–3, Claude gjør resten.
1. **DNS hos Domeneshop** for `skrivutark.no`: A-oppføringer `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (valgfritt AAAA `2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`), og `www` CNAME `neimenhalao.github.io.`
2. **GoatCounter:** opprett konto og nettstedet `skrivutark` (gir `skrivutark.goatcounter.com`).
3. **Google Search Console:** domeneegenskap `skrivutark.no` – legg inn TXT-oppføringen Google viser i Domeneshop.
4. Claude: `gh api -X PUT repos/neimenhalao/skrivutark/pages -f cname=skrivutark.no`, vent på sertifikat, så `-F https_enforced=true`.
5. Claude: `gh variable set SITE_DOMAIN --body skrivutark.no`, `gh variable set GOATCOUNTER --body skrivutark`, `gh variable delete NOINDEX` (alle med `-R neimenhalao/skrivutark`), og kjør workflowen.
6. Claude: sjekk at https://skrivutark.no svarer, at `robots.txt` tillater alt, at kanoniske URL-er er `https://skrivutark.no/...`, og at IndexNow svarer 200/202. Send inn `https://skrivutark.no/sitemap.xml` i Search Console (via eierens innloggede Chrome) og be om indeksering av forsiden og fagsidene.
7. Oppdater «Status» her og PORTEFOLJE.md.

## Daglig økt
Kort runde som COO-ens daglige økt kan følge. Maks 1–2 vekstpunkter per dag; test før publisering.
1. **Les** dette dokumentet (Status og Backlogg) og siste fil i `rapporter/` hvis den finnes.
2. **Helse:**
   - `gh run list -R neimenhalao/skrivutark --limit 3` – siste kjøring skal være grønn.
   - Nettstedet svarer (PowerShell: `Invoke-WebRequest https://neimenhalao.github.io/skrivutark/ -UseBasicParsing` – eller eget domene når det er koblet).
   - `npm test` lokalt hvis koden er endret siden sist.
3. **Tall** (når GoatCounter og Search Console er koblet): sidevisninger i går, siste 7 dager og hittil i måneden; hendelsene «nytt-ark» og «skriv-ark» per generator (viser hva lærerne faktisk bruker); henvisere; Search Console: klikk, visninger, gjennomsnittlig posisjon, indekserte sider, søkeord på side 2 (posisjon 11–20) som kan løftes. Bare les – ikke endre innstillinger.
4. **Sesong:** se sesongkalenderen under. Ligger en topp mindre enn 8 uker fram, prioriter innholdet for den.
5. **Vekst:** gjør det øverste uferdige punktet i backloggen (eller et punkt tallene peker på). Kjør `npm test`, utskriftstest ved layoutendring, se på mobil i Browser-panelet, commit med «Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>», push.
6. **Logg:** skriv `rapporter/ÅÅÅÅ-MM-DD.md` (tall, hva som ble gjort, neste steg), oppdater «Status» og backloggen her, commit og push.
7. **Til COO-rapporten (kl. 16):** én til tre linjer: tall, hva som ble gjort, eventuelt hva eieren må gjøre (bare betaling/innlogging/DNS).

## Status
- **2026-11-27: MVP LIVE på https://neimenhalao.github.io/skrivutark/ (NOINDEX).** 12 generatorer, 97 sider: 84 landingssider med forhåndsvist ark og egen tekst (matte 39, norsk 31, engelsk 14, inkl. oversiktssider), fagsidene matte/norsk/engelsk, sju trinnsider, forside, om og personvern. Ordlister: 692 staveord (1.–7. trinn), 638 temaord med kryssordhint (20 temaer), 180 ordbanksetninger + 100 og/å-setninger, 554 gloser (18 temaer). Alle norske ord sjekket mot Bokmålsordboka. 19 fasit-tester grønne. Testet på mobil (375 px), desktop og utskrift (PDF: alle 532 kombinasjoner av generator × trinn × type med største antall, og alle 84 landingssider, gir én A4-side per ark og fasit). Læreplanhenvisninger følger læreplanene som gjelder fra 1.8.2026 (MAT01-06, NOR01-08, ENG01-06).
- **2026-11-27 (daglig økt):** sesongsidene `/juleoppgaver/` og `/vinteroppgaver/` (trinntabell med ferdig innstilte ark, lenket fra forsiden) – 99 sider. `GOATCOUNTER=skrivutark` er satt; nytt bygg med skriptet publisert samme dag. Rapport: `rapporter/2026-11-27.md`.
- **Domene:** `skrivutark.no` er kjøpt og delegert til Domeneshops navnetjenere, men A peker fortsatt til parkeringssiden 151.249.121.9 (DNS-sonen er ikke satt opp ennå; COO håndterer). Start «Lansering på eget domene» først når A svarer 185.199.x.153.
- **Venter på:** DNS-oppføringer, Search Console-bekreftelse (se «Lansering på eget domene»).

## Sesongkalender 2027 (publiser innhold 6–8 uker før toppen)
| Topp | Når | Innhold som bør være klart | Frist |
|---|---|---|---|
| Jul 2026 | desember | (for sent for nytt domene – ordleting/kryssord jul finnes allerede) | – |
| Januarstart / vinter | uke 1–3 | ordleting og kryssord vinter, «nytt år»-ark, klokka/kalender | 2026-12-15 |
| Vinterferie | uke 8 (22.–26.2.2027) for de fleste, uke 9 i noen fylker | «vinterferiehefte» per trinn (blandede ark), ordleting vinter/sport, kryssord vinter | 2027-01-10 |
| Påske | palmesøndag 21.3, påskedag 28.3.2027 | ordleting og kryssord påske (finnes), påskehefte per trinn, påskenøtter-kryssord for 5.–7. | 2027-02-10 |
| 17. mai | mai 2027 | ordleting og kryssord 17. mai (finnes), lesetekst om Grunnloven (faktasjekket), engelsk «Norway's National Day» | 2027-03-25 |
| Sommerferie | slutten av juni | «sommerhefte» per trinn (repetisjon), sommer-ordleting | 2027-05-01 |
| Skolestart | uke 33–34 (midten av august 2027) | «første skoleuke»-ark, repetisjonsark per trinn, staveord for høsten, timeplan-mal | 2027-06-20 |
| Høst / jul 2027 | oktober–desember | høst, halloween (nøytral), jul: adventskalender med ett ark per dag | 2027-10-01 |

## Backlogg (vekst, i prioritert rekkefølge)
1. **Klassesett:** «Skriv ut 25 ulike ark» – én PDF/utskrift med ett unikt ark per elev og samlet fasit. Den sterkeste funksjonen for lærere og grunnlaget for premium (se KOMMERSIALISERING.md). Kan starte gratis med 5 ark.
2. **Blandet matteark per trinn** («matteark 3. trinn»): én generator som setter sammen 3–4 temaer for trinnet på ett ark. Treffer de største søkene og trinnsidene.
3. **Lesetekster med spørsmål** (konsept fra research): egne, faktasjekkede tekster per lesenivå (LIX), 20 i første omgang (dyr, årstider, Norge, høytider), med spørsmål og fasit. Egen gjennomlesing per tekst. Store søk: «lesetekster 3. trinn», «leseforståelse oppgaver».
4. **Flere landingssider der det finnes søk:** ordleting for resten av temaene (dyr finnes som hovedside; klær, været, yrker, sport, trafikk, bondegården, hjemme), kryssord for flere temaer, engelske gloser for resten av temaene, «hoderegning», «gangetabell 2-gangen … 10-gangen» (bare hvis søkedata viser volum). Hver side skal ha egen tekst.
5. **Vinterferie- og påskehefter** (se sesongkalenderen). Sesongsidene `/juleoppgaver/` og `/vinteroppgaver/` finnes (2026-11-27) – lag `/paskeoppgaver/` og `/17-mai-oppgaver/` på samme måte (legg til i `temasider` i `src/sider.js` + tekst), og vurder et engelsk glosetema «Vinter» og «nytt år»-ark før 15.12.
6. **QR-kode på fasitarket** som lenker til arket (lærer kan skanne og vise fasit på tavla). Lages uten tredjepart.
7. **Nynorsk ordlister** for staveord og temaord (Nynorskordboka via `ordsjekk.mjs --nn`), og nynorsk på alle arktekster.
8. **Egne ordlister:** læreren limer inn ukens ord → staveark, ordleting og kryssord (uten lagring på server). Kandidat for premium senere.
9. **Delingssløyfe:** «Del med en kollega»-lenke med forhåndsvisning (og-bilde per generator), kort tekst på arket «Lag flere gratis på skrivutark.no».
10. **Søkemotor-grunnmur etter lansering:** Search Console, intern lenking fra trinnsider, FAQ der det finnes reelle spørsmål, forbedre titler for sider på posisjon 11–20.
11. **Utskriftstest i GitHub Actions** (Chrome finnes på ubuntu-latest) så layoutfeil stoppes før publisering.
12. **Kontaktadresse** (e-post for prosjektet) til om-siden – samles i en forespørsel til eieren når det trengs (f.eks. før første lærerhenvendelse).

## Kjente begrensninger
- Norsk-arkene finnes bare på bokmål. Matteinstruksjoner kan vises på nynorsk.
- Kryssord passer best fra 2. trinn (hintene må leses).
- Klokka på minuttnivå bruker én vanlig talemåte i fasiten (3:40 = «ti over halv fire»; «tjue på fire» er også riktig).
- Myntene er forenklede tegninger, ikke bilder av ekte mynter.

# Kommersialiseringsplan – Skrivutark

**Utgangspunkt ved målet:** 100 000 sidevisninger/mnd ≈ 20 000–25 000 besøk (4–5 sider per besøk: valg, «Lag nytt ark», nye trinn), anslagsvis 8 000–12 000 unike brukere i måneden. Rundt halvparten antas å være lærere (hovedmålgruppen), resten foreldre og spesialpedagoger. Sterk sesong: høyest ved skolestart, før jul og i prøveperioder, nesten null i juli.

**Prinsipp:** Gratisversjonen skal være så god at lærere deler den. Pengene kommer fra det lærere sparer *tid* på (klassesett, egne ordlister, samlinger), ikke fra å stenge dagens ark. Ingen annonser på selve arket som skrives ut, og ingen sporing av elever – kontoer er bare for voksne.

**Prisnivået er bevist i markedet:** arbeidsark.no tar 249–290 kr/mnd, matteoppgaver.no 99 kr/mnd for lærerversjonen. Forlagene (Salaby, Multi) selger skolelisenser.

## Inntektskilder i prioritert rekkefølge
| # | Kilde | Slik fungerer det | Anslag ved 100k visninger/mnd |
|---|---|---|---|
| 1 | **Skrivutark Pluss for lærere** | 59 kr/mnd eller 490 kr/år. Klassesett (25–30 unike ark i én PDF med samlet fasit), egne ordlister (lim inn ukens ord → staveark, ordleting, kryssord), lagrede samlinger og ukeplaner, nynorsk overalt, større antall per ark, eksport til Word. Gratisversjonen beholder alt som finnes i dag (ett ark om gangen). | 1–2 % av 3 000–5 000 lærere = 30–100 abonnenter → 2 000–6 000 kr/mnd |
| 2 | **Skolelisens** | 1 500–4 000 kr/år per skole (alle lærere får Pluss), faktura med EHF. Selges når mange lærere på samme skole bruker gratisversjonen (vi ser e-postdomenet ved innlogging, ingen sporing ellers). | 10–30 skoler år 1 → 2 000–8 000 kr/mnd i snitt |
| 3 | **Annonser (ved volum)** | Bare på tekstdelen av landingssidene og fagsidene, aldri i arket, aldri i utskrift. Krever samtykkebanner (CMP) og gjør sidene tregere, så vi starter først når vi har > 100k visninger/mnd stabilt. Norsk RPM grovt 20–50 kr per 1 000 visninger, høyest i desember og august. Undervurder ikke: ved 300k+ visninger blir dette en vesentlig post. | 2 000–5 000 kr/mnd ved 100k; lineært med volum |
| 4 | **Sesonghefter (PDF)** | «Sommerhefte 2. trinn», «Juleheftet», «Vinterferiehefte» – 30–60 ferdig satte sider med fasit, 49–79 kr via Vipps/Stripe. Rettet mot foreldre. Lages av våre egne generatorer, så marginal kostnad er lav. | 5 000–20 000 kr per sesong |
| 5 | **Henvisning (affiliate)** | Foreldresider: oppgavebøker, leseløftbøker og skolesaker (Adlibris, Ark, Norli via Adtraction). Tydelig merket, aldri på arket. | 500–2 000 kr/mnd |
| 6 | **Sponsor uten sporing** | «Ukens ark presentert av …» – f.eks. bibliotek, forlag eller en organisasjon med læringsprofil. Én linje og logo på nettsiden, ikke på arket. Ingen sponsor knyttet til finansråd (utelukket tema). | 2 000–8 000 kr/mnd når volumet er der |
| 7 | **Lisens av generatorene** | Innbygging hos et forlag eller en læringsplattform (white label) eller salg av hele produktet. Datagrunnlaget (egne ordlister, testede generatorer) er det de betaler for. | Avtalebasert, størst oppside |

**Realistisk samlet ved målet:** 6 000–20 000 kr/mnd fra 1 + 2 + 3, i tillegg til sesongtopper fra 4. **Mest oppside:** skolelisenser (2) og en lisensavtale med et forlag (7).

## Det vi gjør allerede nå, så det blir lett senere
- **Alt innhold er vårt eget:** ordlister, setninger, hint, gloser og sidetekster er skrevet av teamet og stavekontrollert mot Bokmålsordboka. Skriften (Andika, OFL) kan brukes kommersielt. Ingenting er kopiert fra lærebøker eller konkurrenter.
- **Generatorene er testet:** fasit-testene er det som gjør et betalt produkt troverdig («fasiten stemmer alltid»).
- **Arkkode i lenken:** grunnlaget for samlinger, klassesett og «del med kollega» – ingen database trengs for gratisversjonen.
- **Måling uten cookies:** GoatCounter teller «nytt ark», «skriv ut ark» og «skriv ut fasit» per generator. Det viser hvilke ark som er verdt å bygge Pluss-funksjoner rundt.
- **Gratis i lanseringsperioden** sies ikke – det som er gratis nå, forblir gratis. Pluss legger bare til nye funksjoner. Da føles det ikke som et løftebrudd.

## Før første krone kommer inn (ved ca. 30 000–50 000 visninger/mnd)
Det praktiske Claude ikke kan gjøre alene, samlet i én forespørsel til eieren:
1. **Hvem mottar pengene:** et av eierens selskaper (fakturering, EHF for skoler, mva fra 50 000 kr omsetning per år).
2. **Hosting:** GitHub Pages passer dårlig for kommersielle nettsteder. Flytt til Cloudflare Pages (gratis, kommersiell bruk tillatt). Eieren oppretter konto, Claude flytter.
3. **Statistikk:** GoatCounter er gratis bare for ikke-kommersiell bruk – oppgrader til betalt plan (ca. 50 kr/mnd).
4. **Betaling:** Stripe og Vipps (eieren oppretter kontoene, Claude bygger resten). Innlogging med e-postlenke (lærerens e-post, ingen elevdata), liten database (Cloudflare D1 eller Supabase).
5. **Vilkår og personvern:** Claude oppdaterer (databehandleroversikt, vilkår for skolelisens). Skoler kan be om databehandleravtale – lag mal før første skolesalg.
6. **Varemerke (valgfritt):** «Skrivutark» hos Patentstyret før forhandling med forlag.

## Hvem gjør hva
- **Claude og teamet:** bygging av Pluss, klassesett og hefter, prising, salgsside, mediekit, utkast til avtaler og salgshenvendelser til skoler/forlag (godkjennes samlet av eieren før utsending), rapportering.
- **Eier:** selskap, betalingskontoer, signering av avtaler.

## Milepæler
| Visninger/mnd | Kommersielt steg |
|---|---|
| 10 000 | Klassesett (5 ark gratis) bygd; måling av hvilke generatorer som brukes mest |
| 30 000 | Første sesonghefte (sommerhefte 2027) testes; venteliste for Pluss på nettsiden (bare e-post, frivillig) |
| 50 000 | Flytting til Cloudflare Pages, selskap og betalingskontoer på plass, Pluss lanseres for skolestart |
| 100 000 | Skolelisens, vurder annonser på tekstsider med samtykkebanner, henvendelse til forlag om lisens |

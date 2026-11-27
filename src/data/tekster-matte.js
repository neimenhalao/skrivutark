// Sidetekster for matte og trinnsider (skrivutark).
// Henvisninger til læreplanen er kontrollert mot udir.no 27.11.2026: Matematikk 1.–10. trinn (MAT01-06),
// Norsk (NOR01-08) og Engelsk (ENG01-06), som gjelder fra 1.8.2026. Kompetansemålene starter etter 2. trinn.
export default {
  // ---------- MATTE-OVERSIKT ----------
  '/matte/': {
    tittel: 'Matteark 1.–7. trinn – oppgaveark med fasit',
    beskrivelse: 'Gratis matteark med fasit for 1.–7. trinn: gangetabell, pluss og minus, divisjon, brøk, klokka, kroner og øre og tallinje. Lag nye ark og skriv ut.',
    h1: 'Matteark for barneskolen',
    ingress: 'Her finner du matteark med fasit til utskrift for 1. til 7. trinn. Velg tema, juster trinn og antall oppgaver, og lag et nytt ark så ofte du trenger.',
    avsnitt: [
      {
        h: 'Sju temaer fra 1. til 7. trinn',
        p: [
          'Gangetabell-arkene går fra blandede gangestykker til et tomt rutenett og en plakat til veggen. Pluss og minus starter med tallområdet 0–10 i 1. trinn og går til 0–10 000 i 5. trinn, med eller uten tierovergang. Divisjon begynner innenfor gangetabellen og fortsetter med divisjon med rest og store tall.',
          'Brøk-arkene følger elevene fra å skrive brøken til en skravert figur til å legge sammen brøker med ulike nevnere. Klokka-arkene har analoge urskiver og tidsregning, kroner og øre-arkene har mynter, sedler og handleoppgaver, og tallinje-arkene dekker alt fra 0–10 til desimaltall og negative tall.',
        ],
      },
      {
        h: 'Slik bruker du arkene',
        p: [
          'Trykk «Lag nytt ark», så får du nye oppgaver med samme vanskegrad. Da kan elevene få hvert sitt ark, og en elev som trenger mer øving, kan få et ark til. Fasiten skrives ut for seg med «Skriv ut fasit». Legg den gjerne på et rettebord, så elevene kan rette selv og se hva de må øve mer på.',
          'Oppgaveteksten kan vises på bokmål eller nynorsk. Arkene passer til korte daglige økter, stasjonsarbeid, lekser og ekstraoppgaver til dem som blir tidlig ferdige.',
        ],
      },
      {
        h: 'Arkene og læreplanen',
        p: [
          'Læreplanen i matematikk har kompetansemål etter hvert trinn fra og med 2. trinn. Etter 2. trinn skal elevene blant annet kunne plassere tall på tallinjen og beskrive tid med analog og digital klokke. Multiplikasjon kommer inn i målene etter 3. trinn, divisjon etter 4. trinn og brøk etter 5. trinn. Arkene er laget for mengdetrening ved siden av praktisk arbeid og samtaler om strategier, ikke i stedet for det.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Koster arkene noe?', a: 'Nei. Du kan lage og skrive ut så mange ark og fasiter du vil, gratis.' },
      { q: 'Hvor finner jeg alle arkene for ett trinn?', a: 'Gå til trinnsidene, for eksempel 3. trinn. Der er arkene i matte, norsk og engelsk som passer for trinnet, samlet på ett sted.' },
    ],
  },

  // ---------- GANGETABELL ----------
  '/gangetabell/': {
    tittel: 'Gangetabell – oppgaveark og plakat med fasit',
    beskrivelse: 'Gratis gangetabell-ark med fasit: blandede gangestykker, manglende faktor, gangerekker, tomt rutenett og plakat. Velg selv tabeller fra 1 til 10.',
    h1: 'Gangetabell – ark til utskrift',
    ingress: 'Lag oppgaveark i gangetabellen for akkurat de tabellene eleven øver på, fra 1-gangen til 10-gangen. Alle oppgavearkene har fasit.',
    avsnitt: [
      {
        h: 'Fem typer ark',
        p: [
          '«Blandet» gir tilfeldige gangestykker fra tabellene du velger, som 7 · 6 = __. «Mangler» spør etter den ene faktoren: 7 · __ = 42. «Rekke» viser hver tabell i rekkefølge, fint når en ny tabell skal læres. «Rutenett» er et tomt 10 × 10-gangeskjema der noen ruter er fylt ut på forhånd. «Plakat» er hele gangetabellen fra 1 til 10, klar til å henge opp.',
          'Du velger selv hvilke tabeller som skal være med, og om arket skal ha 20, 30, 40 eller 60 oppgaver.',
        ],
      },
      {
        h: 'Ark for ulike trinn',
        p: [
          'Velger du 2. trinn, er 2-, 5- og 10-gangen forhåndsvalgt. Arket for 3. trinn starter med 1- til 5-gangen og 10-gangen. Arket for 4. trinn bruker alle tabellene og oppgaver med manglende faktor, som bygger bro over til divisjon. Plakaten passer på alle trinn, både i klasserommet og ved lekseplassen hjemme.',
        ],
      },
      {
        h: 'Tips til øvingen',
        p: [
          'Etter 3. trinn skal elevene blant annet kunne utforske multiplikasjon ved telling og gruppering og bruke dobling og halvering. Det gir gode knagger: 4-gangen er det dobbelte av 2-gangen, og 8-gangen er det dobbelte av 4-gangen. Når eleven ser at 3 · 8 er det samme som 8 · 3, blir det nesten halvparten så mye å huske. Fem minutter hver dag gir som regel mer enn én lang økt i uka.',
        ],
      },
    ],
    sporsmal: [
      { q: 'I hvilken rekkefølge bør barnet lære gangetabellen?', a: 'En vanlig rekkefølge er 2-, 5- og 10-gangen først, fordi de ligner telling barnet kan fra før. Så følger 3- og 4-gangen, deretter 6-, 8- og 9-gangen og til slutt 7-gangen.' },
      { q: 'Hvordan vet jeg hvilke tabeller som sitter?', a: 'Lag et blandet ark med alle tabellene og rett med fasiten. Stykkene med feil viser hvilke tabeller som trenger mer øving. Lag så et nytt ark med bare dem.' },
    ],
  },

  '/gangetabell/3-trinn/': {
    tittel: 'Gangetabell 3. trinn – oppgaveark med fasit',
    beskrivelse: 'Gratis gangetabell-ark for 3. trinn med fasit. Starter med 1- til 5-gangen og 10-gangen. Velg tabeller og antall oppgaver, og lag nytt ark.',
    h1: 'Gangetabell for 3. trinn',
    ingress: 'Et ark med gangestykker for elever som er i gang med multiplikasjon. Arket starter med 1- til 5-gangen og 10-gangen, og du kan legge til eller ta bort tabeller.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Eleven regner gangestykker som 4 · 3 = __ og skriver svaret på linjen. Vil du at eleven skal lære én tabell om gangen, velger du typen «rekke». Da står 3-gangen i rekkefølge: 1 · 3, 2 · 3, 3 · 3 og så videre. Når rekken sitter, går du over til «blandet».',
          'I læreplanen etter 3. trinn står det at elevene skal beskrive og utforske multiplikasjon ved telling og gruppering. Arket er mengdetrening, så det fungerer best når eleven allerede har sett hva gangestykkene betyr.',
        ],
      },
      {
        h: 'Gi gangestykket et bilde',
        p: [
          'Les 4 · 3 som «4 grupper med 3 i hver». La eleven tegne fire ringer med tre prikker i, eller legge klosser. Da blir det tydelig hvorfor svaret er 12 og ikke 7. En vanlig feil i starten er nettopp å legge sammen tallene i stedet for å gange dem.',
          'Snakk også om at 4 · 3 og 3 · 4 gir samme svar, selv om bildet ser ulikt ut. 10-gangen og 5-gangen henger sammen: 5 · 6 er halvparten av 10 · 6.',
        ],
      },
      {
        h: 'Tilpass arket',
        p: [
          'Elever som strever, kan få 20 oppgaver med bare 2-, 5- og 10-gangen. Elever som er klare for mer, kan få 40 oppgaver med flere tabeller. Med «Lag nytt ark» får alle samme type ark, men ulike stykker.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva betyr prikken i 4 · 3?', a: 'Prikken er gangetegnet som brukes i norsk skole. 4 · 3 leses «fire ganger tre». Tegnet × betyr det samme.' },
      { q: 'Bør barnet pugge gangetabellen?', a: 'Først må barnet forstå hva gange betyr. Etter hvert er det en stor fordel å kunne svarene uten å telle, og da hjelper kort, jevnlig øving.' },
    ],
  },

  '/gangetabell/4-trinn/': {
    tittel: 'Gangetabell 4. trinn – manglende faktor og fasit',
    beskrivelse: 'Gratis gangetabell-ark for 4. trinn med fasit. Oppgaver med manglende faktor som 7 · __ = 42, alle tabeller fra 1 til 10. Lag nytt ark når du vil.',
    h1: 'Gangetabell for 4. trinn',
    ingress: 'Arket har gangestykker der den ene faktoren mangler, for eksempel 7 · __ = 42. Alle tabellene fra 1 til 10 er med.',
    avsnitt: [
      {
        h: 'Hvorfor manglende faktor?',
        p: [
          'Når eleven skal finne tallet som mangler i 7 · __ = 42, må hun eller han tenke «hvor mange sjuere er det i 42?». Det er akkurat det samme spørsmålet som 42 : 7. Oppgavetypen er derfor en god overgang til divisjon. I læreplanen etter 4. trinn står det at elevene skal utforske og forklare sammenhenger mellom de fire regneartene.',
          'Oppgavene viser også om eleven kan gangetabellen begge veier, ikke bare som en remse.',
        ],
      },
      {
        h: 'Typiske feil',
        p: [
          'Noen skriver svaret på hele stykket i ruta, altså 42, eller trekker fra og skriver 35. Be eleven lese stykket høyt med tallet sitt på plass: «7 ganger 6 er 42». Da hører de fleste selv om det stemmer.',
          '6-, 7- og 8-gangen blandes lett, særlig 7 · 8 = 56 og 6 · 9 = 54. Når fasiten viser at de samme stykkene går igjen som feil, kan du lage et nytt ark med bare de tabellene.',
        ],
      },
      {
        h: 'Flere måter å bruke arket på',
        p: [
          'Bytt til «blandet» når du vil ha vanlige gangestykker, eller til «rutenett» for elever som trenger oversikt over hele tabellen. Et ark med 20 oppgaver passer som oppvarming i starten av timen, mens 60 oppgaver kan være en lengre økt eller lekse.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva er forskjellen på «blandet» og «mangler»?', a: 'På «blandet» skal eleven finne svaret, som i 7 · 6 = __. På «mangler» er svaret gitt, og eleven skal finne den ene faktoren, som i 7 · __ = 42.' },
      { q: 'Skal 4. trinn kunne hele gangetabellen?', a: 'Læreplanen sier ikke at en bestemt tabell skal pugges innen et bestemt trinn. Det er likevel en stor fordel å kunne hele tabellen før divisjon og brøk for alvor står på planen.' },
    ],
  },

  '/gangetabell/plakat/': {
    tittel: 'Gangetabellen som plakat – skriv ut gratis',
    beskrivelse: 'Gratis gangetabell-plakat fra 1 til 10 i A4 som du skriver ut og henger opp. Fin støtte i klasserommet og ved lekseplassen, med tips til bruk.',
    h1: 'Gangetabellen som plakat',
    ingress: 'En plakat med hele gangetabellen fra 1 · 1 til 10 · 10. Heng den opp i klasserommet eller ved lekseplassen hjemme.',
    avsnitt: [
      {
        h: 'Mer enn en jukselapp',
        p: [
          'En plakat med gangetabellen er en støtte mens eleven lærer, ikke en snarvei. Elever som bruker lang tid på å telle seg fram til 6 · 7, får overskudd til å tenke på selve oppgaven når de kan slå opp svaret. Etter hvert slår de opp sjeldnere.',
        ],
      },
      {
        h: 'Let etter mønstre',
        p: [
          'Bruk plakaten til å snakke om mønstre. Svarene i 5-gangen slutter på 0 eller 5. Svarene i 2-, 4-, 6-, 8- og 10-gangen er alltid partall. Tverrsummen av svarene i 9-gangen opp til 9 · 10 er 9: 18 gir 1 + 8, og 27 gir 2 + 7.',
          'Se på diagonalen fra 1 · 1 til 10 · 10. Der står kvadrattallene 1, 4, 9, 16 og så videre. Tallene på hver side av diagonalen er speilbilder av hverandre, fordi 3 · 8 er det samme som 8 · 3. Når eleven oppdager dette, krymper gangetabellen til nesten det halve.',
        ],
      },
      {
        h: 'Fra plakat til hukommelse',
        p: [
          'La eleven fargelegge de stykkene som sitter, på en egen utskrift. Det gir en oversikt over hva som gjenstår. Når de fleste rutene er farget, kan du lage et ark av typen «rutenett» på denne siden: et tomt gangeskjema der eleven fyller inn fra hukommelsen og etterpå sjekker mot plakaten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Er det juks å bruke plakaten?', a: 'Nei, ikke mens tabellen læres. Målet er at eleven skal trenge plakaten mindre og mindre. Ta den gjerne bort ved korte prøver.' },
      { q: 'Hvorfor slutter plakaten på 10 · 10?', a: 'Gangetabellen fra 1 til 10 er det elevene trenger å kunne utenat. Større stykker regnes ut med strategier, for eksempel 12 · 4 = 10 · 4 + 2 · 4.' },
    ],
  },

  // ---------- PLUSS OG MINUS ----------
  '/pluss-og-minus/': {
    tittel: 'Pluss og minus – oppgaveark med fasit',
    beskrivelse: 'Gratis pluss- og minusark med fasit for 1.–5. trinn. Velg tallområde fra 0–10 til 0–10 000, med eller uten tierovergang, liggende eller i oppstilling.',
    h1: 'Pluss og minus – ark til utskrift',
    ingress: 'Lag oppgaveark med addisjon og subtraksjon for 1. til 5. trinn. Du velger tallområde, regneart, tierovergang og om stykkene skal stå på linje eller i oppstilling.',
    avsnitt: [
      {
        h: 'Hva kan du velge?',
        p: [
          'Tallområdet følger trinnet: 0–10 i 1. trinn, 0–20 i 2. trinn, 0–100 i 3. trinn, 0–1000 i 4. trinn og 0–10 000 i 5. trinn. Du kan velge bare pluss, bare minus eller begge deler. Svarene blir aldri negative.',
          'Tierovergang kan være «uten», «med» eller «blandet». Med tierovergang betyr at eleven må gå over en tier minst ett sted, altså bruke mente i pluss eller veksling i minus. Fra 4. trinn står stykkene i oppstilling som standard, men du kan alltid velge liggende stykker.',
        ],
      },
      {
        h: 'Arkene for hvert trinn',
        p: [
          'Arket for 1. trinn har små stykker innenfor 0–10. Arket for 2. trinn går til 20 uten tierovergang, og et eget ark trener tierovergang i det samme tallområdet. Arket for 3. trinn tar for seg tallene opp til 100, og arket for 4. trinn har tresifrede tall i oppstilling med mente og veksling.',
        ],
      },
      {
        h: 'Strategier før fart',
        p: [
          'Etter 2. trinn skal elevene kunne bruke addisjon og subtraksjon til å lage og løse problemer fra lek og hverdag. Etter 3. trinn skal de bruke hensiktsmessige strategier og forklare sammenhengen mellom addisjon og subtraksjon. Spør derfor gjerne «hvordan tenkte du?» når du retter. Svaret sier ofte mer enn om stykket ble riktig.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva betyr tierovergang?', a: 'Det er når regnestykket går over en hel tier, som i 8 + 5 = 13 eller 13 – 5 = 8. I større tall heter det mente når du legger sammen, og veksling når du trekker fra.' },
      { q: 'Kan svaret bli et negativt tall?', a: 'Nei. Arkene lager bare minusstykker der det minste tallet trekkes fra det største.' },
    ],
  },

  '/pluss-og-minus/1-trinn/': {
    tittel: 'Pluss og minus 1. trinn – regneark 0–10 med fasit',
    beskrivelse: 'Gratis regneark for 1. trinn med pluss og minus i tallområdet 0–10. Med fasit, og du kan lage et nytt ark med andre stykker hver gang.',
    h1: 'Pluss og minus for 1. trinn',
    ingress: 'Små pluss- og minusstykker der både tallene og svarene ligger mellom 0 og 10. Arket passer når eleven har begynt å regne og trenger jevn øving.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Stykkene er av typen 4 + 3 = __ og 9 – 5 = __. Du kan velge bare pluss, bare minus eller begge. Begynn gjerne med bare pluss, og ta inn minus når eleven er trygg.',
          'Mange elever teller på fingrene i starten, og det er helt i orden. Et godt neste steg er å telle videre fra det største tallet. I 3 + 5 kan eleven starte på 5 og telle «6, 7, 8» i stedet for å begynne på 1.',
        ],
      },
      {
        h: 'Vanlige utfordringer',
        p: [
          'En typisk feil er å telle med starttallet: «5, 6, 7» blir 7 i stedet for 8 i 5 + 3. Vis tellingen som hopp på en tallinje, så ser eleven at det er hoppene som telles.',
          'Likhetstegnet kan også skape trøbbel. Mange tror at = betyr «nå kommer svaret». I læreplanen etter 2. trinn står det at elevene skal bruke likhetstegnet som et tegn på at to uttrykk har samme verdi. Si gjerne «4 + 3 er like mye som 7».',
        ],
      },
      {
        h: 'Tips for skole og hjem',
        p: [
          'Tallvennene til 10 (1 og 9, 2 og 8, 3 og 7 og så videre) er gull verdt senere. Øv på dem muntlig, med fingrene eller med ti knapper. Les gjerne oppgaveteksten høyt, siden ikke alle i 1. trinn leser selv ennå. Ti stykker om dagen er nok.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Er det greit at barnet teller på fingrene?', a: 'Ja. Fingrene er et godt hjelpemiddel. Etter hvert kan du oppmuntre barnet til å se tallene som mengder, for eksempel at fem fingre på én hånd og to på den andre er sju.' },
      { q: 'Hvor mange stykker bør et barn i 1. trinn regne?', a: 'Korte økter er best. Ti stykker med god konsentrasjon gir mer enn et helt ark som blir slitsomt.' },
    ],
  },

  '/pluss-og-minus/2-trinn/': {
    tittel: 'Pluss og minus 2. trinn – 0–20 med fasit',
    beskrivelse: 'Gratis pluss- og minusark for 2. trinn i tallområdet 0–20, uten tierovergang. Med fasit. Bytt til med tierovergang når eleven er klar for det.',
    h1: 'Pluss og minus for 2. trinn',
    ingress: 'Regnestykker med tall opp til 20, uten tierovergang. Eleven øver på tallene mellom 10 og 20 før det blir tid for å gå over tieren.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Stykkene er av typen 12 + 5 = __ og 18 – 6 = __. Fordi det ikke er tierovergang, endres bare eneren. Eleven kan bruke det hun eller han kan fra 0–10: 2 + 5 = 7, så 12 + 5 = 17. Snakk om dette mønsteret, så blir det tydelig hvorfor tallområdet til 20 ikke er dobbelt så vanskelig.',
        ],
      },
      {
        h: 'Strategier å snakke om',
        p: [
          'Dobling er en nyttig strategi: 6 + 6 = 12 og 7 + 7 = 14. Da blir 6 + 7 «nesten dobbelt», altså 13. Minus kan løses ved å telle opp: i 17 – 14 er det lettere å tenke «fra 14 til 17 er det 3» enn å telle bakover.',
          'I læreplanen etter 2. trinn står det at elevene skal kunne bruke addisjon og subtraksjon til å lage og løse problemer fra lek og hverdag. La eleven gjerne lage en liten fortelling til et av stykkene på arket.',
        ],
      },
      {
        h: 'Neste steg',
        p: [
          'Når arket uten tierovergang går greit, endrer du valget til «med» eller «blandet». Da kommer stykker som 8 + 5 og 14 – 6. Med «Lag nytt ark» får du nye stykker med samme innstillinger, så eleven kan øve flere dager uten å møte de samme stykkene. Fasiten gjør at eleven kan rette selv.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor starte uten tierovergang?', a: 'Stykker uten tierovergang bygger på det eleven allerede kan i 0–10. Det gir trygghet før det vanskeligere steget over tieren.' },
      { q: 'Hvordan øver vi på tiervenner hjemme?', a: 'Si et tall, så sier barnet hvor mye som mangler til 10. Det tar et minutt i bilen eller ved middagsbordet.' },
    ],
  },

  '/pluss-og-minus/3-trinn/': {
    tittel: 'Pluss og minus 3. trinn – tall til 100 med fasit',
    beskrivelse: 'Gratis matteark for 3. trinn med pluss og minus i tallområdet 0–100. Med fasit. Velg med eller uten tierovergang og lag nytt ark når du trenger.',
    h1: 'Pluss og minus for 3. trinn',
    ingress: 'Et ark med pluss og minus i tallområdet 0–100. Du velger selv om stykkene skal ha tierovergang eller ikke, eller en blanding.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Stykkene er av typen 47 + 25 = __ og 52 – 28 = __. I 3. trinn regner de fleste slike stykker i hodet eller med egne notater, og arket viser derfor liggende stykker. I læreplanen etter 3. trinn står det at elevene skal bruke hensiktsmessige strategier for addisjon og subtraksjon og utforske sammenhengen mellom dem.',
        ],
      },
      {
        h: 'Strategier å snakke om',
        p: [
          'Del opp i tiere og enere: 47 + 25 er 40 + 20 = 60 og 7 + 5 = 12, til sammen 72. Hopp på en tom tallinje: fra 47 hopper du 20 til 67, og så 5 til 72. Bruk runde tall: 39 + 26 er det samme som 40 + 25.',
          'Minus kan løses ved å telle opp. I 52 – 28 går du fra 28 til 30 (2) og fra 30 til 52 (22). Svaret er 24. Etterpå kan eleven kontrollere med pluss: 24 + 28 = 52.',
        ],
      },
      {
        h: 'En vanlig feil',
        p: [
          'Mange regner minus siffer for siffer og trekker alltid det minste sifferet fra det største. Da blir 52 – 28 til 36, fordi 5 – 2 = 3 og 8 – 2 = 6. Spør om svaret er rimelig: Kan 52 – 28 bli mer enn 30? Et overslag avslører feilen raskt.',
          'Gi elevene ulike ark med «Lag nytt ark», og la dem rette med fasiten. Når mange av feilene er minusstykker med tierovergang, vet du hva neste økt bør handle om.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Skal eleven stille opp stykkene?', a: 'I 3. trinn er det lurt å bygge gode hoderegningsstrategier først. Oppstilling er standard fra 4. trinn, men du kan velge det her også.' },
    ],
  },

  '/pluss-og-minus/4-trinn/': {
    tittel: 'Pluss og minus 4. trinn – oppstilling med fasit',
    beskrivelse: 'Gratis ark for 4. trinn med pluss og minus i oppstilling, tall opp til 1000, med mente og veksling. Med fasit, og et nytt ark når du vil.',
    h1: 'Pluss og minus i oppstilling for 4. trinn',
    ingress: 'Tresifrede pluss- og minusstykker i oppstilling, i tallområdet 0–1000. Arket øver på mente og veksling, og du kan velge liggende stykker i stedet.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Stykkene står i oppstilling med enere under enere, tiere under tiere og hundrere under hundrere. Med tierovergang må eleven bruke mente i pluss, for eksempel når 7 + 6 enere blir 13, og veksling i minus, når det ikke er nok enere eller tiere å trekke fra.',
          'Hardest er veksling over null, som i 403 – 167. Det er ingen tiere å veksle fra, så eleven må veksle en hundrer til ti tiere og så en tier til ti enere. Svaret er 236.',
        ],
      },
      {
        h: 'Overslag og kontroll',
        p: [
          'I læreplanen etter 4. trinn står det at elevene skal estimere, gjøre overslag og vurdere egne løsninger. Be eleven tenke et overslag før stykket regnes: 403 – 167 er omtrent 400 – 170, altså litt over 230.',
          'Minusstykker kan kontrolleres med pluss: 236 + 167 skal bli 403. Det gir eleven en måte å sjekke seg selv på før fasiten kommer fram. Et svar som ligger langt fra overslaget, er et tegn på at noe gikk galt i vekslingen.',
        ],
      },
      {
        h: 'Tips til bruk',
        p: [
          'Velg «uten» tierovergang for å øve på selve oppstillingen, og gå videre til «med» når den sitter. Ruteark ved siden av hjelper elever som sliter med å holde sifrene i riktig kolonne. Velg liggende stykker når du vil trene hoderegning med de samme tallene.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva er mente og veksling?', a: 'Mente er tieren (eller hundreren) du flytter videre når en kolonne blir 10 eller mer i pluss. Veksling er når du gjør om en tier til ti enere, eller en hundrer til ti tiere, for å kunne trekke fra.' },
      { q: 'Hvor skal minnetallet skrives?', a: 'Det vanlige er å skrive det lite over neste kolonne. Følg gjerne den måten skolen bruker, så barnet ikke møter to ulike oppsett.' },
    ],
  },

  '/pluss-og-minus/tierovergang/': {
    tittel: 'Pluss og minus med tierovergang – ark med fasit',
    beskrivelse: 'Gratis oppgaveark med pluss og minus med tierovergang i tallområdet 0–20, som 8 + 5 og 13 – 6. Med fasit, og lag nytt ark så ofte du vil.',
    h1: 'Pluss og minus med tierovergang',
    ingress: 'Et ark der hvert stykke går over tieren, for eksempel 8 + 5 og 13 – 6. Arket er laget for 2. trinn, men passer for alle som trenger mer øving på tierovergang.',
    avsnitt: [
      {
        h: 'Hva er tierovergang?',
        p: [
          'Tierovergang betyr at regnestykket krysser en hel tier. I 8 + 5 må eleven gå forbi 10 for å komme til 13. I 13 – 6 må eleven gå ned forbi 10 for å komme til 7. Stykker som 12 + 5, der bare eneren endres, har ingen tierovergang.',
        ],
      },
      {
        h: 'Strategien via 10',
        p: [
          'Den viktigste strategien er å regne via 10. I 8 + 5 deler eleven femmeren i 2 og 3: 8 + 2 = 10, og 10 + 3 = 13. I 13 – 6 går det den andre veien: 13 – 3 = 10, og 10 – 3 = 7. Strategien krever at eleven kan tiervennene, altså parene som blir 10. Øv på dem først hvis stykkene går tregt.',
          'Mange elever teller én og én på fingrene i lang tid. Det gir riktig svar, men tar tid og gir lite overskudd. Legg fram ti klosser i én farge og resten i en annen, så eleven ser tieren.',
        ],
      },
      {
        h: 'Større tall',
        p: [
          'Velger du 3. eller 4. trinn sammen med «med», får du tierovergang i større tall. Da heter det mente i pluss og veksling i minus. Strategien er den samme: fyll opp til en hel tier eller hundrer. Fasiten følger med, så eleven kan rette arket selv.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor er minus med tierovergang så vanskelig?', a: 'Eleven må dele opp tallet som skal trekkes fra, og samtidig holde styr på hvor langt det er ned til 10. Det hjelper å tegne stykket som hopp på en tallinje.' },
      { q: 'Hva er tiervenner?', a: 'Tallpar som til sammen blir 10: 1 og 9, 2 og 8, 3 og 7, 4 og 6, 5 og 5.' },
    ],
  },

  // ---------- DIVISJON ----------
  '/divisjon/': {
    tittel: 'Divisjon – oppgaveark med fasit for 4.–7. trinn',
    beskrivelse: 'Gratis divisjonsark med fasit for 4.–7. trinn: divisjon i gangetabellen, divisjon med rest og store tall med og uten rest. Lag nytt ark når du vil.',
    h1: 'Divisjon – ark til utskrift',
    ingress: 'Lag oppgaveark i divisjon fra de første stykkene i gangetabellen til store tall med rest. Alle arkene har fasit.',
    avsnitt: [
      {
        h: 'Fire typer divisjonsark',
        p: [
          '«Tabell» gir divisjon innenfor gangetabellen uten rest, som 42 : 7. «Rest» gir et tosifret tall delt på et ensifret tall, der det blir noe til overs: 47 : 6 = 7 rest 5. «Store» gir tre- og firesifrede tall delt på et ensifret tall, uten rest. «Store med rest» er det samme, men med rest.',
          'I norsk skole skrives divisjon med kolon, og det er det tegnet arkene bruker.',
        ],
      },
      {
        h: 'Fra 4. til 7. trinn',
        p: [
          'Arket for 4. trinn har divisjon i gangetabellen og er en naturlig fortsettelse av gangetabell-øvingen. Arket for 5. trinn introduserer rest. Arket for 6. trinn har store tall uten rest, og arket for 7. trinn har store tall med rest. Du kan alltid velge en annen type enn den som er forhåndsvalgt.',
        ],
      },
      {
        h: 'Forstå før du regner',
        p: [
          'I læreplanen etter 4. trinn står det at elevene skal utforske og bruke målings- og delingsdivisjon i praktiske situasjoner og kunne forklare ulike divisjonsstrategier. Delingsdivisjon er når 12 kjeks deles likt på 4 barn, og spørsmålet er hvor mange hver får (12 : 4 = 3). Målingsdivisjon er når 12 kjeks legges i poser med 3 i hver, og spørsmålet er hvor mange poser det blir (12 : 3 = 4). Snakk om begge, så forstår elevene mer enn bare regnemåten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor brukes : og ikke ÷?', a: 'Kolon er det vanlige divisjonstegnet i norsk skole. Tegnet ÷ har tradisjonelt vært brukt for minus i Norge og kan derfor skape forvirring.' },
      { q: 'Hva må eleven kunne før divisjon?', a: 'Gangetabellen. Den som vet at 6 · 7 = 42, vet også at 42 : 7 = 6.' },
    ],
  },

  '/divisjon/4-trinn/': {
    tittel: 'Divisjon 4. trinn – gangetabellen baklengs',
    beskrivelse: 'Gratis divisjonsark for 4. trinn med 24 stykker i gangetabellen, som 42 : 7, uten rest. Med fasit, og et nytt ark med andre stykker når du vil.',
    h1: 'Divisjon for 4. trinn',
    ingress: 'Et ark med 24 divisjonsstykker innenfor gangetabellen, for eksempel 42 : 7 = __. Alle stykkene går opp, så det blir ingen rest.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Hvert stykke er et gangestykke snudd baklengs. 42 : 7 spør «hva må 7 ganges med for å bli 42?». Elever som kan gangetabellen, har dermed svarene i hodet allerede. De som ikke kan den ennå, vil trenge mer tid, og da er det lurt å øve videre på gangetabell-arket med manglende faktor.',
        ],
      },
      {
        h: 'To måter å tenke divisjon på',
        p: [
          'I læreplanen etter 4. trinn står det at elevene skal utforske og bruke målings- og delingsdivisjon. Ta et stykke fra arket og lag to fortellinger. Deling: «24 klistremerker deles likt på 6 barn. Hvor mange får hver?» Måling: «24 klistremerker, 6 på hvert ark. Hvor mange ark blir det?» Svaret er 4 i begge, men handlingen er forskjellig.',
          'La gjerne elevene vise stykket med klosser eller en tegning før de skriver svaret. Det gjør det lettere å forklare hvordan de tenkte.',
        ],
      },
      {
        h: 'Typiske feil',
        p: [
          'Noen bytter om tallene og leser 42 : 7 som «7 delt på 42». Les stykket høyt sammen: «42 delt på 7». Stykker med 1 kan også forvirre. 8 : 1 = 8, men 8 : 8 = 1. Vis det med åtte klosser.',
          'Rett gjerne halve arket sammen og la eleven rette resten med fasiten. Da ser du raskt hvem som må tilbake til gangetabellen.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor 24 stykker?', a: '24 stykker passer til en kort økt. Du kan velge et annet antall oppgaver.' },
      { q: 'Når kommer divisjon med rest?', a: 'Arket for 5. trinn har divisjon med rest. Du kan også velge typen «rest» her hvis eleven er klar.' },
    ],
  },

  '/divisjon/5-trinn/': {
    tittel: 'Divisjon med rest 5. trinn – ark med fasit',
    beskrivelse: 'Gratis ark i divisjon med rest for 5. trinn: tosifret tall delt på ensifret tall, som 47 : 6 = 7 rest 5. Med fasit og nytt ark når du vil.',
    h1: 'Divisjon med rest for 5. trinn',
    ingress: 'Et ark der eleven deler et tosifret tall på et ensifret tall og finner både svaret og resten, for eksempel 47 : 6 = 7 rest 5.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Eleven må finne det største tallet i gangetabellen som får plass. I 47 : 6 er 6 · 7 = 42 det nærmeste uten å gå over. Resten er det som blir til overs: 47 – 42 = 5. Svaret skrives «7 rest 5», og fasiten bruker samme form.',
        ],
      },
      {
        h: 'Kontroller resten',
        p: [
          'Resten må alltid være mindre enn tallet det deles på. Hvis eleven får 47 : 6 = 6 rest 11, får 6 plass én gang til. Lær eleven å kontrollere svaret: 6 · 7 + 5 skal bli 47. Den kontrollen viser også sammenhengen mellom divisjon og multiplikasjon.',
        ],
      },
      {
        h: 'Hva betyr resten i virkeligheten?',
        p: [
          'Snakk om situasjoner der resten betyr noe ulikt. 30 elever skal kjøre bil, 4 i hver bil: 30 : 4 = 7 rest 2, så det trengs 8 biler. 30 kroner fordelt på 4 barn gir 7 kroner hver og 2 kroner til overs. Samme regnestykke, ulike svar i praksis.',
          'Det gir god trening i å vurdere om svaret er fornuftig. Senere kan resten skrives som brøk eller desimaltall, men det er ikke en del av dette arket.',
        ],
      },
      {
        h: 'Tilpass arket',
        p: [
          'Elever som strever, kan få et ark av typen «tabell» uten rest først. Med «Lag nytt ark» kan hver elev få et eget ark, og fasiten kan ligge fremme så elevene retter selv.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Kan svaret skrives som desimaltall i stedet?', a: 'Ikke på dette arket. Her skrives resten som et helt tall, for eksempel «7 rest 5».' },
    ],
  },

  '/divisjon/6-trinn/': {
    tittel: 'Divisjon 6. trinn – store tall med fasit',
    beskrivelse: 'Gratis divisjonsark for 6. trinn: tre- og firesifrede tall delt på ensifrede tall, alle uten rest. Med fasit, og et nytt ark når du vil.',
    h1: 'Divisjon med store tall for 6. trinn',
    ingress: 'Et ark med tre- og firesifrede tall som deles på et ensifret tall, for eksempel 852 : 4. Alle stykkene går opp.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Når tallene blir store, holder det ikke å kunne gangetabellen. Eleven må dele opp tallet og ta én del om gangen. Det kan gjøres i oppstilling slik skolen har lært elevene, eller ved å dele opp tallet i hodet: 852 : 4 = 800 : 4 + 52 : 4 = 200 + 13 = 213.',
          'I læreplanen etter 4. trinn står det at elevene skal kunne bruke og forklare ulike divisjonsstrategier. Det er nyttig å ha mer enn én måte å gå fram på, også i 6. trinn.',
        ],
      },
      {
        h: 'Nuller i svaret',
        p: [
          'En vanlig feil er å glemme nullen i svaret. I 824 : 4 går 4 i 8 to ganger, men 4 går ikke i 2. Da må det stå en null på tierplassen før eleven deler 24 på 4. Riktig svar er 206, ikke 26.',
          'Et overslag avslører feilen: 824 : 4 er omtrent 800 : 4 = 200. Et svar på 26 er altfor lite.',
        ],
      },
      {
        h: 'Kontroll og tilpasning',
        p: [
          'Svaret kan kontrolleres med gange: 206 · 4 skal bli 824. La elevene gjøre kontrollen før de ser i fasiten. Elever som trenger mer øving på de enkle stykkene, kan få arket med rest for 5. trinn først, og de som er klare for mer, kan gå videre til store tall med rest.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvilken oppstilling skal barnet bruke?', a: 'Bruk den metoden skolen har lært barnet, så det ikke møter to ulike oppsett. Spør gjerne læreren hvis du er usikker.' },
      { q: 'Hvorfor er alle stykkene uten rest?', a: 'Da kan eleven konsentrere seg om framgangsmåten. Arket for 7. trinn har store tall med rest.' },
    ],
  },

  '/divisjon/7-trinn/': {
    tittel: 'Divisjon 7. trinn – store tall med rest og fasit',
    beskrivelse: 'Gratis divisjonsark for 7. trinn: tre- og firesifrede tall delt på ensifrede tall, med rest. Fasit følger med, og du kan lage nytt ark når du vil.',
    h1: 'Divisjon med store tall og rest for 7. trinn',
    ingress: 'Et ark der store tall deles på et ensifret tall og det blir en rest, for eksempel 1357 : 6 = 226 rest 1.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Arket samler det elevene har lært om divisjon: å dele opp store tall, holde orden på plassverdiene og finne resten til slutt. Når eleven har delt så langt det går, er resten det som ikke kan deles mer uten å gå over til desimaltall. I 1357 : 6 blir det 226, fordi 226 · 6 = 1356, og resten er 1.',
        ],
      },
      {
        h: 'Kontroller svaret',
        p: [
          'Lær elevene en fast kontroll: svaret ganger tallet det deles på, pluss resten, skal bli tallet du startet med. 226 · 6 + 1 = 1357. Samtidig sjekker de at resten er mindre enn tallet det deles på. En rest på 7 når det deles på 6, betyr at svaret er for lite.',
          'Et overslag før utregningen hjelper også: 1200 : 6 = 200, så svaret må bli litt over 200.',
        ],
      },
      {
        h: 'Videre fra resten',
        p: [
          'I 7. trinn er det naturlig å snakke om at resten kan skrives på andre måter. 1357 : 6 er 226 og 1/6, og en sjettedel er litt mer enn 0,16. I læreplanen etter 7. trinn står det at elevene skal kunne oversette mellom brøk, desimaltall og prosent. Arket gir svar med rest, så denne samtalen kan du ta muntlig eller på tavla.',
          'Elever som trenger en enklere start, kan få store tall uten rest. Med «Lag nytt ark» får alle egne stykker.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva gjør vi hvis barnet har lært en annen oppstilling enn vi lærte?', a: 'Følg skolens metode. Det viktigste er at barnet forstår hva hvert steg betyr og kan kontrollere svaret med gange.' },
      { q: 'Hvordan skrives svaret i fasiten?', a: 'Som et helt tall og en rest, for eksempel «226 rest 1».' },
    ],
  },

  // ---------- BRØK ----------
  '/brok/': {
    tittel: 'Brøk – oppgaveark med fasit for 3.–7. trinn',
    beskrivelse: 'Gratis brøkark med fasit: skraverte figurer, sammenligne, brøk av en mengde, utvide, forkorte, blandet tall, ulike nevnere og brøk som desimaltall.',
    h1: 'Brøk – ark til utskrift',
    ingress: 'Lag brøkark fra de første figurene med skraverte deler til regning med ulike nevnere og brøk som desimaltall og prosent. Fasiten viser brøkene forkortet så langt det går.',
    avsnitt: [
      {
        h: 'Ti oppgavetyper',
        p: [
          'Arkene kan inneholde disse typene: skriv brøken til en figur med skraverte deler, sammenlign to brøker med <, > eller =, finn en brøkdel av en mengde (som 1/4 av 20), legg sammen og trekk fra med lik nevner, utvid brøker (2/3 = __/12), forkort brøker, gjør om mellom uekte brøk og blandet tall, legg sammen og trekk fra med ulik nevner, gang et helt tall med en brøk, og gjør om brøk til desimaltall og prosent.',
        ],
      },
      {
        h: 'Progresjon fra trinn til trinn',
        p: [
          'Velger du 3. trinn, får du figurer der eleven skriver brøken. Arket for 4. trinn legger til sammenligning med lik nevner og stambrøker av en mengde. Arket for 5. trinn har addisjon med lik nevner, utviding og brøkdeler av mengder. Arket for 6. trinn har forkorting, blandet tall og gange. Arket for 7. trinn har ulike nevnere, desimaltall og prosent.',
        ],
      },
      {
        h: 'Brøk i læreplanen',
        p: [
          'I læreplanen etter 5. trinn står det at elevene skal kunne beskrive brøk som del av en hel, som del av en mengde, som en divisjon og som tall på tallinjen. Etter 7. trinn skal de kunne oversette mellom brøk, desimaltall og prosent. Arkene gir mengdetrening, men brøkforståelse bygges også med konkreter: brett papir, del en pizza eller fordel knapper i like store grupper.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva er teller og nevner?', a: 'I 3/4 er 3 telleren og 4 nevneren. Nevneren forteller hvor mange like store deler det hele er delt i, og telleren hvor mange av delene vi har.' },
      { q: 'Hvorfor er 1/8 mindre enn 1/4?', a: 'Når det hele deles i flere deler, blir hver del mindre. Mange barn tror at 1/8 er størst fordi 8 er større enn 4.' },
    ],
  },

  '/brok/4-trinn/': {
    tittel: 'Brøk 4. trinn – oppgaveark med fasit',
    beskrivelse: 'Gratis brøkark for 4. trinn med fasit: skriv brøken til figuren, sammenlign brøker med lik nevner og finn 1/4 av 20. Lag nytt ark når du vil.',
    h1: 'Brøk for 4. trinn',
    ingress: 'Et første brøkark med tre oppgavetyper: skriv brøken til en figur, sammenlign brøker med lik nevner og finn en stambrøk av en mengde.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'På figuroppgavene teller eleven hvor mange deler figuren er delt i (nevneren) og hvor mange som er skravert (telleren). På sammenligningsoppgavene har brøkene samme nevner, så eleven kan sammenligne tellerne: 3/5 er større enn 2/5. På mengdeoppgavene skal eleven finne for eksempel 1/4 av 20. Det betyr å dele 20 i fire like store grupper, og svaret er 5.',
        ],
      },
      {
        h: 'En forberedelse til 5. trinn',
        p: [
          'I læreplanen kommer brøk inn i kompetansemålene etter 5. trinn. Der står det blant annet at elevene skal kunne beskrive brøk som del av en hel og som del av en mengde. Arket for 4. trinn er derfor en rolig start som bygger grunnlaget for det.',
        ],
      },
      {
        h: 'Vanlige misforståelser',
        p: [
          'Delene må være like store. En figur delt i tre ulike biter er ikke delt i tredjedeler. Vis gjerne en sjokoladeplate eller et brettet ark, der det er lett å se at delene er like.',
          'Mange tror at en brøk med større nevner er større, altså at 1/6 er mer enn 1/3. Spør: «Vil du heller ha en tredjedel eller en sjettedel av pizzaen?» De fleste svarer riktig når det handler om mat.',
          'Tips: La eleven fargelegge figurene etter å ha skrevet brøken, og si brøken høyt: «tre femdeler».',
        ],
      },
    ],
    sporsmal: [
      { q: 'Er brøk pensum i 4. trinn?', a: 'Brøk står i kompetansemålene etter 5. trinn. Mange elever har likevel godt av å møte enkle brøker tidligere, gjerne gjennom deling av mat og ting i hverdagen.' },
      { q: 'Hva er en stambrøk?', a: 'En brøk med 1 i telleren, for eksempel 1/2, 1/3 og 1/4.' },
    ],
  },

  '/brok/5-trinn/': {
    tittel: 'Brøk 5. trinn – oppgaver med fasit',
    beskrivelse: 'Gratis brøkoppgaver for 5. trinn med fasit: pluss og minus med lik nevner, utvide brøker, brøkdel av en mengde og sammenligning. Lag nytt ark.',
    h1: 'Brøk for 5. trinn',
    ingress: 'Arket starter med pluss og minus med lik nevner. Du kan også velge oppgaver med utviding, brøkdel av en mengde og sammenligning av brøker.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Når nevneren er lik, legger eleven sammen eller trekker fra tellerne og lar nevneren stå: 2/7 + 3/7 = 5/7. På utvidingsoppgavene ganges teller og nevner med samme tall: 2/3 = 8/12. På mengdeoppgavene kan telleren være større enn 1, for eksempel 3/4 av 20. Da finner eleven først 1/4 av 20, som er 5, og tar det tre ganger: 15.',
        ],
      },
      {
        h: 'Den vanligste feilen',
        p: [
          'Mange legger sammen både tellere og nevnere: 2/7 + 3/7 = 5/14. Bruk en tegning. To sjuendedeler og tre sjuendedeler er fem sjuendedeler, akkurat som to epler og tre epler er fem epler. Delene endrer ikke størrelse fordi vi legger dem sammen.',
          'Si brøkene høyt med ord, «to sjuendedeler pluss tre sjuendedeler», så blir det lettere å se at nevneren forteller hva slags deler det er.',
        ],
      },
      {
        h: 'Hva sier læreplanen?',
        p: [
          'I læreplanen etter 5. trinn står det blant annet at elevene skal kunne beskrive brøk som del av en hel, som del av en mengde, som en divisjon og som tall på tallinjen, og at de skal utvikle strategier for regning med brøk og forklare hvordan de tenker. Be gjerne eleven forklare én oppgave muntlig før arket rettes med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor kan man gange teller og nevner med samme tall?', a: 'Ganger du teller og nevner i 2/3 med 4, deles hver del i fire mindre biter. Du får fire ganger så mange deler, men hver del er bare en firedel så stor. Derfor er 2/3 og 8/12 like mye av det hele.' },
      { q: 'Står svarene forkortet i fasiten?', a: 'Ja, fasiten viser brøkene forkortet så langt det går.' },
    ],
  },

  '/brok/6-trinn/': {
    tittel: 'Brøk 6. trinn – forkorte, blandet tall og fasit',
    beskrivelse: 'Gratis brøkark for 6. trinn med fasit: forkorte, utvide, blandet tall og uekte brøk, helt tall ganger brøk og sammenligning med ulike nevnere.',
    h1: 'Brøk for 6. trinn',
    ingress: 'Et brøkark med forkorting, utviding, blandet tall, gange med helt tall og sammenligning av brøker med ulike nevnere.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Når eleven forkorter, deles teller og nevner på samme tall: 6/8 = 3/4. Ved blandet tall gjør eleven om mellom uekte brøk og blandet tall: 7/4 = 1 3/4, fordi fire firedeler er en hel og det blir tre firedeler til overs. Gangeoppgavene er av typen 3 · 2/5 = 6/5 = 1 1/5.',
          'For å sammenligne brøker med ulike nevnere, som 2/3 og 3/5, må eleven finne en felles nevner. Med femtendedeler blir det 10/15 og 9/15, så 2/3 er størst.',
        ],
      },
      {
        h: 'Typiske feil',
        p: [
          'Når et helt tall ganges med en brøk, ganger mange også nevneren: 3 · 2/5 = 6/15. Spør hva 3 · 2/5 betyr: tre ganger to femdeler, altså 2/5 + 2/5 + 2/5. Da ser eleven at det blir seks femdeler.',
          'Ved forkorting tror noen at brøken blir mindre. Vis at 6/8 og 3/4 dekker like mye av samme figur.',
        ],
      },
      {
        h: 'Tilpass arket',
        p: [
          'Du kan velge én oppgavetype om gangen, for eksempel bare forkorting, eller en blanding. I læreplanen etter 6. trinn står det at elevene skal lage og løse problemer med desimaltall, brøk og prosent og argumentere for egne løsninger. La elevene gjerne forklare hverandre hvorfor et svar stemmer før de bruker fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva er en uekte brøk?', a: 'En brøk der telleren er større enn eller lik nevneren, for eksempel 7/4. Den er like mye som eller mer enn en hel.' },
      { q: 'Hvordan vet barnet at en brøk er forkortet ferdig?', a: 'Når det ikke finnes noe tall større enn 1 som går opp i både teller og nevner.' },
    ],
  },

  '/brok/7-trinn/': {
    tittel: 'Brøk 7. trinn – ulike nevnere, desimal og prosent',
    beskrivelse: 'Gratis brøkoppgaver for 7. trinn med fasit: pluss og minus med ulike nevnere, gange, brøk av mengde, forkorting og brøk som desimaltall og prosent.',
    h1: 'Brøk for 7. trinn',
    ingress: 'Et brøkark med pluss og minus med ulike nevnere, gange med helt tall, brøkdel av en mengde, forkorting og omgjøring til desimaltall og prosent.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Når nevnerne er ulike, må brøkene utvides til en felles nevner før de legges sammen: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. På desimaloppgavene gjør eleven om en brøk til desimaltall og prosent, for eksempel 3/4 = 0,75 = 75 %. Fasiten viser svarene forkortet så langt det går.',
        ],
      },
      {
        h: 'Den klassiske feilen',
        p: [
          'Mange regner 1/2 + 1/3 = 2/5 ved å legge sammen tellere og nevnere. Et raskt overslag viser at det ikke kan stemme: 2/5 er mindre enn 1/2, men vi har lagt noe til en halv. Tegn gjerne brøkene som deler av samme rektangel, så blir behovet for like store deler tydelig.',
        ],
      },
      {
        h: 'Brøk, desimaltall og prosent',
        p: [
          'I læreplanen etter 7. trinn står det at elevene skal kunne oversette mellom brøk, desimaltall og prosent og bruke hensiktsmessige strategier i hoderegning og skriftlig regning med dem. Noen faste par er nyttige å kunne utenat: 1/2 = 0,5 = 50 %, 1/4 = 0,25 = 25 %, 1/5 = 0,2 = 20 % og 1/10 = 0,1 = 10 %.',
          'Gjør det praktisk: Hvor mye er 25 % rabatt på en jakke til 800 kroner? Det er det samme som 1/4 av 800.',
          'Gi elevene hvert sitt ark med «Lag nytt ark», og la dem rette med fasiten. Velg bare én oppgavetype hvis du vil øve målrettet på for eksempel ulike nevnere.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvordan finner man fellesnevner?', a: 'Se etter et tall som begge nevnerne går opp i. For 1/4 og 1/6 kan 12 brukes. Det går også an å gange nevnerne med hverandre, men da kan svaret måtte forkortes.' },
    ],
  },

  // ---------- KLOKKA ----------
  '/klokka/': {
    tittel: 'Klokka – oppgaveark med analog klokke og fasit',
    beskrivelse: 'Gratis klokkeark med fasit for 1.–5. trinn: les av analog klokke, tegn viserne og regn med tid. Fra hele og halve timer til hvert minutt.',
    h1: 'Lære klokka – ark til utskrift',
    ingress: 'Lag oppgaveark med analoge urskiver der eleven leser av klokka eller tegner viserne selv. Fra 5. trinn kommer tidsregning med digitale tider.',
    avsnitt: [
      {
        h: 'Oppgavetyper',
        p: [
          'På «les» står viserne tegnet inn, og eleven skriver hva klokka er. På «tegn» står tiden skrevet, og eleven tegner viserne. «Blandet» har begge deler. «Tid» er tidsregning med digitale 24-timerstider: Hvor lang tid er det fra 13:45 til 15:10? Hva er klokka 40 minutter etter 9:35?',
          'Fasiten viser både slik vi sier tiden og den digitale tiden, for eksempel «ti på halv fire – 3:20 / 15:20».',
        ],
      },
      {
        h: 'Fra 1. til 5. trinn',
        p: [
          'Arket for 1. trinn har hele og halve timer. Arket for 2. trinn legger til kvart over og kvart på. Arket for 3. trinn har hvert femte minutt, med uttrykk som «ti på halv fire». Arket for 4. trinn går ned på hvert minutt. Tidsregningsarket er laget for 5. trinn.',
        ],
      },
      {
        h: 'Klokka i læreplanen',
        p: [
          'I læreplanen etter 2. trinn står det at elevene skal kunne beskrive tid ved hjelp av kalender og analog og digital klokke. Etter 5. trinn skal de kunne lage og løse oppgaver som handler om tid. Klokka læres best når den brukes hver dag: Hva er klokka når friminuttet begynner? Hvor lenge er det til lunsj? Arkene gir den systematiske øvingen i tillegg.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor er klokka så vanskelig på norsk?', a: 'Vi sier tiden ut fra halvtimen. «Halv fire» betyr 3:30, ikke 4:30, og «ti på halv fire» betyr 3:20. Det må læres og øves på.' },
      { q: 'Skal barnet lære analog eller digital klokke først?', a: 'Begge brukes i hverdagen. Den analoge klokka gir et bilde av hvordan tiden går rundt, og fasiten på arkene viser alltid den digitale tiden ved siden av.' },
    ],
  },

  '/klokka/1-trinn/': {
    tittel: 'Klokka 1. trinn – hele og halve timer med fasit',
    beskrivelse: 'Gratis klokkeark for 1. trinn: les av og tegn hele og halve timer på analog klokke. Med fasit som viser både «halv tre» og digital tid.',
    h1: 'Klokka for 1. trinn',
    ingress: 'De første klokkeoppgavene: analoge klokker som viser hele og halve timer. Eleven leser av klokka eller tegner viserne selv.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Når klokka er hel, står den lange viseren rett opp på 12, og den korte viseren peker rett på et tall. Peker den på 3, er klokka tre. Når klokka er halv, står den lange viseren rett ned på 6. Da har den korte viseren kommet halvveis mot neste tall.',
          'Fasiten viser både uttrykket og den digitale tiden, slik at eleven også blir kjent med hvordan tiden ser ut på en digital klokke.',
        ],
      },
      {
        h: 'Halv betyr halvveis til',
        p: [
          'Den største utfordringen i 1. trinn er «halv». Halv tre betyr at det er en halv time igjen til klokka blir tre, altså 2:30. Mange barn tror at halv tre er 3:30. Tegn gjerne en klokke og vis hvordan den korte viseren står mellom 2 og 3, på vei mot 3.',
          'Det hjelper også å skille viserne tydelig: den korte viseren viser timene, den lange viseren viser minuttene. Noen kaller dem lilleviseren og storeviseren.',
        ],
      },
      {
        h: 'Tips for skole og hjem',
        p: [
          'Bruk klokka i hverdagen. Si for eksempel «klokka er halv åtte, nå må vi gå» og pek på klokka. Begynn med «les» og gå over til «tegn» når eleven kjenner igjen hel og halv. Det er vanskeligere å tegne riktig enn å lese av, særlig å plassere den korte viseren mellom to tall.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Når skal barn kunne klokka?', a: 'I læreplanen er klokka med i kompetansemålene etter 2. trinn. I 1. trinn er det nok å bli trygg på hele og halve timer.' },
    ],
  },

  '/klokka/2-trinn/': {
    tittel: 'Klokka 2. trinn – kvart over og kvart på',
    beskrivelse: 'Gratis klokkeark for 2. trinn: les av analog klokke med hele og halve timer, kvart over og kvart på. Fasit med norsk uttrykk og digital tid.',
    h1: 'Klokka for 2. trinn',
    ingress: 'Eleven leser av analoge klokker som viser hele og halve timer, kvart over og kvart på, og skriver hva klokka er.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Arket bygger videre på hel og halv. Kvart over to er 2:15, og den lange viseren står på 3. Kvart på tre er 2:45, og den lange viseren står på 9. Urskiva kan deles i fire like store deler, fire kvarter, akkurat som en pizza delt i fire.',
          'Fasiten viser både uttrykket og den digitale tiden, for eksempel «kvart på tre – 2:45 / 14:45».',
        ],
      },
      {
        h: 'Typiske feil',
        p: [
          'Kvart på er vanskeligst. Kvart på tre betyr et kvarter før klokka blir tre, altså 2:45. Mange skriver 3:45. Spør: «Har klokka blitt tre ennå?» og pek på den korte viseren, som står like før 3.',
          'En annen feil er å lese den korte viseren som minutter. Snakk om at den lange viseren går en hel runde mens den korte flytter seg fra ett tall til det neste.',
        ],
      },
      {
        h: 'Øv på flere måter',
        p: [
          'I læreplanen etter 2. trinn står det at elevene skal kunne beskrive tid ved hjelp av kalender og analog og digital klokke. Arket starter med å lese av klokka. Velg «tegn» når eleven skal tegne viserne selv, eller «blandet» for begge deler. Med «Lag nytt ark» får du nye klokkeslett, og elevene kan gjerne rette hverandres ark med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvordan kan vi øve hjemme?', a: 'Spør barnet hva klokka er noen ganger om dagen, særlig ved hele, halve og kvarte timer. Tegn gjerne en klokke på papir og la barnet stille viserne.' },
      { q: 'Hvorfor står det to digitale tider i fasiten?', a: 'En analog klokke viser ikke om det er morgen eller ettermiddag. Derfor står både 2:45 og 14:45.' },
    ],
  },

  '/klokka/3-trinn/': {
    tittel: 'Klokka 3. trinn – fem og ti på halv, med fasit',
    beskrivelse: 'Gratis klokkeark for 3. trinn med hvert femte minutt, som «ti på halv fire» og «fem over halv sju». Fasit med norsk uttrykk og digital tid.',
    h1: 'Klokka for 3. trinn',
    ingress: 'Analoge klokker med hvert femte minutt. Eleven lærer uttrykk som «ti over tre», «ti på halv fire» og «fem over halv fire».',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Den lange viseren kan nå stå på alle tallene rundt urskiva, og hvert tall betyr fem minutter. Eleven må telle i femmere: 1 er 5 minutter, 2 er 10 minutter, 4 er 20 minutter og så videre. Arket kan vise klokker der eleven leser av, eller tider eleven skal tegne inn, og «blandet» har begge.',
        ],
      },
      {
        h: 'Halvtimen er midtpunktet',
        p: [
          'På norsk sier vi tiden rundt halvtimen. 3:20 er «ti på halv fire», 3:25 er «fem på halv fire», 3:35 er «fem over halv fire». Dette er den vanskeligste delen av klokka for mange barn. Del urskiva i fire: første kvarter teller fra hel time, de to midterste kvarterene teller fra halv, og siste kvarter teller mot neste time.',
          '3:40 kan sies både som «ti over halv fire» og «tjue på fire». Fasiten viser én vanlig måte, så godta gjerne andre riktige uttrykk.',
        ],
      },
      {
        h: 'Tips',
        p: [
          'Skriv 5, 10, 15 og så videre utenfor tallene på en tegnet urskive de første gangene. Da slipper eleven å telle hver gang. Ta bort hjelpetallene når eleven er trygg. Bruk også klokkeslettene fra timeplanen: Når begynner gymtimen? Når er det friminutt?',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor sier vi «ti på halv fire» og ikke «tjue over tre»?', a: 'Det er den vanligste måten å si det på norsk. Noen sier «tjue over tre», og begge betyr 3:20. Barnet bør forstå begge for å skjønne hva andre mener.' },
      { q: 'Hva gjør vi hvis halv-uttrykkene ikke sitter?', a: 'Gå tilbake til hel, halv og kvart. Når eleven er trygg på at halv fire er 3:30, er det lettere å se at ti på halv fire er ti minutter før det.' },
    ],
  },

  '/klokka/4-trinn/': {
    tittel: 'Klokka 4. trinn – hvert minutt, med fasit',
    beskrivelse: 'Gratis klokkeark for 4. trinn: les av og tegn analog klokke på minuttet, som «sju minutter over to». Fasit med norsk uttrykk og digital tid.',
    h1: 'Klokka for 4. trinn',
    ingress: 'Analoge klokker med alle minutter, ikke bare hvert femte. Eleven leser av og tegner klokkeslett som «tre minutter på halv fem».',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Nå må eleven bruke de små minuttstrekene mellom tallene. En god strategi er å telle i femmere til nærmeste tall og så telle de enkelte minuttene: den lange viseren står to streker etter 1, altså 5 + 2 = 7 minutter. Klokka er sju minutter over.',
          'Fasiten viser både uttrykket og den digitale tiden, for eksempel «tre minutter på halv fem – 4:27 / 16:27».',
        ],
      },
      {
        h: 'Når trenger vi minuttene?',
        p: [
          'I hverdagen runder vi ofte av til nærmeste fem minutter. Men bussen går 7:43, filmen begynner 18:05, og treningen slutter 17:55. Da må minuttene være riktige. Snakk om når det holder med «rundt halv åtte», og når det må være nøyaktig.',
          'Mange elever i 4. trinn foretrekker å si digitalt, «fire tjuesju», i stedet for «tre minutter på halv fem». Begge er riktige. Det viktigste er at eleven forstår sammenhengen mellom dem.',
        ],
      },
      {
        h: 'Tips',
        p: [
          'Ved tegneoppgavene glemmer mange at den korte viseren også flytter seg. Klokka 4:50 står den korte viseren nesten på 5, ikke rett på 4. La eleven sjekke dette på en ekte klokke. Rett arket med fasiten og lag et nytt med «Lag nytt ark» hvis det var mange feil.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Er det nok å kunne digital klokke?', a: 'Analoge klokker finnes fortsatt mange steder, og de viser tydelig hvor lang tid som har gått. Det er nyttig å kunne begge.' },
    ],
  },

  '/klokka/tidsregning/': {
    tittel: 'Tidsregning – oppgaver med klokka og fasit',
    beskrivelse: 'Gratis ark med tidsregning for 5. trinn: hvor lang tid er det fra 13:45 til 15:10, og hva er klokka om 40 minutter? Med fasit og nytt ark.',
    h1: 'Tidsregning',
    ingress: 'Oppgaver der eleven regner med digitale 24-timerstider: hvor lang tid det er mellom to klokkeslett, og hva klokka blir etter et visst antall minutter.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Det er to typer oppgaver. På den ene finner eleven hvor lang tid det går fra ett klokkeslett til et annet, for eksempel fra 13:45 til 15:10. På den andre finner eleven hva klokka er en viss tid senere, for eksempel 40 minutter etter 9:35. I læreplanen etter 5. trinn står det at elevene skal kunne lage og løse oppgaver som handler om tid.',
        ],
      },
      {
        h: 'Hopp via hele timer',
        p: [
          'Det tryggeste er å hoppe til nærmeste hele time. Fra 13:45 til 14:00 er det 15 minutter, fra 14:00 til 15:00 er det 1 time, og fra 15:00 til 15:10 er det 10 minutter. Til sammen 1 time og 25 minutter. Tegn hoppene på en tidslinje.',
          'På samme måte: 9:35 pluss 40 minutter. 25 minutter fram kommer vi til 10:00, og så gjenstår 15 minutter. Klokka blir 10:15.',
        ],
      },
      {
        h: 'Den vanligste feilen',
        p: [
          'En time har 60 minutter, ikke 100. Mange regner 9:35 + 40 = 9:75, eller trekker 13:45 fra 15:10 som vanlige tall. Spør: «Kan klokka være 9:75?» Når eleven ser at det ikke går, er det lettere å forstå hvorfor vi må hoppe via hele timer.',
          'Lag egne oppgaver fra timeplanen, TV-programmer eller bussruta, så får tidsregningen mening. Fasiten følger med, så elevene kan rette selv.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Er 1,5 timer det samme som 1 time og 50 minutter?', a: 'Nei. 1,5 timer er 1 time og 30 minutter, fordi en halv time er 30 minutter. Dette er en vanlig misforståelse.' },
      { q: 'Hvorfor brukes 24-timersklokka?', a: 'Den viser om det er formiddag eller ettermiddag, og den brukes i rutetider og timeplaner.' },
    ],
  },

  // ---------- KRONER OG ØRE ----------
  '/kroner-og-ore/': {
    tittel: 'Kroner og øre – regneark med penger og fasit',
    beskrivelse: 'Gratis regneark med penger og fasit for 1.–5. trinn: tell mynter og sedler, handle i butikken, få penger tilbake og gjør om mellom kroner og øre.',
    h1: 'Kroner og øre – regning med penger',
    ingress: 'Lag oppgaveark med norske mynter og sedler, enkle butikkoppgaver og veksling. Arkene passer fra 1. til 5. trinn og har fasit.',
    avsnitt: [
      {
        h: 'Oppgavetyper',
        p: [
          'På «tell» ser eleven enkle tegninger av mynter på 1, 5, 10 og 20 kroner og sedler på 50, 100 og 200 kroner, og skriver hvor mye det er til sammen. På «handle» legger eleven sammen priser fra en liten butikk. På «veksle» betaler eleven med en seddel og regner ut hvor mye som skal komme tilbake. På «øre» gjør eleven om mellom kroner og øre.',
        ],
      },
      {
        h: 'Fra 1. til 5. trinn',
        p: [
          'Arket for 1. trinn har mynter på 1, 5 og 10 kroner og beløp opp til 30 kroner. Arket for 2. trinn har telling og handling opp til 100 kroner. Arket for 3. trinn har veksling med hele kroner opp til 500. Arket for 4. trinn tar inn øre, og arket for 5. trinn har i tillegg flere varer av samme slag, som «3 stk. à 12,50 kr».',
        ],
      },
      {
        h: 'Om øre',
        p: [
          'Øremynter finnes ikke lenger, men øre brukes fortsatt i priser, for eksempel 12,50 kr. Når man betaler kontant, rundes summen av til hele kroner. Prisene med øre er likevel god trening i desimaltall, for en krone er 100 øre, akkurat som en hel er 100 hundredeler. Ta gjerne fram ekte mynter. Det er lettere å forstå verdien når man kan holde den.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Er det vits å lære om kontanter når de fleste betaler med kort?', a: 'Ja. Mynter og sedler gjør tall og verdi konkret, og regnestykkene er de samme enten man betaler med kort eller kontant.' },
    ],
  },

  '/kroner-og-ore/1-trinn/': {
    tittel: 'Penger 1. trinn – tell mynter, ark med fasit',
    beskrivelse: 'Gratis pengeark for 1. trinn: tell mynter på 1, 5 og 10 kroner og skriv hvor mye det er, opp til 30 kroner. Med fasit og nytt ark når du vil.',
    h1: 'Penger for 1. trinn',
    ingress: 'Eleven ser tegninger av norske mynter på 1, 5 og 10 kroner og skriver hvor mange kroner det er til sammen. Beløpene går opp til 30 kroner.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Oppgavene øver på å telle verdi, ikke antall. Tre mynter kan være 3 kroner, men også 30 kroner. Mange barn i 1. trinn teller myntene og skriver antallet. Spør: «Hvor mye er denne mynten verdt?» før eleven begynner å telle.',
        ],
      },
      {
        h: 'Tell de største først',
        p: [
          'En god strategi er å begynne med de myntene som er verdt mest. Tell tikronene først: 10, 20. Så femkronene: 25. Og til slutt enkronene: 26, 27. Det er samme strategi som å telle i tiere og enere, og den støtter arbeidet med tallene opp til 30.',
          'La gjerne eleven sortere myntene på arket med farger først: ring rundt alle tikronene med én farge og femkronene med en annen.',
        ],
      },
      {
        h: 'Tips for skole og hjem',
        p: [
          'Ekte mynter er det beste hjelpemiddelet. Legg fram noen mynter og la barnet telle, eller lek butikk med lekevarer og prislapper. Snakk om hvilke mynter som finnes, og la barnet kjenne at tikroningen er større enn kronestykket, men at størrelsen ikke alltid sier noe om verdien. Bruk arket i korte økter og rett sammen med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor bare mynter på 1, 5 og 10 kroner?', a: 'Disse holder tallene innenfor det 1. trinn arbeider med. På arket for 2. trinn kommer flere mynter og sedler inn.' },
    ],
  },

  '/kroner-og-ore/2-trinn/': {
    tittel: 'Penger 2. trinn – tell og handle opp til 100 kr',
    beskrivelse: 'Gratis pengeark for 2. trinn med fasit: tell mynter og sedler og legg sammen priser i en liten butikk, opp til 100 kroner. Lag nytt ark når du vil.',
    h1: 'Penger for 2. trinn',
    ingress: 'Et ark med to oppgavetyper: tell mynter og sedler, og legg sammen priser fra en liten butikk. Alle beløpene er opp til 100 kroner.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'På telleoppgavene ser eleven tegninger av mynter og sedler og finner hvor mye det er til sammen. På handleoppgavene velger eleven varer fra butikken og legger sammen prisene. Begge deler øver pluss i tallområdet opp til 100, men i en sammenheng eleven kjenner fra hverdagen.',
        ],
      },
      {
        h: 'Butikklek i klasserommet',
        p: [
          'I læreplanen etter 2. trinn står det at elevene skal kunne bruke addisjon og subtraksjon til å lage og løse problemer fra lek og hverdag. I forklaringen til målet nevner Utdanningsdirektoratet butikklek som et mulig utgangspunkt. Arket passer godt sammen med en butikk i klasserommet: elevene regner først på arket og handler så med lekepenger.',
        ],
      },
      {
        h: 'Strategier og vanlige feil',
        p: [
          'Når to priser legges sammen, for eksempel 25 kr og 38 kr, kan eleven legge sammen tierne først (20 + 30 = 50) og så enerne (5 + 8 = 13), til sammen 63. Mange glemmer å ta med tieren som kommer fra enerne og svarer 53.',
          'Ved telling er det lurt å starte med sedlene og de største myntene. En 20-kroning og en 50-lapp er til sammen 70 kroner, selv om det bare er to ting.',
          'Gi hver elev sitt ark med «Lag nytt ark», og la elevene rette selv med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvordan kan vi øve hjemme?', a: 'La barnet regne ut hva to eller tre varer koster når dere handler, eller telle opp innholdet i sparegrisen.' },
    ],
  },

  '/kroner-og-ore/3-trinn/': {
    tittel: 'Penger 3. trinn – veksle og få tilbake, med fasit',
    beskrivelse: 'Gratis pengeark for 3. trinn: betal med en seddel og regn ut hvor mye du får tilbake. Hele kroner opp til 500. Med fasit og nytt ark når du vil.',
    h1: 'Penger for 3. trinn',
    ingress: 'Eleven betaler med en seddel og regner ut hvor mye som skal komme tilbake. Beløpene er i hele kroner opp til 500.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Oppgavene er minusstykker i forkledning: Varen koster 37 kroner, du betaler med en 50-lapp. Hvor mye får du tilbake? Svaret er 50 – 37 = 13 kroner. Fordi tallene går opp til 500, får eleven øvd på minus med tierovergang og hundrere i en praktisk sammenheng.',
        ],
      },
      {
        h: 'Tell opp, slik som i kassa',
        p: [
          'Mange synes det er lettere å telle opp fra prisen enn å trekke fra. Fra 37 til 40 er det 3 kroner, og fra 40 til 50 er det 10 kroner. Til sammen 13 kroner tilbake. Med større beløp: fra 165 til 200 er det 5 til 170 og 30 til 200, altså 35 kroner.',
          'I læreplanen etter 3. trinn står det at elevene skal kunne forklare og utforske sammenhenger mellom addisjon og subtraksjon. Å telle opp er nettopp å løse et minusstykke med pluss. La eleven kontrollere svaret: 37 + 13 skal bli 50.',
        ],
      },
      {
        h: 'Tips',
        p: [
          'Gjør oppgavene praktiske med lekepenger. Én elev er kunde og én er ekspeditør, og de bytter roller. Velg «handle» hvis eleven først trenger mer øving på å legge sammen priser. Fasiten følger med, og «Lag nytt ark» gir nye priser.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor bare hele kroner?', a: 'Hele kroner holder fokus på selve veksleregningen. Øre kommer inn på arket for 4. trinn.' },
      { q: 'Hvilke sedler brukes?', a: 'Arkene bruker sedler på 50, 100 og 200 kroner.' },
    ],
  },

  '/kroner-og-ore/4-trinn/': {
    tittel: 'Kroner og øre 4. trinn – oppgaver med fasit',
    beskrivelse: 'Gratis oppgaver med kroner og øre for 4. trinn: handle med priser som 12,50 kr, få penger tilbake og gjør om mellom kroner og øre. Med fasit.',
    h1: 'Kroner og øre for 4. trinn',
    ingress: 'Et ark med priser i kroner og øre. Eleven legger sammen priser, regner ut hva som skal komme tilbake, og gjør om mellom kroner og øre.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Prisene skrives med komma, for eksempel 12,50 kr. På handleoppgavene legger eleven sammen to eller flere priser. På vekseloppgavene betaler eleven med en seddel og finner hva som skal komme tilbake. På øreoppgavene gjør eleven om, for eksempel 12,50 kr = 1250 øre og 300 øre = 3 kr.',
        ],
      },
      {
        h: 'Øre finnes, selv om mynten er borte',
        p: [
          'Øremyntene er tatt ut av bruk, men øre brukes fortsatt i priser. I butikken rundes summen av til hele kroner når man betaler kontant. Snakk om dette med elevene: Prisen kan være 19,90 kr, men du kan ikke betale med øremynter.',
          'Kroner og øre er en fin vei inn i desimaltall. En krone er 100 øre, så tallene etter kommaet er hundredeler av en krone.',
        ],
      },
      {
        h: 'Vanlige feil',
        p: [
          'Mange tror at 1,5 kr er 1 krone og 5 øre. Det er 1 krone og 50 øre, fordi 1,5 og 1,50 er det samme. Vis det med en tegning av en krone delt i to.',
          'Når priser legges sammen, må kronene stå under kronene og ørene under ørene. 12,50 + 7,75 blir 20,25. Gi eleven et nytt ark med «Lag nytt ark» når det går greit, og la fasiten ligge fremme så eleven kan rette selv.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvor mange øre er en krone?', a: '100 øre er 1 krone. 50 øre er en halv krone.' },
    ],
  },

  '/kroner-og-ore/5-trinn/': {
    tittel: 'Kroner og øre 5. trinn – handle flere varer',
    beskrivelse: 'Gratis oppgaver med kroner og øre for 5. trinn med fasit: handle flere varer av samme slag, som 3 stk. à 12,50 kr, og regn ut vekslepenger.',
    h1: 'Kroner og øre for 5. trinn',
    ingress: 'Handleoppgaver med kroner og øre der eleven også kjøper flere av samme vare, for eksempel «3 stk. à 12,50 kr». Arket har også veksling og omgjøring mellom kroner og øre.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          '«3 stk. à 12,50 kr» betyr tre varer som koster 12,50 kr per stykk. Eleven må gange: 3 · 12,50 kr = 37,50 kr. Det kan gjøres i to steg: 12,50 kr to ganger er 25 kr, og så legges 12,50 kr til én gang til. På andre oppgaver legges flere slike priser sammen, eller eleven regner ut hva som kommer tilbake fra en seddel.',
        ],
      },
      {
        h: 'Overslag er gull',
        p: [
          'Be eleven tenke et overslag først: 3 varer à omtrent 12 kroner er omtrent 36 kroner. Et svar på 375 kroner eller 3,75 kroner viser da at kommaet har havnet feil. Overslag er også det som brukes i virkeligheten, når man sjekker om pengene i lommeboka holder.',
          'Mange elever kjenner ikke ordet «à». Forklar at det betyr «hver» eller «per stykk», og at det fortsatt står på kvitteringer og prislister.',
        ],
      },
      {
        h: 'Videre arbeid',
        p: [
          'I læreplanen etter 5. trinn står det at elevene skal bruke regneark for å lage og løse oppgaver som handler om personlig økonomi. Oppgavene på arket kan godt være en start: la elevene sette opp en handleliste med antall, pris per stykk og sum i et regneark etterpå. Fasiten følger med, og «Lag nytt ark» gir nye varer og priser.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva betyr «stk.» og «à»?', a: '«Stk.» er en forkortelse for stykk, altså antall. «À» betyr hver, så «3 stk. à 12,50 kr» betyr tre varer som koster 12,50 kr hver.' },
    ],
  },

  // ---------- TALLINJE ----------
  '/tallinje/': {
    tittel: 'Tallinje – oppgaver med fasit for 1.–7. trinn',
    beskrivelse: 'Gratis tallinje-oppgaver med fasit for 1.–7. trinn: finn tallene på tallinjen, fra 0–10 til store tall, desimaltall og negative tall.',
    h1: 'Tallinje – ark til utskrift',
    ingress: 'Lag oppgaveark med tallinjer der noen tall står skrevet og piler peker på tomme ruter. Eleven finner tallene som mangler.',
    avsnitt: [
      {
        h: 'Hva øver arkene på?',
        p: [
          'For å finne tallet ved en pil må eleven først finne ut hvor stort hvert steg er. Det krever at eleven ser på avstanden mellom tallene som er skrevet, og teller mellomrommene. Slik bygger tallinjen forståelse av tall som størrelse og plass, ikke bare som noe man teller.',
        ],
      },
      {
        h: 'Fra 1. til 7. trinn',
        p: [
          'Arket for 1. trinn har tallinjer fra 0 til 10. Arket for 2. trinn har 0–20 og hele tiere opp til 100. Velger du 3. trinn, får du utsnitt av 0–100 og 0–1000 med steg på 2, 5 eller 10. Arket for 4. trinn går opp til 10 000 med steg på 10, 50, 100 og 1000. Arket for 5. trinn har desimaltall med tideler, arket for 6. trinn har negative tall, og arket for 7. trinn har hundredeler og store tall.',
        ],
      },
      {
        h: 'Tallinjen i læreplanen',
        p: [
          'Tallinjen går igjen i flere kompetansemål. Etter 2. trinn skal elevene kunne plassere tall på tallinjen og bruke den i regning og problemløsing. Etter 5. trinn skal de kunne beskrive brøk som tall på tallinjen, og etter 6. trinn skal de kunne plassere desimaltall på tallinjen. Etter 7. trinn skal elevene bruke og utforske negative tall.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor er tallinjen så viktig?', a: 'Den viser at tall har en fast plass og avstand til hverandre. Det hjelper i hoderegning, avrunding og senere med brøk, desimaltall og negative tall.' },
    ],
  },

  '/tallinje/1-trinn/': {
    tittel: 'Tallinje 1. trinn – tallene fra 0 til 10',
    beskrivelse: 'Gratis tallinje-ark for 1. trinn: finn tallene som mangler på tallinjer fra 0 til 10. Med fasit, og du kan lage nytt ark så ofte du vil.',
    h1: 'Tallinje for 1. trinn',
    ingress: 'Tallinjer fra 0 til 10 der noen tall står skrevet og piler peker på tomme ruter. Eleven skriver tallet som mangler.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Eleven må bruke tallene som står, og telle seg fram eller tilbake til pila. Står det 3 og 6 på linjen, og pila peker to streker etter 3, er tallet 5. Oppgavene trener tallrekkefølgen og ideen om at hvert steg på linjen er like stort.',
        ],
      },
      {
        h: 'Tell hoppene, ikke strekene',
        p: [
          'En vanlig feil er å begynne å telle på 1 når man står på 0, eller å telle streker i stedet for hopp. Vis det som en frosk som hopper fra strek til strek: Hvor mange hopp er det fra 0 til pila? Samme tankegang brukes senere når tallinjen brukes til pluss og minus.',
          'Noen elever blander også sammen tall som ligner, som 6 og 9. Si tallene høyt underveis.',
        ],
      },
      {
        h: 'Gjør tallinjen stor',
        p: [
          'Lag en tallinje på gulvet med maskeringstape og tallkort. La barna gå eller hoppe på den, og still spørsmål som «Hvilket tall står du på hvis du går to steg fram fra 4?». Etterpå blir arket lettere å forstå. I læreplanen etter 2. trinn står det at elevene skal kunne plassere tall på tallinjen og bruke den i regning, så 1. trinn er et godt sted å begynne.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Barnet kan telle til 10. Hvorfor er tallinjen vanskelig?', a: 'Å telle er en remse, mens tallinjen krever at barnet ser hvor tallene står i forhold til hverandre. Det er en ny ferdighet som trenger øving.' },
    ],
  },

  '/tallinje/2-trinn/': {
    tittel: 'Tallinje 2. trinn – tall til 20 og tiere til 100',
    beskrivelse: 'Gratis tallinje-ark for 2. trinn med fasit: finn tallene på tallinjer fra 0 til 20 og tallinjer med hele tiere opp til 100. Lag nytt ark.',
    h1: 'Tallinje for 2. trinn',
    ingress: 'Tallinjer fra 0 til 20 og tallinjer med hele tiere opp til 100. Eleven finner tallene som mangler der pilene peker.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'På tallinjene til 20 er hvert steg én. På tallinjene til 100 er hvert steg ti: 0, 10, 20, 30 og så videre. Eleven må derfor se på tallene som står, og finne ut hvor store stegene er, før pila kan fylles ut.',
          'I læreplanen etter 2. trinn står det at elevene skal kunne plassere tall på tallinjen og bruke den i regning og problemløsing, og telle med ulike startpunkter og ulik differanse.',
        ],
      },
      {
        h: 'En vanlig feil',
        p: [
          'Mange antar at hvert steg er én, også når tallinjen går i tiere. Da blir tallet etter 40 skrevet som 41 i stedet for 50. Be eleven alltid se på to tall som står ved siden av hverandre først: «Fra 30 til 40, hvor stort er hoppet?»',
        ],
      },
      {
        h: 'Bruk tallinjen til regning',
        p: [
          'Når eleven kjenner tallinjen, kan den brukes til pluss og minus. 8 + 5 blir et hopp fra 8 til 10 og et hopp til på 3. 40 + 30 blir tre tierhopp fra 40. Skriv et regnestykke ved siden av en av tallinjene på arket og la eleven vise hoppene.',
          'Lag nye ark med «Lag nytt ark», og la eleven rette med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor tallinjer med tiere?', a: 'De forbereder tallområdet til 100 i 3. trinn og gir god trening i å telle i tiere.' },
    ],
  },

  '/tallinje/4-trinn/': {
    tittel: 'Tallinje 4. trinn – store tall opp til 10 000',
    beskrivelse: 'Gratis tallinje-ark for 4. trinn med fasit: tallinjer opp til 10 000 med steg på 10, 50, 100 og 1000. Finn tallene som mangler og lag nytt ark.',
    h1: 'Tallinje for 4. trinn',
    ingress: 'Tallinjer med store tall opp til 10 000, der stegene kan være 10, 50, 100 eller 1000. Eleven finner tallene som mangler.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Med store tall blir det helt avgjørende å finne steget først. Står det 3000 og 3500 med fem mellomrom mellom seg, er hvert steg 100. Eleven deler forskjellen på antallet mellomrom: 500 : 5 = 100. Da blir tallene 3100, 3200, 3300 og 3400.',
          'Oppgavene øver plassverdi og gir en følelse av hvor store tallene er. 7000 ligger mye nærmere 10 000 enn 1000 gjør.',
        ],
      },
      {
        h: 'Vanlige feil',
        p: [
          'Noen teller strekene i stedet for mellomrommene og får feil steg. Andre ser bare på det siste sifferet og skriver 3501 etter 3500. Be eleven si stegene høyt: «tre tusen fem hundre, tre tusen seks hundre».',
          'Noen glemmer også en null og skriver 360 i stedet for 3600. Spør om tallet passer der det står på linjen.',
        ],
      },
      {
        h: 'Bruk tallinjen videre',
        p: [
          'Tallinjen er god til avrunding og overslag. Ligger 3460 nærmest 3000 eller 4000? Nærmest 3400 eller 3500? I læreplanen etter 4. trinn står det at elevene skal kunne estimere og gjøre overslag, og tallinjen gjør det synlig. Gi elevene ulike ark med «Lag nytt ark», og rett med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor brukes mellomrom i store tall?', a: 'I norsk skrives store tall ofte med mellomrom mellom hver gruppe på tre sifre, som 10 000. Det gjør tallet lettere å lese. I firesifrede tall kan mellomrommet sløyfes.' },
    ],
  },

  '/tallinje/5-trinn/': {
    tittel: 'Tallinje med desimaltall – tideler, med fasit',
    beskrivelse: 'Gratis tallinje-ark med desimaltall for 5. trinn: finn tideler som 2,4 og 2,7 mellom to hele tall. Med fasit, og du kan lage nytt ark når du vil.',
    h1: 'Tallinje med desimaltall',
    ingress: 'Tallinjer der rommet mellom to hele tall er delt i ti. Eleven skriver tideler som 2,4 og 2,7 der pilene peker.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Mellom 2 og 3 er det ti like store steg, og hvert steg er en tidel: 2,1, 2,2, 2,3 og så videre til 2,9. Deretter kommer 3. Eleven må se at sifferet etter kommaet forteller hvor mange tideler vi har gått forbi det hele tallet.',
        ],
      },
      {
        h: 'Typiske misforståelser',
        p: [
          'Mange tror at tallet etter 2,9 er 2,10. Vis på tallinjen at ti tideler er en hel, så neste tall er 3. En annen feil er å tro at 2,10 er større enn 2,9 fordi 10 er større enn 9.',
          'Koble gjerne desimaltallene til brøk og penger. 0,5 er det samme som 1/2, og 2,5 kroner er 2 kroner og 50 øre. I læreplanen etter 5. trinn står det at elevene skal beskrive brøk som tall på tallinjen og utforske sammenhenger mellom brøk, desimaltall og prosent. Etter 6. trinn skal de kunne plassere desimaltall på tallinjen.',
        ],
      },
      {
        h: 'Tips',
        p: [
          'En linjal eller et målebånd er en ekte tallinje med desimaltall. 4,5 cm er fire hele centimeter og fem millimeter, og en millimeter er en tidel av en centimeter. La eleven finne noen av tallene fra arket på linjalen.',
          'Med «Lag nytt ark» får eleven nye tallinjer, og fasiten gjør at eleven kan rette selv.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor er desimaltall vanskelig?', a: 'Barn har lært at tall med flere sifre er større. For desimaltall stemmer ikke det alltid, og det må læres på nytt.' },
    ],
  },

  '/tallinje/6-trinn/': {
    tittel: 'Tallinje med negative tall – oppgaver med fasit',
    beskrivelse: 'Gratis tallinje-ark med negative tall for 6. trinn: finn tallene under null på tallinjen, som –3 og –8. Med fasit, og et nytt ark når du vil.',
    h1: 'Tallinje med negative tall',
    ingress: 'Tallinjer som går forbi null og ned i de negative tallene. Eleven skriver tallene som mangler der pilene peker.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'Til venstre for null ligger de negative tallene: –1, –2, –3 og så videre. Jo lenger til venstre, desto mindre er tallet. Eleven må finne steget på tallinjen og telle seg riktig vei fra null, akkurat som med positive tall, men nå i motsatt retning.',
        ],
      },
      {
        h: 'Den vanligste feilen',
        p: [
          'Mange tror at –8 er større enn –3 fordi 8 er større enn 3. Bruk temperatur: Er det kaldest når termometeret viser minus 8 eller minus 3 grader? Et termometer er en loddrett tallinje, og de fleste barn har erfaring med at minus 8 er kaldere.',
          'En annen feil er å hoppe over null, slik at tallet etter –1 blir 1. Null er et tall med sin egen plass på tallinjen.',
        ],
      },
      {
        h: 'Negative tall i hverdagen',
        p: [
          'Snakk om hvor vi møter negative tall: temperatur, etasjer under bakken i en heis, og havdyp under havflaten. I læreplanen etter 7. trinn står det at elevene skal bruke og utforske negative tall både praktisk og teoretisk. Arket for 6. trinn er en god start.',
          'Med «Lag nytt ark» får du nye tallinjer, og fasiten følger med.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvordan forklarer jeg negative tall for et barn?', a: 'Start med temperatur. Når det er 2 grader og blir 5 grader kaldere, ender vi på minus 3. Tegn et termometer og tell nedover.' },
    ],
  },

  '/tallinje/7-trinn/': {
    tittel: 'Tallinje 7. trinn – hundredeler og store tall',
    beskrivelse: 'Gratis tallinje-ark for 7. trinn med fasit: plasser hundredeler som 0,35 og store tall på tallinjen. Lag nytt ark så ofte du vil.',
    h1: 'Tallinje for 7. trinn',
    ingress: 'Tallinjer med hundredeler og med store tall. Eleven finner steget og skriver tallene som mangler der pilene peker.',
    avsnitt: [
      {
        h: 'Hva øver arket på?',
        p: [
          'På tallinjene med hundredeler er rommet mellom to tideler delt i ti. Mellom 0,3 og 0,4 ligger 0,31, 0,32 og så videre til 0,39. På tallinjene med store tall er stegene store, og eleven må holde orden på plassverdiene. Begge typene krever at eleven finner steget før pilene fylles ut.',
        ],
      },
      {
        h: 'Typiske misforståelser',
        p: [
          'Mange tror at 0,25 er større enn 0,3 fordi 25 er større enn 3. Skriv 0,3 som 0,30, så blir det lettere å sammenligne: 30 hundredeler er mer enn 25. Penger hjelper også: 0,30 kr er mer enn 0,25 kr.',
          'I læreplanen etter 6. trinn står det at elevene skal kunne plassere desimaltall på tallinjen og sammenligne tall med ulikt antall desimaler. Arket for 7. trinn bygger videre på dette.',
        ],
      },
      {
        h: 'Tips til bruk',
        p: [
          'La eleven forklare hvordan hun eller han fant steget på én av tallinjene før arket rettes. Snakk også om at det alltid finnes nye tall mellom to desimaltall: mellom 0,3 og 0,31 ligger 0,305. Elever som trenger repetisjon, kan få arket for 5. trinn med tideler først. Med «Lag nytt ark» kan alle få et eget ark.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvorfor er 0,3 lik 0,30?', a: 'Tre tideler er det samme som tretti hundredeler. Nullen på slutten endrer ikke verdien.' },
    ],
  },

  // ---------- TRINNSIDER ----------
  '/1-trinn/': {
    tittel: 'Oppgaveark 1. trinn – matte, norsk og engelsk',
    beskrivelse: 'Gratis oppgaveark for 1. trinn: matte med fasit (pluss og minus til 10, tallinje, klokka og penger), staveord, ordleting og engelske farger.',
    h1: 'Oppgaveark for 1. trinn',
    ingress: 'Her er arkene som passer for 1. trinn, samlet på ett sted. Alle kan lages på nytt med andre oppgaver, og matte-arkene har fasit.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Pluss og minus i tallområdet 0–10 gir korte, enkle stykker. Tallinje-arket har tallinjer fra 0 til 10 der eleven fyller inn tallene som mangler. Klokka-arket har hele og halve timer på analoge klokker. Penge-arket lar eleven telle mynter på 1, 5 og 10 kroner, opp til 30 kroner.',
        ],
      },
      {
        h: 'Norsk og engelsk',
        p: [
          'Staveordene for 1. trinn er korte lydrette ord, ord med æ, ø og å og ord med ei, øy og au. Arkene kan ha en tabell der eleven ser på ordet, dekker det til og skriver det selv, ord med bokstaver som mangler, eller ord med stokkede bokstaver. Ordleting med temaene skolen og farger og former har små rutenett tilpasset 1. trinn.',
          'I engelsk passer glosearket om farger, der eleven kobler det engelske ordet med det norske.',
        ],
      },
      {
        h: 'Tips for 1. trinn',
        p: [
          'Kompetansemålene i matte, norsk og engelsk gjelder etter 2. trinn, så 1. trinn er første halvdel av veien dit. I norsk står det blant annet at elevene etter 2. trinn skal kunne trekke bokstavlyder sammen til ord under lesing og skriving. I matte skal de kunne plassere tall på tallinjen.',
          'Mange elever i 1. trinn leser ikke oppgaveteksten selv ennå. Les den høyt, og gjør første oppgave sammen. Korte økter på 10–15 minutter fungerer best.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvor mye lekser bør et barn i 1. trinn ha?', a: 'Det bestemmer skolen. Hjemme holder det ofte med et kort ark eller noen få oppgaver om gangen, gjerne sammen med en voksen.' },
    ],
  },

  '/2-trinn/': {
    tittel: 'Oppgaveark 2. trinn – matte, norsk og engelsk',
    beskrivelse: 'Gratis oppgaveark for 2. trinn, matte med fasit: pluss og minus til 20, klokka, penger og tallinje. Også staveord, ordleting, kryssord og gloser.',
    h1: 'Oppgaveark for 2. trinn',
    ingress: 'Alle arkene som passer for 2. trinn, samlet på ett sted. Lag så mange ark du vil, og skriv ut fasit til matte-arkene.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Pluss og minus i tallområdet 0–20 finnes både uten og med tierovergang. Klokka-arket har hele og halve timer, kvart over og kvart på. Penge-arket har telling av mynter og sedler og enkle butikkoppgaver opp til 100 kroner. Tallinje-arket har tall til 20 og hele tiere opp til 100. På gangetabell-siden kan du også velge 2. trinn og få 2-, 5- og 10-gangen.',
          'I læreplanen etter 2. trinn står det blant annet at elevene skal kunne beskrive tid ved hjelp av analog og digital klokke og plassere tall på tallinjen.',
        ],
      },
      {
        h: 'Norsk',
        p: [
          'Staveordene for 2. trinn har blant annet dobbel konsonant etter kort vokal, ord med ng og nk, tallord og fargeord. Ordleting finnes med temaene vinter, vår, sommer og kroppen, og fra omtrent 2. trinn passer også kryssord for barn. I læreplanen i norsk etter 2. trinn står det at elevene skal kunne trekke bokstavlyder sammen til ord og lytte ut språklyder og stavelser.',
        ],
      },
      {
        h: 'Engelsk',
        p: [
          'Glosearkene om dyr og tall passer for 2. trinn. Eleven oversetter fra norsk til engelsk, og kan også få arket som kobling eller ordleting. I læreplanen i engelsk etter 2. trinn står det at elevene skal lese og eksperimentere med å skrive kjente ord og enkle setninger.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Når bør barnet begynne med tierovergang?', a: 'Når pluss og minus i 0–20 uten tierovergang går greit, og barnet kan tiervennene, altså tallparene som blir 10.' },
    ],
  },

  '/3-trinn/': {
    tittel: 'Oppgaveark 3. trinn – matteark, norsk og engelsk',
    beskrivelse: 'Gratis matteark for 3. trinn med fasit: gangetabell, pluss og minus til 100, klokka, penger og tallinje, pluss staveord, kryssord og gloser.',
    h1: 'Oppgaveark for 3. trinn',
    ingress: 'Her er arkene som passer for 3. trinn: matteark med fasit, staveord og andre norskark, og engelske gloser.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Gangetabell-arket for 3. trinn starter med 1- til 5-gangen og 10-gangen. Pluss og minus går i tallområdet 0–100. Klokka-arket har hvert femte minutt, med uttrykk som «ti på halv fire». Penge-arket har veksling med hele kroner opp til 500. Tallinje-arket har utsnitt av 0–100 og 0–1000. På brøk-siden kan du velge 3. trinn og få figurer der eleven skriver brøken.',
          'I læreplanen etter 3. trinn står det blant annet at elevene skal utforske multiplikasjon ved telling og gruppering og bruke dobling og halvering.',
        ],
      },
      {
        h: 'Norsk',
        p: [
          'Staveordene for 3. trinn har kj-lyden, sj-lyden, stum h i hv-ord og j-lyden skrevet hj og gj. Ordleting og kryssord finnes med temaer som jul, påske, 17. mai, høst og vinter. Fullfør setningen med ordbank gir øving i å lese og forstå, og fra 3. trinn passer også arket med og eller å.',
        ],
      },
      {
        h: 'Engelsk',
        p: [
          'Glosearkene om familien, skolen, kroppen og dager og måneder passer for 3. trinn. Eleven kan oversette begge veier, koble ord eller lete etter engelske ord i en ordleting. Lag et nytt ark til hver elev med «Lag nytt ark», så får alle sine egne oppgaver.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva er viktigst å øve på i matte i 3. trinn?', a: 'Mye handler om å bli trygg på pluss og minus til 100 og å forstå hva gange betyr. Klokka og penger gir god trening i hverdagsmatte.' },
    ],
  },

  '/4-trinn/': {
    tittel: 'Oppgaveark 4. trinn – matteark, norsk og engelsk',
    beskrivelse: 'Gratis matteark for 4. trinn med fasit: gangetabell, divisjon, oppstilling, brøk, klokka, kroner og øre og tallinje. Også staveord og gloser.',
    h1: 'Oppgaveark for 4. trinn',
    ingress: 'Alle arkene som passer for 4. trinn, samlet på ett sted. Matte-arkene har fasit, og alle ark kan lages på nytt med andre oppgaver.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Gangetabell-arket for 4. trinn har alle tabellene fra 1 til 10 og oppgaver med manglende faktor. Divisjon-arket har stykker innenfor gangetabellen. Pluss og minus går til 1000 i oppstilling med mente og veksling. Brøk-arket gir en første innføring med figurer, sammenligning og brøkdel av en mengde. Klokka-arket har hvert minutt, kroner og øre-arket har priser med øre, og tallinje-arket går opp til 10 000.',
          'I læreplanen etter 4. trinn står det blant annet at elevene skal utforske og bruke målings- og delingsdivisjon og forklare ulike divisjonsstrategier.',
        ],
      },
      {
        h: 'Norsk',
        p: [
          'Staveordene for 4. trinn har blant annet stum d, stum t i det og -et, endingene -ig og -lig og sammensatte ord. Kryssord finnes med temaene jul, påske, 17. mai og høst, og ordleting med mat og havet. Arket med og eller å gir god trening i en vanlig skrivefeil.',
        ],
      },
      {
        h: 'Engelsk',
        p: [
          'Glosearkene om mat og drikke og klær passer for 4. trinn, og det er en engelsk ordleting med juleord. I læreplanen i engelsk etter 4. trinn står det at elevene skal følge enkle regler for rettskriving og setningsstruktur. Gloseøving med skriving både fra norsk til engelsk og motsatt er en god støtte for det.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva er nytt i matte i 4. trinn?', a: 'Divisjon er det store nye temaet. I tillegg kommer større tall, oppstilling og ofte en første innføring i brøk.' },
    ],
  },

  '/5-trinn/': {
    tittel: 'Oppgaveark 5. trinn – matteark, norsk og engelsk',
    beskrivelse: 'Gratis matteark for 5. trinn med fasit: brøk, divisjon med rest, tidsregning, kroner og øre og desimaltall på tallinjen. Også staveord og gloser.',
    h1: 'Oppgaveark for 5. trinn',
    ingress: 'Her er arkene som passer for 5. trinn: matteark med fasit, norskark og engelske gloser. Lag et nytt ark når du trenger flere oppgaver.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Brøk-arket for 5. trinn har pluss og minus med lik nevner, utviding og brøkdel av en mengde. Divisjon-arket har divisjon med rest. Tidsregning-arket øver på hvor lang tid det går mellom to klokkeslett. Kroner og øre-arket har handling med flere varer av samme slag. Tallinje-arket har desimaltall med tideler, og pluss og minus går til 10 000.',
          'I læreplanen etter 5. trinn står det blant annet at elevene skal kunne beskrive brøk som del av en hel, som del av en mengde og som tall på tallinjen, og lage og løse oppgaver som handler om tid.',
        ],
      },
      {
        h: 'Norsk',
        p: [
          'Staveordene for 5. trinn har blant annet dobbel konsonant i bøyde former, -sjon, -dt eller -tt i intetkjønn og æ-lyden skrevet e foran r. Kryssordet om kroppen passer godt, og arket med og eller å er laget med 5. trinn som utgangspunkt.',
        ],
      },
      {
        h: 'Engelsk',
        p: [
          'Glosearkene om været og fritid og sport passer for 5. trinn, og det er en egen engelsk ordleting. Eleven kan oversette begge veier eller koble ordene. Ta gjerne glosene inn i muntlig bruk etterpå, for eksempel ved å snakke om været på engelsk i starten av timen.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hvordan kan vi øve på brøk hjemme?', a: 'Del mat: pizza, kake eller en sjokoladeplate. Snakk om hvor stor del hver får, og hva som skjer når flere skal dele.' },
    ],
  },

  '/6-trinn/': {
    tittel: 'Oppgaveark 6. trinn – matteark, norsk og engelsk',
    beskrivelse: 'Gratis matteark for 6. trinn med fasit: divisjon med store tall, brøk med forkorting og blandet tall, negative tall på tallinjen. Også staveord.',
    h1: 'Oppgaveark for 6. trinn',
    ingress: 'Alle arkene som passer for 6. trinn, samlet på ett sted. Matte-arkene har fasit, og alle ark kan lages på nytt med andre oppgaver.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Divisjon-arket for 6. trinn har tre- og firesifrede tall delt på et ensifret tall. Brøk-arket har forkorting, utviding, blandet tall, gange med helt tall og sammenligning av brøker med ulike nevnere. Tallinje-arket har negative tall. Gangetabell-arkene er fine til repetisjon for elever som fortsatt bruker tid på å regne ut gangestykkene.',
          'I læreplanen etter 6. trinn står det blant annet at elevene skal kunne plassere desimaltall på tallinjen og lage og løse problemer med desimaltall, brøk og prosent.',
        ],
      },
      {
        h: 'Norsk',
        p: [
          'Staveordene for 6. trinn har fremmedord, homofone ord som hjul og jul, endingene -het, -else og -ing, stumme bokstaver og ord fra fagene. Kryssordene og arket med og eller å passer også godt som repetisjon.',
        ],
      },
      {
        h: 'Engelsk',
        p: [
          'Glosearkene har ord på flere nivåer, og i 6. trinn får eleven med vanskeligere ord innenfor hvert tema. Temaer som været og fritid og sport passer godt. Eleven kan oversette begge veier eller koble ordene.',
          'Tips: Bruk «Lag nytt ark» til å gi elevene ulike ark med samme vanskegrad, og la dem rette matte-arkene selv med fasiten.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Barnet mitt kan ikke gangetabellen i 6. trinn. Er det for sent?', a: 'Nei. Det lønner seg å øve nå, for gangetabellen brukes i divisjon og brøk. Fem minutter om dagen med de tabellene som mangler, gir ofte rask framgang.' },
    ],
  },

  '/7-trinn/': {
    tittel: 'Oppgaveark 7. trinn – matteark, norsk og engelsk',
    beskrivelse: 'Gratis matteark for 7. trinn med fasit: brøk med ulike nevnere, desimaltall og prosent, divisjon med rest og tallinje med hundredeler.',
    h1: 'Oppgaveark for 7. trinn',
    ingress: 'Her er arkene som passer for 7. trinn: matteark med fasit, staveord og engelske gloser. Fint til repetisjon før ungdomsskolen.',
    avsnitt: [
      {
        h: 'Matte',
        p: [
          'Brøk-arket for 7. trinn har pluss og minus med ulike nevnere, gange, brøkdel av en mengde, forkorting og omgjøring til desimaltall og prosent. Divisjon-arket har store tall med rest. Tallinje-arket har hundredeler og store tall. Arkene om negative tall og tidsregning passer godt til repetisjon.',
          'I læreplanen etter 7. trinn står det blant annet at elevene skal kunne oversette mellom brøk, desimaltall og prosent, og bruke og utforske negative tall.',
        ],
      },
      {
        h: 'Norsk',
        p: [
          'Staveordene for 7. trinn har fremmedord, -sjon, sterke verb i fortid, dobbel konsonant i lange ord og ord fra samfunnsfag og naturfag. I læreplanen i norsk etter 7. trinn står det at elevene skal mestre sentrale regler for rettskriving, ordbøying og tegnsetting. Arket med og eller å er også nyttig repetisjon.',
        ],
      },
      {
        h: 'Engelsk',
        p: [
          'Glosearkene har egne, vanskeligere ord for 7. trinn innenfor hvert tema, og eleven kan oversette begge veier, koble ordene eller finne dem i en ordleting. I læreplanen i engelsk etter 7. trinn står det at elevene skal følge regler for rettskriving, ordbøying og setningsstruktur.',
          'Mange 7.-klassinger liker å rette selv. Legg fasiten fremme, og la dem finne ut hva de må øve mer på.',
        ],
      },
    ],
    sporsmal: [
      { q: 'Hva bør sitte i matte før ungdomsskolen?', a: 'Gangetabellen, de fire regneartene, brøk og desimaltall er et viktig grunnlag. Arkene her egner seg godt til å finne og øve på det som ikke sitter.' },
    ],
  },
};

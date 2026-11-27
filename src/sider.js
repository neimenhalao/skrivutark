// Landingssider: én side per tema × trinn som folk faktisk søker etter.
// Hver side har en generator med forhåndsvalg (opts), et forhåndsvist ark og egen tekst (src/data/sidetekster.js).
// gruppe brukes til navigasjon og interne lenker.

export const sider = [
  // ---------- MATTE ----------
  { slug: '/gangetabell/', gen: 'gangetabell', opts: { trinn: 4 }, gruppe: 'gangetabell', hub: true, navn: 'Gangetabell' },
  { slug: '/gangetabell/3-trinn/', gen: 'gangetabell', opts: { trinn: 3 }, gruppe: 'gangetabell', navn: 'Gangetabell 3. trinn' },
  { slug: '/gangetabell/4-trinn/', gen: 'gangetabell', opts: { trinn: 4, type: 'mangler' }, gruppe: 'gangetabell', navn: 'Gangetabell 4. trinn' },
  { slug: '/gangetabell/plakat/', gen: 'gangetabell', opts: { trinn: 4, type: 'plakat' }, gruppe: 'gangetabell', navn: 'Gangetabellen som plakat' },

  { slug: '/pluss-og-minus/', gen: 'plussminus', opts: { trinn: 2 }, gruppe: 'plussminus', hub: true, navn: 'Pluss og minus' },
  { slug: '/pluss-og-minus/1-trinn/', gen: 'plussminus', opts: { trinn: 1 }, gruppe: 'plussminus', navn: 'Pluss og minus 1. trinn' },
  { slug: '/pluss-og-minus/2-trinn/', gen: 'plussminus', opts: { trinn: 2, tierovergang: 'uten' }, gruppe: 'plussminus', navn: 'Pluss og minus 2. trinn' },
  { slug: '/pluss-og-minus/3-trinn/', gen: 'plussminus', opts: { trinn: 3 }, gruppe: 'plussminus', navn: 'Pluss og minus 3. trinn' },
  { slug: '/pluss-og-minus/4-trinn/', gen: 'plussminus', opts: { trinn: 4 }, gruppe: 'plussminus', navn: 'Pluss og minus 4. trinn' },
  { slug: '/pluss-og-minus/tierovergang/', gen: 'plussminus', opts: { trinn: 2, tierovergang: 'med' }, gruppe: 'plussminus', navn: 'Pluss og minus med tierovergang' },

  { slug: '/divisjon/', gen: 'divisjon', opts: { trinn: 4 }, gruppe: 'divisjon', hub: true, navn: 'Divisjon' },
  { slug: '/divisjon/4-trinn/', gen: 'divisjon', opts: { trinn: 4, antall: 24 }, gruppe: 'divisjon', navn: 'Divisjon 4. trinn' },
  { slug: '/divisjon/5-trinn/', gen: 'divisjon', opts: { trinn: 5 }, gruppe: 'divisjon', navn: 'Divisjon 5. trinn' },
  { slug: '/divisjon/6-trinn/', gen: 'divisjon', opts: { trinn: 6 }, gruppe: 'divisjon', navn: 'Divisjon 6. trinn' },
  { slug: '/divisjon/7-trinn/', gen: 'divisjon', opts: { trinn: 7 }, gruppe: 'divisjon', navn: 'Divisjon 7. trinn' },

  { slug: '/brok/', gen: 'brok', opts: { trinn: 5 }, gruppe: 'brok', hub: true, navn: 'Brøk' },
  { slug: '/brok/4-trinn/', gen: 'brok', opts: { trinn: 4 }, gruppe: 'brok', navn: 'Brøk 4. trinn' },
  { slug: '/brok/5-trinn/', gen: 'brok', opts: { trinn: 5, type: 'pluss-lik' }, gruppe: 'brok', navn: 'Brøk 5. trinn' },
  { slug: '/brok/6-trinn/', gen: 'brok', opts: { trinn: 6 }, gruppe: 'brok', navn: 'Brøk 6. trinn' },
  { slug: '/brok/7-trinn/', gen: 'brok', opts: { trinn: 7 }, gruppe: 'brok', navn: 'Brøk 7. trinn' },

  { slug: '/klokka/', gen: 'klokka', opts: { trinn: 2 }, gruppe: 'klokka', hub: true, navn: 'Klokka' },
  { slug: '/klokka/1-trinn/', gen: 'klokka', opts: { trinn: 1 }, gruppe: 'klokka', navn: 'Klokka 1. trinn' },
  { slug: '/klokka/2-trinn/', gen: 'klokka', opts: { trinn: 2, type: 'les' }, gruppe: 'klokka', navn: 'Klokka 2. trinn' },
  { slug: '/klokka/3-trinn/', gen: 'klokka', opts: { trinn: 3 }, gruppe: 'klokka', navn: 'Klokka 3. trinn' },
  { slug: '/klokka/4-trinn/', gen: 'klokka', opts: { trinn: 4 }, gruppe: 'klokka', navn: 'Klokka 4. trinn' },
  { slug: '/klokka/tidsregning/', gen: 'klokka', opts: { trinn: 5 }, gruppe: 'klokka', navn: 'Tidsregning' },

  { slug: '/kroner-og-ore/', gen: 'kroner', opts: { trinn: 3 }, gruppe: 'kroner', hub: true, navn: 'Kroner og øre' },
  { slug: '/kroner-og-ore/1-trinn/', gen: 'kroner', opts: { trinn: 1 }, gruppe: 'kroner', navn: 'Penger 1. trinn' },
  { slug: '/kroner-og-ore/2-trinn/', gen: 'kroner', opts: { trinn: 2 }, gruppe: 'kroner', navn: 'Penger 2. trinn' },
  { slug: '/kroner-og-ore/3-trinn/', gen: 'kroner', opts: { trinn: 3, type: 'veksle' }, gruppe: 'kroner', navn: 'Penger 3. trinn' },
  { slug: '/kroner-og-ore/4-trinn/', gen: 'kroner', opts: { trinn: 4 }, gruppe: 'kroner', navn: 'Kroner og øre 4. trinn' },
  { slug: '/kroner-og-ore/5-trinn/', gen: 'kroner', opts: { trinn: 5 }, gruppe: 'kroner', navn: 'Kroner og øre 5. trinn' },

  { slug: '/tallinje/', gen: 'tallinje', opts: { trinn: 3 }, gruppe: 'tallinje', hub: true, navn: 'Tallinje' },
  { slug: '/tallinje/1-trinn/', gen: 'tallinje', opts: { trinn: 1 }, gruppe: 'tallinje', navn: 'Tallinje 1. trinn' },
  { slug: '/tallinje/2-trinn/', gen: 'tallinje', opts: { trinn: 2 }, gruppe: 'tallinje', navn: 'Tallinje 2. trinn' },
  { slug: '/tallinje/4-trinn/', gen: 'tallinje', opts: { trinn: 4 }, gruppe: 'tallinje', navn: 'Tallinje 4. trinn' },
  { slug: '/tallinje/5-trinn/', gen: 'tallinje', opts: { trinn: 5 }, gruppe: 'tallinje', navn: 'Tallinje med desimaltall' },
  { slug: '/tallinje/6-trinn/', gen: 'tallinje', opts: { trinn: 6 }, gruppe: 'tallinje', navn: 'Tallinje med negative tall' },
  { slug: '/tallinje/7-trinn/', gen: 'tallinje', opts: { trinn: 7 }, gruppe: 'tallinje', navn: 'Tallinje 7. trinn' },

  // ---------- NORSK ----------
  { slug: '/staveord/', gen: 'staveord', opts: { trinn: 3 }, gruppe: 'staveord', hub: true, navn: 'Staveord' },
  ...[1, 2, 3, 4, 5, 6, 7].map((t) => ({ slug: `/staveord/${t}-trinn/`, gen: 'staveord', opts: { trinn: t, type: t === 3 ? 'mangler' : 'blandet' }, gruppe: 'staveord', navn: `Staveord ${t}. trinn` })),

  { slug: '/ordleting/', gen: 'ordleting', opts: { trinn: 3, tema: 'dyr' }, gruppe: 'ordleting', hub: true, navn: 'Ordleting for barn' },
  ...[['jul', 'Jul', 3], ['vinter', 'Vinter', 2], ['pask', 'Påske', 3], ['17-mai', '17. mai', 3], ['var', 'Vår', 2], ['sommer', 'Sommer', 2], ['host', 'Høst', 3], ['mat', 'Mat', 4], ['kroppen', 'Kroppen', 2], ['skolen', 'Skolen', 1], ['farger', 'Farger og former', 1], ['havet', 'Havet', 4]]
    .map(([t, n, tr]) => ({ slug: `/ordleting/${t}/`, gen: 'ordleting', opts: { trinn: tr, tema: t }, gruppe: 'ordleting', navn: `Ordleting ${n.toLowerCase() === n ? n : n}` })),

  { slug: '/kryssord-for-barn/', gen: 'kryssord', opts: { trinn: 4, tema: 'dyr' }, gruppe: 'kryssord', hub: true, navn: 'Kryssord for barn' },
  ...[['jul', 'Jul', 4], ['vinter', 'Vinter', 3], ['pask', 'Påske', 4], ['17-mai', '17. mai', 4], ['sommer', 'Sommer', 3], ['host', 'Høst', 4], ['kroppen', 'Kroppen', 5]]
    .map(([t, n, tr]) => ({ slug: `/kryssord-for-barn/${t}/`, gen: 'kryssord', opts: { trinn: tr, tema: t }, gruppe: 'kryssord', navn: `Kryssord ${n}` })),

  { slug: '/fullfor-setningen/', gen: 'setninger', opts: { trinn: 3, type: 'ordbank' }, gruppe: 'setninger', hub: true, navn: 'Fullfør setningen' },
  { slug: '/og-eller-a/', gen: 'setninger', opts: { trinn: 5, type: 'ogaa' }, gruppe: 'setninger', navn: 'Og eller å' },

  // ---------- ENGELSK ----------
  { slug: '/engelske-gloser/', gen: 'gloser', opts: { trinn: 4, tema: 'dyr' }, gruppe: 'gloser', hub: true, navn: 'Engelske gloser' },
  ...[['dyr', 'Dyr', 2, 'tilengelsk'], ['farger', 'Farger', 1, 'koble'], ['tall', 'Tall', 2, 'tilengelsk'], ['familie', 'Familien', 3, 'koble'], ['mat', 'Mat og drikke', 4, 'tilengelsk'], ['skolen', 'Skolen', 3, 'tilnorsk'], ['kroppen', 'Kroppen', 3, 'koble'], ['klaer', 'Klær', 4, 'tilengelsk'], ['vaer', 'Været', 5, 'tilengelsk'], ['dager', 'Dager og måneder', 3, 'tilengelsk'], ['fritid', 'Fritid og sport', 5, 'koble'], ['jul', 'Jul', 4, 'ordleting']]
    .map(([t, n, tr, ty]) => ({ slug: `/engelske-gloser/${t}/`, gen: 'gloser', opts: { trinn: tr, tema: t, type: ty }, gruppe: 'gloser', navn: `Engelske gloser: ${n}` })),
  { slug: '/engelsk-ordleting/', gen: 'gloser', opts: { trinn: 5, tema: 'fritid', type: 'ordleting' }, gruppe: 'gloser', navn: 'Engelsk ordleting' },
];

// Fag-oversikter og trinnsider (ingen generator, men lenker + tekst)
export const fag = [
  { slug: '/matte/', id: 'matte', navn: 'Matte', grupper: ['gangetabell', 'plussminus', 'divisjon', 'brok', 'klokka', 'kroner', 'tallinje'] },
  { slug: '/norsk/', id: 'norsk', navn: 'Norsk', grupper: ['staveord', 'ordleting', 'kryssord', 'setninger'] },
  { slug: '/engelsk/', id: 'engelsk', navn: 'Engelsk', grupper: ['gloser'] },
];

export const gruppenavn = {
  gangetabell: 'Gangetabell', plussminus: 'Pluss og minus', divisjon: 'Divisjon', brok: 'Brøk', klokka: 'Klokka', kroner: 'Kroner og øre', tallinje: 'Tallinje',
  staveord: 'Staveord', ordleting: 'Ordleting', kryssord: 'Kryssord for barn', setninger: 'Setninger', gloser: 'Engelske gloser',
};

export const trinnsider = [1, 2, 3, 4, 5, 6, 7].map((t) => ({ slug: `/${t}-trinn/`, trinn: t, navn: `${t}. trinn` }));

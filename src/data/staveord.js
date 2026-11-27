// Staveord per trinn, egne lister (skrivutark). Kontrollert mot Bokmålsordboka (ord.uib.no).
// fokus: bokstavfølger generatoren kan blanke ut. Tom liste = generatoren velger en bokstav inne i ordet.
const DOBBEL = ['bb', 'dd', 'ff', 'gg', 'kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt'];

export default {
  1: [
    { regel: 'Korte lydrette ord', fokus: [], ord: ['is', 'ku', 'ål', 'du', 'vi', 'på', 'gå', 'ta', 'ny', 'sy', 'bo', 'le'] },
    { regel: 'Lydrette ord med tre bokstaver', fokus: [], ord: ['sol', 'mus', 'bil', 'hus', 'ost', 'rev', 'pil', 'lys', 'ris', 'sko', 'tak', 'mat', 'fot', 'lam'] },
    { regel: 'Lydrette ord med fire bokstaver', fokus: [], ord: ['hest', 'rose', 'lese', 'bade', 'hage', 'nese', 'mage', 'vase', 'pute', 'sofa', 'ugle', 'fisk', 'gris'] },
    { regel: 'Ord med æ, ø og å', fokus: ['æ', 'ø', 'å'], ord: ['tær', 'bær', 'være', 'nær', 'øre', 'søt', 'løve', 'høne', 'snø', 'fløte', 'båt', 'gås', 'hår', 'blå', 'våt', 'grå'] },
    { regel: 'Lydrette ord med to stavelser', fokus: [], ord: ['banan', 'tomat', 'kake', 'hane', 'kanin', 'male', 'rope', 'bake', 'eple', 'såpe', 'lue', 'hule', 'sykle'] },
    { regel: 'Ord med ei, øy og au', fokus: ['ei', 'øy', 'au'], ord: ['hei', 'heie', 'feie', 'geit', 'eik', 'seil', 'heis', 'reise', 'øy', 'høy', 'øye', 'gøy', 'løype', 'sau', 'maur', 'tau'] },
  ],
  2: [
    { regel: 'Dobbel konsonant etter kort vokal', fokus: DOBBEL, ord: ['katt', 'hatt', 'ball', 'gutt', 'takk', 'hoppe', 'sitte', 'rulle', 'buss', 'mamma', 'pappa', 'dukke', 'sokk', 'kopp', 'vann', 'venn'] },
    { regel: 'Ord med ng', fokus: ['ng'], ord: ['ring', 'sang', 'seng', 'ting', 'lang', 'ung', 'tung', 'synge', 'finger', 'penger', 'mange', 'tunge', 'konge', 'slange'] },
    { regel: 'Ord med nk', fokus: ['nk'], ord: ['tenke', 'benk', 'bank', 'blinke', 'vinke', 'planke', 'onkel', 'skinke', 'lenke', 'rynke', 'enkel', 'blank', 'hinke', 'anker', 'ankel'] },
    { regel: 'Lange lydrette ord', fokus: [], ord: ['elefant', 'potet', 'kamel', 'pirat', 'robot', 'ananas', 'agurk', 'melon', 'kanel', 'tulipan', 'paraply', 'sitron', 'kalender', 'sekund'] },
    { regel: 'Lang vokal og én konsonant', fokus: [], ord: ['fin', 'hel', 'tak', 'mat', 'sur', 'lur', 'rar', 'pil', 'dyr', 'bok', 'kule', 'skole', 'lese', 'male', 'sove', 'kåpe'] },
    { regel: 'Tallord', fokus: [], ord: ['to', 'tre', 'fire', 'fem', 'seks', 'åtte', 'ni', 'ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten'] },
    { regel: 'Fargeord', fokus: [], ord: ['blå', 'grønn', 'gul', 'rosa', 'lilla', 'brun', 'svart', 'hvit', 'grå', 'oransje', 'rød', 'turkis'] },
  ],
  3: [
    { regel: 'kj-lyden skrevet kj', fokus: ['kj'], ord: ['kjole', 'kjøre', 'kjøkken', 'kjeks', 'kjeller', 'kjære', 'kjenne', 'kjøtt', 'kjøpe', 'kjempe', 'kjekk', 'kjerre', 'kjedelig', 'kjæledyr'] },
    { regel: 'kj-lyden skrevet k foran i og y', fokus: ['ki', 'ky'], ord: ['kino', 'kirke', 'kiste', 'kilo', 'kinn', 'kyss', 'kylling', 'kyst', 'kikkert', 'kilometer', 'kiosk', 'kirsebær'] },
    { regel: 'sj-lyden: skj, sj og sk', fokus: ['skj', 'sj', 'ski', 'sky'], ord: ['skjorte', 'skje', 'skjerf', 'skjelve', 'skjegg', 'sjø', 'sjokolade', 'sjef', 'sjanse', 'sjåfør', 'skive', 'skinne', 'skilt', 'skyer', 'skygge', 'skyve'] },
    { regel: 'Stum h i hv-ord', fokus: ['hv'], ord: ['hva', 'hvem', 'hvor', 'hvis', 'hvit', 'hval', 'hvete', 'hvile', 'hvorfor', 'hvordan', 'hver', 'hviske', 'hvass', 'hverdag'] },
    { regel: 'j-lyden skrevet hj og gj', fokus: ['hj', 'gj'], ord: ['hjul', 'hjerte', 'hjelp', 'hjerne', 'hjørne', 'hjort', 'hjelm', 'gjest', 'gjerde', 'gjøre', 'gjemme', 'gjette', 'gjennom', 'gjerne'] },
    { regel: 'ng og nk', fokus: ['ng', 'nk'], ord: ['lenge', 'ingen', 'kongle', 'vinge', 'ringe', 'svinge', 'streng', 'tanke', 'banke', 'vinkel', 'blunke', 'flink'] },
    { regel: 'Dobbel konsonant etter kort vokal', fokus: DOBBEL, ord: ['sommer', 'ballong', 'telle', 'finne', 'flytte', 'sykkel', 'snakke', 'sekk', 'vott', 'gress', 'pinne', 'tommel', 'hytte', 'matte'] },
  ],
  4: [
    { regel: 'Stum d', fokus: ['ld', 'nd', 'rd'], ord: ['land', 'sand', 'hund', 'vind', 'strand', 'blind', 'rund', 'kald', 'mild', 'kveld', 'sild', 'bord', 'fjord', 'ord', 'nord', 'jord'] },
    { regel: 'Stum t i det og -et', fokus: ['et'], ord: ['det', 'huset', 'eplet', 'barnet', 'toget', 'egget', 'vannet', 'været', 'landet', 'treet', 'brevet', 'skipet', 'flyet', 'teppet', 'øret'] },
    { regel: '-ig og -lig', fokus: ['ig'], ord: ['deilig', 'farlig', 'lykkelig', 'vanlig', 'hyggelig', 'viktig', 'flittig', 'ferdig', 'modig', 'tidlig', 'riktig', 'vennlig', 'billig', 'rolig', 'heldig', 'vanskelig'] },
    { regel: 'Sammensatte ord', fokus: [], ord: ['fotball', 'skolesekk', 'tannbørste', 'snømann', 'regnbue', 'brannbil', 'isbjørn', 'sommerferie', 'bursdag', 'lekeplass', 'sykkelhjelm', 'solbriller', 'matpakke', 'kjøleskap', 'pannekake', 'jordbær'] },
    { regel: 'Ord med æ', fokus: ['æ'], ord: ['være', 'lære', 'bære', 'lærer', 'ærlig', 'ære', 'tær', 'bær', 'nær', 'fjær', 'trær', 'knær', 'pære', 'kjæreste', 'væske', 'vær'] },
    { regel: 'å-lyden skrevet o', fokus: ['o'], ord: ['over', 'sove', 'komme', 'sokk', 'folk', 'morgen', 'kopp', 'hoppe', 'flott', 'slott', 'oss', 'lov', 'torsk', 'orm', 'post', 'loft'] },
    { regel: 'Enkel m i slutten av ord', fokus: ['m'], ord: ['fem', 'dem', 'som', 'rom', 'lam', 'tom', 'kam', 'kom', 'glem', 'strøm', 'skum', 'ham', 'søm'] },
  ],
  5: [
    { regel: 'Dobbel konsonant i bøyde former', fokus: DOBBEL, ord: ['venner', 'gutter', 'katter', 'sokker', 'kopper', 'drømmer', 'rommet', 'lammet', 'strømmen', 'hoppet', 'snakket', 'ballen', 'sekken', 'takket', 'glemmer'] },
    { regel: 'Enkel konsonant foran t (kjenne – kjente)', fokus: ['lt', 'mt', 'nt'], ord: ['kjente', 'kjent', 'glemte', 'glemt', 'spilte', 'spilt', 'fylte', 'fylt', 'begynte', 'begynt', 'brente', 'kalte', 'stilte', 'tente'] },
    { regel: '-sjon', fokus: ['sjon'], ord: ['stasjon', 'nasjon', 'porsjon', 'versjon', 'aksjon', 'invitasjon', 'eksplosjon', 'tradisjon', 'reaksjon', 'situasjon', 'informasjon', 'operasjon', 'illustrasjon', 'posisjon'] },
    { regel: 'sj-lyden i lengre ord', fokus: ['skj', 'sj', 'ski', 'sky'], ord: ['skjerm', 'skjelett', 'skjære', 'skjebne', 'sjelden', 'sjenert', 'garasje', 'bagasje', 'sjøsyk', 'sjakk', 'sjokk', 'skilpadde', 'skikkelig', 'skiløper', 'skyskraper'] },
    { regel: 'Vanskelige ord', fokus: [], ord: ['kanskje', 'nesten', 'alltid', 'aldri', 'ingenting', 'noen', 'mye', 'litt', 'også', 'fordi', 'etter', 'sammen', 'allerede', 'hverandre', 'ganske', 'plutselig'] },
    { regel: '-dt eller -tt i intetkjønn', fokus: ['dt', 'tt'], ord: ['godt', 'rødt', 'bredt', 'kaldt', 'hardt', 'mildt', 'rundt', 'hvitt', 'søtt', 'vått', 'nytt', 'blått', 'grått', 'fritt'] },
    { regel: 'Småord med enkel konsonant', fokus: [], ord: ['han', 'hun', 'den', 'men', 'til', 'vil', 'skal', 'kan', 'at', 'for', 'om', 'hit', 'dit', 'vel'] },
    { regel: 'æ-lyden skrevet e foran r', fokus: ['er'], ord: ['sterk', 'verden', 'ferie', 'ferdig', 'merke', 'gjerne', 'fjerne', 'stjerne', 'kjerne', 'ert', 'fersk', 'berg', 'hjerte', 'erfaring', 'verdi'] },
  ],
  6: [
    { regel: 'Fremmedord', fokus: [], ord: ['restaurant', 'museum', 'teater', 'orkester', 'biologi', 'matematikk', 'musikk', 'geografi', 'telefon', 'kamera', 'garderobe', 'kalkulator', 'trafikk', 'fantasi', 'rytme', 'ingeniør'] },
    { regel: 'Homofone ord (likt uttalt, ulikt skrevet)', fokus: [], ord: ['jul', 'hjul', 'hvis', 'vis', 'hver', 'vær', 'hun', 'hunn', 'han', 'hann', 'sand', 'sann', 'bord', 'bor', 'hard', 'har'] },
    { regel: 'Vanskelige ord', fokus: [], ord: ['egentlig', 'interessant', 'spesielt', 'forskjellig', 'nemlig', 'dessverre', 'akkurat', 'selvfølgelig', 'vanligvis', 'unnskyld', 'ordentlig', 'øyeblikk', 'annerledes', 'veldig', 'spennende', 'nysgjerrig'] },
    { regel: 'Endingene -het, -else og -ing', fokus: ['het', 'else', 'ing'], ord: ['frihet', 'sannhet', 'kjærlighet', 'hemmelighet', 'mulighet', 'nyhet', 'følelse', 'overraskelse', 'begynnelse', 'øvelse', 'oppdagelse', 'forklaring', 'tegning', 'åpning', 'regning', 'samling'] },
    { regel: 'Stumme bokstaver: h, d og v', fokus: ['hv', 'hj', 'ld', 'nd', 'rd', 'lv'], ord: ['hvilken', 'hvalross', 'hvitveis', 'hjelpsom', 'hjertelig', 'kveldsmat', 'holde', 'tilfeldig', 'under', 'binde', 'hende', 'landskap', 'verden', 'nordlys', 'ordbok', 'halvdel'] },
    { regel: 'Ord fra fagene', fokus: [], ord: ['addisjon', 'subtraksjon', 'multiplikasjon', 'divisjon', 'brøk', 'rektangel', 'trekant', 'omkrets', 'areal', 'kontinent', 'planet', 'vulkan', 'temperatur', 'energi', 'eksperiment', 'fortelling'] },
  ],
  7: [
    { regel: 'Fremmedord', fokus: [], ord: ['demokrati', 'miljø', 'økonomi', 'politikk', 'journalist', 'argument', 'konsekvens', 'kultur', 'religion', 'prosent', 'kommentar', 'teknologi', 'kvalitet', 'sjanger', 'symbol', 'statistikk'] },
    { regel: '-sjon', fokus: ['sjon'], ord: ['konklusjon', 'diskusjon', 'presentasjon', 'produksjon', 'konstruksjon', 'organisasjon', 'generasjon', 'kommunikasjon', 'inspirasjon', 'motivasjon', 'definisjon', 'refleksjon', 'ekspedisjon', 'revolusjon'] },
    { regel: 'Vanskelige ord', fokus: [], ord: ['imidlertid', 'dessuten', 'derimot', 'nødvendig', 'fortsatt', 'ettersom', 'forhåpentligvis', 'ansvarlig', 'beskjed', 'eventuelt', 'gjennomsnitt', 'forsiktig', 'interessert', 'tydelig', 'selvstendig', 'avgjørelse'] },
    { regel: 'Sterke verb i fortid', fokus: [], ord: ['gikk', 'lå', 'så', 'fikk', 'drakk', 'sang', 'sov', 'løp', 'fløy', 'satt', 'fant', 'tok', 'gjorde', 'visste', 'kom', 'var'] },
    { regel: 'Dobbel konsonant i lange ord', fokus: DOBBEL, ord: ['ettermiddag', 'rettferdig', 'tillatelse', 'innbygger', 'bestemmelse', 'konkurranse', 'kommune', 'allergi', 'sannsynligvis', 'spennende', 'fellesskap', 'trappetrinn', 'tommelfinger', 'oppmerksom'] },
    { regel: 'Ord fra samfunnsfag og naturfag', fokus: [], ord: ['atmosfære', 'klima', 'bærekraftig', 'befolkning', 'fornybar', 'solsystem', 'jordskjelv', 'nedbør', 'landbruk', 'grunnlov', 'rettighet', 'fotosyntese', 'næringskjede', 'oksygen'] },
  ],
};

import { unike } from '../lib/rng.js';
import { liste, linje, t } from '../lib/fmt.js';
import { urskive } from '../lib/svg.js';

const TIMER = { nb: ['tolv', 'ett', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv'], nn: ['tolv', 'eitt', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv'] };
const MIN = ['null', 'ett', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten', 'tjue'];

// Klokkeslett med ord, slik det sies på norsk: «ti på halv fire», «kvart over tre»
export function klokkeord(h, m, sprak = 'nb') {
  const T = TIMER[sprak === 'nn' ? 'nn' : 'nb'];
  const time = (x) => T[((x - 1) % 12) + 1];
  const nest = time(h + 1), denne = time(h);
  const mm = (x) => (x === 1 ? (sprak === 'nn' ? 'eitt minutt' : 'ett minutt') : MIN[x]);
  if (m === 0) return `${sprak === 'nn' ? 'klokka' : 'klokka'} ${denne}`;
  if (m === 15) return `kvart over ${denne}`;
  if (m === 30) return `halv ${nest}`;
  if (m === 45) return `kvart på ${nest}`;
  if (m < 20) return `${mm(m)} over ${denne}`;
  if (m < 30) return `${mm(30 - m)} på halv ${nest}`;
  if (m <= 40) return `${mm(m - 30)} over halv ${nest}`;
  return `${mm(60 - m)} på ${nest}`;
}

export const digital = (h, m) => `${h}:${String(m).padStart(2, '0')}`;
const dig24 = (min) => `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

export function varighet(min, sprak = 'nb') {
  const h = Math.floor(min / 60), m = min % 60;
  const deler = [];
  if (h) deler.push(`${h} ${sprak === 'nn' ? (h === 1 ? 'time' : 'timar') : h === 1 ? 'time' : 'timer'}`);
  if (m) deler.push(`${m} ${m === 1 ? 'minutt' : 'minutter'}`.replace('minutter', sprak === 'nn' ? 'minutt' : 'minutter'));
  return deler.join(' og ');
}

const NIVA = { 1: 'hel-halv', 2: 'kvart', 3: 'fem', 4: 'minutt', 5: 'minutt', 6: 'minutt', 7: 'minutt' };
const TYPE = { 1: 'les', 2: 'blandet', 3: 'blandet', 4: 'blandet', 5: 'tid', 6: 'tid', 7: 'tid' };

export default {
  id: 'klokka', fag: 'matte', navn: 'Klokka', trinn: [1, 7],
  felter: () => [
    { id: 'type', navn: 'Oppgaver', valg: [['les', 'Les klokka'], ['tegn', 'Tegn viserne'], ['blandet', 'Les og tegn'], ['tid', 'Tidsregning (digital)']] },
    { id: 'niva', navn: 'Klokkeslett', valg: [['hel-halv', 'Hele og halve timer'], ['kvart', 'Også kvart over og kvart på'], ['fem', 'Hvert femte minutt'], ['minutt', 'Alle minutter']] },
    { id: 'antall', navn: 'Antall', valg: [['6', '6'], ['9', '9'], ['12', '12']] },
  ],
  standard: (trinn) => ({ type: TYPE[trinn], niva: NIVA[trinn], antall: TYPE[trinn] === 'tid' ? '12' : '9' }),

  lag(rng, o) {
    const n = Number(o.antall);
    if (o.type === 'tid') {
      const items = unike(n, () => {
        if (rng.chance(0.5)) {
          const fra = rng.int(6 * 12, 20 * 12) * 5, lengde = rng.pick([15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 75, 90, 105, 120, 135, 150, 165]);
          return { slag: 'varighet', fra, til: fra + lengde, svar: lengde };
        }
        const fra = rng.int(6 * 12, 21 * 12) * 5, pluss = rng.pick([10, 15, 20, 25, 30, 40, 45, 50, 70, 80, 90, 100, 110, 125]);
        return { slag: 'senere', fra, pluss, svar: fra + pluss };
      }, (i) => `${i.slag}${i.fra}${i.til || i.pluss}`);
      return { tid: true, items };
    }
    const minutter = { 'hel-halv': [0, 30], kvart: [0, 15, 30, 45], fem: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], minutt: Array.from({ length: 60 }, (_, i) => i) }[o.niva];
    const items = unike(n, () => {
      const h = rng.int(1, 12), m = rng.pick(minutter);
      const slag = o.type === 'blandet' ? (rng.chance(0.5) ? 'les' : 'tegn') : o.type;
      return { slag, h, m };
    }, (i) => `${i.h}:${i.m}`);
    // blandet: les-oppgavene først, så tegn
    items.sort((a, b) => (a.slag === b.slag ? 0 : a.slag === 'les' ? -1 : 1));
    return { tid: false, items };
  },

  vis(d, o) {
    const sp = o.sprak === 'nn' ? 'nn' : 'nb';
    if (d.tid) {
      const s = (i, f) => i.slag === 'varighet'
        ? `${t(o, 'Fra', 'Frå')} ${dig24(i.fra)} ${t(o, 'til', 'til')} ${dig24(i.til)}. ${t(o, 'Hvor lang tid?', 'Kor lang tid?')} ${f ? `<b>${varighet(i.svar, sp)}</b>` : linje('l')}`
        : `${t(o, 'Klokka er', 'Klokka er')} ${dig24(i.fra)}. ${t(o, 'Hva er klokka om', 'Kva er klokka om')} ${varighet(i.pluss, sp)}? ${f ? `<b>${dig24(i.svar)}</b>` : linje('m')}`;
      return { tittel: t(o, 'Tidsregning', 'Tidsrekning'), instruks: t(o, 'Regn ut. Tegn gjerne en tidslinje som hjelp.', 'Rekn ut. Teikn gjerne ei tidslinje som hjelp.'), html: liste(d.items.map((i) => s(i, false)), 1, 'tidsliste'), fasit: liste(d.items.map((i) => s(i, true)), 1, 'tidsliste') };
    }
    const fasitTekst = (i) => `${klokkeord(i.h, i.m, sp)}<br><small>${digital(i.h, i.m)} / ${digital(i.h + 12 === 24 ? 0 : i.h + 12, i.m)}</small>`;
    const kort = (i, f) => i.slag === 'les'
      ? `<div class="urkort">${urskive(i.h, i.m)}<div class="urtekst">${f ? `<b>${fasitTekst(i)}</b>` : `${linje('l')}`}</div></div>`
      : `<div class="urkort">${urskive(i.h, i.m, { visere: f })}<div class="urtekst"><b class="tegnetid">${klokkeord(i.h, i.m, sp)}</b></div></div>`;
    const harTegn = d.items.some((i) => i.slag === 'tegn'), harLes = d.items.some((i) => i.slag === 'les');
    const instruks = harTegn && harLes ? t(o, 'Skriv hva klokka er under urskivene med visere. Tegn viserne på de tomme urskivene.', 'Skriv kva klokka er under urskivene med visarar. Teikn visarane på dei tomme urskivene.')
      : harTegn ? t(o, 'Tegn den lille viseren (timeviseren) og den store viseren (minuttviseren).', 'Teikn den vesle visaren (timevisaren) og den store visaren (minuttvisaren).')
      : t(o, 'Hva er klokka? Skriv svaret under hver klokke.', 'Kva er klokka? Skriv svaret under kvar klokke.');
    return { tittel: t(o, 'Hva er klokka?', 'Kva er klokka?'), instruks, html: liste(d.items.map((i) => kort(i, false)), 3, 'urliste'), fasit: liste(d.items.map((i) => kort(i, true)), 3, 'urliste') };
  },
};

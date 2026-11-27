import STAVEORD from '../data/staveord.js';
import { esc } from '../lib/fmt.js';

// Blank ut fokusbokstavene (rettskrivingspoenget). Uten fokus: én tilfeldig bokstav inne i ordet.
export function blankUt(rng, ord, fokus) {
  const treff = [];
  for (const f of fokus || []) { let i = ord.indexOf(f); while (i !== -1) { treff.push([i, f.length]); i = ord.indexOf(f, i + 1); } }
  let start, lengde;
  if (treff.length) [start, lengde] = rng.pick(treff);
  else if (ord.length <= 2) { start = rng.int(0, ord.length - 1); lengde = 1; }
  else { start = rng.int(1, ord.length - 2); lengde = 1; }
  if (lengde >= ord.length) lengde = ord.length - 1; // aldri hele ordet
  return { start, lengde };
}

export function stokk(rng, ord) {
  for (let i = 0; i < 30; i++) { const s = rng.shuffle([...ord]).join(''); if (s !== ord) return s; }
  return [...ord].reverse().join('');
}

const grupperFor = (trinn) => STAVEORD[trinn] || STAVEORD[3];

export default {
  id: 'staveord', fag: 'norsk', navn: 'Staveord', trinn: [1, 7],
  felter: (o) => [
    { id: 'gruppe', navn: 'Ordgruppe', valg: [['alle', 'Alle ordgruppene for trinnet'], ...grupperFor(o.trinn).map((g, i) => [String(i), g.regel])] },
    { id: 'type', navn: 'Oppgaver', valg: [['blandet', 'Blandet'], ['ove', 'Les – dekk til – skriv – sjekk'], ['mangler', 'Skriv bokstavene som mangler'], ['stokk', 'Stokkede bokstaver']] },
    { id: 'antall', navn: 'Antall ord', valg: [['8', '8'], ['10', '10'], ['12', '12'], ['15', '15']] },
  ],
  standard: (trinn) => ({ gruppe: 'alle', type: 'blandet', antall: trinn <= 2 ? '10' : '12' }),

  lag(rng, o) {
    const grupper = grupperFor(o.trinn);
    const valgt = o.gruppe === 'alle' ? grupper : [grupper[Number(o.gruppe)] || grupper[0]];
    const pool = valgt.flatMap((g) => g.ord.map((ord) => ({ ord, fokus: g.fokus, regel: g.regel })));
    const n = Math.min(Number(o.antall), pool.length);
    // Spre utvalget over gruppene
    const ord = o.gruppe === 'alle'
      ? rng.shuffle(valgt.flatMap((g) => rng.sample(g.ord, Math.ceil(n / valgt.length) + 1).map((w) => ({ ord: w, fokus: g.fokus, regel: g.regel })))).slice(0, n)
      : rng.sample(pool, n);
    const typer = o.type === 'blandet' ? ['ove', 'mangler', 'stokk'] : [o.type];
    const deler = typer.map((type) => {
      // stokk krever minst 3 bokstaver
      const liste = type === 'stokk' ? ord.filter((w) => w.ord.length >= 3) : ord;
      const utvalg = o.type === 'blandet' ? rng.sample(liste, Math.min(liste.length, { ove: 5, mangler: 6, stokk: 4 }[type])) : liste;
      return {
        type, items: utvalg.map((w) => type === 'mangler' ? { ord: w.ord, ...blankUt(rng, w.ord, w.fokus) } : type === 'stokk' ? { ord: w.ord, stokket: stokk(rng, w.ord) } : { ord: w.ord }),
      };
    });
    return { deler, ord: ord.map((w) => w.ord), regler: [...new Set(ord.map((w) => w.regel))] };
  },

  vis(d, o) {
    const TITLER = { ove: 'Les, dekk til, skriv og sjekk', mangler: 'Skriv bokstavene som mangler', stokk: 'Stokkede bokstaver' };
    const INS = {
      ove: 'Les ordet. Dekk det til, skriv det, og sjekk om du skrev riktig. Gjør det tre ganger.',
      mangler: 'Skriv bokstavene som mangler, så ordet blir riktig skrevet.',
      stokk: 'Bokstavene er stokket. Skriv ordet riktig.',
    };
    const del = (dd, f) => {
      if (dd.type === 'ove') {
        return `<table class="ovetabell"><thead><tr><th>Les</th><th>Skriv</th><th>Skriv</th><th>Skriv</th><th>✓</th></tr></thead><tbody>${dd.items.map((i) => `<tr><td class="ord">${esc(i.ord)}</td><td>${f ? esc(i.ord) : ''}</td><td></td><td></td><td></td></tr>`).join('')}</tbody></table>`;
      }
      if (dd.type === 'mangler') {
        return `<ol class="oppgaver k3 stor ordliste">${dd.items.map((i) => {
          const for_ = esc(i.ord.slice(0, i.start)), etter = esc(i.ord.slice(i.start + i.lengde)), midt = i.ord.slice(i.start, i.start + i.lengde);
          return `<li><span class="bokstaver">${for_}${f ? `<b class="fylt">${esc(midt)}</b>` : [...midt].map(() => '<span class="bokstavlinje"></span>').join('')}${etter}</span></li>`;
        }).join('')}</ol>`;
      }
      return `<ol class="oppgaver k1 stor ordliste">${dd.items.map((i) => `<li><span class="stokket">${esc(i.stokket.toUpperCase().split('').join(' '))}</span> ${f ? `<b>${esc(i.ord)}</b>` : '<span class="svarlinje l"></span>'}</li>`).join('')}</ol>`;
    };
    const flere = d.deler.length > 1;
    const blokk = (f) => d.deler.filter((dd) => !(f && dd.type === 'ove')).map((dd) => `${flere ? `<h3 class="delttittel">${TITLER[dd.type]}</h3><p class="delinstruks">${INS[dd.type]}</p>` : ''}${del(dd, f)}`).join('');
    const ordliste = `<h3 class="delttittel">Ordliste til diktat</h3><ol class="oppgaver k4 diktat">${d.ord.map((w) => `<li>${esc(w)}</li>`).join('')}</ol><p class="liten">Les ordene høyt én og én. Eleven skriver dem på et eget ark.</p>`;
    return {
      tittel: flere ? 'Staveord' : TITLER[d.deler[0].type],
      undertittel: d.regler.length === 1 ? d.regler[0] : null,
      instruks: flere ? 'Øv på ordene på tre måter.' : INS[d.deler[0].type],
      html: blokk(false),
      fasit: blokk(true) + ordliste,
    };
  },
};

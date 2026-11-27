// Ordleting: plasserer ord i et rutenett og fyller resten med tilfeldige bokstaver.
import { finnAlle, styggeIRutenett } from './filter.js';
import { esc } from './fmt.js';

export const RETNINGSSETT = {
  enkel: [[0, 1], [1, 0]], // bortover, nedover
  diagonal: [[0, 1], [1, 0], [1, 1]],
  alle: [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]],
};

// Bokstaver vektet omtrent som i vanlig tekst, så fyllet ser naturlig ut
const FYLL = { no: 'EEEEEEEEERRRRRNNNNNTTTTTSSSSSAAAAAIIIIILLLLLOOOOKKKKDDDDGGGMMMVVVFFFUUUPPPHHBBJJYYÅÅØØÆC', en: 'EEEEEEEEEEETTTTTTTTAAAAAAAOOOOOOOIIIIIINNNNNNSSSSSSHHHHHRRRRRDDDDLLLLCCCUUUMMMWWFFGGYYPPBBVKJXQZ' };

export function lagOrdleting(rng, ordliste, { str, retninger, alfabet = 'no' }) {
  let ord = [...new Set(ordliste.map((w) => w.toUpperCase()))].filter((w) => w.length <= str).sort((a, b) => b.length - a.length);
  // ord som står inni et annet ord (også baklengs) ville blitt funnet to ganger – dropp dem
  const inni = (w) => ord.some((v) => v !== w && (v.includes(w) || v.includes([...w].reverse().join(''))));
  for (let i = ord.length - 1; i >= 0; i--) if (inni(ord[i])) ord.splice(i, 1);
  for (let forsok = 0; forsok < 60; forsok++) {
    const grid = Array.from({ length: str }, () => Array(str).fill(''));
    const plassert = [];
    for (const w of ord) {
      const mulige = [];
      for (const [dr, dc] of retninger) for (let r = 0; r < str; r++) for (let c = 0; c < str; c++) {
        const er = r + dr * (w.length - 1), ec = c + dc * (w.length - 1);
        if (er < 0 || ec < 0 || er >= str || ec >= str) continue;
        let ok = true, overlapp = 0;
        for (let i = 0; i < w.length; i++) {
          const x = grid[r + dr * i][c + dc * i];
          if (x && x !== w[i]) { ok = false; break; }
          if (x) overlapp++;
        }
        if (ok && overlapp < w.length) mulige.push({ r, c, dr, dc, overlapp });
      }
      if (!mulige.length) continue;
      // litt preferanse for overlapp, men mest tilfeldig
      const m = rng.chance(0.3) && mulige.some((p) => p.overlapp) ? rng.pick(mulige.filter((p) => p.overlapp)) : rng.pick(mulige);
      for (let i = 0; i < w.length; i++) grid[m.r + m.dr * i][m.c + m.dc * i] = w[i];
      plassert.push({ ord: w, r: m.r, c: m.c, dr: m.dr, dc: m.dc });
    }
    // fyll og sjekk: hvert ord nøyaktig én gang, ingen stygge ord
    for (let f = 0; f < 30; f++) {
      const g = grid.map((rad) => rad.map((x) => x || rng.pick(FYLL[alfabet])));
      if (styggeIRutenett(g, plassert.map((p) => p.ord)).length) continue;
      if (plassert.some((p) => finnAlle(g, p.ord).length !== forventet(p.ord, retninger))) continue;
      return { grid: g, ord: plassert };
    }
  }
  throw new Error('Klarte ikke å lage ordleting');
}
// Et palindrom (f.eks. DAD) leses også baklengs, så det finnes to ganger i alle-retninger-rutenett
export const erPalindrom = (w) => w === [...w].reverse().join('');
const forventet = (w, retninger) => (erPalindrom(w) ? 2 : 1);

export function visRutenett(grid, markert = null) {
  const merk = new Set();
  if (markert) for (const p of markert) for (let i = 0; i < p.ord.length; i++) merk.add(`${p.r + p.dr * i},${p.c + p.dc * i}`);
  return `<table class="ordleting s${grid.length}">${grid.map((rad, r) => `<tr>${rad.map((x, c) => `<td${markert ? (merk.has(`${r},${c}`) ? ' class="treff"' : ' class="ikke"') : ''}>${esc(x)}</td>`).join('')}</tr>`).join('')}</table>`;
}

// Kryssord for barn: legger ord i kryss slik at alle henger sammen, uten utilsiktede bokstavrekker.
import { esc } from './fmt.js';

function prov(rng, ord, maks, maksB, maksH) {
  let box = [0, 0, 0, 0]; // minR maxR minC maxC
  const celler = new Map(); // "r,c" → { ch, v: bool, l: bool }
  const plassert = [];
  const get = (r, c) => celler.get(`${r},${c}`);
  const kanLegge = (w, r, c, dr, dc) => {
    // cellen før og etter må være tom
    if (get(r - dr, c - dc) || get(r + dr * w.length, c + dc * w.length)) return -1;
    let kryss = 0;
    for (let i = 0; i < w.length; i++) {
      const rr = r + dr * i, cc = c + dc * i, x = get(rr, cc);
      if (x) {
        if (x.ch !== w[i]) return -1;
        if (dr ? x.l : x.v) return -1; // allerede brukt i samme retning
        kryss++;
      } else {
        // naboer på tvers må være tomme (ellers lages nye «ord»)
        if (get(rr + dc, cc + dr) || get(rr - dc, cc - dr)) return -1;
      }
    }
    return kryss;
  };
  const legg = (w, r, c, dr, dc, hint) => {
    for (let i = 0; i < w.length; i++) {
      const k = `${r + dr * i},${c + dc * i}`;
      const x = celler.get(k) || { ch: w[i], v: false, l: false };
      if (dr) x.l = true; else x.v = true;
      celler.set(k, x);
    }
    plassert.push({ ord: w, hint, r, c, retning: dr ? 'l' : 'v' });
    box = [Math.min(box[0], r), Math.max(box[1], r + dr * (w.length - 1)), Math.min(box[2], c), Math.max(box[3], c + dc * (w.length - 1))];
  };
  const [forste, ...resten] = ord;
  legg(forste.ord, 0, 0, 0, 1, forste.hint);
  let igjen = resten.slice();
  for (let runde = 0; runde < 3 && igjen.length; runde++) {
    const ikke = [];
    for (const w of igjen) {
      if (plassert.length >= maks) break;
      const kandidater = [];
      for (const [key, x] of celler) {
        const [r0, c0] = key.split(',').map(Number);
        for (let i = 0; i < w.ord.length; i++) {
          if (w.ord[i] !== x.ch) continue;
          for (const [dr, dc] of [[0, 1], [1, 0]]) {
            const r = r0 - dr * i, c = c0 - dc * i;
            const k = kanLegge(w.ord, r, c, dr, dc);
            const er = r + dr * (w.ord.length - 1), ec = c + dc * (w.ord.length - 1);
            const passer = Math.max(box[1], er) - Math.min(box[0], r) < maksH && Math.max(box[3], ec) - Math.min(box[2], c) < maksB;
            if (k > 0 && passer) kandidater.push({ r, c, dr, dc, k });
          }
        }
      }
      if (!kandidater.length) { ikke.push(w); continue; }
      const best = Math.max(...kandidater.map((k) => k.k));
      const v = rng.pick(kandidater.filter((k) => k.k === best || rng.chance(0.3)));
      legg(w.ord, v.r, v.c, v.dr, v.dc, w.hint);
    }
    igjen = ikke;
  }
  // normaliser til 0-indeks
  const rs = [...celler.keys()].map((k) => +k.split(',')[0]), cs = [...celler.keys()].map((k) => +k.split(',')[1]);
  const r0 = Math.min(...rs), c0 = Math.min(...cs);
  const hoyde = Math.max(...rs) - r0 + 1, bredde = Math.max(...cs) - c0 + 1;
  return { plassert: plassert.map((p) => ({ ...p, r: p.r - r0, c: p.c - c0 })), hoyde, bredde };
}

export function lagKryssord(rng, ordliste, { antall, maksBredde = 15, maksHoyde = 15 }) {
  let best = null;
  for (let i = 0; i < 80; i++) {
    const utvalg = rng.shuffle(ordliste).sort((a, b) => b.ord.length - a.ord.length + (rng.next() - 0.5) * 4).slice(0, antall + 8);
    const res = prov(rng, utvalg.map((w) => ({ ...w, ord: w.ord.toUpperCase() })), antall, maksBredde, maksHoyde);
    if (res.bredde > maksBredde || res.hoyde > maksHoyde) continue;
    const score = res.plassert.length * 100 - (res.bredde * res.hoyde) / 4;
    if (!best || score > best.score) best = { ...res, score };
    if (res.plassert.length >= antall && i > 20) break;
  }
  if (!best) throw new Error('Klarte ikke å lage kryssord');
  return nummerer(best.plassert);
}

// Gi nummer i leserekkefølge og beregn rutenett
function nummerer(plassert) {
  const rs = plassert.flatMap((p) => [p.r, p.r + (p.retning === 'l' ? p.ord.length - 1 : 0)]);
  const cs = plassert.flatMap((p) => [p.c, p.c + (p.retning === 'v' ? p.ord.length - 1 : 0)]);
  const r0 = Math.min(...rs), c0 = Math.min(...cs);
  const ord = plassert.map((p) => ({ ...p, r: p.r - r0, c: p.c - c0 }));
  const hoyde = Math.max(...rs) - r0 + 1, bredde = Math.max(...cs) - c0 + 1;
  const grid = Array.from({ length: hoyde }, () => Array(bredde).fill(''));
  for (const p of ord) for (let i = 0; i < p.ord.length; i++) grid[p.r + (p.retning === 'l' ? i : 0)][p.c + (p.retning === 'v' ? i : 0)] = p.ord[i];
  const starter = [...new Set(ord.map((p) => `${p.r},${p.c}`))].map((k) => k.split(',').map(Number)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const nr = new Map(starter.map(([r, c], i) => [`${r},${c}`, i + 1]));
  for (const p of ord) p.nr = nr.get(`${p.r},${p.c}`);
  ord.sort((a, b) => a.nr - b.nr);
  return { grid, ord, hoyde, bredde };
}

export function visKryssord(k, fasit) {
  const nr = new Map(k.ord.map((p) => [`${p.r},${p.c}`, p.nr]));
  let h = `<table class="kryssord" style="--kol:${k.bredde}">`;
  for (let r = 0; r < k.hoyde; r++) {
    h += '<tr>';
    for (let c = 0; c < k.bredde; c++) {
      const ch = k.grid[r][c];
      if (!ch) { h += '<td class="tom"></td>'; continue; }
      const n = nr.get(`${r},${c}`);
      h += `<td>${n ? `<sup>${n}</sup>` : ''}${fasit ? esc(ch) : ''}</td>`;
    }
    h += '</tr>';
  }
  return h + '</table>';
}

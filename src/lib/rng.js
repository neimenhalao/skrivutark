// Frøbasert tilfeldighet: samme arkkode + samme valg gir alltid samme ark.
export const KODE_TEGN = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

export function hash(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^= h >>> 16) >>> 0;
}

export function lagRng(seed) {
  let a = typeof seed === 'number' ? seed >>> 0 : hash(String(seed));
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rng = {
    next,
    int: (min, max) => min + Math.floor(next() * (max - min + 1)), // begge inkludert
    pick: (arr) => arr[Math.floor(next() * arr.length)],
    chance: (p) => next() < p,
    shuffle(arr) {
      const a2 = arr.slice();
      for (let i = a2.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a2[i], a2[j]] = [a2[j], a2[i]]; }
      return a2;
    },
    sample: (arr, n) => rng.shuffle(arr).slice(0, n),
  };
  return rng;
}

export function nyKode(random = Math.random) {
  let s = '';
  for (let i = 0; i < 6; i++) s += KODE_TEGN[Math.floor(random() * KODE_TEGN.length)];
  return s;
}

export function kodeFra(str) {
  const r = lagRng(str);
  return nyKode(r.next);
}

export const gyldigKode = (k) => typeof k === 'string' && /^[A-Z2-9]{4,10}$/.test(k);

// Lag unike oppgaver: kaller lag() til vi har n unike (nøkkel), med grense for forsøk.
export function unike(n, lag, nokkel = (x) => JSON.stringify(x), maks = n * 200) {
  const sett = new Set(), ut = [];
  for (let i = 0; i < maks && ut.length < n; i++) {
    const x = lag();
    if (x == null) continue;
    const k = nokkel(x);
    if (sett.has(k)) continue;
    sett.add(k); ut.push(x);
  }
  // Hvis tallområdet er for lite for n unike, fyll på med gjentakelser
  for (let i = 0; ut.length < n && i < maks; i++) { const x = lag(); if (x != null) ut.push(x); }
  return ut;
}

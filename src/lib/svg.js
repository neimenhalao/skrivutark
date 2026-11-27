// SVG-tegninger til arkene: urskive, brøkfigurer, tallinje, mynter og sedler.
// Svart-hvitt-vennlige (skrives ut på vanlig skriver).
import { esc } from './fmt.js';

const f = (x) => Math.round(x * 100) / 100;

// Analog urskive. visere=false gir tom skive (eleven tegner viserne).
export function urskive(h, m, { visere = true, str = 150 } = {}) {
  const c = 50, r = 46;
  let s = `<svg class="ur" viewBox="0 0 100 100" width="${str}" height="${str}" role="img" aria-label="${visere ? `Urskive` : 'Tom urskive'}">`;
  s += `<circle cx="${c}" cy="${c}" r="${r}" fill="#fff" stroke="#000" stroke-width="2"/>`;
  for (let i = 0; i < 60; i++) {
    const a = (i * 6 * Math.PI) / 180, lang = i % 5 === 0;
    const r1 = lang ? r - 6 : r - 3;
    s += `<line x1="${f(c + Math.sin(a) * r1)}" y1="${f(c - Math.cos(a) * r1)}" x2="${f(c + Math.sin(a) * (r - 0.5))}" y2="${f(c - Math.cos(a) * (r - 0.5))}" stroke="#000" stroke-width="${lang ? 1.6 : 0.6}"/>`;
  }
  for (let i = 1; i <= 12; i++) {
    const a = (i * 30 * Math.PI) / 180;
    s += `<text x="${f(c + Math.sin(a) * (r - 13))}" y="${f(c - Math.cos(a) * (r - 13) + 3.6)}" text-anchor="middle" font-size="10.5" font-family="Andika, sans-serif">${i}</text>`;
  }
  if (visere) {
    const ha = (((h % 12) + m / 60) * 30 * Math.PI) / 180, ma = (m * 6 * Math.PI) / 180;
    s += `<line x1="${c}" y1="${c}" x2="${f(c + Math.sin(ha) * 22)}" y2="${f(c - Math.cos(ha) * 22)}" stroke="#000" stroke-width="4" stroke-linecap="round"/>`;
    s += `<line x1="${c}" y1="${c}" x2="${f(c + Math.sin(ma) * 35)}" y2="${f(c - Math.cos(ma) * 35)}" stroke="#000" stroke-width="2.2" stroke-linecap="round"/>`;
  }
  s += `<circle cx="${c}" cy="${c}" r="2.6" fill="#000"/></svg>`;
  return s;
}

// Brøkfigur: form 'sirkel' | 'stav' | 'rute' (rader×kolonner), n deler, k skraverte
export function brokfigur(form, n, k, { rader = 1, str = 90 } = {}) {
  const fyll = (i) => (i < k ? '#b8b8b8' : '#fff');
  if (form === 'sirkel') {
    const c = 50, r = 46;
    let s = `<svg class="figur" viewBox="0 0 100 100" width="${str}" height="${str}" aria-hidden="true">`;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * 2 * Math.PI, a1 = ((i + 1) / n) * 2 * Math.PI;
      const x0 = c + Math.sin(a0) * r, y0 = c - Math.cos(a0) * r, x1 = c + Math.sin(a1) * r, y1 = c - Math.cos(a1) * r;
      s += `<path d="M${c} ${c} L${f(x0)} ${f(y0)} A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${f(x1)} ${f(y1)} Z" fill="${fyll(i)}" stroke="#000" stroke-width="1.6"/>`;
    }
    return s + '</svg>';
  }
  const kol = n / rader, w = form === 'stav' ? 150 : kol * 24, h = form === 'stav' ? 36 : rader * 24;
  let s = `<svg class="figur" viewBox="-1 -1 ${w + 2} ${h + 2}" width="${f(form === 'stav' ? str * 1.6 : (str * w) / Math.max(w, h))}" height="${f(form === 'stav' ? str * 0.4 : (str * h) / Math.max(w, h))}" aria-hidden="true">`;
  const cw = w / kol, ch = h / rader;
  // Skraverte ruter spres litt i rutenett (ikke alltid første rad)
  for (let i = 0; i < n; i++) {
    const rr = Math.floor(i / kol), cc = i % kol;
    s += `<rect x="${f(cc * cw)}" y="${f(rr * ch)}" width="${f(cw)}" height="${f(ch)}" fill="${fyll(i)}" stroke="#000" stroke-width="1.6"/>`;
  }
  return s + '</svg>';
}

// Tallinje: ticks = antall intervaller, etiketter: {indeks: tekst}, piler: [indeks...] (pil med tom boks)
export function tallinje(antallIntervaller, etiketter, piler, { bredde = 640, fasit = null } = {}) {
  const x0 = 24, x1 = bredde - 24, y = 54, dx = (x1 - x0) / antallIntervaller;
  let s = `<svg class="tallinje" viewBox="0 0 ${bredde} 92" width="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">`;
  s += `<line x1="${x0 - 14}" y1="${y}" x2="${x1 + 14}" y2="${y}" stroke="#000" stroke-width="2"/>`;
  s += `<path d="M${x1 + 18} ${y} l-9 -5 v10 z" fill="#000"/><path d="M${x0 - 18} ${y} l9 -5 v10 z" fill="#000"/>`;
  for (let i = 0; i <= antallIntervaller; i++) {
    const x = x0 + i * dx, stor = i in etiketter;
    s += `<line x1="${f(x)}" y1="${y - (stor ? 9 : 6)}" x2="${f(x)}" y2="${y + (stor ? 9 : 6)}" stroke="#000" stroke-width="${stor ? 2 : 1.3}"/>`;
    if (stor) s += `<text x="${f(x)}" y="${y + 27}" text-anchor="middle" font-size="15" font-family="Andika, sans-serif">${esc(etiketter[i])}</text>`;
  }
  piler.forEach((i, j) => {
    const x = x0 + i * dx;
    s += `<path d="M${f(x)} ${y - 11} l-4.5 -8 h9 z" fill="#000"/><line x1="${f(x)}" y1="${y - 18}" x2="${f(x)}" y2="${y - 22}" stroke="#000" stroke-width="1.5"/>`;
    s += `<rect x="${f(x - 30)}" y="4" width="60" height="22" rx="3" fill="#fff" stroke="#000" stroke-width="1.4"/>`;
    if (fasit) s += `<text x="${f(x)}" y="20.5" text-anchor="middle" font-size="15" font-weight="bold" font-family="Andika, sans-serif">${esc(fasit[j])}</text>`;
  });
  return s + '</svg>';
}

// Norske mynter og sedler (forenklet, gjenkjennelige: hull i 1 og 5 kr)
export function penger(verdier) {
  return `<span class="penger">${verdier.map((v) => (v >= 50 ? seddel(v) : mynt(v))).join('')}</span>`;
}
function mynt(v) {
  const r = { 1: 21, 5: 25, 10: 23, 20: 28 }[v];
  const d = r * 2 + 4;
  const gull = v >= 10;
  let s = `<svg class="mynt" viewBox="0 0 ${d} ${d}" width="${d}" height="${d}" role="img" aria-label="${v} kroner">`;
  s += `<circle cx="${d / 2}" cy="${d / 2}" r="${r}" fill="${gull ? '#eee' : '#fff'}" stroke="#000" stroke-width="1.6"/>`;
  s += `<circle cx="${d / 2}" cy="${d / 2}" r="${r - 3}" fill="none" stroke="#000" stroke-width="0.6"${gull ? ' stroke-dasharray="2 1.5"' : ''}/>`;
  if (v <= 5) s += `<circle cx="${d / 2}" cy="${d / 2}" r="4" fill="#fff" stroke="#000" stroke-width="1.2"/><text x="${d / 2}" y="${d / 2 - 7.5}" text-anchor="middle" font-size="12.5" font-weight="bold" font-family="Andika, sans-serif">${v}</text>`;
  else s += `<text x="${d / 2}" y="${d / 2 + 6}" text-anchor="middle" font-size="18" font-weight="bold" font-family="Andika, sans-serif">${v}</text>`;
  return s + '</svg>';
}
function seddel(v) {
  let s = `<svg class="seddel" viewBox="0 0 84 44" width="96" height="50" role="img" aria-label="${v} kroner">`;
  s += `<rect x="1" y="1" width="82" height="42" rx="3" fill="#fff" stroke="#000" stroke-width="1.6"/><rect x="5" y="5" width="74" height="34" rx="2" fill="none" stroke="#000" stroke-width="0.6" stroke-dasharray="3 2"/>`;
  s += `<text x="42" y="28" text-anchor="middle" font-size="16" font-weight="bold" font-family="Andika, sans-serif">${v}</text><text x="70" y="36" text-anchor="middle" font-size="7" font-family="Andika, sans-serif">kr</text>`;
  return s + '</svg>';
}

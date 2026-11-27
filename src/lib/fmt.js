// Formatering og felles byggesteiner for arkene.
export const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Heltall med mellomrom som tusenskille (norsk), f.eks. 10 000. Firesifrede tall skrives uten skille (2500).
export function tall(n) {
  const neg = n < 0, s = String(Math.abs(n));
  const med = s.length > 4 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : s;
  return (neg ? '−' : '') + med;
}

// Desimaltall fra heltall med skala: desimal(125, 2) → "1,25"; fjerner ikke nuller (bruk trim for det)
export function desimal(verdi, siffer, trim = true) {
  const neg = verdi < 0, v = Math.abs(verdi);
  const f = 10 ** siffer;
  let hel = Math.floor(v / f), rest = String(v % f).padStart(siffer, '0');
  if (trim) rest = rest.replace(/0+$/, '');
  return (neg ? '−' : '') + tall(hel) + (rest ? ',' + rest : '');
}

// Kroner fra øre: 1250 → "12,50 kr", 1200 → "12 kr" (helt=false gir "12,00 kr")
export function kr(ore, alltidOre = false) {
  const k = Math.floor(ore / 100), o = ore % 100;
  if (!o && !alltidOre) return `${tall(k)} kr`;
  return `${tall(k)},${String(o).padStart(2, '0')} kr`;
}

export const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
export const lcm = (a, b) => (a / gcd(a, b)) * b;

export function forkort(t, n) { const g = gcd(t, n) || 1; return [t / g, n / g]; }

// HTML for stablet brøk
export const brok = (t, n) => `<span class="brok"><span>${t}</span><span>${n}</span></span>`;

// Brøk eller blandet tall (forkortet) som HTML. visUekte: vis også uekte form før blandet tall
export function brokSvar(t, n, { blandet = true } = {}) {
  [t, n] = forkort(t, n);
  if (n === 1) return String(t);
  if (blandet && t > n) {
    const hel = Math.floor(t / n), r = t % n;
    return `${brok(t, n)} = ${hel} ${brok(r, n)}`;
  }
  return brok(t, n);
}

export const linje = (bredde = 'm') => `<span class="svarlinje ${bredde}"></span>`;
export const boks = (cls = '') => `<span class="svarboks ${cls}"></span>`;

// Tekst på bokmål eller nynorsk
export const t = (opts, nb, nn) => (opts && opts.sprak === 'nn' && nn ? nn : nb);

// Nummerert oppgaveliste i kolonner
export function liste(items, kolonner = 3, cls = '') {
  return `<ol class="oppgaver k${kolonner} ${cls}">${items.map((h) => `<li>${h}</li>`).join('')}</ol>`;
}

import { desimal, t } from '../lib/fmt.js';
import { tallinje } from '../lib/svg.js';

// Alle verdier er heltall i skala 10^d (d = antall desimaler) for å unngå avrundingsfeil.
function linjeFor(rng, trinn) {
  const L = (start, steg, intervaller, d = 0, ekstra = []) => ({ start, steg, intervaller, d, ekstra });
  switch (trinn) {
    case 1: return L(0, 1, 10, 0, rng.chance(0.5) ? [5] : []);
    case 2: return rng.pick([
      () => L(0, 1, 20, 0, [5, 10, 15]),
      () => L(0, 10, 10, 0, [5]),
      () => { const s = rng.int(1, 8) * 10; return L(s, 1, 10, 0); },
    ])();
    case 3: return rng.pick([
      () => { const s = rng.int(0, 9) * 20; return L(s, 2, 10); },
      () => { const s = rng.int(0, 9) * 50; return L(s, 5, 10); },
      () => { const s = rng.int(0, 9) * 100; return L(s, 10, 10); },
    ])();
    case 4: return rng.pick([
      () => { const s = rng.int(0, 9) * 100; return L(s, 10, 10); },
      () => { const s = rng.int(0, 18) * 500; return L(s, 50, 10); },
      () => { const s = rng.int(0, 9) * 1000; return L(s, 100, 10); },
      () => L(0, 1000, 10, 0, [5]),
    ])();
    case 5: return rng.pick([
      () => L(rng.int(0, 9) * 10, 1, 10, 1), // f.eks. 3,0–4,0 i tideler
      () => L(0, 1, 20, 1, [10]), // 0–2
      () => L(rng.int(0, 9) * 10, 2, 10, 1), // 0,2-steg
    ])();
    case 6: return rng.pick([
      () => L(-10, 1, 20, 0, [5, 10, 15]),
      () => L(-5, 1, 10, 0),
      () => L(-50, 10, 10, 0, [5]),
      () => L(-100, 20, 10, 0, [5]),
    ])();
    default: return rng.pick([
      () => L(rng.int(0, 19) * 10, 1, 10, 2), // hundredeler, f.eks. 1,30–1,40
      () => L(rng.int(1, 9) * 100000, 10000, 10), // f.eks. 300 000–400 000
      () => L(0, 10000, 10, 0, [5]), // 0–100 000
      () => L(-20, 4, 10, 1), // −2,0 til 2,0
    ])();
  }
}

export default {
  id: 'tallinje', fag: 'matte', navn: 'Tallinje', trinn: [1, 7],
  felter: () => [{ id: 'antall', navn: 'Antall tallinjer', valg: [['4', '4'], ['5', '5'], ['6', '6']] }],
  standard: (trinn) => ({ antall: '6' }),

  lag(rng, o) {
    const n = Number(o.antall), linjer = [];
    const sett = new Set();
    for (let forsok = 0; linjer.length < n && forsok < 500; forsok++) {
      const l = linjeFor(rng, o.trinn);
      const k = `${l.start}/${l.steg}/${l.intervaller}`;
      if (sett.has(k) && forsok < 400) continue;
      sett.add(k);
      const etiketter = new Set([0, l.intervaller, ...l.ekstra]);
      // lavere trinn får flere hjelpetall
      if (o.trinn <= 2 && l.intervaller === 10) { etiketter.add(rng.int(2, 4)); }
      const ledige = Array.from({ length: l.intervaller - 1 }, (_, i) => i + 1).filter((i) => !etiketter.has(i));
      const gap = l.intervaller > 10 ? 3 : 2, piler = [];
      for (const i of rng.shuffle(ledige)) { if (piler.length < (o.trinn <= 1 ? 2 : 3) && piler.every((p) => Math.abs(p - i) >= gap)) piler.push(i); }
      piler.sort((a, b) => a - b);
      const verdi = (i) => l.start + i * l.steg;
      linjer.push({ ...l, etiketter: [...etiketter].sort((a, b) => a - b), piler, svar: piler.map(verdi) });
    }
    return { linjer };
  },

  vis(d, o) {
    const fmt = (l, v) => desimal(v, l.d, l.d === 1 || l.d === 2 ? false : true);
    const tegn = (l, f) => tallinje(l.intervaller, Object.fromEntries(l.etiketter.map((i) => [i, fmt(l, l.start + i * l.steg)])), l.piler, { fasit: f ? l.svar.map((v) => fmt(l, v)) : null });
    const blokk = (f) => `<ol class="oppgaver k1 tallinjer">${d.linjer.map((l) => `<li>${tegn(l, f)}</li>`).join('')}</ol>`;
    return {
      tittel: t(o, 'Tallinje', 'Tallinje'),
      instruks: t(o, 'Hvilket tall peker pilen på? Skriv tallet i boksen.', 'Kva tal peikar pila på? Skriv talet i boksen.'),
      html: blokk(false), fasit: blokk(true),
    };
  },
};

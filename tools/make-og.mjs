// Lager site/og.png (1200×630) til deling i sosiale medier. Kjøres lokalt ved behov: node tools/make-og.mjs
import sharp from 'sharp';
const linjer = ['7 · 6 = ____', '3/4 av 20 = ____', '48 : 6 = ____', 'kvart over tre'];
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#f7f4ec"/>
<g transform="rotate(4 900 330)"><rect x="740" y="70" width="380" height="520" rx="6" fill="#fff" stroke="#d6cfbf" stroke-width="3"/>
<text x="775" y="135" font-family="Andika, Segoe UI, sans-serif" font-size="34" font-weight="700" fill="#111">Oppgaver</text>
${linjer.map((l, i) => `<text x="775" y="${215 + i * 80}" font-family="Andika, Segoe UI, sans-serif" font-size="32" fill="#111">${i + 1}.  ${l}</text>`).join('')}
</g>
<g transform="translate(80 120)">
<path d="M0 0h70l28 28v100H0z" fill="#fff" stroke="#1d3b53" stroke-width="8" stroke-linejoin="round"/>
<path d="M20 50h52M20 72h52M20 94h32" stroke="#1d3b53" stroke-width="8" stroke-linecap="round"/>
<g transform="rotate(40 95 95)"><rect x="82" y="40" width="26" height="74" rx="4" fill="#f5c242" stroke="#1d3b53" stroke-width="6"/><path d="M82 114l13 22 13-22z" fill="#f3dcb4" stroke="#1d3b53" stroke-width="6" stroke-linejoin="round"/></g>
</g>
<text x="80" y="340" font-family="Andika, Segoe UI, sans-serif" font-size="92" font-weight="700" fill="#1d3b53">skriv<tspan fill="#d9542c">ut</tspan>ark</text>
<text x="80" y="420" font-family="Segoe UI, sans-serif" font-size="38" fill="#34556f">Gratis oppgaveark med fasit</text>
<text x="80" y="470" font-family="Segoe UI, sans-serif" font-size="38" fill="#34556f">Matte, norsk og engelsk · 1.–7. trinn</text>
<rect x="80" y="510" width="300" height="10" rx="5" fill="#f5c242"/>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('site/og.png');
console.log('site/og.png laget');

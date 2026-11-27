// Utskriftstest: skriver ut ark og fasit til PDF med Chrome uten vindu og sjekker at hvert ark
// og hver fasit får plass på én A4-side. Krever at `npm run serve` kjører (port 4340).
// Bruk: node tools/utskriftstest.mjs            (alle landingssider)
//       node tools/utskriftstest.mjs --alle     (hver generator × trinn × type, største antall)
import { execFile } from 'node:child_process';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { sider } from '../src/sider.js';
import { GENERATORER, normaliser, felter, tilParametre } from '../src/ark.js';

const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(existsSync);
const ut = path.join(os.tmpdir(), 'skrivutark-utskrift');
mkdirSync(ut, { recursive: true });
const BASE = process.env.TEST_URL || 'http://localhost:4340/skrivutark';

const jobber = [];
if (process.argv.includes('--alle')) {
  for (const gen of Object.values(GENERATORER)) {
    const side = sider.find((s) => s.gen === gen.id && s.hub) || sider.find((s) => s.gen === gen.id);
    for (let t = gen.trinn[0]; t <= gen.trinn[1]; t++) {
      const base = normaliser(gen, { trinn: t });
      const fe = felter(gen, base);
      const antall = fe.find((f) => f.id === 'antall');
      const typer = fe.find((f) => f.id === 'type')?.valg.map((v) => v[0]) || [null];
      for (const type of typer) {
        const o = normaliser(gen, { ...base, ...(type ? { type } : {}), ...(antall ? { antall: antall.valg.at(-1)[0] } : {}) });
        jobber.push({ navn: `${gen.id} t${t} ${type || ''} ${o.antall || ''}`, url: `${BASE}${side.slug}?${tilParametre(gen, o, 'MAKS1')}` });
      }
    }
  }
} else {
  for (const s of sider) jobber.push({ navn: s.slug, url: BASE + s.slug });
}

const pdf = (url, fil, w) => new Promise((ok) => execFile(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--user-data-dir=${path.join(ut, 'profil' + w)}`, `--print-to-pdf=${fil}`, url], () => ok()));
const FILTER = process.env.FILTER ? new RegExp(process.env.FILTER) : null;
if (FILTER) for (let i = jobber.length - 1; i >= 0; i--) if (!FILTER.test(jobber[i].navn)) jobber.splice(i, 1);
const feil = [];
const ko = jobber.flatMap((j, i) => ['ark', 'fasit'].map((hva) => ({ ...j, hva, fil: path.join(ut, `${i}-${hva}.pdf`) })));
async function arbeider(_, w) {
  while (ko.length) {
    const j = ko.shift();
    await pdf(j.url + (j.hva === 'fasit' ? (j.url.includes('?') ? '&' : '?') + 'utskrift=fasit' : ''), j.fil, w);
    const n = existsSync(j.fil) ? (readFileSync(j.fil, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length : 0;
    if (n !== 1) { feil.push(`${n} sider  ${j.hva.padEnd(5)} ${j.navn}  ${j.url}`); console.log('FEIL', n, j.hva, j.navn); }
  }
}
await Promise.all(Array.from({ length: 6 }, arbeider));
console.log(feil.length ? `\n${feil.length} av ${jobber.length * 2} utskrifter går over mer enn én side:\n${feil.join('\n')}` : `\nAlle ${jobber.length * 2} utskrifter får plass på én A4-side.`);
process.exitCode = feil.length ? 1 : 0;

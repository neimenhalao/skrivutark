// Stavekontroll mot Bokmålsordboka/Nynorskordboka (ord.uib.no, UiB og Språkrådet).
// Et ord godtas hvis det finnes som oppslagsord eller som bøyningsform.
// Bruk:  node tools/ordsjekk.mjs            (sjekker alle norske ord i src/data)
//        node tools/ordsjekk.mjs ord1 ord2  (sjekker bare disse)
//        node tools/ordsjekk.mjs --nn ord   (nynorsk)
// Svar lagres i data/ordsjekk-cache.json, så hvert ord slås opp bare én gang.
// Kjør fra PowerShell hvis Bash-sandkassen ikke når nettet.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const CACHE = 'data/ordsjekk-cache.json';
const args = process.argv.slice(2);
const dict = args.includes('--nn') ? 'nn' : 'bm';
let words = args.filter((a) => !a.startsWith('--'));

if (!words.length) {
  const { norskeOrd } = await import(pathToFileURL(path.resolve('src/data/alle-ord.js')).href);
  words = norskeOrd();
}
words = [...new Set(words.map((w) => w.trim().toLowerCase()).filter(Boolean))];

await mkdir('data', { recursive: true });
let cache = {};
try { cache = JSON.parse(await readFile(CACHE, 'utf8')); } catch {}

const key = (w) => `${dict}:${w}`;
async function lookup(w) {
  const url = `https://ord.uib.no/api/suggest?q=${encodeURIComponent(w)}&dict=${dict}&n=20&include=ei`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'skrivutark-ordsjekk/1.0' } });
      if (!res.ok) throw new Error(res.status);
      const j = await res.json();
      const exact = (j.a?.exact || []).some(([s]) => s.toLowerCase() === w);
      const infl = (j.a?.inflect || []).length > 0;
      return exact || infl;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
  return null; // ukjent (nettfeil)
}

const todo = words.filter((w) => !(key(w) in cache));
let i = 0;
for (const w of todo) {
  const ok = await lookup(w);
  if (ok !== null) cache[key(w)] = ok;
  if (++i % 50 === 0) { await writeFile(CACHE, JSON.stringify(cache, null, 0)); console.log(`… ${i}/${todo.length}`); }
  await new Promise((r) => setTimeout(r, 120));
}
await writeFile(CACHE, JSON.stringify(Object.fromEntries(Object.entries(cache).sort()), null, 0));

const missing = words.filter((w) => cache[key(w)] === false);
const unknown = words.filter((w) => !(key(w) in cache));
console.log(`Sjekket ${words.length} ord (${dict}). Ikke funnet: ${missing.length}. Ikke slått opp (nettfeil): ${unknown.length}.`);
if (missing.length) console.log('IKKE FUNNET:\n' + missing.join('\n'));
if (unknown.length) console.log('NETTFEIL:\n' + unknown.join('\n'));
process.exitCode = missing.length ? 1 : 0;

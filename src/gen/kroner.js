import { unike } from '../lib/rng.js';
import { liste, linje, kr, tall, t } from '../lib/fmt.js';
import { penger } from '../lib/svg.js';

// Varer med realistiske prisområder i hele kroner [min, maks]
export const VARER = [
  ['et eple', 'eit eple', 4, 9], ['en banan', 'ein banan', 3, 8], ['en blyant', 'ein blyant', 5, 15], ['et viskelær', 'eit viskelêr', 6, 19],
  ['en linjal', 'ein linjal', 12, 29], ['en kartong melk', 'ein kartong mjølk', 19, 29], ['et brød', 'eit brød', 25, 45], ['en is', 'ein is', 15, 39],
  ['en saft', 'ein saft', 15, 35], ['en ball', 'ein ball', 39, 129], ['ei bok', 'ei bok', 79, 199], ['et par sokker', 'eit par sokkar', 29, 79],
  ['en tegneblokk', 'ei teikneblokk', 29, 59], ['en pakke fargestifter', 'ein pakke fargestiftar', 35, 89], ['en yoghurt', 'ein yoghurt', 12, 22],
  ['et hoppetau', 'eit hoppetau', 39, 99], ['et ark med klistremerker', 'eit ark med klistremerke', 10, 29], ['en appelsin', 'ein appelsin', 5, 10],
  ['en frisbee', 'ein frisbee', 49, 119], ['ei lue', 'ei lue', 99, 199],
];
const MYNTER = { 1: [1, 5, 10], 2: [1, 5, 10, 20, 50], 3: [1, 5, 10, 20, 50, 100, 200] };
const TYPE = { 1: 'tell', 2: 'blandet', 3: 'blandet', 4: 'blandet', 5: 'blandet', 6: 'blandet', 7: 'blandet' };

export default {
  id: 'kroner', fag: 'matte', navn: 'Kroner og øre', trinn: [1, 7],
  felter: () => [
    { id: 'type', navn: 'Oppgaver', valg: [['blandet', 'Blandet for trinnet'], ['tell', 'Tell pengene'], ['handle', 'Handle'], ['veksle', 'Penger tilbake'], ['ore', 'Kroner og øre (gjør om)']] },
    { id: 'antall', navn: 'Antall', valg: [['6', '6'], ['8', '8'], ['10', '10']] },
  ],
  standard: (trinn) => ({ type: TYPE[trinn], antall: trinn <= 2 ? '10' : '8' }),

  lag(rng, o) {
    const tr = o.trinn, n = Number(o.antall);
    const medOre = tr >= 4;
    const pris = (v) => {
      let p = rng.int(v[2], v[3]) * 100;
      if (medOre) p += rng.pick([0, 50, 50, 90, 90, 25, 75, 40]); // øre i priser fra 4. trinn
      if (medOre && rng.chance(0.25)) p -= 100; // f.eks. 18,90
      return Math.max(p, 100);
    };
    const typer = o.type !== 'blandet' ? [o.type]
      : tr <= 1 ? ['tell'] : tr === 2 ? ['tell', 'handle'] : tr === 3 ? ['handle', 'veksle'] : tr === 4 ? ['handle', 'veksle', 'ore'] : ['handle', 'veksle', 'ore'];
    const tak = tr <= 1 ? 3000 : tr === 2 ? 10000 : 50000; // i øre
    const lag = (type) => () => {
      if (type === 'tell') {
        const sett = MYNTER[Math.min(tr, 3)];
        const k = rng.int(2, tr <= 1 ? 5 : 6);
        const v = Array.from({ length: k }, () => rng.pick(sett)).sort((a, b) => b - a);
        const sum = v.reduce((a, b) => a + b, 0);
        if (sum * 100 > tak) return null;
        return { type, verdier: v, svar: sum * 100 };
      }
      if (type === 'handle') {
        const ant = tr <= 2 ? 2 : rng.int(2, 3);
        const valgte = rng.sample(VARER, ant).map((v) => ({ v: v[0], vnn: v[1], pris: pris(v), stk: tr >= 5 && rng.chance(0.5) ? rng.int(2, 5) : 1 }));
        const sum = valgte.reduce((a, x) => a + x.pris * x.stk, 0);
        if (sum > tak) return null;
        return { type, varer: valgte, svar: sum };
      }
      if (type === 'veksle') {
        const v = rng.pick(VARER), p = pris(v);
        const betal = [20, 50, 100, 200, 500].map((x) => x * 100).find((x) => x > p && (x > p * 1.2 || x >= 50000));
        if (!betal || betal > Math.max(tak, 20000)) return null;
        return { type, v: v[0], vnn: v[1], pris: p, betal, svar: betal - p };
      }
      if (type === 'ore') {
        const tilOre = rng.chance(0.5);
        const ore = rng.int(1, 60) * 100 + rng.pick([0, 10, 25, 50, 75, 90, 5, 45]);
        return { type, tilOre, ore, svar: ore };
      }
    };
    const per = Math.ceil(n / typer.length);
    const items = typer.flatMap((ty) => unike(per, lag(ty), (i) => JSON.stringify(i))).slice(0, n);
    return { items, medOre };
  },

  vis(d, o) {
    const nn = o.sprak === 'nn';
    const fyll = (f, s, cls = 'm') => (f ? `<b>${s}</b>` : linje(cls));
    const s = (i, f) => {
      if (i.type === 'tell') return `<div class="tellpenger">${penger(i.verdier)}<span>${t(o, 'Til sammen:', 'Til saman:')} ${fyll(f, kr(i.svar), 's')} kr</span></div>`.replace(/ kr<\/b> kr/, ' kr</b>');
      if (i.type === 'handle') {
        const ting = i.varer.map((x) => `${x.stk > 1 ? `${x.stk} ${t(o, 'stk.', 'stk.')} ${(nn ? x.vnn : x.v).replace(/^(en|et|ei|ein|eit) /, '')} ${t(o, 'à', 'à')} ${kr(x.pris, d.medOre)}` : `${nn ? x.vnn : x.v} ${t(o, 'til', 'til')} ${kr(x.pris, d.medOre)}`}`);
        const tekst = ting.length === 2 ? ting.join(` ${t(o, 'og', 'og')} `) : `${ting.slice(0, -1).join(', ')} ${t(o, 'og', 'og')} ${ting.at(-1)}`;
        return `${t(o, 'Du kjøper', 'Du kjøper')} ${tekst}. ${t(o, 'Hvor mye må du betale?', 'Kor mykje må du betale?')} ${fyll(f, kr(i.svar, d.medOre))}`;
      }
      if (i.type === 'veksle') return `${t(o, 'Du kjøper', 'Du kjøper')} ${nn ? i.vnn : i.v} ${t(o, 'til', 'til')} ${kr(i.pris, d.medOre)} ${t(o, 'og betaler med', 'og betaler med')} ${kr(i.betal)}. ${t(o, 'Hvor mye får du tilbake?', 'Kor mykje får du att?')} ${fyll(f, kr(i.svar, d.medOre))}`;
      if (i.type === 'ore') return i.tilOre ? `${kr(i.ore, true)} = ${fyll(f, tall(i.ore), 's')} øre` : `${tall(i.ore)} øre = ${fyll(f, kr(i.ore, true).replace(' kr', ''), 's')} kr`;
    };
    const tell = d.items.every((i) => i.type === 'tell');
    const kol = tell ? 2 : d.items.every((i) => i.type === 'ore') ? 2 : 1;
    return {
      tittel: d.medOre ? t(o, 'Kroner og øre', 'Kroner og øre') : t(o, 'Regn med penger', 'Rekn med pengar'),
      instruks: tell ? t(o, 'Tell pengene. Hvor mange kroner er det til sammen?', 'Tel pengane. Kor mange kroner er det til saman?') : d.medOre ? t(o, 'Regn ut. Husk at 1 krone er 100 øre.', 'Rekn ut. Hugs at 1 krone er 100 øre.') : t(o, 'Regn ut.', 'Rekn ut.'),
      html: liste(d.items.map((i) => s(i, false)), kol, 'tekstoppgaver'),
      fasit: liste(d.items.map((i) => s(i, true)), kol, 'tekstoppgaver'),
    };
  },
};

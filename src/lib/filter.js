// Ord som ikke skal dukke opp tilfeldig i et ordletingsrutenett for barn (norsk og engelsk).
// Fyllbokstavene sjekkes i alle retninger; finnes et av disse, lages fyllet på nytt.
export const STYGGE = [
  'KUK', 'PIKK', 'FITTE', 'PULE', 'KNULL', 'FAEN', 'HORE', 'DRITT', 'JÆVEL', 'SATAN', 'HELVETE', 'PISS', 'RÆV', 'RASSHØL',
  'NEGER', 'NIGGER', 'NAZI', 'HITLER', 'SEX', 'PORNO', 'PUPPER',
  'FUCK', 'SHIT', 'CUNT', 'DICK', 'COCK', 'ASS', 'SLUT', 'WHORE', 'BITCH', 'FAG',
];

const RETNINGER = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];

// Finn alle forekomster av ord i rutenettet (alle 8 retninger)
export function finnAlle(grid, ord) {
  const R = grid.length, C = grid[0].length, treff = [];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    if (grid[r][c] !== ord[0]) continue;
    for (const [dr, dc] of RETNINGER) {
      let ok = true;
      for (let i = 1; i < ord.length; i++) {
        const rr = r + dr * i, cc = c + dc * i;
        if (rr < 0 || cc < 0 || rr >= R || cc >= C || grid[rr][cc] !== ord[i]) { ok = false; break; }
      }
      if (ok) treff.push({ r, c, dr, dc });
    }
  }
  return treff;
}

// Stygge ord som finnes i rutenettet, unntatt de som er del av et ord vi har plassert med vilje
export function styggeIRutenett(grid, tillatt = []) {
  const ut = [];
  for (const s of STYGGE) {
    if (tillatt.some((w) => w.includes(s) || [...w].reverse().join('').includes(s))) continue;
    if (finnAlle(grid, s).length) ut.push(s);
  }
  return ut;
}

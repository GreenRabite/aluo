/**
 * WORD GAMES
 */
const CONNECTIONS = {
  gameName: "Connections",
  url: "https://www.nytimes.com/games/connections",
  description: "Group words that share a common thread.",
};
const MINI = {
  gameName: "Crossword Mini",
  url: "https://www.nytimes.com/crosswords/game/mini",
  description: "A bite-sized crossword puzzle.",
};
const WORLDLE = {
  gameName: "Worlde",
  url: "https://www.nytimes.com/games/wordle/index.html",
  description: "Guess the five-letter word.",
};
const STRANDS = {
  gameName: "Strands",
  url: "https://www.nytimes.com/games/strands",
  description: "Themed crossword puzzle.",
};
const PINPOINT = {
  gameName: "Pinpoint",
  url: "https://www.linkedin.com/games/pinpoint/",
  description: "Guess the category",
};
const WAFFLES = {
  gameName: "Waffles",
  url: "https://wafflegame.net/daily",
  description: "Solve the word waffle.",
};

/**
 * TRIVIA GAMES
 */

const DAILY_DOZEN = {
  gameName: "Daily Dozen",
  url: "https://dailydozentrivia.com/",
  description: "Barstool Trivia Game.",
};

const CROSSCLIMB = {
  gameName: "Crossclimb",
  url: "https://www.linkedin.com/games/crossclimb/",
  description: "Unlock a trivia ladder.",
};

/**
 * PUZZLES
 */

const QUEENS = {
  gameName: "Queens",
  url: "https://www.linkedin.com/games/queens/",
  description: "Find the queen for each area.",
};

/**
 * GRID GAMES
 */

const BASKETBALL = {
  gameName: "Basketball",
  url: "https://www.immaculategrid.com/basketball/mens",
  description: "Basketball grid game.",
};
const BASEBALL = {
  gameName: "Baseball",
  url: "https://www.immaculategrid.com/",
  description: "Baseball grid game.",
};

export const WORD_GAMES = [CONNECTIONS, MINI, WORLDLE, STRANDS, PINPOINT, WAFFLES];
export const TRIVIA = [DAILY_DOZEN, CROSSCLIMB];
export const PUZZLES = [QUEENS]
export const GRIDS = [BASKETBALL, BASEBALL];

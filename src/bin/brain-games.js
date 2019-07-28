#!/usr/bin/env node
import { welcome, askAnswer } from '../games/lib';
import primeGame from '../games/prime';
import progressionGame from '../games/progression';
import evenGame from '../games/even';
import calcGame from '../games/calc';
import gcdGame from '../games/gcd';

const listGame = `
  1. Play Brain-even.
  2. Play Brain-calc.
  3. Play Brain-progression.
  4. Play Brain-gcd.
  5. Play Brain-prime.
  6. Select this, to exit.
`;
welcome(`\nPlease select a game:\n${listGame}`);
const answer = askAnswer();
switch (answer) {
  case '1':
    evenGame();
    break;
  case '2':
    calcGame();
    break;
  case '3':
    progressionGame();
    break;
  case '4':
    gcdGame();
    break;
  case '5':
    primeGame();
    break;
  default:
    break;
}

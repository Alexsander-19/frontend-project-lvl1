import readlineSync from 'readline-sync';
import playEven from './games/even';
import playCalc from './games/calc';
import playGcd from './games/gcd';
import playPrime from './games/prime';
import playProgression from './games/progression';

const gameList = `
  1: Brain Even.
  2: Brain Calc.
  3: Brain Gcd.
  4: Brain Prime.
  5: Brain Progression.
  6: Exit.
  `;
const launchGame = () => {
  const userSelection = readlineSync.question(`Please select a game\n ${gameList}`);
  switch (userSelection) {
    case '1':
      playEven();
      break;
    case '2':
      playCalc();
      break;
    case '3':
      playGcd();
      break;
    case '4':
      playPrime();
      break;
    case '5':
      playProgression();
      break;
    default:
      break;
  }
};

export default launchGame;

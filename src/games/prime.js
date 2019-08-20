
import genNum from '../utils';
import palyGame from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const primeData = () => {
  const gameData = {};
  const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0 && num > 2) {
        return 'no';
      }
    }
    return 'yes';
  };
  gameData.question = genNum();
  gameData.answer = isPrime(gameData.question);
  return gameData;
};

export default () => palyGame(description, primeData);

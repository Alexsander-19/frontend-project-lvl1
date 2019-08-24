
import { generationNumber, answerText } from '../utils';
import playGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0 && num > 2) {
      return false;
    }
  }
  return true;
};
const primeData = () => {
  const question = generationNumber();
  const answer = answerText(isPrime(question));
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, primeData);

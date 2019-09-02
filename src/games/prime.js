import generationNumber from '../utils';
import playGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number > 2) {
      return false;
    }
  }
  return true;
};
const getData = () => {
  const question = generationNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, getData);

import { generationNumber } from '../utils';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  let counter = number1 > number2 ? number2 : number1;
  const result = 1;
  while (counter > 1) {
    if (number1 % counter === 0 && number2 % counter === 0) {
      return counter;
    }
    counter -= 1;
  }
  return result;
};
function gcdData() {
  const number1 = generationNumber(10, 30);
  const number2 = generationNumber(10, 25);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  const gameData = { question, answer };
  return gameData;
}

export default () => playGame(description, gcdData);

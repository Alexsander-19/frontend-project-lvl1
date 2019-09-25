import getRandomNumber from '../utils';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  let counter = number1 > number2 ? number2 : number1;
  for (counter; counter > 1; counter -= 1) {
    if (number1 % counter === 0 && number2 % counter === 0) {
      break;
    }
  }
  return counter;
};
function getData() {
  const number1 = getRandomNumber(10, 30);
  const number2 = getRandomNumber(10, 25);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  const gameData = { question, answer };
  return gameData;
}

export default () => playGame(description, getData);

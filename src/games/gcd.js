
import genNum from '../utils';
import playGame from '../index';

const description = 'Find the greatest common divisor of given numbers.\n';
function gcdData() {
  const gameData = {};
  const getGcd = (num1, num2) => {
    let counter = num1 > num2 ? num2 : num1;
    const result = 1;
    while (counter > 1) {
      if (num1 % counter === 0 && num2 % counter === 0) {
        return counter;
      }
      counter -= 1;
    }
    return result;
  };
  const num1 = genNum(10, 30);
  const num2 = genNum(10, 25);
  gameData.question = `${num1} ${num2}`;
  gameData.answer = getGcd(num1, num2).toString();
  return gameData;
}

export default () => playGame(description, gcdData);

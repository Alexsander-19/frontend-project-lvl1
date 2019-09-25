import getRandomNumber from '../utils';
import playGame from '..';

const description = 'What is the result of the expression?';
const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};
const operators = ['+', '-', '*'];
const getData = () => {
  const number1 = getRandomNumber(5, 10);
  const number2 = getRandomNumber(5, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(operator, number1, number2).toString();
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, getData);

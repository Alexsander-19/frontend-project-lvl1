import { generationNumber } from '../utils';
import playGame from '..';

const description = 'What is the result of the expression?';
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      return num1 * num2;
  }
};
const operators = ['+', '-', '*'];
const generationOperator = (arr, randomNumber) => arr[randomNumber];
const calcData = () => {
  const number1 = generationNumber(5, 10);
  const number2 = generationNumber(5, 10);
  const operator = generationOperator(operators, generationNumber(1, 3));
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, operator, number2).toString();
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, calcData);

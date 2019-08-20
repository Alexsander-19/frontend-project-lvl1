
import genNum from '../utils';
import playGame from '../index';

const description = 'What is the result of the expression?\n';
const calcData = () => {
  const gameData = {};
  const mathOperation = (str) => {
    const arr = str.split(' ');
    switch (arr[1]) {
      case '-':
        return Number(arr[0]) - Number(arr[2]);
      case '+':
        return Number(arr[0]) + Number(arr[2]);
      default:
        return Number(arr[0]) * Number(arr[2]);
    }
  };
  const genOperator = () => {
    const arrOperator = ['+', '-', '*'];
    return arrOperator[Math.floor(Math.random() * 3)];
  };
  gameData.question = `${genNum(5, 10)} ${genOperator()} ${genNum(5, 10)}`;
  gameData.answer = mathOperation(gameData.question).toString();
  return gameData;
};

export default () => playGame(description, calcData);

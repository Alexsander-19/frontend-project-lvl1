import { generationNumber } from '../utils';
import playGame from '..';

const description = 'What number is missing in the progression?';
const generationArr = (n = 10) => {
  const arr = [];
  for (let i = 0; i <= n; i += 1) {
    arr.push(i);
  }
  return arr;
};
const primeData = () => {
  const arr = generationArr();
  const num = generationNumber(1, 9);
  const newArr = arr.splice(num, 1, '..');
  const question = `${arr.join(' ')}`;
  const answer = newArr.join('');
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, primeData);

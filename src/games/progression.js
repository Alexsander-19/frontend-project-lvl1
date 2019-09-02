import generationNumber from '../utils';
import playGame from '..';

const description = 'What number is missing in the progression?';
const generationArray = (start, step, end) => {
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};
const start = 1;
const end = 10;
const step = 1;
const getData = () => {
  const array = generationArray(start, step, end);
  const number = generationNumber(start, end);
  const newArr = array.splice(number, 1, '..');
  const question = array.join(' ');
  const answer = newArr.join('');
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, getData);

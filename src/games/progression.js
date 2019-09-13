import getRandomNumber from '../utils';
import playGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const maxProgressionStart = 10;
const maxProgressionStep = 5;
const editProgression = (start, step, length) => {
  const array = [];
  let counter = start;
  array.push(counter);
  for (let i = 1; i < length; i += 1) {
    array.push(counter + step);
    counter += step;
  }
  return array;
};
const getData = () => {
  const progressionStart = getRandomNumber(1, maxProgressionStart);
  const progressionStep = getRandomNumber(1, maxProgressionStep);
  const array = editProgression(progressionStart, progressionStep, progressionLength);
  const number = getRandomNumber(1, progressionLength);
  const newArray = array.splice(number, 1, '..');
  const question = array.join(' ');
  const answer = newArray.join('');
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, getData);

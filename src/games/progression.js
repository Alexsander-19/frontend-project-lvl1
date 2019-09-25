import getRandomNumber from '../utils';
import playGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const maxProgressionStart = 10;
const maxProgressionStep = 5;
const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};
const getData = () => {
  const progressionStart = getRandomNumber(1, maxProgressionStart);
  const progressionStep = getRandomNumber(1, maxProgressionStep);
  const progression = getProgression(progressionStart, progressionStep, progressionLength);
  const progressionItem = getRandomNumber(1, progressionLength);
  const newProgression = progression.splice(progressionItem, 1, '..');
  const question = progression.join(' ');
  const answer = newProgression.join('');
  const gameData = { question, answer };
  return gameData;
};

export default () => playGame(description, getData);

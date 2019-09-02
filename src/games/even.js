import generationNumber from '../utils';
import palyGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;
const getData = () => {
  const question = generationNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  const gameData = { question, answer };
  return gameData;
};

export default () => palyGame(description, getData);

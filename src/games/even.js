import { generationNumber, answerText } from '../utils';
import palyGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;
const evenData = () => {
  const question = generationNumber();
  const answer = answerText(isEven(question));
  const gameData = { question, answer };
  return gameData;
};

export default () => palyGame(description, evenData);

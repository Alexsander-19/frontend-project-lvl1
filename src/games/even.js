import genNum from '../utils';
import palyGame from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const evenData = () => {
  const gameData = {};
  const isEven = (n) => {
    if (n % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  gameData.question = genNum();
  gameData.answer = isEven(gameData.question);
  return gameData;
};

export default () => palyGame(description, evenData);

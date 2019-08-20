
import genNum from '../utils';
import playGame from '../index';

const description = 'What number is missing in the progression?\n';
const primeData = () => {
  const gameData = {};
  const genArr = (n = 10) => {
    const arr = [];
    for (let i = 0; i <= n; i += 1) {
      arr.push(i);
    }
    return arr;
  };
  const arr = genArr();
  const num = genNum(1, 9);
  const newArr = arr.splice(num, 1, '..');
  gameData.question = `${arr.join(' ')}`;
  gameData.answer = newArr.join('');
  return gameData;
};

export default () => playGame(description, primeData);

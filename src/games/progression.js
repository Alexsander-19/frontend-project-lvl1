import {
  sayHi, askName, genNum, askAnswer, sayQuestion, sayCongratulation, sayCorrect, wrong,
  genArr, gameInfo,
} from './lib';

export default () => {
  gameInfo('What number is missing in the progression?\n');
  const name = askName();
  sayHi(name);
  const checkAnswer = (n, num, c) => {
    const arr = genArr(10);
    let counter = c;
    const newArr = arr.splice(num, 1, '..');
    sayQuestion(`${arr.join(' ')}`);
    const answer = askAnswer();
    if (newArr.join('') === answer && counter === 2) {
      sayCorrect();
      return sayCongratulation(name);
    }
    if (newArr.join('') === answer && counter < 2) {
      sayCorrect();
      counter += 1;
      return checkAnswer(name, genNum(1, 9), counter);
    }
    return wrong(name, answer, newArr.join(''));
  };
  return checkAnswer(name, genNum(1, 9), 0);
};
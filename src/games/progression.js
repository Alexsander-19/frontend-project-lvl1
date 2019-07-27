import {
  sayHi, askName, genNum, askAnswer, askQuestion, sayCongrat, sayCorrect, wrong,
  genArr,
} from './lib';

export default () => {
  const name = askName();
  sayHi(name);
  const checkAnswer = (n, num, c) => {
    const arr = genArr(10);
    let counter = c;
    const newArr = arr.splice(num, 1, '..');
    askQuestion(`${arr.join(' ')}`);
    const answer = askAnswer();
    if (newArr.join('') === answer && counter === 2) {
      sayCorrect();
      return sayCongrat(name);
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

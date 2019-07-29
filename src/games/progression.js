import {
  sayHi, askName, genNum, askAnswer, sayQuestion, sayCongratulation, sayCorrect, wrong,
  genArr,
} from './lib';

export default () => {
  console.log('What number is missing in the progression?\n');
  const name = askName();
  console.log(sayHi(name));
  const checkAnswer = (n, num, c) => {
    const arr = genArr(10);
    let counter = c;
    const newArr = arr.splice(num, 1, '..');
    console.log(sayQuestion(`${arr.join(' ')}`));
    const answer = askAnswer();
    if (newArr.join('') === answer && counter === 2) {
      console.log(sayCorrect());
      return console.log(sayCongratulation(name));
    }
    if (newArr.join('') === answer && counter < 2) {
      console.log(sayCorrect());
      counter += 1;
      return checkAnswer(name, genNum(1, 9), counter);
    }
    return console.log(wrong(name, answer, newArr.join('')));
  };
  return checkAnswer(name, genNum(1, 9), 0);
};

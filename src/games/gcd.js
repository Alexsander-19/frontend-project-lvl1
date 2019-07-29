
import {
  askName, askAnswer, sayCorrect, sayCongratulation, sayHi, sayQuestion,
  genNum, wrong, getGcd,
} from './lib';

export default () => {
  console.log('Find the greatest common divisor of given numbers.\n');
  const name = askName();
  console.log(sayHi(name));
  const checkAnswer = (num1, num2, c) => {
    let counter = c;
    console.log(sayQuestion(`${num1} ${num2}`));
    const answer = askAnswer();
    const gcd = getGcd(num1, num2).toString();
    if (answer === gcd && counter === 2) {
      console.log(sayCorrect());
      return console.log(sayCongratulation(name));
    }
    if (answer === gcd && counter < 2) {
      console.log(sayCorrect());
      counter += 1;
      return checkAnswer(genNum(10, 100), genNum(20, 100), counter);
    }
    return console.log(wrong(name, answer, gcd));
  };
  checkAnswer(genNum(10, 100), genNum(20, 100), 0);
};

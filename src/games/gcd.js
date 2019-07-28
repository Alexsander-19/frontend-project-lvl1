
import {
  askName, askAnswer, sayCorrect, sayCongratulation, sayHi, sayQuestion,
  genNum, wrong, getGcd, gameInfo,
} from './lib';

export default () => {
  gameInfo('Find the greatest common divisor of given numbers.\n')
  const name = askName();
  sayHi(name);
  const checkAnswer = (num1, num2, c) => {
    let counter = c;
    sayQuestion(`${num1} ${num2}`);
    const answer = askAnswer();
    const gcd = getGcd(num1, num2).toString();
    if (answer === gcd && counter === 2) {
      sayCorrect();
      return sayCongratulation(name);
    }
    if (answer === gcd && counter < 2) {
      sayCorrect();
      counter += 1;
      return checkAnswer(genNum(10, 100), genNum(20, 100), counter);
    }
    console.log(gcd);
    return wrong(name, answer, gcd);
  };
  checkAnswer(genNum(10, 100), genNum(20, 100), 0);
};

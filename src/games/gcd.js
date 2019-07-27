
import {
  askName, askAnswer, sayCorrect, sayCongrat, sayHi, askQuestion,
  genNum, wrong, getGcd,
} from './lib';

export default () => {
  const name = askName();
  sayHi(name);
  const checkAnswer = (num1, num2, c) => {
    let counter = c;
    askQuestion(`${num1} ${num2}`);
    const answer = askAnswer();
    const gcd = getGcd(num1, num2).toString();
    if (answer === gcd && counter === 2) {
      sayCorrect();
      return sayCongrat(name);
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

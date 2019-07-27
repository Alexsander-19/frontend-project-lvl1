import {
  genOperator, askName, askAnswer, askQuestion, sayCorrect, sayCongrat,
  sayHi, genNum, mathOperation, wrong,
} from './lib';

export default () => {
  const name = askName();
  sayHi(name);
  const checkAnswer = (num1, num2, operator, c) => {
    let counter = c;
    askQuestion(`${num1} ${operator} ${num2}`);
    const answer = askAnswer();
    const result = mathOperation(num1, num2, operator).toString();
    if (answer === result && counter === 2) {
      sayCorrect();
      return sayCongrat(name);
    }
    if (answer === result && counter < 2) {
      sayCorrect();
      counter += 1;
      return checkAnswer(genNum(10, 20), genNum(10, 20), genOperator(), counter);
    }
    return wrong(name, answer, result);
  };
  checkAnswer(genNum(10, 20), genNum(10, 20), genOperator(), 0);
};

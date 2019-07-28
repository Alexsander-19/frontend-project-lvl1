import {
  genOperator, askName, askAnswer, sayQuestion, sayCorrect, sayCongratulation,
  sayHi, genNum, mathOperation, wrong, gameInfo,
} from './lib';

export default () => {
  gameInfo('What is the result of the expression?\n');
  const name = askName();
  sayHi(name);
  const checkAnswer = (num1, num2, operator, c) => {
    let counter = c;
    sayQuestion(`${num1} ${operator} ${num2}`);
    const answer = askAnswer();
    const result = mathOperation(num1, num2, operator).toString();
    if (answer === result && counter === 2) {
      sayCorrect();
      return sayCongratulation(name);
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

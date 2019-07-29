import {
  genOperator, askName, askAnswer, sayQuestion, sayCorrect, sayCongratulation,
  sayHi, genNum, mathOperation, wrong,
} from './lib';

export default () => {
  console.log('What is the result of the expression?\n');
  const name = askName();
  console.log(sayHi(name));
  const checkAnswer = (num1, num2, operator, c) => {
    let counter = c;
    console.log(sayQuestion(`${num1} ${operator} ${num2}`));
    const answer = askAnswer();
    const result = mathOperation(num1, num2, operator).toString();
    if (answer === result && counter === 2) {
      console.log(sayCorrect());
      return console.log(sayCongratulation(name));
    }
    if (answer === result && counter < 2) {
      console.log(sayCorrect());
      counter += 1;
      return checkAnswer(genNum(10, 20), genNum(10, 20), genOperator(), counter);
    }
    return console.log(wrong(name, answer, result));
  };
  checkAnswer(genNum(10, 20), genNum(10, 20), genOperator(), 0);
};

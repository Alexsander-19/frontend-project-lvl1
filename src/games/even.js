import {
  sayHi, askName, genNum, askAnswer, evenNum, askQuestion, sayCongrat, sayCorrect, wrong,
} from './lib';

export default () => {
  const name = askName();
  sayHi(name);
  const checkAnswer = (number, c) => {
    let counter = c;
    askQuestion(number);
    const even = evenNum(number);
    const answer = askAnswer();
    if (answer === even && counter === 2) {
      sayCorrect();
      return sayCongrat(name);
    } if (answer === even && counter < 2) {
      sayCorrect();
      counter += 1;
      return checkAnswer(genNum(10, 100), counter);
    }
    return wrong(name, answer, even);
  };
  checkAnswer(genNum(10, 100), 0);
};

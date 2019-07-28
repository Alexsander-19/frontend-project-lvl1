import {
  sayHi, askName, genNum, askAnswer, isEven, sayQuestion,
  sayCongratulation, sayCorrect, wrong, gameInfo,
} from './lib';

export default () => {
  gameInfo('Answer "yes" if number even otherwise answer "no".\n');
  const name = askName();
  sayHi(name);
  const checkAnswer = (number, c) => {
    let counter = c;
    sayQuestion(number);
    const even = isEven(number);
    const answer = askAnswer();
    if (answer === even && counter === 2) {
      sayCorrect();
      return sayCongratulation(name);
    } if (answer === even && counter < 2) {
      sayCorrect();
      counter += 1;
      return checkAnswer(genNum(10, 100), counter);
    }
    return wrong(name, answer, even);
  };
  checkAnswer(genNum(10, 100), 0);
};

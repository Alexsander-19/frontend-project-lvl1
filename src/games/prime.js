import {
  askName, sayHi, genNum, askAnswer, sayQuestion, sayCongratulation,
  sayCorrect, wrong, checkPrime, gameInfo,
} from './lib';

export default () => {
  gameInfo('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  const name = askName();
  sayHi(name);
  const checkAnswer = (num, c) => {
    sayQuestion(num);
    const answer = askAnswer();
    const prime = checkPrime(num);
    let counter = c;
    if (answer === prime && counter === 2) {
      sayCorrect();
      return sayCongratulation(name);
    }
    if (answer === prime && counter < 2) {
      sayCorrect();
      counter += 1;
      return checkAnswer(genNum(15, 100), counter);
    }
    return wrong(name, answer, prime);
  };
  checkAnswer(genNum(15, 100), 0);
};

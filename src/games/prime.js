import {
  askName, sayHi, genNum, askAnswer, sayQuestion, sayCongratulation,
  sayCorrect, wrong, isPrime,
} from './lib';

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  const name = askName();
  console.log(sayHi(name));
  const checkAnswer = (num, c) => {
    console.log(sayQuestion(num));
    const answer = askAnswer();
    const prime = isPrime(num);
    let counter = c;
    if (answer === prime && counter === 2) {
      console.log(sayCorrect());
      return console.log(sayCongratulation(name));
    }
    if (answer === prime && counter < 2) {
      console.log(sayCorrect());
      counter += 1;
      return checkAnswer(genNum(15, 100), counter);
    }
    return console.log(wrong(name, answer, prime));
  };
  checkAnswer(genNum(15, 100), 0);
};

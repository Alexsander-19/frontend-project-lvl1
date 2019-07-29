import {
  sayHi, askName, genNum, askAnswer, isEven, sayQuestion,
  sayCongratulation, sayCorrect, wrong,
} from './lib';

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = askName();
  console.log(sayHi(name));
  const checkAnswer = (number, c) => {
    let counter = c;
    console.log(sayQuestion(number));
    const even = isEven(number);
    const answer = askAnswer();
    if (answer === even && counter === 2) {
      console.log(sayCorrect());
      return console.log(sayCongratulation(name));
    } if (answer === even && counter < 2) {
      console.log(sayCorrect());
      counter += 1;
      return checkAnswer(genNum(10, 100), counter);
    }
    return console.log(wrong(name, answer, even));
  };
  checkAnswer(genNum(10, 100), 0);
};

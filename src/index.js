import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

const sayHi = (name) => {
  console.log(`Hello, ${name}\n
  `);
};
const brainEven = () => {
  const name = askName();
  sayHi(name);
  const genNum = () => Math.floor(Math.random() * 100);
  const checkAnswer = (n, c) => {
    let counter = c;
    console.log(`Question: ${n}`);
    const checkNum = n % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (answer === checkNum && counter === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}`);
    } else if (answer === checkNum && counter < 2) {
      console.log('Correct!');
      counter += 1;
      return checkAnswer(genNum(), counter);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${checkNum}".`);
      console.log(`Let's try again, ${name}`);
    }
  };
  return checkAnswer(genNum(), 0);
};

export { askName, sayHi, brainEven };

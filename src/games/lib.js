import readlineSync from 'readline-sync';

const welcome = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game);
};

const askName = () => readlineSync.question('May I have your name? ');

const sayHi = (name) => {
  console.log(`Hello, ${name}\n
  `);
};

const genNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const evenNum = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const askAnswer = () => readlineSync.question('Your answer: ');

const askQuestion = q => console.log(`Question: ${q}`);

const sayCorrect = () => console.log('Correct!');

const sayCongrat = name => console.log(`Congratulations, ${name}`);

const wrong = (name, answer, corr) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corr}".`);
  console.log(`Let's try again, ${name}`);
};

const genOperator = () => {
  const arrOperator = ['+', '-', '*'];
  return arrOperator[Math.floor(Math.random() * 3)];
};

const mathOperation = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      return num1 * num2;
  }
};
export {
  askName, sayHi, genNum, askAnswer, evenNum, askQuestion, sayCongrat,
  sayCorrect, wrong, welcome, genOperator, mathOperation,
};

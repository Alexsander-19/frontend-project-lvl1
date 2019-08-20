import readlineSync from 'readline-sync';

const playAgain = (n, f) => {
  const againAnswer = readlineSync.question(`\n${n}, would you like to play again? (yes/no)\n`);
  return againAnswer === 'yes' ? f(1) : null;
};
const playGame = (description, data) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} \n`);
  const checkAnswer = (c) => {
    let counter = c;
    const gameData = data();
    console.log(`Question: ${gameData.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (gameData.answer === userAnswer && counter === 3) {
      console.log('Correct!');
      return console.log(`Congratulations, ${name}`);
    }
    if (gameData.answer === userAnswer && counter < 3) {
      console.log('Correct!');
      counter += 1;
      return checkAnswer(counter);
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameData.answer}".\nLet's try again, ${name}`);
    return playAgain(name, checkAnswer);
  };
  return checkAnswer(1);
};

export default playGame;

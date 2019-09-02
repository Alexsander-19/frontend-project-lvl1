import readlineSync from 'readline-sync';

const replay = (name, replayFunction) => {
  const againAnswer = readlineSync.question(`\n${name}, would you like to play again? (yes/no)\n`);
  return againAnswer === 'yes' ? replayFunction(1) : null;
};
const roundsCount = 3;
const playGame = (description, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name} \n`);
  const checkAnswer = (c) => {
    let counter = c;
    const { answer, question } = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      if (counter === roundsCount) {
        console.log('Correct!');
        console.log(`Congratulations, ${name}`);
        return;
      }
      console.log('Correct!');
      counter += 1;
      checkAnswer(counter);
      return;
    }
    console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let's try again, ${name}`);
    replay(name, checkAnswer);
  };
  checkAnswer(1);
};

export default playGame;

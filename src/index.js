import readlineSync from 'readline-sync';

const roundsCount = 3;
const playGame = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName} \n`);
  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const { answer, question } = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      iter(counter + 1);
      return;
    }
    console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let's try again, ${userName}`);
    const resumption = readlineSync.question(`\n${userName}, would you like to replay game? (yes/no)\n`);
    if (resumption === 'yes') {
      iter(0);
    }
  };
  iter(0);
};

export default playGame;

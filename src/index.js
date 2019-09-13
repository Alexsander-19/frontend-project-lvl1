import readlineSync from 'readline-sync';

const roundsCount = 3;
const replayGame = (name, game) => {
  const resumption = readlineSync.question(`\n${name}, would you like to replay game? (yes/no)\n`);
  if (resumption === 'yes') {
    game(1);
  }
};
const playGame = (description, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name} \n`);
  const iter = (number) => {
    let counter = number;
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
      iter(counter += 1);
      return;
    }
    console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let's try again, ${name}`);
    replayGame(name, iter);
  };
  iter(1);
};

export default playGame;

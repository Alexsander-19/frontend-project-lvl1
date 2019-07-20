import readlineSync from 'readline-sync';

const sayHi = () => {
  const askName = readlineSync.question('May I have your name? ');
  const say = `Hello, ${askName}`;
  return say;
};

export default sayHi;

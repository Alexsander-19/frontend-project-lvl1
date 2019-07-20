import readlineSync from 'readline-sync';

export const sayHi = () => {
  const askName = readlineSync.question('May I have your name? ');
  const say = `Hello, ${askName}`;
  return say;
}



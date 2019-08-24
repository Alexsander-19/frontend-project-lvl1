const generationNumber = (min = 10, max = 100) => Math.floor(Math.random() * (max - min) + min);
const answerText = (a) => {
  if (a) {
    return 'yes';
  }
  return 'no';
};

export { generationNumber, answerText };

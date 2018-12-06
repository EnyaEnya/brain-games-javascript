import {
  engine, getRandomNumber, askQuestion, checkFunction,
} from '..';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const conditionOfGame = 'Find the greatest common divisor of given numbers.\n';

export default () => {
  engine(conditionOfGame,
    () => {
      const num1 = getRandomNumber(1, 100);
      const num2 = getRandomNumber(1, 100);
      const answer = askQuestion(`${num1}, ${num2}`);
      const correctAnswer = gcd(num1, num2);
      return checkFunction(parseInt(answer, 10), correctAnswer);
    });
};

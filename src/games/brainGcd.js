import {
  engine, getRandomNumber, askQuestion, checkFunction, gcd,
} from '..';

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

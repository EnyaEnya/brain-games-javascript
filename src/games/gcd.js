import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandomNumber } from '../utils';

export const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const conditionOfGame = 'Find the greatest common divisor of given numbers.';

const generateGameParams = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  return cons(`${num1}, ${num2}`, gcd(num1, num2));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

export const gcd = (questionNum1, questionNum2) => {
  if (questionNum2 === 0) {
    return questionNum1;
  }
  return gcd(questionNum2, questionNum1 % questionNum2);
};

const conditionOfGame = 'Find the greatest common divisor of given numbers.';

const generateGameParams = () => {
  const questionNum1 = getRandomNumber(1, 100);
  const questionNum2 = getRandomNumber(1, 100);
  const questionStr = `${questionNum1}, ${questionNum2}`;
  const rightAnswer = gcd(questionNum1, questionNum2);
  return cons(questionStr, `${rightAnswer}`);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questionNum) => {
  if (questionNum < 2) {
    return false;
  }
  let i = 2;
  while (i <= questionNum / 2) {
    if (questionNum % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const rightAnswer = num => (isPrime(num) === true ? 'yes' : 'no');

const generateGameParams = () => {
  const questionNum = getRandomNumber(1, 1000);
  const questionStr = `${questionNum}`;
  return cons(questionStr, rightAnswer(questionNum));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

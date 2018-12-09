import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questionNum) => {
  if (questionNum < 2) {
    return false;
  }
  for (let i = 2; i <= questionNum / 2; i += 1) {
    if (questionNum % i === 0) {
      return false;
    }
  }
  return true;
};

const returnRightAnswer = num => (isPrime(num) ? 'yes' : 'no');

const generateGameParams = () => {
  const questionNum = getRandomNumber(1, 1000);
  const questionStr = `${questionNum}`;
  return cons(questionStr, returnRightAnswer(questionNum));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

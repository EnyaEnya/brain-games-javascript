import {
  engine, getRandomNumber, cons,
} from '..';
import { getRandomOperation, calculate } from './utils';

const conditionOfGame = 'What is the result of the expression?.\n';

const generateGameParams = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = getRandomOperation();
  return cons(`${num1} ${operator} ${num2}`, calculate(num1, operator, num2));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

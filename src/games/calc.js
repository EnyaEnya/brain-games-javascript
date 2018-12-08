import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandomNumber } from '../utils';

const conditionOfGame = 'What is the result of the expression?.';

export const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default: return num1 * num2;
  }
};

export const getRandomOperation = () => {
  switch (getRandomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default: return '*';
  }
};

const generateGameParams = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = getRandomOperation();
  return cons(`${num1} ${operator} ${num2}`, calculate(num1, operator, num2));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

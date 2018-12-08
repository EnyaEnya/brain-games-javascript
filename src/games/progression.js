import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandomNumber } from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

export const calculateProg = (num1, operator, num2) => (operator === '+' ? num1 + num2 : num1 - num2);

export const getRandomOperationProg = () => (getRandomNumber(1, 2) === 1 ? '+' : '-');

const brainProgression = () => {
  let num = getRandomNumber(2, 10);
  const operation = getRandomOperationProg();
  const operationNum = getRandomNumber(2, 10);
  let answer = 0;
  let result = String(num);
  for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      num = calculateProg(num, operation, operationNum);
      result += ' .. ';
      answer = num;
    } else {
      num = calculateProg(num, operation, operationNum);
      result += ` ${num} `;
    }
  }
  return cons(`${result} `, answer);
};

export default () => {
  engine(conditionOfGame, brainProgression);
};

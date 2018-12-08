import { cons } from 'hexlet-pairs';
import { engine } from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

export const calculateProg = (num1, operator, num2) => (operator === '+' ? num1 + num2 : num1 - num2);

export const getRandomOperationProg = () => (getRandomNumber(1, 2) === 1 ? '+' : '-');

const brainProgression = (num, operation, operationNum) => {
  let numProg = num;
  let answer = 0;
  let result = String(numProg);
  for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      numProg = calculateProg(numProg, operation, operationNum);
      result += ' .. ';
      answer = numProg;
    } else {
      numProg = calculateProg(numProg, operation, operationNum);
      result += ` ${numProg} `;
    }
  }
  return cons(`${result} `, answer);
};

const generateGameParams = () => {
  const num = getRandomNumber(2, 10);
  const operationNum = getRandomNumber(2, 10);
  const operation = getRandomOperationProg();
  return brainProgression(num, operation, operationNum);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

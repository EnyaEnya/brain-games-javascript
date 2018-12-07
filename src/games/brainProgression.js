import {
  engine, getRandomNumber, cons,
} from '..';
import { getRandomOperation, calculate } from './utils';

const conditionOfGame = 'What number is missing in the progression?\n';

const brainProgression = () => {
  let num = getRandomNumber(2, 10);
  const operation = getRandomOperation();
  const operationNumber = getRandomNumber(2, 10);
  let answer = 0;
  let result = String(num);
  for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      num = calculate(num, operation, operationNumber);
      result += ' .. ';
      answer = num;
    } else {
      num = calculate(num, operation, operationNumber);
      result += ` ${num} `;
    }
  }
  return cons(`${result} `, answer);
};

export default () => {
  engine(conditionOfGame, brainProgression);
};

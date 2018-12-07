import {
  engine, getRandomNumber,
} from '..';
import { getRandomOperation, calculate } from './utils';

const conditionOfGame = 'What number is missing in the progression?\n';

const brainProgression = () => {
  let num = getRandomNumber(2, 10);
  const operation = getRandomOperation();
  const operationNumber = getRandomNumber(2, 10);
  let result = String(num);
  for (let i = 0; i < 10; i += 1) {
    num = calculate(num, operation, operationNumber);
    result = `${result} ${num}`;
  }
};

const generateGameParams = () => {
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

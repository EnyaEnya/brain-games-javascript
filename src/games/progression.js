import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

const brainProgression = (length, step) => {
  const firstElement = getRandomNumber(2, 10);
  const hiddenElementPosition = getRandomNumber(0, length);
  const rightAnswer = firstElement + step * hiddenElementPosition;
  let questionStr = '';
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenElementPosition) {
      questionStr += ' .. ';
    } else {
      const currentElement = firstElement + step * i;
      questionStr += ` ${currentElement} `;
    }
  }
  return cons(`${questionStr.trim()}`, `${rightAnswer}`);
};

const generateGameParams = () => {
  const length = 10;
  const step = getRandomNumber(-10, 10);
  return brainProgression(length, step);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

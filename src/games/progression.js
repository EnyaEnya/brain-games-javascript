import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

const getNextElement = (currentElement, step) => currentElement + step;

const brainProgression = (length, step) => {
  let currentElement = getRandomNumber(2, 10);
  const hiddenElementPosition = getRandomNumber(0, 9);
  let rightAnswer = 0;
  let questionStr = String(currentElement);
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenElementPosition) {
      currentElement = getNextElement(currentElement, step);
      questionStr += ' .. ';
      rightAnswer = currentElement;
    } else {
      currentElement = getNextElement(currentElement, step);
      questionStr += ` ${currentElement} `;
    }
  }
  return cons(`${questionStr} `, rightAnswer);
};

const generateGameParams = () => {
  const length = 10;
  const step = getRandomNumber(-10, 10);
  return brainProgression(length, step);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

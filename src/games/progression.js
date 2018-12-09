import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

const getNextElement = (currentElement, step) => currentElement + step;

const brainProgression = (length, firstElement, step) => {
  let currentElement = firstElement;
  const hiddenElement = 5;
  let rightAnswer = 0;
  let questionStr = String(firstElement);
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenElement) {
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
  const firstElement = getRandomNumber(2, 10);
  const step = getRandomNumber(-10, 10);
  return brainProgression(length, firstElement, step);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

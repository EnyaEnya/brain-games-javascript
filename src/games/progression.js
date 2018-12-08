import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

const getNextElement = (currentProgElement, stepOfProg) => currentProgElement + stepOfProg;

const brainProgression = (lengthOfProg, firstProgElement, stepOfProg) => {
  let currentProgElement = firstProgElement;
  const hiddenElement = 5;
  let rightAnswer = 0;
  let questionStr = String(firstProgElement);
  for (let i = 0; i < lengthOfProg; i += 1) {
    if (i === hiddenElement) {
      currentProgElement = getNextElement(currentProgElement, stepOfProg);
      questionStr += ' .. ';
      rightAnswer = currentProgElement;
    } else {
      currentProgElement = getNextElement(currentProgElement, stepOfProg);
      questionStr += ` ${currentProgElement} `;
    }
  }
  return cons(`${questionStr} `, rightAnswer);
};

const generateGameParams = () => {
  const lengthOfProg = 10;
  const firstProgElement = getRandomNumber(2, 10);
  const stepOfProg = getRandomNumber(-10, 10);
  return brainProgression(lengthOfProg, firstProgElement, stepOfProg);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

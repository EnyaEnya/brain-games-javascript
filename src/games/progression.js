import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What number is missing in the progression?';

const getNextElement = (currentProgElement, stepOfProg) => currentProgElement + stepOfProg;

const brainProgression = (lengthOfProg, firstProgElement, stepOfProg) => {
  let currentProgElement = firstProgElement;
  const hiddenElement = 5;
  let answer = 0;
  let resultStr = String(firstProgElement);
  for (let i = 0; i < lengthOfProg; i += 1) {
    if (i === hiddenElement) {
      currentProgElement = getNextElement(currentProgElement, stepOfProg);
      resultStr += ' .. ';
      answer = currentProgElement;
    } else {
      currentProgElement = getNextElement(currentProgElement, stepOfProg);
      resultStr += ` ${currentProgElement} `;
    }
  }
  return cons(`${resultStr} `, answer);
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

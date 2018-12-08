import { cons } from 'hexlet-pairs';
import { engine } from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;
const answer = num => (isEven(num) === true ? 'yes' : 'no');

const generateGameParams = () => {
  const num = getRandomNumber(1, 100);
  return cons(`${num}`, answer(num));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

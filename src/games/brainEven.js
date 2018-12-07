import { engine, getRandomNumber, cons } from '..';

const conditionOfGame = 'Answer "yes" if number even otherwise answer "no".\n';

export const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const generateGameParams = () => {
  const num = getRandomNumber(1, 100);
  return cons(`${num}`, isEven(num));
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

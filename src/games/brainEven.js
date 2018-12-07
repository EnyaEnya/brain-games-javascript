import {
  apply, engine, getRandomNumber, isEven,
} from '..';

const conditionOfGame = 'Answer "yes" if number even otherwise answer "no".\n';

export default () => {
  engine(conditionOfGame, () => apply(getRandomNumber(1, 100)), x => (isEven(x) ? 'yes' : 'no'));
};

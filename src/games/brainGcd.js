import {
  engine, getRandomNumber, gcd, twoArgApply, safetyParseInt,
} from '..';

const conditionOfGame = 'Find the greatest common divisor of given numbers.\n';

const questionParamsBuilder = () => twoArgApply(
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
);

export default () => {
  engine(conditionOfGame,
    questionParamsBuilder,
    gcd,
    (num1, num2) => `${num1}, ${num2}`,
    x => safetyParseInt(x));
};

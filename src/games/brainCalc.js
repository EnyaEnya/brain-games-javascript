import {
  engine, getRandomNumber, getRandomOperation, calculate, threeArgApply, safetyParseInt,
} from '..';

const conditionOfGame = 'What is the result of the expression?.\n';

const questionParamsBuilder = () => threeArgApply(
  getRandomNumber(1, 100),
  getRandomOperation(),
  getRandomNumber(1, 100),
);

export default () => {
  engine(conditionOfGame,
    questionParamsBuilder,
    calculate,
    (num1, operator, num2) => `${num1} ${operator} ${num2}`,
    x => safetyParseInt(x));
};

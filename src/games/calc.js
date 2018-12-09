import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNumber from '../utils';

const conditionOfGame = 'What is the result of the expression?.';

const calculate = (questionNum1, operator, questionNum2) => {
  switch (operator) {
    case '+':
      return questionNum1 + questionNum2;
    case '-':
      return questionNum1 - questionNum2;
    default: return questionNum1 * questionNum2;
  }
};

const getRandomOperation = () => {
  switch (getRandomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default: return '*';
  }
};

const generateGameParams = () => {
  const questionNum1 = getRandomNumber(1, 100);
  const questionNum2 = getRandomNumber(1, 100);
  const operator = getRandomOperation();
  const questionStr = `${questionNum1} ${operator} ${questionNum2}`;
  const rightAnswer = calculate(questionNum1, operator, questionNum2);
  return cons(questionStr, `${rightAnswer}`);
};

export default () => {
  engine(conditionOfGame, generateGameParams);
};

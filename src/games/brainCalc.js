import {
  engine, getRandomNumber, askQuestion, checkFunction,
} from '..';

const getRandomOperation = () => {
  switch (getRandomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default: return '*';
  }
};

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default: return num1 * num2;
  }
};

const conditionOfGame = 'What is the result of the expression?.\n';

export default() => {
  engine(conditionOfGame,
    () => {
      const num1 = getRandomNumber(1, 100);
      const num2 = getRandomNumber(1, 100);
      const operator = getRandomOperation();
      const correctAnswer = calculate(operator, num1, num2);
      const answer = askQuestion(`${num1} ${operator} ${num2}`);
      return checkFunction(parseInt(answer, 10), correctAnswer);
    });
};

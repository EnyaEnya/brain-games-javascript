import * as common from '..';

const getRandomOperation = () => {
  switch (common.getRandomNumber(1, 3)) {
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

export default() => {
  common.engine('What is the result of the expression?.\n',
    () => {
      const num1 = common.getRandomNumber(1, 100);
      const num2 = common.getRandomNumber(1, 100);
      const operator = getRandomOperation();
      const correctAnswer = calculate(operator, num1, num2);
      const enterAnswer = common.askQuestion(`${num1} ${operator} ${num2}`);
      return common.checkFunction(parseInt(enterAnswer, 10), correctAnswer);
    });
};

import {
  engine, getRandomNumber, askQuestion, checkFunction, getRandomOperation, calculate,
} from '..';

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

import {
  engine, getRandomNumber, askQuestion, checkFunction,
} from '..';

const isEven = number => number % 2 === 0;

const conditionOfGame = 'Answer "yes" if number even otherwise answer "no".\n';

export default () => {
  engine(conditionOfGame,
    () => {
      const question = getRandomNumber(1, 100);
      const answer = askQuestion(question);
      const correctAnswer = (isEven(question) ? 'yes' : 'no');
      return checkFunction(answer, correctAnswer);
    });
};

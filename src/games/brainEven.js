import {
  engine, getRandomNumber, askQuestion, checkFunction, isEven,
} from '..';

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

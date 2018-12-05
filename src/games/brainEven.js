import * as common from '..';

const isEven = number => number % 2 === 0;

export default () => {
  common.engine('Answer "yes" if number even otherwise answer "no".\n',
    () => {
      const question = common.getRandomNumber(1, 100);
      const enterAnswer = common.askQuestion(question);
      const correctAnswer = (isEven(question) ? 'yes' : 'no');
      return common.checkFunction(enterAnswer, correctAnswer);
    });
};

import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const greeting = (str) => {
  console.log('\nWelcome to the Brain Games!');
  if (str !== undefined) {
    console.log(`${str}\n`);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const checkFunction = (answer, correctAnswer) => answer === String(correctAnswer);

const askQuestion = question => readlineSync.question(`Question: ${question}\nYour answer: `);

const numOfAttempts = 3;

export const engine = (conditionOfGame, generateGameParams) => {
  const userName = greeting(conditionOfGame);
  for (let i = 0; i < numOfAttempts; i += 1) {
    const params = generateGameParams();
    const correctAnswer = cdr(params);
    const answer = askQuestion(car(params));
    const success = checkFunction(answer, correctAnswer);
    if (success) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

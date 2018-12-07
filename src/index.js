import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

export const greeting = (str) => {
  console.log('\nWelcome to the Brain Games!');
  if (str !== undefined) {
    console.log(str);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const checkFunction = (enterAnswer, correctAnswer) => {
  const success = enterAnswer === String(correctAnswer);
  if (!success) {
    console.log(`'${enterAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return success;
};

const askQuestion = question => readlineSync.question(`Question: ${question}\nYour answer: `);

export const apply = arg => fn => fn(arg);
export const twoArgApply = (arg1, arg2) => fn => fn(arg1, arg2);
export const threeArgApply = (arg1, arg2, arg3) => fn => fn(arg1, arg2, arg3);

export const cons = (x, y) => f => f(x, y);
const car = z => z(x => x);
const cdr = z => z((x, y) => y);

export const engine = (conditionOfGame, generateGameParams) => {
  const userName = greeting(conditionOfGame);
  const numOfAttempts = 3;
  let success = true;
  for (let i = 0; i < numOfAttempts; i += 1) {
    const params = generateGameParams();
    const answer = askQuestion(car(params));
    success = checkFunction(answer, cdr(params));
    if (success) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (success) {
    console.log(`Congratulations, ${userName}!`);
  }
};

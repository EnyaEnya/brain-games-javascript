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

export const engine = (greetingStr, game) => {
  const userName = greeting(greetingStr);
  const numOfAttempts = 3;
  let success = true;
  for (let i = 0; i < numOfAttempts; i += 1) {
    success = game();
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

export const checkFunction = (enterAnswer, correctAnswer) => {
  const success = enterAnswer === correctAnswer;
  if (!success) {
    console.log(`'${enterAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return success;
};

export const askQuestion = question => readlineSync.question(`Question: ${question}\nYour answer: `);

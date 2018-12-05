const readlineSync = require('readline-sync');

const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

export const greeting = (str) => {
  console.log('Welcome to the Brain Games!');
  if (str !== undefined) {
    console.log(str);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

export const brainEven = () => {
  const userName = greeting('Answer "yes" if number even otherwise answer "no".\n');
  let currentAttempt = 0;
  const numOfAttempts = 3;
  const min = 1; // minimum of range
  const max = 100; // maximum of range
  while (currentAttempt < numOfAttempts) {
    const num = getRandomNumber(min, max);
    const isEven = (num % 2 === 0);
    const enterNum = readlineSync.question(`${num}\n`);
    const correctAnswer = (isEven === true ? 'yes' : 'no');
    if (((isEven === true) && (enterNum === 'yes')) || ((isEven === false) && (enterNum === 'no'))) {
      currentAttempt += 1;
      console.log('Correct!');
    } else {
      console.log(`'${enterNum}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

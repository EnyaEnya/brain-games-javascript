/* eslint-disable no-restricted-globals */

import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

export const getRandomOperation = () => {
  switch (getRandomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default: return '*';
  }
};

export const safetyParseInt = (x) => {
  const answer = parseInt(x, 10);
  if (isNaN(answer)) {
    return x;
  }
  return answer;
};

export const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default: return num1 * num2;
  }
};

export const isEven = number => number % 2 === 0;

export const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

export const greeting = (str) => {
  console.log('\nWelcome to the Brain Games!');
  if (str !== undefined) {
    console.log(str);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const checkFunction = (enterAnswer, correctAnswer) => {
  const success = enterAnswer === correctAnswer;
  if (!success) {
    console.log(`'${enterAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return success;
};

export const askQuestion = question => readlineSync.question(`Question: ${question}\nYour answer: `);

export const apply = arg => fn => fn(arg);
export const twoArgApply = (arg1, arg2) => fn => fn(arg1, arg2);
export const threeArgApply = (arg1, arg2, arg3) => fn => fn(arg1, arg2, arg3);

export const engine = (conditionOfGame, questionParamsBuilder, questionResolver, questionBuilder = x => `${x}`, answerVerifier = x => x) => {
  const userName = greeting(conditionOfGame);
  const numOfAttempts = 3;
  let success = true;
  for (let i = 0; i < numOfAttempts; i += 1) {
    const paramsApplier = questionParamsBuilder();
    const answer = askQuestion(paramsApplier(questionBuilder));
    success = checkFunction(answerVerifier(answer), paramsApplier(questionResolver));
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

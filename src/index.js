import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const getRandomOperation = () => {
  switch (getRandomNumber(1, 3)) {
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

const isEven = number => number % 2 === 0;

export const greeting = (str) => {
  console.log('Welcome to the Brain Games!');
  if (str !== undefined) {
    console.log(str);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
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

const checkFunction = (enterAnswer, correctAnswer) => {
  const success = enterAnswer === correctAnswer;
  if (!success) {
    console.log(`'${enterAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return success;
};

const askQuestion = question => readlineSync.question(`Question: ${question}\nYour answer: `);


export const brainEven = () => {
  engine('Answer "yes" if number even otherwise answer "no".\n',
    () => {
      const question = getRandomNumber(1, 100);
      const enterAnswer = askQuestion(question);
      const correctAnswer = (isEven(question) ? 'yes' : 'no');
      return checkFunction(enterAnswer, correctAnswer);
    });
};

export const brainCalc = () => {
  engine('What is the result of the expression?.\n',
    () => {
      const num1 = getRandomNumber(1, 100);
      const num2 = getRandomNumber(1, 100);
      const operator = getRandomOperation();
      const correctAnswer = calculate(operator, num1, num2);
      const enterAnswer = askQuestion(`${num1} ${operator} ${num2}`);
      return checkFunction(parseInt(enterAnswer, 10), correctAnswer);
    });
};

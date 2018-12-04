const readlineSync = require('readline-sync');

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

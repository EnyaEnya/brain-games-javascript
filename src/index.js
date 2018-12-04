const readlineSync = require('readline-sync');

export const greeting = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hello ' + userName + '!');
	
}

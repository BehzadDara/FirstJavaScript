const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  let attempts = 0;

  console.log(`I'm thinking of a number between ${min} and ${max}. Try to guess it!`);

  function askGuess() {
    rl.question('Enter your guess: ', (input) => {
      const guess = parseInt(input, 10);
      attempts++;

      if (isNaN(guess)) {
        console.log('Please enter a valid number.');
        askGuess();
      } else if (guess < randomNumber) {
        console.log('Too low! Try again.');
        askGuess();
      } else if (guess > randomNumber) {
        console.log('Too high! Try again.');
        askGuess();
      } else {
        console.log(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        rl.close();
      }
    });
  }

  askGuess();
}

startGame();

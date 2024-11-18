const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed.';
      }
      return num1 / num2;
    default:
      return 'Invalid operator!';
  }
}

function startCalculator() {
  rl.question('Enter the first number: ', (firstInput) => {
    const num1 = parseFloat(firstInput);

    rl.question('Enter the operator (+, -, *, /): ', (operator) => {

      rl.question('Enter the second number: ', (secondInput) => {
        const num2 = parseFloat(secondInput);

        const result = calculate(num1, num2, operator);
        console.log(`Result: ${result}`);

        rl.close();
      });
    });
  });
}

startCalculator();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function startConverter() {
  rl.question('Enter the temperature: ', (tempInput) => {
    const temperature = parseFloat(tempInput);

    rl.question('Convert to (F)ahrenheit or (C)elsius? Enter F or C: ', (choice) => {
      let result;
      if (choice.toUpperCase() === 'F') {
        result = celsiusToFahrenheit(temperature);
        console.log(`${temperature}°C is equal to ${result.toFixed(2)}°F`);
      } else if (choice.toUpperCase() === 'C') {
        result = fahrenheitToCelsius(temperature);
        console.log(`${temperature}°F is equal to ${result.toFixed(2)}°C`);
      } else {
        console.log('Invalid choice! Please enter F or C.');
      }

      rl.close();
    });
  });
}

startConverter();

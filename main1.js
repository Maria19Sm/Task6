const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть число, яке шукається: ', (input) => {
  const searchfactorial = input.trim();

  if (isNaN(searchfactorial)) {
    console.log('Введено не число. Будь ласка, введіть числове значення.');
  } else {
    const result = Factorial(searchfactorial);

    function Factorial(a) {
      a = parseInt(a);
      if (a <= 1) {
        return 1;
      }
      return a * Factorial(a - 1);
    }

    console.log(`Факторіал числа ${searchfactorial} дорівнює ${result}`);
  }

  rl.close();
});


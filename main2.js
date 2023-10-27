const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть число, яке шукається: ', (input) => {
  const inputNumber = parseInt(input);

  if (isNaN(inputNumber)) {
    console.log('Введено не число. Будь ласка, введіть числове значення.');
  } else {
    const result = fibonacci(inputNumber);

    function fibonacci(n) {
      if (n <= 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
    }

    console.log(`Число Фібоначчі з індексом ${inputNumber} дорівнює ${result}`);
  }

  rl.close();
});

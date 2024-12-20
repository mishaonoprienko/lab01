// Підключення модуля lodash
const _ = require('lodash');

// 1. Метод _.chunk - розбиває масив на частини заданого розміру
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('_.chunk:', _.chunk(array, 3)); // Розбиває масив на підмасиви по 3 елементи

// 2. Метод _.capitalize - робить першу літеру рядка великою
const string = 'hello world';
console.log('_.capitalize:', _.capitalize(string)); // Результат: "Hello world"

// 3. Метод _.reverse - перевертає масив
const reversedArray = _.reverse([1, 2, 3, 4]);
console.log('_.reverse:', reversedArray); // Результат: [4, 3, 2, 1]

// 4. Метод _.uniq - знаходить унікальні елементи в масиві
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log('_.uniq:', _.uniq(arrayWithDuplicates)); // Результат: [1, 2, 3, 4, 5]

// 5. Метод _.sum - обчислює суму чисел у масиві
const numbers = [1, 2, 3, 4];
console.log('_.sum:', _.sum(numbers)); // Результат: 10

// 6. Прочитати параметри з process.argv (для передачі параметрів у консоль)
const args = process.argv.slice(2); // Відсікаємо перші два елементи, оскільки це шлях до Node.js і вашого файлу
console.log('Arguments passed in console:', args);

// Якщо є передані параметри, вивести їх у зворотньому порядку
if (args.length > 0) {
  console.log('Arguments in reverse order:', _.reverse(args));
}

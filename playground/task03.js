const os = require('os'); // Модуль для отримання інформації про ОС
const fs = require('fs'); // Модуль для роботи з файлами

// Отримання імені користувача
const userName = os.userInfo().username;

// Формування привітання
const greeting = `Hello, ${userName}!`;

// Виведення на консоль
console.log(greeting);

// Запис привітання у файл
const filePath = './task03_output.txt';
fs.writeFileSync(filePath, greeting, (err) => {
    if (err) {
        console.error('Помилка запису до файлу:', err);
    } else {
        console.log('Привітання успішно записано у файл!');
    }
});

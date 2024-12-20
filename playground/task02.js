const fs = require('fs');
const path = require('path');

// Шлях до каталогу та файлу
const dirPath = '.';
const filePath = path.join(dirPath, 'task02.txt');

// Перевірка, чи існує каталог
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true }); // Створює каталог
}

// Текст, який потрібно додати
const textToAppend = 'Hello, World!';

// Додавання нового рядка до файлу
fs.appendFile(filePath, textToAppend + '\n', (err) => {
    if (err) {
        console.error('Помилка запису до файлу:', err);
    } else {
        console.log('Новий рядок успішно додано!');
    }
});


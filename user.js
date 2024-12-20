const fs = require('fs');
const path = './user.json';

// Читання даних з файлу
function readData() {
  if (!fs.existsSync(path)) {
    return { firstName: '', lastName: '', languages: [] };
  }
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

// Запис даних у файл
function writeData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

// Додавання мови
function addLanguage(title, level) {
  const data = readData();
  const exists = data.languages.find(lang => lang.title === title);
  
  if (exists) {
    console.log(`Мова ${title} вже є.`);
    return;
  }
  
  data.languages.push({ title, level });
  writeData(data);
  console.log(`Мова ${title} додана на рівні ${level}.`);
}

// Видалення мови
function removeLanguage(title) {
  const data = readData();
  data.languages = data.languages.filter(lang => lang.title !== title);
  
  writeData(data);
  console.log(`Мова ${title} видалена.`);
}

// Список всіх мов
function listLanguages() {
  const data = readData();
  if (data.languages.length === 0) {
    console.log('Немає мов для відображення.');
  } else {
    data.languages.forEach(lang => {
      console.log(`Мова: ${lang.title}, Рівень: ${lang.level}`);
    });
  }
}

// Читання інформації про мову
function readLanguage(title) {
  const data = readData();
  const language = data.languages.find(lang => lang.title === title);
  
  if (!language) {
    console.log(`Мова ${title} не знайдена.`);
  } else {
    console.log(`Мова: ${language.title}, Рівень: ${language.level}`);
  }
}

module.exports = { addLanguage, removeLanguage, listLanguages, readLanguage };

const yargs = require('yargs');
const user = require('./user');

// Налаштування команд
yargs.command({
  command: 'add',
  describe: 'Додати мову',
  builder: {
    title: {
      describe: 'Назва мови',
      demandOption: true,
      type: 'string'
    },
    level: {
      describe: 'Рівень володіння мовою',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    user.addLanguage(argv.title, argv.level);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Видалити мову',
  builder: {
    title: {
      describe: 'Назва мови',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    user.removeLanguage(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Переглянути всі мови',
  handler() {
    user.listLanguages();
  }
});

yargs.command({
  command: 'read',
  describe: 'Читати інформацію про мову',
  builder: {
    title: {
      describe: 'Назва мови',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    user.readLanguage(argv.title);
  }
});

// Виконати команди
yargs.parse();

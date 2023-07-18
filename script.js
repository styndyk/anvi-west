const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "22b2a9bc96f6fc",
    pass: "b5197e24e24ad4"
  }
});

// Налаштування парсера для отримання даних форми
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Налаштування для отримання сервером файлів
app.use(express.static('src'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/html/index.html'));
  });
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/html/index.html'));
  });

app.get('/products.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/html/products.html'));
  });

// Ручка для обробки відправки форми
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Створення об'єкта з даними листа
  const mailOptions = {
    from: 'f6d4c21fb0-6248b0+1@inbox.mailtrap.io',
    to: 'serhii.tyndyk@gmail.com',
    subject: 'Нове повідомлення від форми',
    text: `
      Ім'я: ${name}
      Електронна пошта: ${email}
      Повідомлення: ${message}
    `,
  };

  // Відправка листа
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Помилка при відправці листа:', error);
      res.status(500).send('Помилка при відправці листа');
    } else {
      console.log('Лист успішно відправлено:', info.response);
      res.status(200).send('Лист успішно відправлено');
    }
  });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});

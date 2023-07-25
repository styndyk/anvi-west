const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer'); // Додано модуль multer

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b685dda0e8ad07",
    pass: "1210364c9bd81d"
  }
});


// Налаштування для отримання сервером файлів
app.use(express.static('src'));


// Налаштування сторінок 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/products.html'));
}); 


// Додано middleware для обробки даних з форми (FormData)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().none()); // Додано multer для обробки FormData

// Ручка для обробки відправки форми
app.post('/send-email', (req, res) => {
  const { name, surname, email, phone, subject, message } = req.body;

  console.log(name, surname, email, phone, subject, message); // Перевірте, чи виводяться дані на сервері

  // Створення об'єкта з даними листа
  const mailOptions = {
    from: '7298d450b7-197da0@inbox.mailtrap.io',
    to: 'serhii.tyndyk@gmail.com',
    subject: 'Нове повідомлення від форми',
    text: `
      Ім'я: ${name}
      Прізвище: ${surname}
      Електронна пошта: ${email}
      Номер телефону: ${phone}
      Тема: ${subject}
      Повідомлення: ${message}
    `,
  };

  // Відправка листа
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Помилка при відправці листа:', error);
      res.status(500).json({ success: false, message: 'Помилка при відправці листа' });
    } else {
      console.log('Лист успішно відправлено:', info.response);
      res.status(200).json({ success: true, message: 'Лист успішно відправлено' });
    }
  });
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});

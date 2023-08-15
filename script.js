const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer'); // Додано модуль multer
const fs = require('fs'); 

var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anvizahid@gmail.com',
    pass: 'moqpkwickdpjjmka'
  }
});



// Налаштування для отримання сервером файлів
app.use(express.static('./data'));
app.use(express.static('./src'));


app.get('/data/products.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data/products.json'));
});

// Налаштування сторінок 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/products.html'));
});

app.get('/products', (req, res) => {
  const itemId = req.query.item; // Отримуємо параметр "item" з запиту

  fs.readFile('./data/products.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка при завантаженні товарів:', err);
      return res.status(500).send('Помилка при завантаженні товарів');
    }

    try {
      const products = JSON.parse(data); // Парсимо дані у форматі JSON
      const filteredProducts = products.filter(product => product.category === itemId); // Фільтруємо товари за параметром "item"
      res.send(filteredProducts); // Відправляємо відфільтровані товари клієнту
    } catch (error) {
      console.error('Помилка при обробці даних:', error);
      res.status(500).send('Помилка при обробці даних');
    }
  });
});

app.get('/aboutUs', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/aboutUs.html'));
});


// Додано middleware для обробки даних з форми (FormData)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().none()); // Додано multer для обробки FormData

// Ручка для обробки відправки форми
app.post('/send-email', (req, res) => {
  const { name, surname, email, phone, subject, message } = req.body;

  // Створення об'єкта з даними листа
  const mailOptions = {
    from: 'anvizahid@gmail.com',
    to: 'anvizahid@gmail.com',
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

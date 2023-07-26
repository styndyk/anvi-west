// Відправка форми на серверну частину

// const { response } = require("express");

  const form = document.getElementById('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Зупинити переадресацію на /send-email

    const formData = new FormData(form);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const response = await fetch('/send-email', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Успіх!',
        text: data.message
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Помилка!',
        text: data.message
      });
    }

    form.reset();
  });

// Додавання класу .active в залежності від сторінки

  // Отримати поточний URL
  const currentUrl = window.location.pathname;

  // Отримати всі елементи меню
  const menuItems = document.querySelectorAll('.menu__item');

  // Ітеруватись через елементи меню та додавати клас 'active' тому, що має поточний URL
  menuItems.forEach(item => {
    const link = item.querySelector('a').getAttribute('href');
    
    if (currentUrl === link) {
      item.classList.add('active');
    }
  });


// Робота з товарами за допомогою Fetch API

fetch('./data/products.json')
  .then(response => response.json())
  .then(data => {
    const productsList = document.querySelector('.goods__products__list');

    // Проходження по списку товарів та створення блоків для кожного товару
    data.forEach(product => {
      const goodsProduct = document.createElement('div');
      goodsProduct.classList.add('goods__product');

      // Заповнення блоку інформацією про товар
      goodsProduct.innerHTML = `
      <div class="goods__product__image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3 class="goods__product__title">
        ${product.name}
      </h3>
      <p class="goods__product__price">
        ${product.price} грн
      </p>
      `;

      // Додавання блоку товару до контейнера
      productsList.appendChild(goodsProduct);
  });
})
.catch(error => console.error('Помилка при завантаженні товарів:', error));


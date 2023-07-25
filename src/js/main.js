// Відправка форми на серверну частину

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
  console.log(menuItems);

  // Ітеруватись через елементи меню та додавати клас 'active' тому, що має поточний URL
  menuItems.forEach(item => {
    const link = item.querySelector('a').getAttribute('href');
    
    if (currentUrl === link) {
      item.classList.add('active');
    }
  });



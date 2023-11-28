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


// Відправка форми на серверну частину
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинити переадресацію на /send-email

    const formData = new FormData(form);

    // Створіть і налаштуйте об'єкт XHR
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'src/html/send-email.php', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Обробник події для завершення запиту
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Успіх!',
                    text: data.message,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Помилка!',
                    text: data.message,
                });
            }
            form.reset();
        }
    };

    // Надіслати дані форми
    xhr.send(formData);
});

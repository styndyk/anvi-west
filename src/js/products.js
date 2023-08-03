// Робота із фільтрами та пошуком 
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');
let products = []; // Масив для зберігання всіх товарів
let selectedCategories = []; // Масив для зберігання вибраних категорій

// Функція для відображення товарів на сторінці
function showProducts(productsToShow) {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = ''; // Очистити контейнер перед додаванням нових товарів

  // Проходження по списку товарів та створення блоків для кожного товару
  productsToShow.forEach(product => {
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
}

// Функція для фільтрації товарів за обраними категоріями та пошуковим запитом
function filterProducts() {
  const searchText = searchInput.value.trim().toLowerCase();
  const filteredProductsBySearch = products.filter(product => product.name.toLowerCase().includes(searchText));
  let filteredProducts = filteredProductsBySearch; // Початково, вибираємо всі товари, які відповідають пошуковому запиту

  if (selectedCategories.length > 0) {
    // Фільтрація за обраними категоріями, якщо є вибрані категорії
    filteredProducts = filteredProductsBySearch.filter(product => selectedCategories.includes(product.category));
  }

  showProducts(filteredProducts); // Відображення відфільтрованих товарів
}

// Завантажуємо список товарів з файлу products.json
fetch('./data/products.json')
  .then(response => response.json())
  .then(data => {
    products = data; // Зберігаємо всі товари у змінну
    showProducts(products); // При завантаженні сторінки відображаємо всі товари

    // Функція для відображення підказок
    const showSuggestions = () => {
      const searchText = searchInput.value.trim().toLowerCase();

      // Фільтруємо товари за пошуковим запитом
      const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));

      // Показуємо або приховуємо підказки залежно від наявності результатів
      if (filteredProducts.length > 0) {
        suggestionsList.innerHTML = '';
        filteredProducts.forEach(product => {
          const suggestion = document.createElement('div');
          suggestion.classList.add('suggestion');
          suggestion.textContent = product.name;
          suggestionsList.appendChild(suggestion);
        });
        suggestionsList.classList.add('active');
      } else {
        suggestionsList.innerHTML = ''; // Очищуємо підказки, якщо немає результатів
        suggestionsList.classList.remove('active');
      }
    };

    // Обробник подій для вводу тексту
    searchInput.addEventListener('input', () => {
      showSuggestions(); // Показуємо підказки залежно від введеного тексту
      filterProducts(); // Фільтруємо товари за пошуковим запитом
    });

    // Отримуємо параметр "item" з URL на стороні клієнта
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('item');

    if (itemId) {
      // Якщо є параметр "item" у URL, фільтруємо товари за категорією
      selectedCategories.push(itemId);
      // Встановлення відповідного чекбоксу увімкненим
      const checkbox = document.querySelector(`input[name="filter"][value="${itemId}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    }

    // Обробник подій для зміни стану фільтрів
    const filterInputs = document.querySelectorAll('input[name="filter"]');
    filterInputs.forEach(input => {
      input.addEventListener('change', () => {
        const isChecked = input.checked;
        const filterValue = input.value;
        if (isChecked) {
          // Додавання вибраної категорії до списку
          selectedCategories.push(filterValue);
        } else {
          // Видалення вибраної категорії зі списку
          selectedCategories = selectedCategories.filter(category => category !== filterValue);
        }
        filterProducts(); // Перефільтруємо товари при зміні стану фільтра
      });
    });

    // Фільтруємо товари при завантаженні сторінки за станом фільтрів
    filterProducts();
  })
  .catch(error => console.error('Помилка при завантаженні товарів:', error));

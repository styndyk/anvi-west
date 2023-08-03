// Робота із фільтрами та пошуком 
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');
let products = []; // Масив для зберігання всіх товарів

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
  const selectedFilters = document.querySelectorAll('input[name="filter"]:checked');

  let filteredProducts = products; // Копія всіх товарів

  if (searchText !== '') {
    // Фільтрація за пошуковим запитом
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
  }

  if (selectedFilters.length > 0) {
    // Фільтрація за обраними категоріями
    const selectedCategories = Array.from(selectedFilters).map(filter => filter.value);
    filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
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

    // Обробник події для вводу тексту
    searchInput.addEventListener('input', () => {
      showSuggestions(); // Показуємо підказки залежно від введеного тексту
      filterProducts(); // Фільтруємо товари за пошуковим запитом
    });

    // Обробник події для вибору підказки
    suggestionsList.addEventListener('click', (event) => {
      if (event.target.classList.contains('suggestion')) {
        searchInput.value = event.target.textContent;
        suggestionsList.classList.remove('active'); // Приховуємо підказки після деякої затримки
        setTimeout(() => {
          suggestionsList.classList.remove('active');
        }, 200); // Затримка у мілісекундах (200 мс)
      }
    });

    // Обробник події для втрати фокусу від інпута
    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        suggestionsList.classList.remove('active'); // Приховуємо підказки після деякої затримки
      }, 200); // Затримка у мілісекундах (200 мс)
    });

    // Обробник події для зміни стану фільтрів
    const filterInputs = document.querySelectorAll('input[name="filter"]');
    filterInputs.forEach(input => input.addEventListener('change', filterProducts));

    // Обробник події для натискання на документ, який приховує підказки при кліці за межами пошукового інпуту
    document.addEventListener('click', (event) => {
      if (event.target !== searchInput) {
        suggestionsList.innerHTML = ''; // Приховуємо підказки, якщо користувач клікнув за межами інпуту
      }
    });

    // Отримуємо параметр "item" з URL на стороні клієнта
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('item');

    if (itemId) {
      // Якщо є параметр "item" у URL, фільтруємо товари за категорією
      const filteredProductsByItem = products.filter(product => product.category === itemId);
      showProducts(filteredProductsByItem); // Відображаємо відфільтровані товари
    }
  })
  .catch(error => console.error('Помилка при завантаженні товарів:', error));

// Робота із фільтрами та пошуком 
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');
let products = []; // Масив для зберігання всіх товарів
let selectedCategories = []; // Масив для зберігання вибраних категорій
let activeTranslations = translations[activeLanguage];

const itemsPerPage = 20;
let currentPage = 1;


// Функція для відображення товарів на сторінці
function showProducts(productsToShow, start, end) {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = ''; // Очистити контейнер перед додаванням нових товарів

  // Проходження по списку товарів та створення блоків для кожного товару
  for (let i = start; i < end; i++) {
    const productId = productsToShow[i].id; // Отримати ідентифікатор товару
    const product = products.find(p => p.id === productId); // Знайти товар за ідентифікатором
    
    if (!product) break;


    const goodsProduct = document.createElement('div');
    goodsProduct.classList.add('goods__product');

    // Вибір перекладу назви товару залежно від активної мови
    const translatedName = activeTranslations.products.find(p => p.id === productId).name;

    // Вибір перекладів властивостей залежно від активної мови
    const translatedProperties = activeTranslations.properties;

    // Вибір значень властивостей залежно від активної мови
    const translatedProductProperties = activeTranslations.products.find(p => p.id === productId).properties;


    // Заповнення блоку інформацією про товар
    goodsProduct.innerHTML = `
    <div class="goods__product__image">
      <img src="${product.image}" alt="${translatedName}">
    </div>
    <h3 class="goods__product__title">
      ${translatedName}
    </h3>
    <div class="goods__product__properties">
        ${product.properties.size !== undefined && product.properties.size !== null && product.properties.size !== '' ? `<p class="goods__product__size"><span class="goods__product__properties__name">${translatedProperties.size}</span> ${translatedProductProperties.size}</p>` : ''}
        ${product.properties.color !== undefined && product.properties.color !== null && product.properties.color !== '' ? `<p class="goods__product__color"><span class="goods__product__properties__name">${translatedProperties.color}</span> ${translatedProductProperties.color}</p>` : ''}
        ${product.properties.footage !== undefined && product.properties.footage !== null && product.properties.footage !== '' ? `<p class="goods__product__footage"><span class="goods__product__properties__name">${translatedProperties.footage}</span> ${translatedProductProperties.footage}</p>` : ''}
        ${product.properties.fastening !== undefined && product.properties.fastening !== null && product.properties.fastening !== '' ? `<p class="goods__product__fastening"><span class="goods__product__properties__name">${translatedProperties.fastening}</span> ${translatedProductProperties.fastening}</p>` : ''}
        ${product.properties.quantityOfPack !== undefined && product.properties.quantityOfPack !== null && product.properties.quantityOfPack !== '' ? `<p class="goods__product__quantityOfPack"><span class="goods__product__properties__name">${translatedProperties.quantityOfPack}</span> ${translatedProductProperties.quantityOfPack}</p>` : ''}
        ${product.properties.quantityofBox !== undefined && product.properties.quantityofBox !== null && product.properties.quantityofBox !== '' ? `<p class="goods__product__quantityofBox"><span class="goods__product__properties__name">${translatedProperties.quantityofBox}</span> ${translatedProductProperties.quantityofBox}</p>` : ''}
        ${product.properties.producer !== undefined && product.properties.producer !== null && product.properties.producer !== '' ? `<p class="goods__product__producer"><span class="goods__product__properties__name">${translatedProperties.producer}</span> ${translatedProductProperties.producer}</p>` : ''}
    </div>
  `;
  

    // Додавання блоку товару до контейнера
    productsList.appendChild(goodsProduct);
  }

  updatePagination();
  setTranslations(); 
}

// Функція для оновлення пагінації
function updatePagination() {
  const itemsPerPage = 20; // Кількість товарів на сторінці
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => goToPage(i));
    paginationContainer.appendChild(pageButton);

    pageButton.classList.toggle('active', i === currentPage);
  }
}

function goToPage(pageNumber, scrollToTop = false) {
  currentPage = pageNumber;
  if (scrollToTop) {
  const productsList = document.getElementById('productsList');
  productsList.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Прокручуємо до початку контейнера із товарами
  }
  filterProducts(); // Перефільтровуємо товари
}


// Функція для фільтрації товарів за обраними категоріями та пошуковим запитом
function filterProducts() {
  const searchText = searchInput.value.trim().toLowerCase();
  const filteredProductsBySearch = products.filter(product => activeTranslations.products.find(p => p.id === product.id)?.name.toLowerCase().includes(searchText));
  let filteredProducts = filteredProductsBySearch; // Початково, вибираємо всі товари, які відповідають пошуковому запиту

  if (selectedCategories.length > 0) {
    // Фільтрація за обраними категоріями, якщо є вибрані категорії
    filteredProducts = filteredProductsBySearch.filter(product => selectedCategories.includes(product.category));
  }

  // Оновлюємо пагінацію та показуємо товари для поточної сторінки
  updatePagination(); // Оновлюємо кнопки пагінації
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  showProducts(filteredProducts, startIndex, endIndex); // Відображення сторінки
}


// Завантажуємо список товарів з файлу products.json
fetch('./data/products.json')
  .then(response => response.json())
  .then(data => {
    products = data; // Зберігаємо всі товари у змінну
    updatePagination();
    showProducts(products, 0, itemsPerPage);  // При завантаженні сторінки відображаємо всі товари

    // Функція для відображення підказок
    const showSuggestions = () => {
      const searchText = searchInput.value.trim().toLowerCase();

      // Фільтруємо товари за пошуковим запитом
      const filteredProducts = products.filter(product => activeTranslations.products.find(p => p.id === product.id)?.name.toLowerCase().includes(searchText));

      // Показуємо або приховуємо підказки залежно від наявності результатів
      if (filteredProducts.length > 0) {
        suggestionsList.innerHTML = '';
        filteredProducts.forEach(product => {
          const suggestion = document.createElement('div');
          suggestion.classList.add('suggestion');

          const translatedName = activeTranslations.products.find(p => p.id === product.id)?.name || product.name;
          suggestion.textContent = translatedName;
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

// Отримуємо всі input type="checkbox" для фільтрів
const filterInputs = document.querySelectorAll('input[name="filter"]');

// Обробник подій для зміни стану фільтрів
function handleFilterChange(event) {
  const isChecked = event.target.checked;
  const filterValue = event.target.value;

  if (isChecked) {
    // Додавання вибраної категорії до списку
    selectedCategories.push(filterValue);
  } else {
    // Видалення вибраної категорії зі списку
    selectedCategories = selectedCategories.filter(category => category !== filterValue);
  } 
  goToPage(1, true); // Перехід на першу сторінку після зміни фільтрів
}

// Додаємо обробник подій для кожного input type="checkbox" фільтра
filterInputs.forEach(input => {
  input.addEventListener('change', handleFilterChange);
});

    // Функція для очищення підказок та приховування їх контейнера
function clearSuggestions() {
  suggestionsList.innerHTML = '';
  suggestionsList.classList.remove('active');
}

// Функція для обробки вибору підказки
function selectSuggestion(suggestionText) {
  searchInput.value = suggestionText;
  clearSuggestions();
  filterProducts();
}

// Обробник події для кліку ззовні інпута пошуку
document.addEventListener('click', (event) => {
  if (!event.target.closest('.goods__search__input')) {
    clearSuggestions();
  }
});

// Обробник події для вибору підказки
suggestionsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('suggestion')) {
    selectSuggestion(event.target.textContent);
  }
});

// Обробник події для вибору підказки клавішами зі стрілками
searchInput.addEventListener('keydown', (event) => {
  const suggestions = suggestionsList.querySelectorAll('.suggestion');
  const currentSuggestion = suggestionsList.querySelector('.suggestion.active');

  if (event.key === 'ArrowUp' && currentSuggestion) {
    const prevSuggestion = currentSuggestion.previousElementSibling;
    if (prevSuggestion) {
      currentSuggestion.classList.remove('active');
      prevSuggestion.classList.add('active');
    }
  } else if (event.key === 'ArrowDown' && currentSuggestion) {
    const nextSuggestion = currentSuggestion.nextElementSibling;
    if (nextSuggestion) {
      currentSuggestion.classList.remove('active');
      nextSuggestion.classList.add('active');
    }
  } else if (event.key === 'Enter' && currentSuggestion) {
    selectSuggestion(currentSuggestion.textContent);
  }
});

    // Фільтруємо товари при завантаженні сторінки за станом фільтрів
    filterProducts();
  })
  .catch(error => console.error('Помилка при завантаженні товарів:', error));

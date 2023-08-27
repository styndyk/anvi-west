// Об'єкти з перекладами та інший код для перекладу
const ukrainianTranslations = {
    homeMenu: 'Головна сторінка',
    aboutUsMenu: 'Про нас',
    productsMenu: 'Товари',
    contactsMenu: 'Контакти',
    more: 'Більше',
    productsTitle: 'Товари',
    productsText: 'Представлені основні види товарів',
    foamRubber: 'Поролон',
    nonWovenMaterials: 'Неткані матеріали',
    springs: 'Пружинний блок',
    siliconeBall: 'Силікована кулька (холофайбер)',
    foamFiller: 'Поролоновий наповнювач',
    glues: 'Клеї',
    allProducts: 'Всі товари',
    locationTitle: 'Ми знаходимося',
    locationAddress: 'вулиця Бічна Промислова, 3, Червоноград, Львівська область, 80100',
    phoneNumber: '0(67)6750868',
    emailAddress: 'anvizahid@gmail.com',
    contactTitle: 'Зв\'язатися з нами',
    firstName: "Ім'я: *",
    lastName: "Прізвище *",
    email: "Електронна пошта *",
    phone: "Номер телефону *",
    subject: "Тема",
    message: "Повідомлення",
    sendButton: "Надіслати",
    successMessage: "Ваше звернення було успішно відправлене нашим менеджерам. Ми зв’яжемося із вами у найближчий час.",
    errorMessage: "Сталася помилка при відправці звернення. Спробуйте зв'язатися з нами за допомогою соціальних мереж або телефону.",
    socialsTitle: "Месенджери та соціальні мережі",
    facebook: "Facebook",
    instagram: "Instagram",
    viber: "Viber",
    homePagePageTitle: "Анві-Захід",
    homePageDescription: "Ласкаво просимо до гуртівні 'Анві-Захід' – вашого надійного партнера в області меблевої фурнітури та комплектуючих до м'яких меблів ",
    aboutUsPageTitle: "Про компанію Анві-Захід",
    aboutUsPagedescription: "Ласкаво просимо до гуртівні 'Анві-Захід' – вашого надійного партнера в області меблевої фурнітури та комплектуючих до м'яких меблів. Ми є провідним постачальником якісних та стильних матеріалів для меблевого виробництва. Наша команда пропонує широкий асортимент продукції за конкурентними цінами, щоб задовольнити потреби кожного клієнта. З нами ви отримуєте професійну підтримку, оперативні поставки та надійного партнера для успішного розвитку вашого бізнесу. Разом з 'Анві-Захід' втілюйте найкращі ідеї та створюйте неперевершені меблі для вашого внутрішнього простору.",
    productsPagePageTitle: "Товари - Анві-Захід",
    productsPagetitle: "Товари",
    productsPagedescription: "Представлені всі види товарів",
    productsPagefiltersFoamRubber: "Поролон",
    productsPagefiltersNonWovenMaterials: "Неткані матеріали",
    productsPagefiltersSprings: "Пружини",
    productsPagefiltersSiliconeBall: "Синтепон та холофайбер",
    productsPagefiltersGlues: "Клей",
    productsPagefiltersPass: "Пас",
    productsPagefiltersLamellae: "Ламелі",
    productsPagefiltersFiberboard: "ДВП листи",
    productsPagefiltersHooks: "Зачепи на ніжки",
    productsPagefiltersStaples: "Скоби",
    productsPagefiltersChalk: "Крейда",
    productsPagefiltersLocksAndSliders: "Замки та бігунки",
    productsPagefiltersMechanisms: "Механізми",
    productsPagesearchPlaceholder: "Введіть пошуковий запит"
};


const russianTranslations = {
    homeMenu: 'Главная страница',
    aboutUsMenu: 'О нас',
    productsMenu: 'Товары',
    contactsMenu: 'Контакты',
    more: 'Больше',
    productsTitle: 'Товары',
    productsText: 'Представлены основные виды товаров',
    foamRubber: 'Поролон',
    nonWovenMaterials: 'Нетканые материалы',
    springs: 'Пружинный блок',
    siliconeBall: 'Силиконовый шарик (холлофайбер)',
    foamFiller: 'Поролоновый наполнитель',
    glues: 'Клеи',
    allProducts: 'Все товары',
    locationTitle: 'Мы находимся',
    locationAddress: 'улица Бічна Промислова, 3, Червоноград, Львовская область, 80100',
    phoneNumber: '0(67)6750868',
    emailAddress: 'anvizahid@gmail.com',
    contactTitle: 'Связаться с нами',
    firstName: "Имя: *",
    lastName: "Фамилия *",
    email: "Электронная почта *",
    phone: "Номер телефона *",
    subject: "Тема",
    message: "Сообщение",
    sendButton: "Отправить",
    successMessage: "Ваше обращение было успешно отправлено нашим менеджерам. Мы свяжемся с вами в ближайшее время.",
    errorMessage: "Произошла ошибка при отправке обращения. Попробуйте связаться с нами через социальные сети или телефон.",
    socialsTitle: "Мессенджеры и социальные сети",
    facebook: "Facebook",
    instagram: "Instagram",
    viber: "Viber",
    homePagePageTitle: "Анви-Захид",
    homePageDescription: "Добро пожаловать в 'Анви-Захид' – вашего надежного партнера в области мебельной фурнитуры и комплектующих к мягкой мебели.",
    aboutUsPageTitle :"О компании Анви-Захид",
    aboutUsPagedescription: "Добро пожаловать в 'Анви-Захид' – вашего надежного партнера в области мебельной фурнитуры и комплектующих к мягкой мебели. Мы являемся ведущим поставщиком качественных и стильных материалов для мебельного производства. Наша команда предлагает широкий ассортимент продукции по конкурентоспособным ценам, чтобы удовлетворить потребности каждого клиента. С нами вы получаете профессиональную поддержку, оперативные поставки и надежного партнера для успешного развития вашего бизнеса. Вместе с  'Анви-Захид' воплощайте лучшие идеи и создавайте непревзойденную мебель для вашего внутреннего пространства.",
    productsPagePageTitle: "Товары - Анві-Запад",
    productsPagetitle: "Товары",
    productsPagedescription: "Представлены все виды товаров",
    productsPagefiltersFoamRubber: "Поролон",
    productsPagefiltersNonWovenMaterials: "Нетканые материалы",
    productsPagefiltersSprings: "Пружины",
    productsPagefiltersSiliconeBall: "Синтепон и холлофайбер",
    productsPagefiltersGlues: "Клей",
    productsPagefiltersPass: "Пас",
    productsPagefiltersLamellae: "Ламели",
    productsPagefiltersFiberboard: "ДВП листы",
    productsPagefiltersHooks: "Защелки на ножки",
    productsPagefiltersStaples: "Скобы",
    productsPagefiltersChalk: "Мел",
    productsPagefiltersLocksAndSliders: "Замки и бегунки",
    productsPagefiltersMechanisms: "Механизмы",
    productsPagesearchPlaceholder: "Введите поисковый запрос"
};


// 
const translations = {
    ukrainian: ukrainianTranslations,
    russian: russianTranslations
};

// Елемент для вибору мови
const languageSelect = document.getElementById("languageSelect");


// Функція для встановлення перекладів
let activeLanguage = "ukrainian"; // Встановіть активну мову тут


function setTranslations() {
  const elementsToTranslate = document.querySelectorAll("[data-translation]");

  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute("data-translation");
    const translationText = translations[activeLanguage][translationKey];
    if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
        element.placeholder = translationText;
    } else {
        element.textContent = translationText;
    }
  });
}

// Перевіряємо, чи вже збережена мова в localStorage
const savedLanguage = localStorage.getItem("selectedLanguage");
if (savedLanguage && translations[savedLanguage]) {
    activeLanguage = savedLanguage;
    setTranslations();

    // Змінюємо вибране значення у елементі <select>
    languageSelect.value = activeLanguage;
}

// Функція для зміни активної мови
function changeLanguage(newLanguage) {
    if (translations[newLanguage] && activeLanguage !== newLanguage) {
      activeLanguage = newLanguage;
      setTranslations(); // Перевід текстів з нової активної мови
      // Зберігаємо обрану мову у localStorage
      localStorage.setItem("selectedLanguage", newLanguage);
    }
}



// Слухач події зміни мови

languageSelect.addEventListener("change", function () {
  changeLanguage(languageSelect.value);
});

// Виклик функції для встановлення перекладів
setTranslations(); 
  

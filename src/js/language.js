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
    productsPagesearchPlaceholder: "Введіть пошуковий запит",

    //Товари
    properties: {
        size: "Розмір",
        color: "Колір",
        footage: "Метраж",
        fastening: "Кріплення",
        quantityOfPack: "Кількість в упаковці",
        quantityofBox: "Кількість в ящику",
        producer: "Виробник"
    },
    products: [
        {
          id: 1,
          name: "Поролон T25-40",
          properties: {
            size: "2000x1600х10",
            color: "фіолетовий"
          }
        },
        {
          id: 2,
          name: "Войлок 1700",
          properties: {
            color: "білий",
            footage: "10 м."
          }
        },
        {
          id: 3,
          name: "Войлок 280/670",
          properties: {
              color: "сірий (на білій основі)"
          }
      },
      {
          id: 4,
          name: "Войлок 290/500",
          properties: {
              color: "рудий"
          }
      },
      {
          id: 5,
          name: "Поролон Т-2237",
          properties: {
              color: "білий",
              size: "2000x1200х10"
          }
      },
      {
          id: 6,
          name: "Поролон Т-3550",
          properties: {
            color: "зелений",
            size: "2000x1600х20"
          }
      },
      {
        id: 7,
        name: "Клей ANED 'Tapicerski Pianoklej' (20 кг)",
        properties: {

        }
      },
      {
        id: 8,
        name: "Войлок 1350",
        properties: {
          color: "білий",
          footage: "10 м."
        }
      },
      {
        id: 9,
        name: "Войлок 120",
        properties: {
          color: "темносірий",
          footage: "100 м."
        }
      },
      {
        id: 10,
        name: "Войлок термопресований 500",
        properties: {
          color: "",
          footage: "40 м."
        }
      },
      {
        id: 11,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х20"
        }
      },
      {
        id: 12,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х30"
        }
      },
      {
        id: 13,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х40"
        }
      },
      {
        id: 14,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х50"
        }
      },
      {
        id: 15,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х60"
        }
      },
      {
        id: 16,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х80"
        }
      },
      {
        id: 17,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1600х100"
        }
      },
      {
        id: 18,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х10"
        }
      },
      {
        id: 19,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х20"
        }
      },
      {
        id: 20,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х30"
        }
      },
      {
        id: 21,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х40"
        }
      },
      {
        id: 22,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х50"
        }
      },
      {
        id: 23,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х60"
        }
      },
      {
        id: 24,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х80"
        }
      },
      {
        id: 25,
        name: "Поролон T25-40",
        properties: {
          color: "фіолетовий",
          size: "2000x1200х100"
        }
      },
      {
        id: 26,
        name: "Войлок термопресований 600",
        properties: {
          color: "",
          footage: "30 м."
        }
      },
      {
        id: 27,
        name: "Войлок термопресований 700",
        properties: {
          color: "",
          footage: "25 м."
        }
      },
      {
        id: 28,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х20"
        }
      },
      {
        id: 29,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х30"
        }
      },
      {
        id: 30,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х40"
        }
      },
      {
        id: 31,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х50"
        }
      },
      {
        id: 32,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х60"
        }
      },
      {
        id: 33,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х80"
        }
      },
      {
        id: 34,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1200х100"
        }
      },
      {
        id: 35,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х10"
        }
      },
      {
        id: 36,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х20"
        }
      },
      {
        id: 37,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х30"
        }
      },
      {
        id: 38,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х40"
        }
      },
      {
        id: 39,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х50"
        }
      },
      {
        id: 40,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х60"
        }
      },
      {
        id: 41,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х80"
        }
      },
      {
        id: 42,
        name: "Поролон Т-2237",
        properties: {
          color: "білий",
          size: "2000x1600х100"
        }
      },
      {
        id: 43,
        name: "Поролон Т-3550",
        properties: {
          color: "зелений",
          size: "2000x1600х30"
        }
      },
      {
        id: 44,
        name: "Поролон Т-3550",
        properties: {
          color: "зелений",
          size: "2000x1600х40"
        }
      },
      {
        id: 45,
        name: "Ватин",
        properties: {
          color: "сірий",
          footage: "50 м."
        }
      },
      {
        id: 46,
        name: "Домішувач ANED (20 л)",
        properties: {
          
        }
      },
      {
        id: 47,
        name: "Клей ANED (0.8 кг)",
        properties: {
          
        }
      },
      {
        id: 48,
        name: "Холлофайбер",
        properties: {
          color: "коричневий і білий"
        }
      },
      {
        id: 49,
        name: "Поролоновий наповнювач",
        properties: {
          
        }
      },
      {
        id: 50,
        name: "Пружинний блок (різних розмірів)",
        properties: {
          
        }
      },
      {
        id: 51,
        name: "Пружина змійка 480 мм.",
        properties: {
          
        }
      },
      {
        id: 52,
        name: "Пружина змійка 520 мм.",
        properties: {
          
        }
      },
      {
        id: 53,
        name: "Синтепон 60",
        properties: {
          footage: "80 м."
        }
      },
      {
        id: 54,
        name: "Синтепон 80",
        properties: {
          footage: "60 м."
        }
      },
      {
        id: 55,
        name: "Синтепон 100",
        properties: {
          footage: "50 м."
        }
      },
      {
        id: 56,
        name: "Синтепон 150",
        properties: {
          footage: "40 м."
        }
      },
      {
        id: 57,
        name: "Синтепон 200",
        properties: {
          footage: "30 м."
        }
      },
      {
        id: 58,
        name: "Синтепон 250",
        properties: {
          footage: ""
        }
      },
      {
        id: 59,
        name: "Пружина змійка 540 мм.",
        properties: {
          
        }
      },
      {
        id: 60,
        name: "Пас ЮТА",
        properties: {
          size: "4 см."
        }
      },
      {
        id: 61,
        name: "Пас ЮТА",
        properties: {
          size: "5 см."
        }
      },
      {
        id: 62,
        name: "Пас ЮТА",
        properties: {
          size: "6 см."
        }
      },
      {
        id: 63,
        name: "Пас гумовий 60%",
        properties: {
          size: ""
        }
      },
      {
        id: 64,
        name: "Ламель 600 мм.",
        properties: {
          fastening: "Пластмасса"
        }
      },
      {
        id: 65,
        name: "Ламель 700 мм.",
        properties: {
          fastening: "Пластмасса"
        }
      },
      {
        id: 66,
        name: "Ламель 800 мм.",
        properties: {
          fastening: "Пластмасса"
        }
      },
      {
        id: 67,
        name: "Ламель 900 мм.",
        properties: {
          fastening: "Пластмасса"
        }
      },
      {
        id: 68,
        name: "Синтепон 300",
        properties: {
          footage: "20 м."
        }
      },
      {
        id: 69,
        name: "Пружина змійка 500 мм.",
        properties: {
          
        }
      },
      {
        id: 70,
        name: "Пружина змійка 560 мм.",
        properties: {
          
        }
      },
      {
        id: 71,
        name: "ДВП лист",
        properties: {
          color: "Чорнове",
          size: "2.5x2750x1700"
        }
      },
      {
        id: 72,
        name: "ДВП лист",
        properties: {
          color: "Чорнове",
          size: "3.2x2750x1700"
        }
      },
      {
        id: 73,
        name: "ДВП лист",
        properties: {
          color: "Білий",
          size: "3.2x2750x1700"
        }
      },
      {
        id: 74,
        name: "Флізелін 50 г/м²",
        properties: {
          color: "Чорний"
        }
      },
      {
        id: 75,
        name: "Флізелін 50 г/м²",
        properties: {
          color: "Бежевий"
        }
      },
      {
        id: 76,
        name: "Флізелін 60 г/м²",
        properties: {
          color: "Чорний"
        }
      },
      {
        id: 77,
        name: "Флізелін 60 г/м²",
        properties: {
          color: "Бежевий"
        }
      },
      {
        id: 78,
        name: "Флізелін 70 г/м²",
        properties: {
          color: "Чорний"
        }
      },
      {
        id: 79,
        name: "Флізелін 70 г/м²",
        properties: {
          color: "Бежевий"
        }
      },
      {
        id: 80,
        name: "Флізелін 80 г/м²",
        properties: {
          color: "Чорний"
        }
      },
      {
        id: 81,
        name: "Флізелін 80 г/м²",
        properties: {
          color: "Бежевий"
        }
      },
      {
        id: 82,
        name: "Флізелін 100 г/м²",
        properties: {
          color: "Чорний"
        }
      },
      {
        id: 83,
        name: "Флізелін 100 г/м²",
        properties: {
          color: "Бежевий"
        }
      },
      {
        id: 84,
        name: "Зачіп лінійний",
        properties: {
          
        }
      },
      {
        id: 85,
        name: "Зачіп Папа/Мама",
        properties: {
          
        }
      },
      {
        id: 86,
        name: "Завіс Великий К275",
        properties: {
          size: "40x100 мм."
        }
      },
      {
        id: 87,
        name: "Завіс Малий К274",
        properties: {
          size: "40x40 мм."
        }
      },
      {
        id: 88,
        name: "Ніжка - опора",
        properties: {
          size: "0.2/0.4"
        }
      },
      {
        id: 89,
        name: "Ніжка - опора",
        properties: {
          size: "0.7/0.4"
        }
      },
      {
        id: 90,
        name: "Ніжка",
        properties: {
          size: "5 см."
        }
      },
      {
        id: 91,
        name: "Ніжка",
        properties: {
          size: "8 см."
        }
      },
      {
        id: 92,
        name: "Ніжка L220",
        properties: {
          size: "220 мм."
        }
      },
      {
        id: 93,
        name: "Ніжка F30",
        properties: {
          size: ""
        }
      },
      {
        id: 94,
        name: "Ніжка F50",
        properties: {
          size: ""
        }
      },
      {
        id: 95,
        name: "Ніжка Трикутна",
        properties: {
          size: ""
        }
      },
      {
        id: 96,
        name: "Ніжка Овальна або Пуфа",
        properties: {
          size: ""
        }
      },
      {
        id: 97,
        name: "Скоба Bizon",
        properties: {
          size: "380/10",
          quantityOfPack: "18 000 шт.",
          quantityofBox: "6 упаковок"
        }
      },
      {
        id: 98,
        name: "Скоба Bizon",
        properties: {
          size: "380/14",
          quantityOfPack: "12 000 шт.",
          quantityofBox: "6 упаковок"
        }
      },
      {
        id: 99,
        name: "Скоба Bizon",
        properties: {
          size: "380/16",
          quantityOfPack: "12 000 шт.",
          quantityofBox: "6 упаковок"
        }
      },
      {
        id: 100,
        name: "Скоба Bizon",
        properties: {
          size: "380/38",
          quantityOfPack: "12 600 шт."
        }
      },
      {
        id: 101,
        name: "Скоба Bizon",
        properties: {
          size: "380/04",
          quantityOfPack: "16 500 шт.",
          quantityofBox: "10 упаковок"
        }
      },
      {
        id: 102,
        name: "Зачіп до пружини-змійки",
        properties: {
          quantityOfPack: "2000 шт.",
        }
      },
      {
        id: 103,
        name: "Крейда",
        properties: {
          producer: "Чехія",
          color: "Білий",
          quantityOfPack: "100 шт.",
        }
      },
      {
        id: 104,
        name: "Крейда",
        properties: {
          producer: "Чехія",
          color: "Рожевий",
          quantityOfPack: "100 шт.",
        }
      },
      {
        id: 105,
        name: "Крейда",
        properties: {
          producer: "Чехія",
          color: "Голубий",
          quantityOfPack: "100 шт.",
        }
      },
      {
        id: 106,
        name: "Крейда",
        properties: {
          producer: "Чехія",
          color: "Синій",
          quantityOfPack: "100 шт.",
        }
      },
      {
        id: 107,
        name: "Замок",
        properties: {
          color: "Чорний, Білий, Бежевий",
          footage: "200 м.",
        }
      },
      {
        id: 108,
        name: "Бігунок до замка",
        properties: {
          color: "Чорний, Білий, Бежевий",
          quantityOfPack: "2000 шт.",
        }
      },
      {
        id: 109,
        name: "Ніж до паралону",
        properties: {

        }
      },
      {
        id: 110,
        name: "Ґудзики",
        properties: {
          quantityOfPack: "1000 шт."
        }
      },
      {
        id: 111,
        name: "Механізм Алькрон",
        properties: {
          
        }
      },
      {
        id: 112,
        name: "Механізм Дельфін з двома пружинами (великий)",
        properties: {
          
        }
      },
      {
        id: 113,
        name: "Механізм Дельфін з двома пружинами (середній)",
        properties: {
          
        }
      },
      {
        id: 114,
        name: "Механізм Дельфін з двома пружинами (малий)",
        properties: {
          
        }
      },
      {
        id: 115,
        name: "Механізм Крісло",
        properties: {
          
        }
      },
      {
        id: 116,
        name: "Механізм Книжка",
        properties: {
          
        }
      },
      {
        id: 117,
        name: "Ніжка",
        properties: {
          size: "2 см."
        }
      },
      {
        id: 118,
        name: "Кріплення до ламелі",
        properties: {

        }
      },
      {
        id: 119,
        name: "Ніжка Стакан",
        properties: {
          size: "10 см."
        }
      },
      {
        id: 120,
        name: "Кокосова стружка",
        properties: {
          size: "200х2000х1-2 см."
        }
      },
      {
        id: 121,
        name: "Кокосова стружка",
        properties: {
          size: "160x200 см./лист"
        }
      },
      ]
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
    productsPagesearchPlaceholder: "Введите поисковый запрос",

    //Товары
    properties: {
        size: "Размер",
        color: "Цвет",
        footage: "Метраж",
        fastening: "Крепление",
        quantityOfPack: "Количество в упаковке",
        quantityofBox: "Количество в ящике",
        producer: "Производитель"
      },
      products: [
        {
          id: 1,
          name: "Поролон T25-40",
          properties: {
            size: "2000x1600х10",
            color: "фиолетовый"
          }
        },
        {
          id: 2,
          name: "Войлок 1700",
          properties: {
            color: "белый",
            footage: "10 м."
          }
        },
        {
          id: 3,
          name: "Войлок 280/670",
          properties: {
              color: "серый на белой основе"
          }
      },
      {
          id: 4,
          name: "Войлок 290/500",
          properties: {
              color: "рыжий"
          }
      },
      {
          id: 5,
          name: "Поролон Т-2237",
          properties: {
              color: "белый",
              size: "2000x1200х10"
          }
      },
      {
          id: 6,
          name: "Поролон Т-3550",
          properties: {
              color: "зеленый",
              size: "2000x1600х20"
          }
      },
      {
          id: 7,
          name: "Клей ANED Tapicerski Pianoklej (20 кг)",
          properties: {}
      },
      {
          id: 8,
          name: "Войлок 1350",
          properties: {
              color: "белый",
              footage: "10 м."
          }
      },
      {
          id: 9,
          name: "Войлок 120",
          properties: {
              color: "темно-серый",
              footage: "100 м."
          }
      },
      {
          id: 10,
          name: "Войлок термопрессованный 500",
          properties: {
              color: "",
              footage: "40 м."
          }
      },
      {
          id: 11,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х20"
          }
      },
      {
          id: 12,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х30"
          }
      },
      {
          id: 13,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х40"
          }
      },
      {
          id: 14,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х50"
          }
      },
      {
          id: 15,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х60"
          }
      },
      {
          id: 16,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х80"
          }
      },
      {
          id: 17,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1600х100"
          }
      },
      {
          id: 18,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1200х10"
          }
      },
      {
          id: 19,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1200х20"
          }
      },
      {
          id: 20,
          name: "Поролон T25-40",
          properties: {
              color: "фиолетовый",
              size: "2000x1200х30"
          }
      },
      {
        id: 21,
        name: "Поролон T25-40",
        properties: {
            color: "фиолетовый",
            size: "2000x1200х40"
        }
    },
    {
        id: 22,
        name: "Поролон T25-40",
        properties: {
            color: "фиолетовый",
            size: "2000x1200х50"
        }
    },
    {
        id: 23,
        name: "Поролон T25-40",
        properties: {
            color: "фиолетовый",
            size: "2000x1200х60"
        }
    },
    {
        id: 24,
        name: "Поролон T25-40",
        properties: {
            color: "фиолетовый",
            size: "2000x1200х80"
        }
    },
    {
        id: 25,
        name: "Поролон T25-40",
        properties: {
            color: "фиолетовый",
            size: "2000x1200х100"
        }
    },
    {
        id: 26,
        name: "Войлок термопрессованный 600",
        properties: {
            color: "",
            footage: "30 м."
        }
    },
    {
        id: 27,
        name: "Войлок термопрессованный 700",
        properties: {
            color: "",
            footage: "25 м."
        }
    },
    {
        id: 28,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х20"
        }
    },
    {
        id: 29,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х30"
        }
    },
    {
        id: 30,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х40"
        }
    },
    {
        id: 31,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х50"
        }
    },
    {
        id: 32,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х60"
        }
    },
    {
        id: 33,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х80"
        }
    },
    {
        id: 34,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1200х100"
        }
    },
    {
        id: 35,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1600х10"
        }
    },
    {
        id: 36,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1600х20"
        }
    },
    {
        id: 37,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1600х30"
        }
    },
    {
        id: 38,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1600х40"
        }
    },
    {
        id: 39,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1600х50"
        }
    },
    {
        id: 40,
        name: "Поролон Т-2237",
        properties: {
            color: "белый",
            size: "2000x1600х60"
        }
    },
    {
      id: 41,
      name: "Поролон Т-2237",
      properties: {
          color: "белый",
          size: "2000x1600х80"
      }
  },
  {
      id: 42,
      name: "Поролон Т-2237",
      properties: {
          color: "белый",
          size: "2000x1600х100"
      }
  },
  {
      id: 43,
      name: "Поролон Т-3550",
      properties: {
          color: "зеленый",
          size: "2000x1600х30"
      }
  },
  {
      id: 44,
      name: "Поролон Т-3550",
      properties: {
          color: "зеленый",
          size: "2000x1600х40"
      }
  },
  {
      id: 45,
      name: "Ватин",
      properties: {
          color: "серый",
          footage: "50 м."
      }
  },
  {
      id: 46,
      name: "Примеситель ANED (20 л)",
      properties: {

      }
  },
  {
      id: 47,
      name: "Клей ANED (0.8 кг)",
      properties: {

      }
  },
  {
      id: 48,
      name: "Холлофайбер",
      properties: {
          color: "коричневый и белый"
      }
  },
  {
      id: 49,
      name: "Поролоновый наполнитель",
      properties: {

      }
  },
  {
      id: 50,
      name: "Пружинний блок (разных размеров)",
      properties: {

      }
  },
  {
      id: 51,
      name: "Пружина змейка 480 мм.",
      properties: {

      }
  },
  {
      id: 52,
      name: "Пружина змейка 520 мм.",
      properties: {

      }
  },
  {
      id: 53,
      name: "Синтепон 60",
      properties: {
          footage: "80 м."
      }
  },
  {
      id: 54,
      name: "Синтепон 80",
      properties: {
          footage: "60 м."
      }
  },
  {
      id: 55,
      name: "Синтепон 100",
      properties: {
          footage: "50 м."
      }
  },
  {
      id: 56,
      name: "Синтепон 150",
      properties: {
          footage: "40 м."
      }
  },
  {
      id: 57,
      name: "Синтепон 200",
      properties: {
          footage: "30 м."
      }
  },
  {
      id: 58,
      name: "Синтепон 250",
      properties: {
          footage: ""
      }
  },
  {
      id: 59,
      name: "Пружина змейка 540 мм.",
      properties: {

      }
  },
  {
      id: 60,
      name: "Пас ЮТА",
      properties: {
          size: "4 см."
      }
  },
  {
    id: 61,
    name: "Пас ЮТА",
    properties: {
        size: "5 см."
    }
  },
  {
      id: 62,
      name: "Пас ЮТА",
      properties: {
          size: "6 см."
      }
  },
  {
      id: 63,
      name: "Пас резиновый 60%",
      properties: {
          size: ""
      }
  },
  {
      id: 64,
      name: "Ламель 600 мм.",
      properties: {
          fastening: "Пластмасса"
      }
  },
  {
      id: 65,
      name: "Ламель 700 мм.",
      properties: {
          fastening: "Пластмасса"
      }
  },
  {
      id: 66,
      name: "Ламель 800 мм.",
      properties: {
          fastening: "Пластмасса"
      }
  },
  {
      id: 67,
      name: "Ламель 900 мм.",
      properties: {
          fastening: "Пластмасса"
      }
  },
  {
      id: 68,
      name: "Синтепон 300",
      properties: {
          footage: "20 м."
      }
  },
  {
      id: 69,
      name: "Пружина змейка 500 мм.",
      properties: {

      }
  },
  {
      id: 70,
      name: "Пружина змейка 560 мм.",
      properties: {

      }
  },
  {
      id: 71,
      name: "Лист ДВП",
      properties: {
          color: "Черновое",
          size: "2.5x2750x1700"
      }
  },
  {
      id: 72,
      name: "Лист ДВП",
      properties: {
          color: "Черновое",
          size: "3.2x2750x1700"
      }
  },
  {
      id: 73,
      name: "Лист ДВП",
      properties: {
          color: "Белый",
          size: "3.2x2750x1700"
      }
  },
  {
      id: 74,
      name: "Флизелин 50 г/м²",
      properties: {
          color: "Черный"
      }
  },
  {
      id: 75,
      name: "Флизелин 50 г/м²",
      properties: {
          color: "Бежевый"
      }
  },
  {
      id: 76,
      name: "Флизелин 60 г/м²",
      properties: {
          color: "Черный"
      }
  },
  {
      id: 77,
      name: "Флизелин 60 г/м²",
      properties: {
          color: "Бежевый"
      }
  },
  {
      id: 78,
      name: "Флизелин 70 г/м²",
      properties: {
          color: "Черный"
      }
  },
  {
      id: 79,
      name: "Флизелин 70 г/м²",
      properties: {
          color: "Бежевый"
      }
  },
  {
      id: 80,
      name: "Флизелин 80 г/м²",
      properties: {
          color: "Черный"
      }
  },
  {
    id: 81,
    name: "Флизелин 80 г/м²",
    properties: {
        color: "Бежевый"
    }
  },
  {
      id: 82,
      name: "Флизелин 100 г/м²",
      properties: {
          color: "Черный"
      }
  },
  {
      id: 83,
      name: "Флизелин 100 г/м²",
      properties: {
          color: "Бежевый"
      }
  },
  {
      id: 84,
      name: "Зацеп линейный",
      properties: {

      }
  },
  {
      id: 85,
      name: "Зацеп Папа/Мама",
      properties: {

      }
  },
  {
      id: 86,
      name: "Завеса Большой К275",
      properties: {
          size: "40x100 мм."
      }
  },
  {
      id: 87,
      name: "Завеса Малый К274",
      properties: {
          size: "40x40 мм."
      }
  },
  {
      id: 88,
      name: "Ножка - опора",
      properties: {
          size: "0.2/0.4"
      }
  },
  {
      id: 89,
      name: "Ножка - опора",
      properties: {
          size: "0.7/0.4"
      }
  },
  {
      id: 90,
      name: "Ножка",
      properties: {
          size: "5 см."
      }
  },
  {
      id: 91,
      name: "Ножка",
      properties: {
          size: "8 см."
      }
  },
  {
      id: 92,
      name: "Ножка L220",
      properties: {
          size: "220 мм."
      }
  },
  {
      id: 93,
      name: "Ножка F30",
      properties: {
          size: ""
      }
  },
  {
      id: 94,
      name: "Ножка F50",
      properties: {
          size: ""
      }
  },
  {
      id: 95,
      name: "Ножка Треугольная",
      properties: {
          size: ""
      }
  },
  {
      id: 96,
      name: "Ножка Овальная или Пуфа",
      properties: {
          size: ""
      }
  },
  {
      id: 97,
      name: "Скоба Bizon",
      properties: {
          size: "380/10",
          quantityOfPack: "18 000 шт.",
          quantityofBox: "6 упаковок"
      }
  },
  {
      id: 98,
      name: "Скоба Bizon",
      properties: {
          size: "380/14",
          quantityOfPack: "12 000 шт.",
          quantityofBox: "6 упаковок"
      }
  },
  {
      id: 99,
      name: "Скоба Bizon",
      properties: {
          size: "380/16",
          quantityOfPack: "12 000 шт.",
          quantityofBox: "6 упаковок"
      }
  },
  {
      id: 100,
      name: "Скоба Bizon",
      properties: {
          size: "380/38",
          quantityOfPack: "12 600 шт."
      }
  },
  {
    id: 101,
    name: "Скоба Bizon",
    properties: {
        size: "380/04",
        quantityOfPack: "16 500 шт.",
        quantityofBox: "10 упаковок"
    }
  },
  {
      id: 102,
      name: "Зажим для пружины-змейки",
      properties: {
          quantityOfPack: "2000 шт.",
      }
  },
  {
      id: 103,
      name: "Мел",
      properties: {
          producer: "Чехия",
          color: "Белый",
          quantityOfPack: "100 шт.",
      }
  },
  {
      id: 104,
      name: "Мел",
      properties: {
          producer: "Чехия",
          color: "Розовый",
          quantityOfPack: "100 шт.",
      }
  },
  {
      id: 105,
      name: "Мел",
      properties: {
          producer: "Чехия",
          color: "Голубой",
          quantityOfPack: "100 шт.",
      }
  },
  {
      id: 106,
      name: "Мел",
      properties: {
          producer: "Чехия",
          color: "Синий",
          quantityOfPack: "100 шт.",
      }
  },
  {
      id: 107,
      name: "Замок",
      properties: {
          color: "Черный, Белый, Бежевый",
          footage: "200 м.",
      }
  },
  {
      id: 108,
      name: "Бегунок для замка",
      properties: {
          color: "Черный, Белый, Бежевый",
          quantityOfPack: "2000 шт.",
      }
  },
  {
      id: 109,
      name: "Нож для поролона",
      properties: {

      }
  },
  {
      id: 110,
      name: "Пуговицы",
      properties: {
          quantityOfPack: "1000 шт."
      }
  },
  {
      id: 111,
      name: "Механизм Алькрон",
      properties: {

      }
  },
  {
      id: 112,
      name: "Механизм Дельфин с двумя пружинами (большой)",
      properties: {

      }
  },
  {
      id: 113,
      name: "Механизм Дельфин с двумя пружинами (средний)",
      properties: {

      }
  },
  {
      id: 114,
      name: "Механизм Дельфин с двумя пружинами (малый)",
      properties: {

      }
  },
  {
      id: 115,
      name: "Механизм Кресло",
      properties: {

      }
  },
  {
      id: 116,
      name: "Механизм Книга",
      properties: {

      }
  },
  {
      id: 117,
      name: "Ножка",
      properties: {
          size: "2 см."
      }
  },
  {
      id: 118,
      name: "Крепление для ламели",
      properties: {

      }
  },
  {
      id: 119,
      name: "Ножка Стакан",
      properties: {
          size: "10 см."
      }
  },
  {
      id: 120,
      name: "Кокосовая стружка",
      properties: {
          size: "200х2000х1-2 см."
      }
  },
  {
      id: 121,
      name: "Кокосовая стружка",
      properties: {
          size: "160x200 см./лист"
      }
  },
    ]
    
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
      // Оновлюємо список товарів з новою мовою
      filterProducts();

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
  

const siteData = {
  contacts: {
    address: '[Адрес енгізіледі]',
    phone: '[Телефон енгізіледі]',
    instagram: '@your_instagram',
    whatsapp: '+7 XXX XXX XX XX',
  },
  clubs: {
    kk: [
      {
        title: 'Қолөнер үйірмесі',
        text: 'Ұлттық және заманауи қолөнер техникасын үйрететін шығармашылық орта.',
      },
      {
        title: 'ITLab үйірмесі',
        text: 'Балалар мен жастарға арналған цифрлық сауаттылық, coding және жобалау бағыты.',
      },
      {
        title: 'Би үйірмесі',
        text: 'Сахналық мәдениет, халық және заманауи би элементтерін меңгеру бағдарламасы.',
      },
    ],
    ru: [
      {
        title: 'Кружок ремесла',
        text: 'Творческое пространство для изучения традиционных и современных техник рукоделия.',
      },
      {
        title: 'Кружок ITLab',
        text: 'Цифровая грамотность, coding и проектная работа для детей и молодежи.',
      },
      {
        title: 'Танцевальный кружок',
        text: 'Развитие сценической культуры, народных и современных направлений танца.',
      },
    ],
  },
  events: {
    kk: [
      { date: '15.04.2026', title: '«Көктем әуені» гала-концерті', place: 'Үлкен акт залы' },
      { date: '29.04.2026', title: 'Ұлттық өнер фестивалі', place: 'Негізгі сахна' },
      { date: '10.05.2026', title: 'Жастар шығармашылығы кеші', place: 'Кіші зал' },
    ],
    ru: [
      { date: '15.04.2026', title: 'Гала-концерт «Весенние мотивы»', place: 'Большой актовый зал' },
      { date: '29.04.2026', title: 'Фестиваль национального искусства', place: 'Главная сцена' },
      { date: '10.05.2026', title: 'Вечер молодежного творчества', place: 'Малый зал' },
    ],
  },
  gallery: {
    kk: [
      'Фото орны 01 — Бас сахна атмосферасы',
      'Фото орны 02 — Көрме сәті',
      'Фото орны 03 — Қолөнер жұмыстары',
      'Фото орны 04 — Концерт кадры',
      'Фото орны 05 — ITLab сабағы',
      'Фото орны 06 — Би қойылымы',
    ],
    ru: [
      'Место для фото 01 — Атмосфера главной сцены',
      'Место для фото 02 — Момент выставки',
      'Место для фото 03 — Работы кружка ремесла',
      'Место для фото 04 — Кадр концерта',
      'Место для фото 05 — Занятие ITLab',
      'Место для фото 06 — Танцевальная постановка',
    ],
  },
};

const i18n = {
  kk: {
    brandTitle: 'Қарасай батыр Мәдениет үйі',
    brandSubtitle: 'Ресми мәдени орталық',
    navHome: 'Басты бет',
    navAbout: 'Біз туралы',
    navClubs: 'Үйірмелер',
    navEvents: 'Іс-шаралар',
    navHall: 'Акт залы',
    navGallery: 'Галерея',
    navContacts: 'Байланыс',
    heroEyebrow: 'Мәдени мұра • Шығармашылық • Заманауи кеңістік',
    heroTitle: 'Қарасай батыр Мәдениет үйіне қош келдіңіз',
    heroLead:
      'Қоғамды біріктіретін мәдениет, өнер және білім орталығы. Ресми ақпарат, үйірмелер, концерттер мен іс-шаралар — барлығы бір жерде.',
    heroPrimaryBtn: 'Іс-шараларды көру',
    heroSecondaryBtn: 'Бізбен байланысу',
    heroCardTitle: 'Алдағы маңызды концерт',
    heroCardEvent: '«Көктем әуені» гала-кеші',
    heroCardDate: 'Күні: 2026 жылғы 15 сәуір',
    heroCardPlace: 'Өтетін орны: Үлкен акт залы',
    aboutEyebrow: 'Орталық туралы',
    aboutTitle: 'Біз туралы',
    aboutText1:
      'Қарасай батыр Мәдениет үйі — ауданның мәдени өмірін дамытатын заманауи алаң. Біз дәстүр мен инновацияны үйлестіріп, әр жастағы тұрғындарға сапалы мәдени қызмет ұсынамыз.',
    aboutText2:
      'Сайт құрылымы ресми жаңалықтар, үйірмелер, концерттер, фотогалерея және байланыс деректерін ыңғайлы жариялауға арналған. Контентті кейін оңай толықтыра аласыз.',
    clubsEyebrow: 'Даму бағыттары',
    clubsTitle: 'Үйірмелер / Кружки',
    eventsEyebrow: 'Мәдени күнтізбе',
    eventsTitle: 'Іс-шаралар / Мероприятия',
    hallEyebrow: 'Жеке кеңістік',
    hallTitle: 'Актовый зал',
    hallCardTitle: 'Концерттер мен ресми кездесулерге арналған орталық сахна',
    hallCardText:
      'Актовый зал — бұл үйірме емес, ауқымды іс-шаралар, концерттер, форумдар және мерекелік бағдарламалар өтетін негізгі алаң. Осы бөлімге афиша, билет ақпараты және сахна жаңалықтарын оңай қоса аласыз.',
    galleryEyebrow: 'Сәттер жинағы',
    galleryTitle: 'Галерея',
    contactsEyebrow: 'Кері байланыс',
    contactsTitle: 'Контакты',
    contactsInfoTitle: 'Байланыс ақпараты',
    contactsAddressLabel: 'Мекенжай:',
    contactsPhoneLabel: 'Телефон:',
    contactsHintTitle: 'Контентті жаңарту оңай',
    contactsHintText:
      'Нақты фото, карта, әлеуметтік желі сілтемелері және байланыс мәліметтері тек бір конфигурация объектісінде сақталған. Сізге тек script.js файлындағы мәндерді ауыстыру жеткілікті.',
    footerText: '© 2026 Қарасай батыр Мәдениет үйі. Барлық құқықтар қорғалған.',
  },
  ru: {
    brandTitle: 'Дом культуры «Карасай батыр»',
    brandSubtitle: 'Официальный культурный центр',
    navHome: 'Главная',
    navAbout: 'О нас',
    navClubs: 'Кружки',
    navEvents: 'Мероприятия',
    navHall: 'Актовый зал',
    navGallery: 'Галерея',
    navContacts: 'Контакты',
    heroEyebrow: 'Культурное наследие • Творчество • Современное пространство',
    heroTitle: 'Добро пожаловать в Дом культуры «Карасай батыр»',
    heroLead:
      'Центр культуры, искусства и образования, объединяющий сообщество. Официальная информация, кружки, концерты и события — в одном месте.',
    heroPrimaryBtn: 'Смотреть мероприятия',
    heroSecondaryBtn: 'Связаться с нами',
    heroCardTitle: 'Ближайший ключевой концерт',
    heroCardEvent: 'Гала-вечер «Весенние мотивы»',
    heroCardDate: 'Дата: 15 апреля 2026',
    heroCardPlace: 'Место: Большой актовый зал',
    aboutEyebrow: 'О центре',
    aboutTitle: 'О нас',
    aboutText1:
      'Дом культуры «Карасай батыр» — современная площадка для развития культурной жизни района. Мы объединяем традиции и инновации, предлагая качественные культурные программы для всех возрастов.',
    aboutText2:
      'Структура сайта подготовлена для удобной публикации официальных новостей, кружков, концертов, фотогалереи и контактов. Контент легко обновить в любой момент.',
    clubsEyebrow: 'Направления развития',
    clubsTitle: 'Үйірмелер / Кружки',
    eventsEyebrow: 'Культурный календарь',
    eventsTitle: 'Іс-шаралар / Мероприятия',
    hallEyebrow: 'Отдельное пространство',
    hallTitle: 'Актовый зал',
    hallCardTitle: 'Центральная сцена для концертов и официальных встреч',
    hallCardText:
      'Актовый зал — не кружок, а основная площадка для масштабных мероприятий, концертов, форумов и праздничных программ. В этом разделе легко публиковать афиши, билеты и сценические новости.',
    galleryEyebrow: 'Коллекция моментов',
    galleryTitle: 'Галерея',
    contactsEyebrow: 'Обратная связь',
    contactsTitle: 'Контакты',
    contactsInfoTitle: 'Контактная информация',
    contactsAddressLabel: 'Адрес:',
    contactsPhoneLabel: 'Телефон:',
    contactsHintTitle: 'Легкое обновление контента',
    contactsHintText:
      'Реальные фото, карта, ссылки на соцсети и контакты хранятся в одном конфигурационном объекте. Достаточно заменить значения в файле script.js.',
    footerText: '© 2026 Дом культуры «Карасай батыр». Все права защищены.',
  },
};

let currentLang = 'kk';

function renderClubs() {
  const grid = document.getElementById('clubsGrid');
  grid.innerHTML = siteData.clubs[currentLang]
    .map(
      (club) => `
      <article class="club-card glass">
        <h3>${club.title}</h3>
        <p>${club.text}</p>
      </article>
    `,
    )
    .join('');
}

function renderEvents() {
  const list = document.getElementById('eventsList');
  list.innerHTML = siteData.events[currentLang]
    .map(
      (event) => `
      <article class="timeline-item glass">
        <p class="timeline-item__meta">${event.date} • ${event.place}</p>
        <h3>${event.title}</h3>
      </article>
    `,
    )
    .join('');
}

function renderGallery() {
  const gallery = document.getElementById('galleryGrid');
  gallery.innerHTML = siteData.gallery[currentLang]
    .map(
      (item, idx) => `
      <article class="gallery-item" data-index="${idx + 1}">
        <p>${item}</p>
      </article>
    `,
    )
    .join('');
}

function renderContacts() {
  document.querySelectorAll('[data-bind]').forEach((node) => {
    const key = node.dataset.bind;
    node.textContent = siteData.contacts[key] ?? '';
  });
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = i18n[currentLang][key] ?? node.textContent;
  });
}

function updateLanguage(lang) {
  currentLang = lang;
  applyTranslations();
  renderClubs();
  renderEvents();
  renderGallery();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

renderContacts();
updateLanguage(currentLang);

/**
 * Sayt tarjimalari — 3 til: O'zbekcha (uz), English (en), Русский (ru).
 * `en` asosiy manba hisoblanadi; qolgan tillar xuddi shu shaklda bo'lishi
 * TypeScript orqali kafolatlanadi.
 */
export const LANGUAGES = [
  { code: "uz", label: "O'zbekcha" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

export type ContactInfoKey = "email" | "phone" | "location";

export type ContactInfoItem = {
  key: ContactInfoKey;
  label: string;
  value: string;
  href: string;
};

const en = {
  header: {
    cta: "Contact me",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    logoAlt: "Samandar Nosirov logo",
    logoText: "Samandar",
    navigationLabel: "Main navigation",
    goHome: "Back to home",
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  language: {
    label: "Language",
  },
  hero: {
    hello: ["Hello", "I'm"],
    name: ["Samandar", "Nosirov."],
    role: ["Fullstack &", "AI Developer"],
    based: ["Based", "in", "Uzbekistan."],
    description:
      "I build modern, fast, and AI-powered fullstack web applications. Using React, Next.js, Node.js, and modern server infrastructure, I write clean, scalable code with exceptional user experience in mind.",
    socialsHint: "Let's connect ✦",
    illustrationAlt: "Samandar Nosirov illustration — sitting person",
  },
  skills: {
    eyebrow: "Technologies",
    title: "My Skills",
    description: "The core technologies I use to build modern fullstack and AI applications — hover over each card to feel it come alive.",
    cards: [
      "React",
      "Next.js",
      "Node.js",
      "AI & LLMs",
      "Server & API",
      "JavaScript",
      "Tailwind CSS",
      "Git & GitHub",
      "HTML5",
      "CSS3",
      "Figma",
      "Responsive Design",
    ],
  },
  experience: {
    eyebrow: "Career Path",
    title: "My Experience",
    description: "My journey in development — from frontend foundations to backend servers and AI solutions.",
    items: [
      {
        role: "Fullstack & AI Developer",
        company: "Freelance",
        period: "2025 — Present",
        description:
          "Building end-to-end web applications with React, Next.js, and Node.js. Integrating AI capabilities (LLM APIs, prompt engineering, agentic workflows) and designing robust server architectures and REST APIs.",
      },
      {
        role: "Frontend Developer (Intern)",
        company: "IT Company",
        period: "2024 — 2025",
        description:
          "I gained real production experience by taking part in team projects. I converted Figma designs into HTML, CSS and JavaScript, and learned to break UI into reusable components.",
      },
      {
        role: "Web Designer",
        company: "Freelance Projects",
        period: "2024",
        description:
          "I studied UX/UI design principles, created website prototypes in Figma and applied them in practice while coding. I deeply understood the connection between design and code.",
      },
    ],
  },
  about: {
    eyebrow: "Who I Am",
    title: "About Me",
    paragraphs: [
      "I'm Samandar Nosirov — a Fullstack & AI Developer from Uzbekistan. Over my development journey, I have deeply mastered modern frontend with React and Next.js, alongside backend engineering with Node.js, server architecture, and Artificial Intelligence (AI) integrations.",
      "I bridge the gap between stunning design, clean code, and powerful backend systems. From intuitive UI and animations to robust servers and intelligent AI workflows, I take pride in delivering complete, production-ready solutions.",
      "I constantly explore cutting-edge technologies, AI agent systems, and cloud infrastructure. My goal is to build impactful, scalable digital products that solve real-world problems.",
    ],
    stats: [
      { value: "1+", label: "Year Experience" },
      { value: "12+", label: "Technologies" },
      { value: "10+", label: "Projects Done" },
      { value: "100%", label: "Passion" },
    ],
    badgeLabel: "Year Experience",
    imageAlt: "Samandar Nosirov — working at his desk",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "My Projects",
    description: "Some of the projects I've built — each one with clean code, careful design and smooth interactivity.",
    items: [
      {
        title: "Gardenia — Plant Shop",
        description:
          "A premium online store for plants and planters: product catalog, category filters, cart and smooth checkout. Elegant, fully responsive and mobile-friendly.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Gardenia plant shop preview",
      },
      {
        title: "Czech Property Service",
        description:
          "A professional landing page for a property management company: services, portfolio and a contact form. Clean corporate style, fully responsive.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Czech Property Service website preview",
      },
      {
        title: "EXOTIC — South Indian Restaurant",
        description:
          "A restaurant website for authentic South Indian food: an appetizing menu, photo gallery and table reservation flow. Warm, bold and inviting.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "EXOTIC South Indian restaurant preview",
      },
      {
        title: "Metaverse Studios — Cinema",
        description:
          "A cinematic landing page for a film production studio: showreel, featured works and a bold, dark visual identity.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Metaverse Studios cinema website preview",
      },
    ],
    linkLabel: "View Project",
  },
  testimonials: {
    eyebrow: "Feedback",
    title: "My Testimonial",
    description: "What my clients and colleagues say about working with me.",
    items: [
      {
        name: "Aziz Karimov",
        role: "Startup Founder",
        quote:
          "Working with Samandar was a pleasure. He built the site exactly as I imagined — even better. Fast, precise and professional.",
      },
      {
        name: "Malika Yusupova",
        role: "UI/UX Designer",
        quote:
          "Going from design to code was seamless. Samandar pays attention to every detail, and the animations turned out even livelier than the original design. Very pleased with the collaboration.",
      },
      {
        name: "Jasur Toshmatov",
        role: "Small Business Owner",
        quote:
          "He built my online store in just one week. Great price and great quality. I'll definitely work with him again on future projects.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: { pre: "Let's", emoji: "👋", mid: "be", outline: "Something", post: "special" },
    description:
      "Want to talk about your project? Leave me a message through the form below — I'll get back to you as soon as possible.",
    info: [
      { key: "email", label: "Email", value: "samandarnosirov@gmail.com", href: "mailto:samandarnosirov@gmail.com" },
      { key: "phone", label: "Phone", value: "+998 90 123 45 67", href: "tel:+998901234567" },
      { key: "location", label: "Location", value: "Tashkent, Uzbekistan", href: "#contact" },
    ] as ContactInfoItem[],
    socialsLabel: "Social Media",
    form: {
      title: "Send me a message",
      name: "Name",
      email: "Email",
      website: "Website",
      websiteOptional: "(optional)",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "name@example.com",
      websitePlaceholder: "https://yourwebsite.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Thank you! Your message was sent ✦",
      successText: "I'll get back to you soon.",
      sendAnother: "Send another message",
      errors: {
        nameRequired: "Please enter your name",
        nameMin: "Name must be at least 2 characters",
        emailRequired: "Please enter your email",
        emailInvalid: "Invalid email — e.g. name@example.com",
        websiteInvalid: "Invalid URL — must start with https://",
        messageRequired: "Please write your message",
        messageMin: "Message must be at least 10 characters",
      },
    },
  },
  footer: {
    copyright: "All rights reserved.",
    backToTop: "Back to top",
    logoText: "Samandar",
  },
};

export type Translation = typeof en;

const uz: Translation = {
  header: {
    cta: "Menga yozing",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
    logoAlt: "Samandar Nosirov logotipi",
    logoText: "Samandar",
    navigationLabel: "Asosiy navigatsiya",
    goHome: "Bosh sahifaga qaytish",
    nav: [
      { label: "Bosh sahifa", href: "#home" },
      { label: "Men haqimda", href: "#about" },
      { label: "Ko'nikmalar", href: "#skills" },
      { label: "Loyihalar", href: "#projects" },
      { label: "Aloqa", href: "#contact" },
    ],
  },
  language: {
    label: "Til",
  },
  hero: {
    hello: ["Salom,", "men"],
    name: ["Samandar", "Nosirov."],
    role: ["Fullstack &", "AI Dasturchi"],
    based: ["Men", "Uzbekistondanman."],
    description:
      "Men zamonaviy, tezkor va sun'iy intellekt (AI) bilan boyitilgan to'liq (Fullstack) veb-ilovalar yarataman. React, Next.js, Node.js va zamonaviy server arxitekturasi yordamida foydalanuvchi tajribasini birinchi o'ringa qo'ygan holda toza kod yozaman.",
    socialsHint: "Menga bog'laning ✦",
    illustrationAlt: "Samandar Nosirov illyustratsiyasi — o'tirgan odam",
  },
  skills: {
    eyebrow: "Texnologiyalar",
    title: "Mening Ko'nikmalarim",
    description: "Fullstack va AI sohalarida egallagan ko'nikmalarim — har bir kartaga hover qilib, jonlanishini his eting.",
    cards: [
      "React",
      "Next.js",
      "Node.js",
      "AI & LLM",
      "Server & API",
      "JavaScript",
      "Tailwind CSS",
      "Git & GitHub",
      "HTML5",
      "CSS3",
      "Figma",
      "Responsive Dizayn",
    ],
  },
  experience: {
    eyebrow: "Faoliyat",
    title: "Mening Tajribam",
    description: "Dasturlash yo'lidagi sayohatim — frontend poydevoridan backend serverlar va AI yechimlarigacha.",
    items: [
      {
        role: "Fullstack & AI Dasturchi",
        company: "Freelance",
        period: "2025 — Hozirgacha",
        description:
          "Node.js va server texnologiyalari orqali mustahkam backend tizimlar va REST API-lar yaratish hamda veb-ilovalarga sun'iy intellekt (AI / LLM) modellarini muvaffaqiyatli integratsiya qilish. React va Next.js asosida to'liq Fullstack arxitekturasini noldan deploygacha yetkazish.",
      },
      {
        role: "Frontend Dasturchi (Stajyor)",
        company: "IT kompaniya",
        period: "2024 — 2025",
        description:
          "Jamoaviy loyihalarda qatnashib, real ishlab chiqarish jarayonida tajriba orttirdim. Figma dizaynlarini HTML, CSS va JavaScript'ga aylantirish, komponentlarga bo'lish va ularni qayta ishlatish bo'yicha ko'nikmalar hosil qildim.",
      },
      {
        role: "Web Dizayner",
        company: "Mustaqil loyihalar",
        period: "2024",
        description:
          "UX/UI dizayn tamoyillarini o'rganib, Figma'da veb-sayt prototiplari va maketlar yaratdim hamda ularni kodlashda amalda qo'lladim. Dizayn va kodlash o'rtasidagi bog'liqlikni chuqur anglab yetdim.",
      },
    ],
  },
  about: {
    eyebrow: "Men Haqimda",
    title: "Men Haqimda",
    paragraphs: [
      "Men Samandar Nosirov — O'zbekistonlik Fullstack & AI Dasturchi. Frontend (React, Next.js) bilan bir qatorda Node.js, server arxitekturasi va Sun'iy Intellekt (AI) integratsiyasini puxta o'zlashtirganman.",
      "Chiroyli dizayn, toza kod va qudratli backendni uyg'unlashtirish — mening asosiy ustunligim. Veb-saytlarga aqlli AI funksiyalari va chat-botlar qo'shish, REST API va serverlar bilan ishlash, hamda ularni xavfsiz ishga tushirishgacha bo'lgan butun jarayonni o'z zimmamga olaman.",
      "Doim eng so'nggi texnologiyalarni o'rganishga va bilimlarimni amaliyotda sinashga intilaman. Murakkab va real muammolarni hal qiluvchi yirik loyihalarni yaratish mening eng katta maqsadimdir.",
    ],
    stats: [
      { value: "1+", label: "Yil Tajriba" },
      { value: "12+", label: "Texnologiya" },
      { value: "10+", label: "Bajarilgan Loyiha" },
      { value: "100%", label: "Ishtiyoq" },
    ],
    badgeLabel: "Yil Tajriba",
    imageAlt: "Samandar Nosirov — ish stolida",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Mening Loyihalarim",
    description: "Men yaratgan ba'zi loyihalar — har birida toza kod, e'tiborli dizayn va silliq interaktivlik.",
    items: [
      {
        title: "Gardenia — O'simliklar Do'koni",
        description:
          "O'simliklar va gul idishlari uchun premium onlayn do'kon: mahsulot katalogi, kategoriya filtrlari, savat va silliq buyurtma berish. Nafis, to'liq responsive va mobil qurilmalarga moslashgan.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Gardenia o'simliklar do'koni tasviri",
      },
      {
        title: "Czech Property Service",
        description:
          "Ko'chmas mulkni boshqarish kompaniyasi uchun professional landing page: xizmatlar, portfel va aloqa formasi. Toza korporativ uslub, to'liq responsive.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Czech Property Service sayti tasviri",
      },
      {
        title: "EXOTIC — Janubiy Hind Restorani",
        description:
          "Haqiqiy janubiy hind taomlari restorani uchun veb-sayt: ishtahani ochuvchi menyu, fotogalereya va stol bron qilish jarayoni. Issiq, dadil va taklif qiluvchi.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "EXOTIC janubiy hind restorani tasviri",
      },
      {
        title: "Metaverse Studios — Kino Studiyasi",
        description:
          "Kino ishlab chiqarish studiyasi uchun kinematik landing page: showreel, tanlangan ishlar va dadil, qorong'u vizual uslub.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Metaverse Studios kino studiyasi tasviri",
      },
    ],
    linkLabel: "Loyihani ko'rish",
  },
  testimonials: {
    eyebrow: "Fikrlar",
    title: "Mijozlar Fikrlari",
    description: "Men bilan ishlagan mijozlar va hamkasblarimning fikrlari.",
    items: [
      {
        name: "Aziz Karimov",
        role: "Startup Asoschisi",
        quote:
          "Samandar bilan ishlash juda yoqimli bo'ldi. Saytni aynan tasavvur qilganimdek, hatto undan ham yaxshiroq qilib berdi. Tez, aniq va professional yondashuv.",
      },
      {
        name: "Malika Yusupova",
        role: "UI/UX Dizayner",
        quote:
          "Dizayndan kodga o'tishda hech qanday muammo bo'lmadi. Samandar har bir detalga e'tibor beradi, animatsiyalar esa asl dizayndan ham jonliroq chiqdi. Hamkorlikdan juda mamnunman.",
      },
      {
        name: "Jasur Toshmatov",
        role: "Kichik Biznes Egasi",
        quote:
          "Onlayn do'konimni bir haftada tayyorlab berdi. Narxi ham, sifati ham a'lo darajada. Keyingi loyihalarda ham albatta yana murojaat qilaman.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: { pre: "Keling", emoji: "👋", mid: "birga", outline: "Something", post: "maxsus qilaylik" },
    description:
      "Loyihangiz haqida suhbatlashishni xohlaysizmi? Quyidagi forma orqali menga xabar qoldiring — imkon qadar tez javob beraman.",
    info: [
      { key: "email", label: "Email", value: "samandarnosirov@gmail.com", href: "mailto:samandarnosirov@gmail.com" },
      { key: "phone", label: "Telefon", value: "+998 90 123 45 67", href: "tel:+998901234567" },
      { key: "location", label: "Manzil", value: "Toshkent, O'zbekiston", href: "#contact" },
    ],
    socialsLabel: "Ijtimoiy tarmoqlar",
    form: {
      title: "Menga xabar yozing",
      name: "Ism",
      email: "Email",
      website: "Website",
      websiteOptional: "(ixtiyoriy)",
      message: "Xabar",
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "ism@misol.com",
      websitePlaceholder: "https://sizningsayt.uz",
      messagePlaceholder: "Loyihangiz haqida yozing...",
      submit: "Xabar Yuborish",
      sending: "Yuborilmoqda...",
      successTitle: "Rahmat! Xabaringiz yuborildi ✦",
      successText: "Tez orada siz bilan bog'lanaman.",
      sendAnother: "Yana xabar yozish",
      errors: {
        nameRequired: "Ismingizni kiriting",
        nameMin: "Ism kamida 2 ta belgidan iborat bo'lsin",
        emailRequired: "Email manzilini kiriting",
        emailInvalid: "Email manzili noto'g'ri — masalan: ism@misol.com",
        websiteInvalid: "Website URL noto'g'ri — https:// bilan boshlansin",
        messageRequired: "Xabaringizni yozing",
        messageMin: "Xabar kamida 10 ta belgidan iborat bo'lsin",
      },
    },
  },
  footer: {
    copyright: "Barcha huquqlar himoyalangan.",
    backToTop: "Yuqoriga qaytish",
    logoText: "Samandar",
  },
};

const ru: Translation = {
  header: {
    cta: "Связаться",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    logoAlt: "Логотип Самандара Носирова",
    logoText: "Samandar",
    navigationLabel: "Основная навигация",
    goHome: "На главную",
    nav: [
      { label: "Главная", href: "#home" },
      { label: "Обо мне", href: "#about" },
      { label: "Навыки", href: "#skills" },
      { label: "Проекты", href: "#projects" },
      { label: "Контакты", href: "#contact" },
    ],
  },
  language: {
    label: "Язык",
  },
  hero: {
    hello: ["Привет,", "я"],
    name: ["Samandar", "Nosirov."],
    role: ["Fullstack &", "AI Разработчик"],
    based: ["Живу", "в", "Узбекистане."],
    description:
      "Я создаю современные, быстрые и AI-ориентированные Fullstack веб-приложения. Используя React, Next.js, Node.js и серверную архитектуру, я пишу чистый и надежный код, ставя пользовательский опыт на первое место.",
    socialsHint: "Свяжитесь со мной ✦",
    illustrationAlt: "Иллюстрация Самандара Носирова — сидящий человек",
  },
  skills: {
    eyebrow: "Технологии",
    title: "Мои Навыки",
    description: "Навыки в Fullstack и AI разработке — наведите курсор на карточку, чтобы почувствовать анимацию.",
    cards: [
      "React",
      "Next.js",
      "Node.js",
      "AI & LLM",
      "Server & API",
      "JavaScript",
      "Tailwind CSS",
      "Git & GitHub",
      "HTML5",
      "CSS3",
      "Figma",
      "Адаптивный дизайн",
    ],
  },
  experience: {
    eyebrow: "Карьера",
    title: "Мой Опыт",
    description: "Мой путь в разработке — от фронтенд-основы до бэкенд-серверов и AI-решений.",
    items: [
      {
        role: "Fullstack & AI Разработчик",
        company: "Фриланс",
        period: "2025 — Наст. время",
        description:
          "Разработка Fullstack приложений на React, Next.js и Node.js. Создание REST API, работа с серверами и успешное внедрение возможностей искусственного интеллекта (LLM, AI-агенты).",
      },
      {
        role: "Frontend Разработчик (Стажёр)",
        company: "IT-компания",
        period: "2024 — 2025",
        description:
          "Участвуя в командных проектах, получил реальный опыт продакшена. Переводил дизайны из Figma в HTML, CSS и JavaScript, научился разбивать интерфейс на переиспользуемые компоненты.",
      },
      {
        role: "Веб-дизайнер",
        company: "Собственные проекты",
        period: "2024",
        description:
          "Изучил принципы UX/UI дизайна, создавал прототипы сайтов в Figma и применял их на практике при вёрстке. Глубоко понял связь между дизайном и кодом.",
      },
    ],
  },
  about: {
    eyebrow: "Кто Я",
    title: "Обо Мне",
    paragraphs: [
      "Я Самандар Носиров — Fullstack & AI разработчик из Узбекистана. В совершенстве освоил современный фронтенд на React и Next.js, а также серверную разработку на Node.js и внедрение искусственного интеллекта (AI).",
      "Моя сила — в гармонии продуманного дизайна, чистого кода и мощного бэкенда. Беру на себя полный цикл: от интерактивного интерфейса до настройки серверной логики и интеграции AI-моделей.",
      "Постоянно изучаю передовые технологии и архитектурные решения. Стремлюсь создавать масштабируемые и полезные цифровые продукты.",
    ],
    stats: [
      { value: "1+", label: "Год Опыта" },
      { value: "12+", label: "Технологий" },
      { value: "10+", label: "Проектов" },
      { value: "100%", label: "Страсть" },
    ],
    badgeLabel: "Год Опыта",
    imageAlt: "Самандар Носиров — работает за столом",
  },
  projects: {
    eyebrow: "Портфолио",
    title: "Мои Проекты",
    description: "Некоторые из моих проектов — в каждом чистый код, продуманный дизайн и плавная интерактивность.",
    items: [
      {
        title: "Gardenia — Магазин растений",
        description:
          "Премиальный интернет-магазин растений и кашпо: каталог товаров, фильтры по категориям, корзина и удобное оформление заказа. Элегантный, полностью адаптивный.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Превью магазина Gardenia",
      },
      {
        title: "Czech Property Service",
        description:
          "Профессиональный лендинг компании по управлению недвижимостью: услуги, портфолио и форма связи. Чистый корпоративный стиль, полностью адаптивный.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Превью сайта Czech Property Service",
      },
      {
        title: "EXOTIC — Южно-индийский ресторан",
        description:
          "Сайт ресторана аутентичной южно-индийской кухни: аппетитное меню, фотогалерея и бронирование столиков. Тёплый, смелый и гостеприимный.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Превью ресторана EXOTIC",
      },
      {
        title: "Metaverse Studios — Киностудия",
        description:
          "Кинематографичный лендинг студии по производству фильмов: шоурил, избранные работы и смелый тёмный визуальный стиль.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageAlt: "Превью киностудии Metaverse Studios",
      },
    ],
    linkLabel: "Смотреть проект",
  },
  testimonials: {
    eyebrow: "Отзывы",
    title: "Отзывы Клиентов",
    description: "Что говорят мои клиенты и коллеги о работе со мной.",
    items: [
      {
        name: "Азиз Каримов",
        role: "Основатель Стартапа",
        quote:
          "Работать с Самандаром было одно удовольствие. Сайт сделан точно так, как я представлял — даже лучше. Быстро, аккуратно и профессионально.",
      },
      {
        name: "Малика Юсупова",
        role: "UI/UX Дизайнер",
        quote:
          "Переход от дизайна к коду прошёл без проблем. Самандар уделяет внимание каждой детали, а анимации получились даже живее, чем в исходном дизайне. Очень довольна сотрудничеством.",
      },
      {
        name: "Жасур Тошматов",
        role: "Владелец Малого Бизнеса",
        quote:
          "Мой интернет-магазин был готов всего за неделю. Цена и качество — отличные. Обязательно обращусь снова для новых проектов.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: { pre: "Давай", emoji: "👋", mid: "создадим", outline: "Something", post: "особенное" },
    description:
      "Хотите обсудить ваш проект? Оставьте мне сообщение через форму ниже — я отвечу как можно скорее.",
    info: [
      { key: "email", label: "Почта", value: "samandarnosirov@gmail.com", href: "mailto:samandarnosirov@gmail.com" },
      { key: "phone", label: "Телефон", value: "+998 90 123 45 67", href: "tel:+998901234567" },
      { key: "location", label: "Адрес", value: "Ташкент, Узбекистан", href: "#contact" },
    ],
    socialsLabel: "Соцсети",
    form: {
      title: "Напишите мне",
      name: "Имя",
      email: "Email",
      website: "Website",
      websiteOptional: "(необязательно)",
      message: "Сообщение",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "imya@example.com",
      websitePlaceholder: "https://vash-sayt.ru",
      messagePlaceholder: "Расскажите о вашем проекте...",
      submit: "Отправить",
      sending: "Отправка...",
      successTitle: "Спасибо! Ваше сообщение отправлено ✦",
      successText: "Скоро свяжусь с вами.",
      sendAnother: "Написать ещё раз",
      errors: {
        nameRequired: "Введите ваше имя",
        nameMin: "Имя должно содержать минимум 2 символа",
        emailRequired: "Введите email",
        emailInvalid: "Некорректный email — например: imya@example.com",
        websiteInvalid: "Некорректный URL — должен начинаться с https://",
        messageRequired: "Напишите сообщение",
        messageMin: "Сообщение должно содержать минимум 10 символов",
      },
    },
  },
  footer: {
    copyright: "Все права защищены.",
    backToTop: "Наверх",
    logoText: "Samandar",
  },
};

export const translations: Record<Lang, Translation> = { uz, en, ru };

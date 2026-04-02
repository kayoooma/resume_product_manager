import { ContentData } from './types';

export const RESUME_DATA: Record<'ru' | 'en' | 'uz', ContentData> = {
  ru: {
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      skills: "Навыки",
      education: "Образование",
      contact: "Контакты",
      lang_label: "RU"
    },
    hero: {
      greeting: "Привет, я",
      name: "Султонов Комил",
      role_prefix: "PRODUCT",
      role_suffix: "MANAGER",
      description: "Бизнес-аналитик и продуктовый дизайнер, превращающий сложные данные в успешные продукты.",
      cta_primary: "Связаться",
      cta_secondary: "Скачать резюме",
      open_to_work: "Ищу проекты",
      photo_error_title: "Фото не найдено",
      photo_error_msg: "Переименуйте фото в avatar.png и положите в корень."
    },
    marquee: ["Product Management", "Data Analytics", "Strategy", "User Research", "Agile Leadership", "AI Integration", "Growth"],
    about: {
      title_line1: "Объединяя",
      title_highlight: "Бизнес",
      title_line2: "и Технологии.",
      quote: "«Я не просто управляю продуктами; я создаю системы ценности, которые масштабируются.»",
      content_p1: "Проактивный IT-продуктовый менеджер с опытом в финтехе, AI/ML и digital.",
      highlighted_text: "Помешан на оптимизации процессов и внедрении технологических решений, которые повышают скорость и качество работы команд.",
      content_p2: "Опыт управления проектами — 5 лет, из них 2 года в роли Project Manager в IT и digital. Я управляю проектами с упором на автоматизацию, эффективность и результат.",
      stats: [
        { label: "Лет опыта", value: "5+" },
        { label: "Проектов", value: "20+" },
        { label: "Языков", value: "3" }
      ]
    },
    experience: {
      section_title: "Карьера",
      scroll_hint: "Листайте вниз",
      items: [
        {
          id: "1",
          role: "Business Development Manager / Acting PM",
          company: "ЧП Softex",
          period: "Окт 2025 — Ноя 2025",
          description: "Отвечал за исследование рынка, аудит компании и создание продуктовой стратегии. Выполнял функции Product Manager/Product Owner.",
          achievements: [
            "Провёл масштабный анализ рынка недвижимости (6 сегментов, 16 ниш).",
            "Сформировал базу 600+ риелторов, организовал 300 интервью.",
            "Сформировал продуктовую стратегию для Marketplace и CRM.",
            "Спроектировал рейтинговую систему риелторов."
          ],
          tags: ["Market Research", "Product Strategy", "CRM"]
        },
        {
          id: "2",
          role: "Project Manager (Fintech + AI/ML)",
          company: "WatchWithNoHands",
          period: "Июнь 2024 — Окт 2025",
          description: "Управление полным циклом проекта: от идеи и сбора требований до релиза и сопровождения.",
          achievements: [
            "Разработка архитектуры БД, интеграция платёжных систем (YooKassa, Payme).",
            "Автоматизация процессов с AI (DeepSeek R1, Stable Diffusion, Whisper).",
            "Разработка системы отслеживания продуктовых метрик: DAU, MAU, Retention.",
            "Управление бэклогом и координация кросс-функциональной команды."
          ],
          tags: ["Fintech", "AI/ML", "Agile/Scrum", "Analytics"],
          metrics: [
            { label: "DAU Growth", value: "+40%", trend: "up", data: [10, 25, 45, 60, 55, 70, 85] },
            { label: "Retention D30", value: "28%", trend: "up" }
          ]
        },
        {
          id: "3",
          role: "Ведущий SMM-специалист / Project Manager",
          company: "Agat Credit",
          period: "Сент 2023 — Июнь 2024",
          description: "Управление маркетинговыми проектами и командой из 10 человек.",
          achievements: [
            "Снижение CPL на 15% и повышение конверсии на 18%.",
            "Запуск медиа-планов (SMM, таргет, оффлайн).",
            "Планирование бюджета и контроль сроков."
          ],
          tags: ["Marketing", "Management", "Analytics"],
          metrics: [
             { label: "Conversion Rate", value: "+18%", trend: "up", data: [2, 3, 3.5, 3.2, 4.1, 4.8] },
             { label: "CPL", value: "-15%", trend: "down" }
          ]
        },
        {
          id: "4",
          role: "3D Motion Designer / Project Lead",
          company: "Fiverr (Freelance)",
          period: "Июнь 2020 — Авг 2023",
          description: "Управление фриланс-проектами для клиентов из Румынии, Индии, Нигерии, США.",
          achievements: [
            "Создание 3D-анимаций в Blender.",
            "Переговоры с заказчиками и формализация требований."
          ],
          tags: ["3D Design", "Freelance", "English"]
        }
      ]
    },
    book: {
        title: "Заразительный",
        author: "Йона Бергер",
        label: "Рекомендуемая книга",
        description: "Эта книга фундаментально изменила мой подход к созданию продуктов. Она объясняет, почему одни продукты становятся популярными, а другие нет, через призму социальной валюты, триггеров и эмоций.",
        quote: "«Люди делятся не информацией, они делятся историями.»",
        cover_title: "Заразительный",
        cover_subtitle: "Психология сарафанного радио"
    },
    skills: {
      title_line1: "Профессиональный",
      title_highlight: "Арсенал",
      subtitle: "Тщательно подобранный стек инструментов и методологий, которые я использую для успеха продукта.",
      categories: [
        {
          title: "Управление",
          skills: ["Agile", "Scrum", "Kanban", "Waterfall", "Jira", "Asana", "Confluence", "SLA", "User Flow"]
        },
        {
          title: "Технологии & AI",
          skills: ["Python", "SQL (PostgreSQL, SQLite)", "ChatGPT 4", "DeepSeek", "Stable Diffusion", "Whisper", "API"]
        },
        {
          title: "Маркетинг & Аналитика",
          skills: ["Google Ads", "GTM", "Unit Economics", "B2B/B2C Marketing", "Affiliate Marketing", "DAU/MAU/ARPU"]
        },
        {
          title: "Языки",
          skills: ["Русский (Родной)", "Английский (B2)", "Узбекский (C2)"]
        }
      ]
    },
    education: {
      title: "Образование",
      items: [
        {
          id: "edu1",
          school: "Национальный университет имени Мирзо Улугбека",
          degree: "Экономика, HR",
          year: "2027"
        }
      ],
      certTitle: "Сертификаты",
      certs: [
        { id: "c1", name: "Fundamentals of Predictive Project Management", issuer: "PMI", year: "2024" },
        { id: "c2", name: "Google Ads для вашего бизнеса", issuer: "Udemy", year: "2024" },
        { id: "c3", name: "Нейросети для маркетолога", issuer: "Maed", year: "2024" },
        { id: "c4", name: "IELTS", issuer: "Band 6.5", year: "2025" }
      ]
    },
    contact: {
      available_badge: "Открыт к предложениям",
      title_line1: "Давайте создавать",
      title_highlight: "результат.",
      description: "В данный момент я ищу новые возможности в Product Management. Есть вопрос или предложение? Напишите мне, и я постараюсь ответить максимально быстро!",
      telegram_btn: "Telegram",
      email_label: "Email адрес",
      phone_label: "Номер телефона",
      email: "kamasultanov8@gmail.com",
      phone: "+998 88 111 66 12",
      linkedin: "https://www.linkedin.com/in/komil-sultonov-405a09295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      location: "Ташкент, Узбекистан",
      footer: "© 2026 Султонов Комил. Все права защищены.",
      back_to_top: "Наверх",
      click_to_copy: "Скопировать",
      copied: "Скопировано!"
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      lang_label: "EN"
    },
    hero: {
      greeting: "Hello, I am",
      name: "Komil Sultonov",
      role_prefix: "PRODUCT",
      role_suffix: "MANAGER",
      description: "Business Analyst and Product Designer transforming complex data into successful digital products.",
      cta_primary: "Get in Touch",
      cta_secondary: "Download CV",
      open_to_work: "Open to Work",
      photo_error_title: "Photo Not Found",
      photo_error_msg: "Rename photo to avatar.png and place in root."
    },
    marquee: ["Product Management", "Data Analytics", "Strategy", "User Research", "Agile Leadership", "AI Integration", "Growth"],
    about: {
      title_line1: "Bridging",
      title_highlight: "Business",
      title_line2: "& Technology.",
      quote: "\"I don't just manage products; I engineer value systems that scale.\"",
      content_p1: "Proactive IT Product Manager with experience in Fintech, AI/ML, and Digital.",
      highlighted_text: "Obsessed with process optimization and implementing technological solutions that increase team speed and quality.",
      content_p2: "Project Management experience — 5 years, including 2 years as a Project Manager in IT and Digital. I manage projects with a focus on automation, efficiency, and results.",
      stats: [
        { label: "Years Exp", value: "5+" },
        { label: "Projects", value: "20+" },
        { label: "Languages", value: "3" }
      ]
    },
    experience: {
      section_title: "CAREER",
      scroll_hint: "Scroll Down",
      items: [
        {
          id: "1",
          role: "Business Development Manager / Acting PM",
          company: "Softex",
          period: "Oct 2025 — Nov 2025",
          description: "Responsible for market research, company audit, and product strategy creation. Acted as Product Manager/Product Owner.",
          achievements: [
            "Conducted large-scale real estate market analysis (6 segments, 16 niches).",
            "Formed a database of 600+ realtors, organized 300 structured interviews.",
            "Formulated product strategy for Marketplace and CRM.",
            "Designed a realtor rating system."
          ],
          tags: ["Market Research", "Product Strategy", "CRM"]
        },
        {
          id: "2",
          role: "Project Manager (Fintech + AI/ML)",
          company: "WatchWithNoHands",
          period: "June 2024 — Oct 2025",
          description: "Full cycle project management: from idea and requirements gathering to release and maintenance.",
          achievements: [
            "Developed DB architecture, integrated payment systems (YooKassa, Payme).",
            "Automated workflows using AI (DeepSeek R1, Stable Diffusion, Whisper).",
            "Developed product metrics tracking system: DAU, MAU, Retention.",
            "Managed backlog and coordinated cross-functional teams."
          ],
          tags: ["Fintech", "AI/ML", "Agile/Scrum", "Analytics"],
          metrics: [
            { label: "DAU Growth", value: "+40%", trend: "up", data: [10, 25, 45, 60, 55, 70, 85] },
            { label: "Retention D30", value: "28%", trend: "up" }
          ]
        },
        {
          id: "3",
          role: "Lead SMM Specialist / Project Manager",
          company: "Agat Credit",
          period: "Sept 2023 — June 2024",
          description: "Managed marketing projects and a team of 10 people.",
          achievements: [
            "Reduced CPL by 15% and increased conversion by 18%.",
            "Launched media plans (SMM, target, offline).",
            "Budget planning and deadline control."
          ],
          tags: ["Marketing", "Management", "Analytics"],
           metrics: [
             { label: "Conversion Rate", value: "+18%", trend: "up", data: [2, 3, 3.5, 3.2, 4.1, 4.8] },
             { label: "CPL", value: "-15%", trend: "down" }
          ]
        },
        {
          id: "4",
          role: "3D Motion Designer / Project Lead",
          company: "Fiverr (Freelance)",
          period: "June 2020 — Aug 2023",
          description: "Managed freelance projects for clients from Romania, India, Nigeria, USA.",
          achievements: [
            "Created 3D animations in Blender.",
            "Negotiated with clients and formalized requirements."
          ],
          tags: ["3D Design", "Freelance", "English"]
        }
      ]
    },
    book: {
        title: "Contagious",
        author: "Jonah Berger",
        label: "Must Read Book",
        description: "This book fundamentally changed my approach to product. It explains why some products catch on while others fail, through the lens of social currency, triggers, and emotion.",
        quote: "\"People don't share information, they share stories.\"",
        cover_title: "Contagious",
        cover_subtitle: "Why Things Catch On"
    },
    skills: {
      title_line1: "Professional",
      title_highlight: "Arsenal",
      subtitle: "A curated stack of tools and methodologies I use to drive product success.",
      categories: [
        {
          title: "Management",
          skills: ["Agile", "Scrum", "Kanban", "Waterfall", "Jira", "Asana", "Confluence", "SLA", "User Flow"]
        },
        {
          title: "Tech & AI",
          skills: ["Python", "SQL (PostgreSQL, SQLite)", "ChatGPT 4", "DeepSeek", "Stable Diffusion", "Whisper", "API"]
        },
        {
          title: "Marketing & Analytics",
          skills: ["Google Ads", "GTM", "Unit Economics", "B2B/B2C Marketing", "Affiliate Marketing", "DAU/MAU/ARPU"]
        },
        {
          title: "Languages",
          skills: ["Russian (Native)", "English (B2)", "Uzbek (C2)"]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          id: "edu1",
          school: "National University of Uzbekistan",
          degree: "Economics, HR",
          year: "2027"
        }
      ],
      certTitle: "Certifications",
      certs: [
        { id: "c1", name: "Fundamentals of Predictive Project Management", issuer: "PMI", year: "2024" },
        { id: "c2", name: "Google Ads for Business", issuer: "Udemy", year: "2024" },
        { id: "c3", name: "Neural Networks for Marketers", issuer: "Maed", year: "2024" },
        { id: "c4", name: "IELTS", issuer: "Band 6.5", year: "2025" }
      ]
    },
    contact: {
      available_badge: "Available for Work",
      title_line1: "Let's create",
      title_highlight: "impact.",
      description: "I'm currently looking for new opportunities in Product Management. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      telegram_btn: "Telegram",
      email_label: "Email Address",
      phone_label: "Phone Number",
      email: "kamasultanov8@gmail.com",
      phone: "+998 88 111 66 12",
      linkedin: "https://www.linkedin.com/in/komil-sultonov-405a09295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      location: "Tashkent, Uzbekistan",
      footer: "© 2026 Komil Sultonov. All rights reserved.",
      back_to_top: "Back to Top",
      click_to_copy: "Click to Copy",
      copied: "Copied!"
    }
  },
  uz: {
    nav: {
      about: "Haqimda",
      experience: "Tajriba",
      skills: "Ko'nikmalar",
      education: "Ta'lim",
      contact: "Bog'lanish",
      lang_label: "UZ"
    },
    hero: {
      greeting: "Salom, men",
      name: "Sultonov Komil",
      role_prefix: "MAHSULOT",
      role_suffix: "MENEJERI",
      description: "Murakkab ma'lumotlarni muvaffaqiyatli raqamli mahsulotlarga aylantiruvchi biznes tahlilchi va mahsulot dizayneri.",
      cta_primary: "Bog'lanish",
      cta_secondary: "CV yuklab olish",
      open_to_work: "Loyihalar izlayapman",
      photo_error_title: "Rasm topilmadi",
      photo_error_msg: "Rasmni avatar.png deb nomlang va ildiz papkaga joylashtiring."
    },
    marquee: ["Product Management", "Data Analytics", "Strategy", "User Research", "Agile Leadership", "AI Integration", "Growth"],
    about: {
      title_line1: "Biznes va",
      title_highlight: "Texnologiyalarni",
      title_line2: "Birlashtirib.",
      quote: "«Men shunchaki mahsulotlarni boshqarmayman; men masshtablanadigan qiymat tizimlarini yarataman.»",
      content_p1: "Fintech, AI/ML va raqamli sohalarda tajribaga ega bo'lgan faol IT-mahsulot menejeri.",
      highlighted_text: "Jarayonlarni optimallashtirish va jamoa tezligi hamda sifatini oshiradigan texnologik yechimlarni joriy etishga ixtisoslashganman.",
      content_p2: "Loyiha boshqaruvi tajribasi — 5 yil, shundan 2 yil IT va raqamli sohada Loyiha Menejeri sifatida. Men loyihalarni avtomatlashtirish, samaradorlik va natijaga urg'u berib boshqaraman.",
      stats: [
        { label: "Yillik Tajriba", value: "5+" },
        { label: "Loyihalar", value: "20+" },
        { label: "Tillar", value: "3" }
      ]
    },
    experience: {
      section_title: "KARYERA",
      scroll_hint: "Pastga suring",
      items: [
        {
          id: "1",
          role: "Business Development Manager / Acting PM",
          company: "XK Softex",
          period: "Okt 2025 — Noy 2025",
          description: "Bozor tahlili, kompaniya auditi va mahsulot strategiyasini yaratish uchun mas'ul bo'lgan. Product Manager/Product Owner vazifalarini bajargan.",
          achievements: [
            "Ko'chmas mulk bozorining keng ko'lamli tahlilini o'tkazdi (6 segment, 16 nisha).",
            "600+ rieltorlar bazasini shakllantirdi, 300 ta intervyu tashkil qildi.",
            "Marketplace va CRM uchun mahsulot strategiyasini shakllantirdi.",
            "Rieltorlar reyting tizimini loyihalashtirdi."
          ],
          tags: ["Bozor Tahlili", "Mahsulot Strategiyasi", "CRM"]
        },
        {
          id: "2",
          role: "Project Manager (Fintech + AI/ML)",
          company: "WatchWithNoHands",
          period: "Iyun 2024 — Okt 2025",
          description: "Loyihani to'liq boshqarish: g'oyadan va talablarni yig'ishdan tortib, reliz va qo'llab-quvvatlashgacha.",
          achievements: [
            "MB arxitekturasini ishlab chiqdi, to'lov tizimlarini integratsiya qildi (YooKassa, Payme).",
            "AI yordamida jarayonlarni avtomatlashtirdi (DeepSeek R1, Stable Diffusion, Whisper).",
            "Mahsulot metrikalarini kuzatish tizimini ishlab chiqdi: DAU, MAU, Retention.",
            "Backlog'ni boshqardi va kross-funksional jamoani muvofiqlashtirdi."
          ],
          tags: ["Fintech", "AI/ML", "Agile/Scrum", "Tahlil"],
          metrics: [
            { label: "DAU O'sishi", value: "+40%", trend: "up", data: [10, 25, 45, 60, 55, 70, 85] },
            { label: "Retention D30", value: "28%", trend: "up" }
          ]
        },
        {
          id: "3",
          role: "Yetakchi SMM Mutaxassisi / Project Manager",
          company: "Agat Credit",
          period: "Sent 2023 — Iyun 2024",
          description: "Marketing loyihalarini va 10 kishilik jamoani boshqargan.",
          achievements: [
            "CPL ni 15% ga kamaytirdi va konversiyani 18% ga oshirdi.",
            "Media-rejalarni ishga tushirdi (SMM, target, oflayn).",
            "Byudjetni rejalashtirish va muddatlarni nazorat qilish."
          ],
          tags: ["Marketing", "Boshqaruv", "Tahlil"],
           metrics: [
             { label: "Konversiya Darajasi", value: "+18%", trend: "up", data: [2, 3, 3.5, 3.2, 4.1, 4.8] },
             { label: "CPL", value: "-15%", trend: "down" }
          ]
        },
        {
          id: "4",
          role: "3D Motion Designer / Project Lead",
          company: "Fiverr (Freelance)",
          period: "Iyun 2020 — Avg 2023",
          description: "Ruminiya, Hindiston, Nigeriya, AQSh mijozlari uchun frilans loyihalarni boshqargan.",
          achievements: [
            "Blender dasturida 3D animatsiyalar yaratdi.",
            "Buyurtmachilar bilan muzokaralar olib bordi va talablarni rasmiylashtirdi."
          ],
          tags: ["3D Dizayn", "Frilans", "Ingliz tili"]
        }
      ]
    },
    book: {
        title: "Yuqumlilik",
        author: "Jonah Berger",
        label: "Tavsiya etiladigan kitob",
        description: "Ushbu kitob mahsulot yaratishga bo'lgan yondashuvimni tubdan o'zgartirdi. U ijtimoiy valyuta, triggerlar va his-tuyg'ular prizmasi orqali nega ba'zi mahsulotlar ommalashishi, boshqalari esa yo'qligini tushuntiradi.",
        quote: "«Odamlar ma'lumot almashmaydilar, ular hikoyalar almashadilar.»",
        cover_title: "Yuqumlilik",
        cover_subtitle: "Nega narsalar ommalashadi"
    },
    skills: {
      title_line1: "Professional",
      title_highlight: "Arsenal",
      subtitle: "Mahsulot muvaffaqiyati uchun men foydalanadigan vositalar va metodologiyalar to'plami.",
      categories: [
        {
          title: "Boshqaruv",
          skills: ["Agile", "Scrum", "Kanban", "Waterfall", "Jira", "Asana", "Confluence", "SLA", "User Flow"]
        },
        {
          title: "Texnologiyalar & AI",
          skills: ["Python", "SQL (PostgreSQL, SQLite)", "ChatGPT 4", "DeepSeek", "Stable Diffusion", "Whisper", "API"]
        },
        {
          title: "Marketing & Tahlil",
          skills: ["Google Ads", "GTM", "Unit Economics", "B2B/B2C Marketing", "Affiliate Marketing", "DAU/MAU/ARPU"]
        },
        {
          title: "Tillar",
          skills: ["Rus tili (Ona tili)", "Ingliz tili (B2)", "O'zbek tili (C2)"]
        }
      ]
    },
    education: {
      title: "Ta'lim",
      items: [
        {
          id: "edu1",
          school: "O'zbekiston Milliy Universiteti",
          degree: "Iqtisodiyot, HR",
          year: "2027"
        }
      ],
      certTitle: "Sertifikatlar",
      certs: [
        { id: "c1", name: "Fundamentals of Predictive Project Management", issuer: "PMI", year: "2024" },
        { id: "c2", name: "Biznesingiz uchun Google Ads", issuer: "Udemy", year: "2024" },
        { id: "c3", name: "Marketologlar uchun Neyro tarmoqlar", issuer: "Maed", year: "2024" },
        { id: "c4", name: "IELTS", issuer: "Band 6.5", year: "2025" }
      ]
    },
    contact: {
      available_badge: "Takliflar uchun ochiqman",
      title_line1: "Keling, natija",
      title_highlight: "yarataylik.",
      description: "Ayni paytda men Product Management sohasida yangi imkoniyatlarni izlamoqdaman. Savolingiz yoki taklifingiz bormi? Menga yozing va men imkon qadar tezroq javob berishga harakat qilaman!",
      telegram_btn: "Telegram",
      email_label: "Email manzil",
      phone_label: "Telefon raqami",
      email: "kamasultanov8@gmail.com",
      phone: "+998 88 111 66 12",
      linkedin: "https://www.linkedin.com/in/komil-sultonov-405a09295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      location: "Toshkent, O'zbekiston",
      footer: "© 2026 Sultonov Komil. Barcha huquqlar himoyalangan.",
      back_to_top: "Yuqoriga",
      click_to_copy: "Nusxalash",
      copied: "Nusxalandi!"
    }
  }
};
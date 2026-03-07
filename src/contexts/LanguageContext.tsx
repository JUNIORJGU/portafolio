import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en" | "pt" | "ru";

export const langLabels: Record<Lang, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  ru: "Русский",
};

export const langFlags: Record<Lang, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
  pt: "🇧🇷",
  ru: "🇷🇺",
};

const translations = {
  // Navbar
  "nav.about": { es: "Sobre mí", en: "About me", pt: "Sobre mim", ru: "Обо мне" },
  "nav.skills": { es: "Habilidades", en: "Skills", pt: "Skills", ru: "Навыки" },
  "nav.projects": { es: "Proyectos", en: "Projects", pt: "Projetos", ru: "Проекты" },
  "nav.contact": { es: "Contacto", en: "Contact", pt: "Contato", ru: "Контакт" },

  // Hero
  "hero.greeting": { es: "Hola, soy", en: "Hi, I'm", pt: "Olá, sou", ru: "Привет, я" },
  "hero.description": {
    es: "Desarrollador Full Stack apasionado por crear experiencias digitales únicas. Transformo ideas en código limpio y funcional.",
    en: "Full Stack Developer passionate about creating unique digital experiences. I transform ideas into clean and functional code.",
    pt: "Desenvolvedor Full Stack apaixonado por criar experiências digitais únicas. Transformo ideias em código limpo e funcional.",
    ru: "Full Stack разработчик, увлечённый созданием уникального цифрового опыта. Превращаю идеи в чистый и функциональный код.",
  },
  "hero.viewProjects": { es: "Ver proyectos", en: "View projects", pt: "Ver projetos", ru: "Проекты" },
  "hero.contact": { es: "Contacto", en: "Contact", pt: "Contato", ru: "Контакт" },

  // Dev Section
  "dev.title": { es: "El Desarrollador", en: "The Developer", pt: "O Desenvolvedor", ru: "Разработчик" },
  "dev.location": { es: "Ubicación", en: "Location", pt: "Localização", ru: "Местоположение" },
  "dev.locationValue": { es: "Curitiba, Brasil", en: "Curitiba, Brazil", pt: "Curitiba, Brasil", ru: "Куритиба, Бразилия" },
  "dev.role": { es: "Rol actual", en: "Current role", pt: "Cargo atual", ru: "Текущая роль" },
  "dev.roleValue": { es: "Back-end y bases de datos", en: "Backend & Database", pt: "Backend e Banco de dados", ru: "Бэкенд и Базы данных" },
  "dev.education": { es: "Formación", en: "Education", pt: "Formação", ru: "Образование" },
  "dev.educationValue": { es: "Técnico Superior en Informática", en: "Higher Technician in Informatics", pt: "Técnico Superior em Informática", ru: "Высший техник по информатике" },
  "dev.passion": { es: "Pasión", en: "Passion", pt: "Paixão", ru: "Увлечение" },
  "dev.bio": {
    es: "Desarrollador con aproximadamente 5 años de formación y crecimiento en programación, con experiencia profesional en una empresa donde participé en proyectos de corta duración orientados al desarrollo y mantenimiento de aplicaciones web. Mi trayectoria ha transcurrido en un único entorno, lo que me permitió profundizar en procesos y buenas prácticas, así como afrontar diversos retos técnicos que fortalecieron mi capacidad de adaptación y resolución de problemas.\n\nActualmente me encuentro enfocado en seguir consolidando mi perfil profesional, ampliando mi portafolio y profundizando en buenas prácticas. Me considero una persona responsable, comprometida y capaz de asumir y cumplir las tareas que se me asignan, manteniendo siempre una mentalidad de aprendizaje continuo y mejora constante.",
    en: "Developer with approximately 5 years of training and growth in programming, and professional experience in a company where I have participated in short-term projects focused on the development and maintenance of web applications. My career path has been in a single environment, allowing me to deepen my knowledge of processes, best practices, and face various technical challenges that strengthened my adaptability and problem-solving skills.\n\nCurrently, I am focused on further consolidating my professional profile, expanding my portfolio, and deepening my understanding of best practices. I consider myself a responsible and committed person, capable of taking on and fulfilling assigned tasks while always maintaining a mindset of continuous learning and constant improvement.",
    pt: "Desenvolvedor com aproximadamente 5 anos de formação e crescimento em programação, e experiência profissional em uma empresa onde participei de projetos de curto prazo focados no desenvolvimento e manutenção de aplicações web. Minha trajetória profissional tem sido em um mesmo ambiente, o que me permitiu aprofundar em processos, boas práticas e enfrentar diferentes desafios técnicos que fortaleceram minha capacidade de adaptação e resolução de problemas.\n\nAtualmente estou focado em continuar consolidando meu perfil profissional, expandindo meu portfólio e aprofundando em boas práticas. Considero-me uma pessoa responsável, comprometida e com a capacidade de assumir e cumprir as tarefas que me são atribuídas, mantendo sempre uma mentalidade de aprendizado contínuo e melhoria constante.",
    ru: "Разработчик с около 5 годами обучения и роста в программировании, а также профессиональным опытом в компании, где я участвовал в краткосрочных проектах, ориентированных на разработку и поддержку веб-приложений. Моя карьера развивалась в одной среде, что позволило мне углубиться в процессы, лучшие практики и столкнуться с различными техническими вызовами, которые укрепили мою способность к адаптации и решению проблем.\n\nВ настоящее время я сосредоточен на дальнейшем укреплении своего профессионального профиля, расширении портфолио и углублении знаний о лучших практиках. Я считаю себя ответственным и целеустремленным человеком, способным брать на себя и выполнять порученные задачи, всегда сохраняя настрой на непрерывное обучение и постоянное совершенствование.",
  },

  // About
  "about.title": { es: "Sobre mí", en: "About me", pt: "Sobre mim", ru: "Обо мне" },
  "about.years": { es: "5 años", en: "5 years", pt: "5 anos", ru: "5 лет" },
  "about.yearsDesc": { es: "aprox. de experiencia", en: "approx. experience", pt: "aprox. de experiência", ru: "прибл. опыта" },
  "about.projects": { es: "3 proyectos", en: "3 projects", pt: "3 projetos", ru: "3 проекта" },
  "about.projectsDesc": { es: "completados", en: "completed", pt: "concluídos", ru: "завершено" },
  "about.coffee": { es: "∞ café", en: "∞ coffee", pt: "∞ café", ru: "∞ кофе" },
  "about.coffeeDesc": { es: "consumido", en: "consumed", pt: "consumido", ru: "выпито" },
  "about.description": {
    es: "Me especializo en el desarrollo y mantenimiento de aplicaciones web, con un enfoque en procesos eficientes y buenas prácticas. Disfruto enfrentar retos técnicos complejos mientras mantengo una mentalidad de aprendizaje continuo y mejora constante.",
    en: "I specialize in the development and maintenance of web applications, deepening my knowledge of processes and best practices. I enjoy solving complex technical challenges while always maintaining a mindset of continuous learning and constant improvement.",
    pt: "Especializo-me no desenvolvimento e manutenção de aplicações web, aprofundando em processos e boas práticas. Gosto de resolver desafios técnicos complexos, mantendo sempre uma mentalidade de aprendizado contínuo e melhoria constante.",
    ru: "Специализируюсь на разработке и поддержке веб-приложений, углубляясь в процессы и лучшие практики. Мне нравится решать сложные технические задачи, всегда сохраняя настрой на непрерывное обучение и постоянное совершенствование.",
  },

  // Skills
  "skills.title": { es: "Stack tecnológico", en: "Tech Stack", pt: "Tech Stack", ru: "Технологии" },
  "skills.languages": { es: "Lenguajes", en: "Languages", pt: "Linguagens", ru: "Языки" },
  "skills.frontend": { es: "Frontend", en: "Frontend", pt: "Frontend", ru: "Фронтенд" },
  "skills.backend": { es: "Backend", en: "Backend", pt: "Backend", ru: "Бэкенд" },
  "skills.tools": { es: "Herramientas", en: "Tools", pt: "Ferramentas", ru: "Инструменты" },

  // Projects
  "projects.title": { es: "Proyectos", en: "Projects", pt: "Projetos", ru: "Проекты" },
  "projects.ecommerce.desc": {
    es: "Tienda online con carrito, pagos y panel de administración.",
    en: "Online store with cart, payments, and admin panel.",
    pt: "Loja online com carrinho, pagamentos e painel de administração.",
    ru: "Интернет-магазин с корзиной, оплатой и панелью администратора.",
  },
  "projects.taskmanager.desc": {
    es: "Aplicación de gestión de tareas con drag & drop y colaboración en tiempo real.",
    en: "Task management app with drag & drop and real-time collaboration.",
    pt: "Aplicativo de gestão de tarefas com drag & drop e colaboração em tempo real.",
    ru: "Приложение для управления задачами с drag & drop и совместной работой в реальном времени.",
  },
  "projects.dashboard.desc": {
    es: "Panel de monitoreo de APIs con gráficas en tiempo real y alertas.",
    en: "API monitoring dashboard with real-time charts and alerts.",
    pt: "Painel de monitoramento de APIs com gráficos em tempo real e alertas.",
    ru: "Панель мониторинга API с графиками в реальном времени и оповещениями.",
  },

  // Contact
  "contact.title": { es: "Contacto", en: "Contact", pt: "Contato", ru: "Контакт" },
  "contact.cta": {
    es: "¿Tienes un proyecto en mente? Me encantaría escucharte.",
    en: "Have a project in mind? I'd love to hear from you.",
    pt: "Tem um projeto em mente? Adoraria ouvir de você.",
    ru: "Есть проект? Буду рад услышать вас.",
  },
  "contact.footer": {
    es: "Hecho con 💚 y mucho código",
    en: "Made with 💚 and lots of code",
    pt: "Feito com 💚 e muito código",
    ru: "Сделано с 💚 и кодом",
  },
} as const;

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

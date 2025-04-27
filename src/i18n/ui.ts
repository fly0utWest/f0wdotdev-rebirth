export const languages = {
  en: "English",
  ru: "Русский",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    misc: {
      click: "click",
    },
    "home.hero": {
      stack: "Stack",
      langs: "Languages",
    },
    "home.projects": {
      title: "Projects",
      card: {
        clickToShow: "Click to show",
        createdAt: "Created",
        stack: "Stack",
        links: "Links",
      },
    },
    footer: {
      poweredBy: "Powered by",
      hostedBy: "Hosted with",
      repo: "Github repo",
    },

    webringNav: {
      title: "[rutg webringo]",
      loading: "loading...",
    },
  },
  ru: {
    misc: {
      click: "тык",
    },
    "home.hero": {
      stack: "Инструменты",
      langs: "Языки",
    },
    "home.projects": {
      title: "Проекты",
      card: {
        clickToShow: "Нажми, чтобы перейти к проекту",
        createdAt: "Создан",
        stack: "Инструменты",
        links: "Ссылки",
      },
    },
    footer: {
      poweredBy: "Написано на",
      hostedBy: "Хостится с помощью",
      repo: "Открытый код",
    },
    webringNav: {
      title: "[рутг вебринг]",
      loading: "загрузка...",
    },
  },
} as const;

export const languages = {
  en: "English",
  ru: "Русский",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "home.hero": {
      stack: "Stack",
    },
    "home.projects": {
      title: "Projects",
      card: {
        clickToShow: "Click to show",
        createdAt: "Created",
        stack: "Stack",
      },
    },
    footer: {
      poweredBy: "Powered by",
      hostedBy: "Hosted with",
    },

    webringNav: {
      title: "[rutg webringo]",
      loading: "loading...",
    },
  },
  ru: {
    "home.hero": {
      stack: "Инструменты",
    },
    "home.projects": {
      title: "Проекты",
      card: {
        clickToShow: "Нажми, чтобы перейти к проекту",
        createdAt: "Создан",
        stack: "Инструменты",
      },
    },
    footer: {
      poweredBy: "Написано на",
      hostedBy: "Хостится с помощью",
    },
    webringNav: {
      title: "[рутг вебринг]",
      loading: "загрузка...",
    },
  },
} as const;

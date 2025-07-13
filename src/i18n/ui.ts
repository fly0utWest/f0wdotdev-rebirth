export const languages = {
  en: "English",
  ru: "Русский",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    misc: {
      error: "error :<",
      notFound: "nothing in here yet :(",
      click: "click",
    },
    "home.hero": {
      stack: "stack",
      langs: "languages",
    },
    "home.experience": {
      title: "experience",
      card: {
        company: "company",
        position: "position",
      },
    },
    "home.projects": {
      personalTitle: "personal projects",
      commercialTitle: "commercial projects",
      card: {
        clickToShow: "click to show",
        createdAt: "created",
        stack: "stack",
        links: "links",
      },
    },
    footer: {
      poweredBy: "powered by",
      hostedBy: "hosted with",
      repo: "github repo",
    },

    webringNav: {
      title: "[rutg webringo]",
      loading: "loading..",
    },
  },
  ru: {
    misc: {
      error: "ошибка :<",
      notFound: "здесь пока пусто :(",
      click: "тык",
    },
    "home.hero": {
      stack: "инструменты",
      langs: "языки",
    },
    "home.experience": {
      title: "опыт",
      card: {
        company: "компания",
        position: "должность",
      },
    },
    "home.projects": {
      personalTitle: "личные проекты",
      commercialTitle: "коммерческие проекты",
      card: {
        clickToShow: "нажми, чтобы перейти к проекту",
        createdAt: "создан",
        stack: "инструменты",
        links: "ссылки",
      },
    },
    footer: {
      poweredBy: "написано на",
      hostedBy: "хостится с помощью",
      repo: "открытый код",
    },
    webringNav: {
      title: "[рутг вебринг]",
      loading: "загрузка..",
    },
  },
} as const;

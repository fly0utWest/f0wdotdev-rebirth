// @ts-check
import { defineConfig } from "astro/config";
import { envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_PB_URL: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      PB_URL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
      PB_EMAIL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
      PB_PASSWORD: envField.string({
        context: "server",
        access: "secret",
        optional: false,
      }),
      PUBLIC_WEBRING_URL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
      WEBRING_USER_ID: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
    },
    validateSecrets: true,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [tailwind()],

  i18n: {
    fallback: {
      ru: "en",
    },
    locales: ["en", "ru"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
      redirectToDefaultLocale: true,
    },
  },
  
  adapter: node({
    mode: "standalone",
  }),
});

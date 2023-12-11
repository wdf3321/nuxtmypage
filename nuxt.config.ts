// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // ...
    'quasar/fonts',
    'quasar/animations',
    'quasar/icons',
    'quasar/css', 
    './assets/css/main.scss'
    // If config.brand is used
    //
    // ...
  ],
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@nuxtjs/i18n", "@pinia/nuxt",'@hypernym/nuxt-anime' ],
  pinia: {
    storeDirs: ["./stores/**"],
  },
  quasar: {
    plugins: ["BottomSheet", "Dialog", "Loading", "LoadingBar", "Notify", "Dark"],
    sassVariables:true,
    cssAddon: true,

    extras: {
      font: "roboto-font",
    },
    config: { dark: 'auto' },
  },
  i18n: {
    vueI18n: "~/lang/nuxt-i18n.ts",
    locales: [
      {
        code: "en",
        name: "English",
        file: "lang/en.json",
      },
      {
        code: "tw",
        name: "Chinese",
        file: "lang/tw.json",
      },
      {
        code: "jp",
        name: "Japanese",
        file: "lang/jp.json",
      },
    ],
    defaultLocale: "tw",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui",'@nuxtjs/i18n',],
  quasar: {
    plugins: ["BottomSheet", "Dialog", "Loading", "LoadingBar", "Notify", "Dark"],
    extras: {
      font: "roboto-font",
    },
  },
  i18n: {
    vueI18n: './lang/nuxt-i18n.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: './lang/en.json'
      },
      {
        code: 'tw',
        name: 'chinese',
        file: './lang/tw.json'
      },
      {
        code: 'jp',
        name: 'japanese',
        file: './lang/jp.json'
      }
    ],
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
});

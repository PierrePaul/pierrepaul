import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  target: 'static',
  head: {
    titleTemplate: '%s - Pierre-Paul Lefebvre',
    title: 'Pierre-Paul Lefebvre',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'preconnect', href: "https://fonts.gstatic.com"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Cardo&display=swap"},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: 'https://pierre-paul.com',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-CA',
        file: 'en-CA.js',
      },
      {
        name: 'Francais',
        code: 'fr',
        iso: 'fr-CA',
        file: 'fr-CA.js',
      },
    ],
    seo: true,
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
  },
  content: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
  }
}

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  app: {
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
        { rel: 'preconnect', href: "https://fonts.googleapis.com"},
        { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: ""},
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&family=Roboto:wght@300;400;700&display=swap"},
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Cardo&display=swap"},
        { rel: 'icon', type: 'image/x-icon', href: '/square-logo.png' }
      ]
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    'vuetify-nuxt-module',
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
    defaultLocale: 'en',
    lazy: true,
    langDir: '../locales/',
    strategy: 'prefix_except_default',
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          dark: {
            colors: {
              primary: '#1976D2',
              accent: '#424242',
              secondary: '#FFB300',
              info: '#26A69A',
              warning: '#FFC107',
              error: '#DD2C00',
              success: '#00E676',
            }
          }
        }
      }
    }
  },
  content: {
    components: true,
    highlight: {
      theme: 'github-light',
      langs: [
        'python',
        'php',
        'bash',
        'md',
        'typescript'
      ]
    }
  },
})

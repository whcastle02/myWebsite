// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

 app: {
    head: {
      titleTemplate: '%s - Ubaidah Nazri',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }
      ]
    }
  },

    modules: [
  '@nuxt/icon'],

  css: [
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [tsconfigPaths()]
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

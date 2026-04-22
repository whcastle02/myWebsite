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
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap' }
      ]
    }
  },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },

  content: {
    // Content module configuration
  },

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

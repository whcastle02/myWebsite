// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [// ✅ Add this line
  'unplugin-icons/nuxt', 
  '@nuxt/icon'],

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
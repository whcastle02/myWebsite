export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s | Ubaidah Nazri",
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preload",
          href: "/fonts/nunito-sans-latin.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "",
        },
      ],
    },
  },
  modules: ["@nuxt/content"],
  runtimeConfig: { public: { siteUrl: "" } },
  content: { ignores: ["(^|/)blog/", "\\.draft\\.md$"] },
  css: ["~/assets/css/main.css"],
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
});

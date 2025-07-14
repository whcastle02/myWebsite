<script setup>

import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Work from '~/components/Work.vue'
import Contact from '~/components/Contact.vue'


useHead({
  title: 'Porfolio',
  meta: [
    { name: 'description', content: 'Full-stack developer portfolio of Ubaidah Nazri with work in Vue, Node, and AI.' },
    { name: 'keywords', content: 'Vue, Nuxt, Developer, AI, Portfolio, Malaysia' },

    // Open Graph
    { property: 'og:title', content: 'Ubaidah Nazri - Developer Portfolio' },
    { property: 'og:description', content: 'Explore projects in Vue, Nuxt, and AI.' },
    { property: 'og:image', content: '/public/og_banner.png' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Ubaidah Nazri - Portfolio' },
    { name: 'twitter:description', content: 'My latest web, mobile and AI projects.' },
    { name: 'twitter:image', content: '/public/og_banner.png' },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <Header />

    <section id="home">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="work">
      <Work />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </div>
</template>



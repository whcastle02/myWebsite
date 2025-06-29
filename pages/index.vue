<script setup>

import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Work from '~/components/Work.vue'
import Contact from '~/components/Contact.vue'

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



<template>
  <section id="work" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6">My Work</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8"></div>
        <p class="text-lg text-slate-600 max-w-3xl mx-auto">
          Here's a showcase of my collaborative contributions and personal projects,
          demonstrating my skills in web development, mobile applications, and security implementations.
        </p>
      </div>

<!-- Project Contributions -->
<div class="mb-16">
<div class="flex w-full flex-col sm:flex-row items-center justify-center mb-8">
  <Users class="w-6 h-6 text-blue-600 mb-2 sm:mb-0 sm:mr-3" />
  <h3 class="text-3xl font-bold text-slate-800 text-center">
    Project Contributions
  </h3>
</div>


  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(project, index) in projectContributions"
      :key="index"
      class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500"
    >
      <!-- Banner-style Logo -->
      <div class="h-40 bg-gradient-to-br from-blue-100 to-white relative overflow-hidden">
        <img
          :src="project.logo"
          alt="App Logo"
          class="w-full h-full object-contain"
        />
      </div>

      <!-- Content -->
      <div class="p-6">
        <h4 class="text-xl font-semibold text-slate-800 mb-2">{{ project.title }}</h4>
        <p class="text-blue-600 font-medium mb-2">{{ project.role }}</p>
        <p class="text-slate-600 leading-relaxed mb-4">{{ project.description }}</p>

        <!-- App Store Links -->
        <div class="flex gap-1 mt-4 items-center">
          <a
            v-if="project.android"
            :href="project.android"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-white text-green-600 text-sm rounded-lg hover:text-white hover:bg-green-700 transition"
          >
            <Icon name="material-symbols:android" class="size-5"/>
          </a>
          <a
            v-if="project.ios"
            :href="project.ios"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-white text-black text-sm rounded-lg hover:text-white hover:bg-black transition"
          >
            <Icon name="tdesign:logo-apple-filled" class="size-5"/>
          </a>
          <a
            v-if="project.website"
            :href="project.website"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 text-blue-700 ml-auto text-sm rounded hover:bg-gray-300 "
          >
          <Icon name="fluent:compose-24-filled" class="size-5"/>
        </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Solo Projects -->
<div>
  <div class="flex items-center justify-center mb-8">
    <User class="w-6 h-6 text-teal-600 mr-3" />
    <h3 class="text-3xl font-bold text-slate-800">Solo Projects</h3>
  </div>

  <div>
    <div
      v-for="n in 1"
      :key="n"
      class="bg-slate-100 border border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition"
    >
      <h4 class="text-xl font-semibold text-slate-600 mb-2">Coming Soon</h4>
      <p class="text-slate-500 max-w-xs">
        A personal project is currently in progress. Stay tuned for exciting updates!
      </p>
    </div>
  </div>
</div>

    </div>
  </section>
</template>

<script setup>
import { ExternalLink, Github, Users, User } from 'lucide-vue-next'

const projectContributions = [
  {
    title: 'Marang Digital',
    description:
      'Contributed to the development of the system, focusing on user management and dashboard functionality.',
    role: 'System Contributor',
    logo: '/projectimage/marangdigital.png',
    website: 'https://marangdigital.firstcityparking.com.my/',
    android: 'https://play.google.com/store/apps/details?id=com.MarangDigital.app&pcampaignid=web_share',
    ios: 'https://apps.apple.com/my/app/marang-digital/id6744386524',
  },
]

// const soloProjects = [
//   {
//     title: 'Project One',
//     description:
//       'A modern web application built with Vue.js and Node.js, showcasing full-stack development skills.',
//     tech: ['Vue.js', 'Node.js', 'Prisma'],
//     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
//   },
//   {
//     title: 'Project Two',
//     description:
//       'Security-focused mobile application with robust authentication and data protection features.',
//     tech: ['React Native', 'Security', 'APIs'],
//     image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
//   },
//   {
//     title: 'Project Three',
//     description:
//       'DevOps pipeline automation tool that streamlines deployment processes for development teams.',
//     tech: ['DevOps', 'Automation', 'CI/CD'],
//     image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
//   },
// ]



//Seo use when has pages 
// useHead({
//   title: 'My Portfolio – Ubaidah Nazri',
//   meta: [
//     { name: 'description', content: 'Full-stack developer portfolio of Ubaidah Nazri with work in Vue, Node, and AI.' },
//     { name: 'keywords', content: 'Vue, Nuxt, Developer, AI, Portfolio, Malaysia' },

//     // Open Graph
//     { property: 'og:title', content: 'Ubaidah Nazri – Developer Portfolio' },
//     { property: 'og:description', content: 'Explore projects in Vue, Nuxt, and AI.' },
//     { property: 'og:image', content: '/og-cover.png' },
//     { property: 'og:type', content: 'website' },

//     // Twitter Card
//     { name: 'twitter:card', content: 'summary_large_image' },
//     { name: 'twitter:title', content: 'Ubaidah Nazri – Portfolio' },
//     { name: 'twitter:description', content: 'My latest web, mobile and AI projects.' },
//     { name: 'twitter:image', content: '/og-cover.png' },
//   ],
// })

</script>

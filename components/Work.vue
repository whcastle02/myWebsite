<template>
  <section id="work" class="py-24 relative z-10">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20 animate-in slide-in-from-bottom-8 duration-700 fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">My Work</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8 rounded-full"></div>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Here's a showcase of my collaborative contributions and personal projects,
          demonstrating my skills in web development, mobile applications, and security implementations.
        </p>
      </div>

      <!-- Project Contributions -->
      <div class="mb-24">
        <div class="flex w-full flex-col sm:flex-row items-center justify-center mb-12">
          <Users class="w-8 h-8 text-blue-500 dark:text-blue-400 mb-2 sm:mb-0 sm:mr-4" />
          <h3 class="text-3xl font-bold text-slate-900 dark:text-white text-center">
            Project Contributions
          </h3>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projectContributions"
            :key="index"
            class="glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:-translate-y-2 group border border-slate-200 dark:border-white/5"
          >
            <!-- Banner-style Logo -->
            <div class="h-48 relative overflow-hidden bg-slate-100 dark:bg-slate-900/50 p-6 flex items-center justify-center">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                :src="project.logo"
                alt="App Logo"
                class="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'"
              />
            </div>

            <!-- Content -->
            <div class="p-8">
              <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">{{ project.title }}</h4>
              <p class="text-blue-600 dark:text-blue-400 font-medium mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                {{ project.role }}
              </p>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 min-h-[80px]">{{ project.description }}</p>

              <!-- App Store Links -->
              <div class="flex flex-wrap gap-3 mt-auto items-center justify-start border-t border-slate-200 dark:border-white/10 pt-6">
                <a
                  v-if="project.android"
                  :href="project.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2.5 glass rounded-xl text-green-600 dark:text-green-400 hover:text-slate-900 dark:hover:text-white hover:bg-green-100 dark:hover:bg-green-500/20 transition-all border border-green-200 dark:border-green-500/30 hover:border-green-300 dark:hover:border-green-500/50"
                  title="Play Store"
                >
                  <Icon name="material-symbols:android" class="w-6 h-6"/>
                </a>
                <a
                  v-if="project.ios"
                  :href="project.ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2.5 glass rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/40"
                  title="App Store"
                >
                  <Icon name="tdesign:logo-apple-filled" class="w-6 h-6"/>
                </a>
                <a
                  v-if="project.huawei"
                  :href="project.huawei"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2.5 glass rounded-xl text-red-600 dark:text-red-400 hover:text-slate-900 dark:hover:text-white hover:bg-red-100 dark:hover:bg-red-500/20 transition-all border border-red-200 dark:border-red-500/30 hover:border-red-300 dark:hover:border-red-500/50"
                  title="AppGallery"
                >
                  <Icon name="simple-icons:huawei" class="w-6 h-6"/>
                </a>
                <a
                  v-if="project.website"
                  :href="project.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2.5 glass rounded-xl text-blue-600 dark:text-blue-400 hover:text-slate-900 dark:hover:text-white hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all ml-auto border border-blue-200 dark:border-blue-500/30 hover:border-blue-300 dark:hover:border-blue-500/50"
                  title="Website"
                >
                  <Icon name="fluent:compose-24-filled" class="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Solo Projects -->
      <div>
        <div class="flex items-center justify-center mb-12">
          <User class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-4" />
          <h3 class="text-3xl font-bold text-slate-900 dark:text-white">Solo Projects</h3>
        </div>

        <div class="max-w-2xl mx-auto">
          <div
            class="glass-card border border-dashed border-slate-300 dark:border-slate-500/50 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
          >
            <div class="w-16 h-16 rounded-full glass flex items-center justify-center mb-6">
              <span class="text-2xl animate-bounce">🚧</span>
            </div>
            <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Coming Soon</h4>
            <p class="text-slate-600 dark:text-slate-400 text-lg max-w-md leading-relaxed">
              A personal project is currently in progress. Stay tuned for exciting updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Users, User } from 'lucide-vue-next'

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
    huawei: 'https://appgallery.huawei.com/#/app/C113813065',
  },
]
</script>

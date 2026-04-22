<script setup>
import { Github, Linkedin, Mail, MapPin } from 'lucide-vue-next'

const socialLinks = [
  { icon: Github, href: 'https://github.com/whcastle02', label: 'GitHub', color: 'group-hover:text-slate-900 dark:group-hover:text-white', bgColor: 'group-hover:bg-slate-200 dark:group-hover:bg-slate-800' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ubaidahnazri', label: 'LinkedIn', color: 'group-hover:text-blue-600 dark:group-hover:text-blue-500', bgColor: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-500/10' },
  { icon: Mail, href: 'mailto:ubaidahnazr@gmail.com', label: 'Email', color: 'group-hover:text-red-500 dark:group-hover:text-red-400', bgColor: 'group-hover:bg-red-100 dark:group-hover:bg-red-400/10' },
]
</script>

<template>
  <section id="contact" class="py-24 relative z-10 glass border-t border-slate-200 dark:border-white/5 bg-white/30 dark:bg-transparent">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Let's Connect</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8 rounded-full"></div>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Whether you want to collaborate on a project, discuss tech, 
          or just say hello, I'd love to hear from you.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Info Text -->
        <div class="space-y-8 animate-in slide-in-from-left-8 duration-1000 fade-in">
          <div class="glass-card p-8 rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
            <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Get In Touch</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and development.
            </p>
            
            <div class="flex items-start gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
              <div class="p-3 bg-green-100 dark:bg-green-500/20 rounded-lg text-green-600 dark:text-green-400 shrink-0">
                <MapPin class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-green-700 dark:text-green-400 font-bold mb-1">Available for Work</h4>
                <p class="text-slate-600 dark:text-slate-300 text-sm">
                  Open to remote roles and on-site work in Malaysia (MYT, UTC+8)
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="glass-card p-8 rounded-2xl animate-in slide-in-from-right-8 duration-1000 fade-in flex flex-col justify-center h-full">
          <h4 class="text-xl font-bold mb-8 text-center text-slate-900 dark:text-white">Find Me Online</h4>
          <div class="grid gap-4">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              class="group flex items-center justify-between p-4 glass rounded-xl border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex items-center gap-4">
                <div :class="['p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors duration-300', social.bgColor, social.color]">
                  <component :is="social.icon" class="w-6 h-6" />
                </div>
                <span class="font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{{ social.label }}</span>
              </div>
              <span class="text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-20 pt-8 border-t border-slate-200 dark:border-white/10">
        <p class="text-slate-500 text-sm">
          Designed and built with <span class="text-red-500 animate-pulse inline-block">❤️</span> using Nuxt & Tailwind CSS. <br class="md:hidden"/> © {{ new Date().getFullYear() }} MUUBN.
        </p>
      </div>
    </div>
  </section>
</template>

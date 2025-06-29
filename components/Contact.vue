<script setup>
import { Github, Linkedin, XIcon, Mail, MapPin } from 'lucide-vue-next'

const socialLinks = [
  { icon: Github, href: 'https://github.com/whcastle02', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ubaidahnazri', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Mail, href: 'mailto:ubaidahnazr@gmail.com', label: 'Email', color: 'hover:text-red-400' },
]
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white" id="contact">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Follow Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto mb-8"></div>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Let's connect! Whether you want to collaborate on a project, discuss tech, 
          or just say hello, I'd love to hear from you.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Info Text -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p class="text-gray-300 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and development.
          </p>
          <div class="flex items-center gap-3 text-gray-300">
            <MapPin class="w-5 h-5" />
            <span>Available for remote work</span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h4 class="text-xl font-semibold mb-6 text-center">Connect With Me</h4>
          <div class="grid grid-cols-2 gap-4">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              class="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              :class="social.color"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="social.icon" class="w-6 h-6" />
              <span class="font-medium">{{ social.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-16 pt-8 border-t border-slate-700">
        <p class="text-gray-400">
          © 2025 MUUBN.
        </p>
      </div>
    </div>
  </section>
</template>



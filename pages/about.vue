<template>
  <section id="about" class="py-24 relative z-10">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Heading -->
      <div class="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8 animate-in slide-in-from-left-8 duration-1000 fade-in">
          <div class="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Vibe Coding Intern with a Passion for Innovation
            </h3>
            <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Currently in my final year of <strong>B.Com.Sc. (Hons) in Information Security and Assurance</strong> at <strong>Universiti Sains Islam Malaysia (USIM)</strong>. I'm gaining hands-on experience through my internship, on an exciting journey to become a <strong>full-stack developer</strong>. My focus is on building robust web and mobile applications while upholding strong security practices.
            </p>
            <p class="text-lg text-slate-600 dark:text-slate-400 italic border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-2 mt-6">
              "Off the clock, I love getting outside for hiking, biking, or camping, and whipping up something delicious at home."
            </p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-3">
            <span class="glass px-5 py-2 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              Web Development
            </span>
            <span class="glass px-5 py-2 rounded-full text-sm font-semibold text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.1)]">
              Mobile Apps
            </span>
            <span class="glass px-5 py-2 rounded-full text-sm font-semibold text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
              DevOps
            </span>
            <span class="glass px-5 py-2 rounded-full text-sm font-semibold text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
              Security
            </span>
          </div>
        </div>

        <!-- Skills Icons Grid -->
        <div class="grid grid-cols-2 gap-6 animate-in slide-in-from-right-8 duration-1000 fade-in">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] group relative overflow-hidden"
          >
            <!-- Hover effect glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div class="w-16 h-16 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <component :is="skill.icon" :class="`w-8 h-8 ${skill.color}`" />
            </div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white">{{ skill.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code, Database, Shield, Computer } from 'lucide-vue-next'

const skills = [
  { icon: Code, name: 'Vue.js, Node.js', color: 'text-green-500 dark:text-green-400' },
  { icon: Computer, name: 'Postman, Rest API', color: 'text-yellow-500 dark:text-yellow-400' },
  { icon: Database, name: 'Prisma, MySQL', color: 'text-blue-500 dark:text-blue-400' },
  { icon: Shield, name: 'Security', color: 'text-red-500 dark:text-red-400' },
]
</script>

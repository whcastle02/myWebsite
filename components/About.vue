<template>
  <section id="about" class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-slate-800 mb-4">
            Vibe Coding Intern with a Passion for Innovation
          </h3>
          <p class="text-lg text-slate-600 leading-relaxed">
            Currently in my final year of <strong>B.Com.Sc. (Hons) in Information Security and Assurance</strong> at <strong>Universiti Sains Islam Malaysia (USIM)</strong>, I'm currently gaining hands-on experience through my internship. I'm on an exciting journey to become a <strong>full-stack developer</strong>, with a focus on building robust web and mobile applications while upholding strong security practices.
          </p>
          <p class="text-lg text-slate-600 leading-relaxed">
            “Off the clock I love getting outside like hiking, biking, or camping and whipping up something delicious at home.”
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-4 mt-8">
            <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Web Development
            </span>
            <span class="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              Mobile Apps
            </span>
            <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              DevOps
            </span>
            <span class="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              Security
            </span>
          </div>
        </div>

        <!-- Skills Icons Grid -->
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <component :is="skill.icon" :class="`w-12 h-12 ${skill.color} mb-4`" />
            <h4 class="text-lg font-semibold text-slate-800">{{ skill.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code, Database, Shield, Computer } from 'lucide-vue-next'

const skills = [
  { icon: Code, name: 'Vue.js, Node.js', color: 'text-green-400' },
  { icon: Computer, name: 'Postman, Rest API', color: 'text-yellow-400' },
  { icon: Database, name: 'Prisma, MySQL', color: 'text-blue-400' },
  { icon: Shield, name: 'Security', color: 'text-red-400' },
]
</script>

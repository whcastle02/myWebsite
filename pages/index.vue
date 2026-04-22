<script setup>
import { ArrowRight, ArrowLeft, Sun, Moon } from 'lucide-vue-next'
import bgImage from '~/assets/img/IMG_4676-removebg-preview.png'

const colorMode = useColorMode()
const isPreloaderDone = useState('preloader-done', () => false)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

definePageMeta({
  layout: false
})

useHead({
  title: 'Home - Ubaidah Nazri',
  meta: [
    { name: 'description', content: 'Full-stack developer portfolio of Ubaidah Nazri.' }
  ]
})
</script>

<template>
  <div class="group h-screen w-full overflow-hidden relative bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500">
    
    <!-- Dynamic Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <!-- Animated Blobs -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-red-400/30 dark:bg-red-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-amber-400/30 dark:bg-amber-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Huge Background Text for Depth -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-40">
      <h2 class="text-[20vw] md:text-[12vw] font-black text-slate-300 dark:text-slate-600 tracking-tighter select-none text-center leading-none flex flex-col md:flex-row gap-0 md:gap-8">
        <span>UBAIDAH</span>
        <span>NAZRI</span>
      </h2>
    </div>

    <div class="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
      
      <!-- Central Portrait Image (Transparent PNG) -->
      <img 
        :src="bgImage" 
        alt="Portrait" 
        :class="[
          'absolute bottom-0 w-[95%] max-[540px]:w-[85%] md:w-[90%] max-w-2xl lg:max-w-3xl object-contain object-bottom z-10 drop-shadow-2xl pointer-events-none transition-all duration-[1500ms] ease-out',
          isPreloaderDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        ]" 
        style="max-height: 85vh;" 
      />

      <!-- Foreground Text and Links Container -->
      <div class="relative z-20 w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center pointer-events-none">

        <!-- Navigation Links (Pointer events auto to allow clicking) -->
        <div class="absolute inset-0 pointer-events-auto">
          
          <!-- Top Left: About -->
          <div class="absolute top-8 left-2 max-[540px]:top-[20%] max-[540px]:left-4 md:top-32 md:left-24 lg:left-32 group">
            <NuxtLink to="/about" class="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-slate-800 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 hover:scale-110 transform">
              <div class="p-2 md:p-3 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:shadow-red-500/20 group-hover:border-red-500/50 transition-all">
                <ArrowRight class="w-6 h-6 max-[540px]:w-5 max-[540px]:h-5 md:w-10 md:h-10 rotate-90 md:rotate-0 group-hover:translate-y-1 md:group-hover:translate-y-0 md:group-hover:translate-x-1 transition-transform duration-300" stroke-width="2.5" />
              </div>
              <span class="font-graffiti text-xl max-[540px]:text-lg md:text-4xl tracking-wide drop-shadow-md">About</span>
            </NuxtLink>
          </div>

          <!-- Top Right: Experience -->
          <div class="absolute top-12 right-2 max-[540px]:top-[25%] max-[540px]:right-4 md:top-40 md:right-24 lg:right-32 group">
            <NuxtLink to="/experience" class="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-4 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
              <span class="font-graffiti text-xl max-[540px]:text-lg md:text-4xl tracking-wide md:order-1 order-2 drop-shadow-md">Experience</span>
              <div class="p-2 md:p-3 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:shadow-blue-500/20 group-hover:border-blue-500/50 transition-all md:order-2 order-1">
                <ArrowLeft class="w-6 h-6 max-[540px]:w-5 max-[540px]:h-5 md:w-10 md:h-10 rotate-90 md:rotate-0 group-hover:-translate-y-1 md:group-hover:translate-y-0 md:group-hover:-translate-x-1 transition-transform duration-300" stroke-width="2.5" />
              </div>
            </NuxtLink>
          </div>

          <!-- Bottom Left: Work -->
          <div class="absolute top-[30%] left-2 max-[540px]:top-auto max-[540px]:bottom-24 max-[540px]:left-4 md:top-auto md:translate-y-0 md:bottom-40 md:left-32 lg:left-48 group">
            <NuxtLink to="/work" class="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 hover:scale-110 transform">
              <div class="p-2 md:p-3 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:shadow-amber-500/20 group-hover:border-amber-500/50 transition-all">
                <ArrowRight class="w-6 h-6 max-[540px]:w-5 max-[540px]:h-5 md:w-10 md:h-10 rotate-90 md:rotate-0 group-hover:translate-y-1 md:group-hover:translate-y-0 md:group-hover:translate-x-1 transition-transform duration-300" stroke-width="2.5" />
              </div>
              <span class="font-graffiti text-xl max-[540px]:text-lg md:text-4xl tracking-wide drop-shadow-md">Work</span>
            </NuxtLink>
          </div>

          <!-- Bottom Right: Contact -->
          <div class="absolute top-[35%] right-2 max-[540px]:top-auto max-[540px]:bottom-32 max-[540px]:right-4 md:top-auto md:translate-y-0 md:bottom-32 md:right-32 lg:right-48 group">
            <NuxtLink to="/contact" class="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-4 text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 transform">
              <span class="font-graffiti text-xl max-[540px]:text-lg md:text-4xl tracking-wide md:order-1 order-2 drop-shadow-md">Contact</span>
              <div class="p-2 md:p-3 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-white/20 shadow-lg group-hover:shadow-purple-500/20 group-hover:border-purple-500/50 transition-all md:order-2 order-1">
                <ArrowLeft class="w-6 h-6 max-[540px]:w-5 max-[540px]:h-5 md:w-10 md:h-10 rotate-90 md:rotate-0 group-hover:-translate-y-1 md:group-hover:translate-y-0 md:group-hover:-translate-x-1 transition-transform duration-300" stroke-width="2.5" />
              </div>
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>

    <!-- Theme Toggle Floating Button -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
      <button 
        @click="toggleTheme"
        class="flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-2xl hover:bg-white/80 dark:hover:bg-black/80 transition-all text-slate-800 dark:text-slate-200 hover:scale-105 group/btn"
      >
        <Sun v-if="$colorMode.value === 'dark'" class="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-500" />
        <Moon v-else class="w-5 h-5 group-hover/btn:-rotate-12 transition-transform duration-500" />
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

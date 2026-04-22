<template>
  <Transition name="preloader">
    <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      
      <!-- Background abstract ambient glow -->
      <div class="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <div class="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-orange-600/20 rounded-full blur-[100px] animate-pulse" style="animation-duration: 3s;"></div>
        <div class="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-yellow-500/20 rounded-full blur-[100px] animate-pulse" style="animation-duration: 4s; animation-delay: 1s;"></div>
      </div>

      <!-- Funny Malaysian Loading Content -->
      <div class="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center justify-center text-center">
        
        <!-- Emojis scaling and bouncing -->
        <div class="h-32 flex items-center justify-center mb-4">
          <Transition name="bounce" mode="out-in">
            <div :key="step" class="text-7xl md:text-8xl drop-shadow-2xl">
              {{ currentEmoji }}
            </div>
          </Transition>
        </div>

        <!-- Text changing -->
        <div class="h-24 flex items-center justify-center">
          <Transition name="fade-up" mode="out-in">
            <h2 :key="step" class="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-md">
              {{ currentText }}
            </h2>
          </Transition>
        </div>
        
        <!-- Loading Spinner -->
        <div v-if="step < 5" class="mt-8 flex items-center gap-3">
          <div class="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0.15s"></div>
          <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
        </div>

      </div>
      
      <!-- Progress Bar (The "Perjalanan") -->
      <div class="absolute bottom-0 left-0 w-full h-2 bg-slate-800 overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 transition-all duration-500 ease-out relative" 
          :style="{ width: progress + '%' }"
        >
          <div class="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const isLoading = ref(true)
const step = ref(0)
const progress = ref(0)
const isPreloaderDone = useState('preloader-done', () => false)

const phrases = [
  { emoji: '😴', text: 'Jap, server baru bangun dari tidur...' },
  { emoji: '🏍️', text: 'Sabar jap...' },
  { emoji: '🚦', text: 'X yah nekan ii la' },
  { emoji: '☕', text: 'Sikit Lagii' },
  { emoji: '🚗', text: 'Jgn rushing ii la' },
  { emoji: '🎉', text: 'Okay done' }
]

const currentEmoji = computed(() => phrases[step.value].emoji)
const currentText = computed(() => phrases[step.value].text)

onMounted(() => {
  // Prevent scrolling while loading
  document.body.style.overflow = 'hidden'

  // Malaysian timing sequence
  setTimeout(() => { step.value = 1; progress.value = 15 }, 800)
  setTimeout(() => { step.value = 2; progress.value = 40 }, 1800)
  setTimeout(() => { step.value = 3; progress.value = 65 }, 2800)
  setTimeout(() => { step.value = 4; progress.value = 85 }, 3800)
  setTimeout(() => { step.value = 5; progress.value = 100 }, 4600)
  
  // End preloader and trigger transition
  setTimeout(() => {
    isLoading.value = false
    document.body.style.overflow = ''
    setTimeout(() => {
      isPreloaderDone.value = true
    }, 400) // Trigger fade in halfway through the preloader sliding up
  }, 5600)
})
</script>

<style scoped>
.preloader-enter-active,
.preloader-leave-active {
  transition: all 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.preloader-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* Bounce animation for emojis */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.25); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

/* Fade up animation for text */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

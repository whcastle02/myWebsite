<template>
  <header
    :class="[
      'fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      isScrolled 
        ? 'top-4 mx-4 md:mx-auto max-w-6xl glass shadow-xl dark:shadow-2xl rounded-2xl py-3 px-6' 
        : 'top-0 mx-0 max-w-full bg-transparent py-6 px-6 md:px-12'
    ]"
  >
    <nav class="flex items-center justify-between w-full h-full max-w-7xl mx-auto">
      <!-- Clickable Logo -->
      <div
        class="cursor-pointer text-2xl font-black tracking-tighter text-gradient hover:scale-105 transition-transform duration-300"
        @click="scrollToHome"
      >
        MUUBN<span class="text-blue-500">.</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="handleNavClick(item)"
          class="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
        >
          {{ item.name }}
          <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>

        <!-- Theme Toggler -->
        <button 
          @click="toggleTheme" 
          class="ml-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          aria-label="Toggle Theme"
        >
          <Sun v-if="$colorMode.value === 'dark'" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <button 
          @click="toggleTheme" 
          class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          aria-label="Toggle Theme"
        >
          <Sun v-if="$colorMode.value === 'dark'" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>
        <button @click="isMenuOpen = !isMenuOpen" class="text-slate-900 dark:text-white p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
          <X v-if="isMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 right-0 mt-2 p-4 glass rounded-2xl md:hidden animate-in slide-in-from-top-4 duration-300 shadow-2xl"
    >
      <div class="flex flex-col space-y-2">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="handleNavClick(item)"
          class="w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all font-medium"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const router = useRouter()
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const navItems = [
  { name: 'Resume', href: 'https://drive.google.com/file/d/163EqZpOzvsCQIEMIZupNpVbaOgdwUjWC/view?usp=sharing', external: true },
  { name: 'About', href: '/#about', external: false },
  { name: 'Experience', href: '/#experience', external: false },
  { name: 'Work', href: '/#work', external: false },
  { name: 'Contact', href: '/#contact', external: false },
]

const scrollToHome = () => {
  router.push('/')
  isMenuOpen.value = false
}

const handleNavClick = (item) => {
  if (item.external) {
    window.open(item.href, '_blank')
  } else {
    router.push(item.href)
    isMenuOpen.value = false
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

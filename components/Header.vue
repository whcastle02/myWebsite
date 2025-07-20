<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Clickable Logo -->
        <div
          class="cursor-pointer text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent"
          @click="scrollToHome"
        >
          MUUBN
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <button
            v-for="item in navItems"
            :key="item.name"
            @click="handleNavClick(item)"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
          >
            {{ item.name }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2">
          <X v-if="isMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMenuOpen"
        class="md:hidden mt-4 py-4 bg-slate-800/95 rounded-lg backdrop-blur-sm animate-in fade-in zoom-in duration-300"
      >
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="handleNavClick(item)"
          class="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-300"
        >
          {{ item.name }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: 'Resume', href: 'https://drive.google.com/file/d/163EqZpOzvsCQIEMIZupNpVbaOgdwUjWC/view?usp=sharing', external: true },
  { name: 'About', href: '#about', external: false },
  { name: 'Work', href: '#work', external: false },
  { name: 'Contact', href: '#contact', external: false },
]

const scrollToHome = () => {
  const el = document.querySelector('#home')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}

const handleNavClick = (item) => {
  if (item.external) {
    window.open(item.href, '_blank')
  } else {
    const el = document.querySelector(item.href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      isMenuOpen.value = false
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

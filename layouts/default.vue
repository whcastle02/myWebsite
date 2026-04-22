<template>
  <div class="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-300">
    <!-- Animated Global Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-400/30 dark:bg-blue-600/20 blur-[100px] animate-blob"></div>
      <div class="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-teal-400/30 dark:bg-teal-500/20 blur-[100px] animate-blob" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] rounded-full bg-purple-400/30 dark:bg-purple-600/20 blur-[100px] animate-blob" style="animation-delay: 4s;"></div>
    </div>

    <!-- Content Layer -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Header />

      <main class="flex-grow">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>

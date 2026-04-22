<template>
  <div class="min-h-screen relative overflow-hidden bg-[#f4f0e6] dark:bg-[#1a1a1a] text-black dark:text-gray-100 selection:bg-red-500/30 transition-colors duration-300 font-sans">
    
    <!-- Manga/Graffiti Halftone Background -->
    <div class="fixed inset-0 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen opacity-10 dark:opacity-[0.05]" style="background-image: radial-gradient(#000 1.5px, transparent 1.5px); background-size: 8px 8px;"></div>
    
    <!-- Edge Vignette -->
    <div class="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.1)_100%)] pointer-events-none z-0"></div>

    <!-- Content Layer -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Header />

      <main class="flex-grow pt-24 pb-12">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>

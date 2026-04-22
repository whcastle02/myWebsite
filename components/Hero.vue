<template>
  <section
    class="min-h-screen flex items-center justify-center relative pt-24 pb-20"
  >
    <div
      class="flex flex-col lg:flex-row items-center justify-center z-10
             px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-16 w-full"
    >
      <!-- Text Content -->
      <div class="text-center lg:text-left animate-in slide-in-from-bottom-8 duration-700 fade-in flex-1">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/30 mb-6 bg-blue-50/50 dark:bg-transparent">
          <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span class="text-sm font-medium text-blue-700 dark:text-blue-200">Available for new opportunities</span>
        </div>
        
        <h2 class="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-2 font-light tracking-wide">Hello, I'm</h2>
        <h1
          class="text-6xl md:text-8xl font-black mb-6 tracking-tighter
                 bg-gradient-to-br from-slate-900 via-blue-800 to-teal-600
                 dark:from-white dark:via-blue-100 dark:to-teal-400
                 bg-clip-text text-transparent drop-shadow-sm"
        >
          Ubaidah
        </h1>
        <h3 class="text-2xl md:text-4xl text-slate-700 dark:text-slate-400 mb-6 font-medium">Full-Stack Developer</h3>
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
          Crafting modern, secure, and beautiful digital experiences. Bridging the gap between design and functionality while exploring the frontiers of AI.
        </p>

        <!-- Responsive Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full sm:w-auto"
        >
          <a
            href="/#about"
            class="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
          >
            Explore My World
          </a>
          <a
            href="/#work"
            class="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-700 dark:text-slate-300 transition-all duration-200 glass border border-slate-300 dark:border-slate-700 rounded-xl hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>
      </div>

      <!-- Profile Picture / Visual -->
      <div class="flex-shrink-0 animate-in slide-in-from-right-8 duration-1000 fade-in flex-1 flex justify-center lg:justify-end">
        <div class="relative w-72 h-72 md:w-96 md:h-96 group">
          <!-- Decorative rings -->
          <div class="absolute inset-0 rounded-full border border-blue-500/30 scale-[1.15] animate-spin-slow" style="animation-duration: 20s;"></div>
          <div class="absolute inset-0 rounded-full border border-teal-500/20 scale-[1.3] animate-spin-slow" style="animation-duration: 30s; animation-direction: reverse;"></div>
          
          <!-- Image Container -->
          <div class="absolute inset-0 rounded-full p-2 glass-card overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <img
              src="/assets/img/profile-pic.png"
              alt="Ubaidah Profile Picture"
              class="w-full h-full rounded-full object-cover relative z-10"
              onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'"
            />
            <!-- Inner gradient overlay -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent z-20 mix-blend-overlay"></div>
          </div>
          
          <!-- Floating UI Elements -->
          <div class="absolute -top-6 -right-6 glass px-4 py-2 rounded-xl border border-white/10 dark:border-white/10 border-slate-200 animate-float shadow-xl backdrop-blur-md z-30">
            <span class="text-xl">✨</span>
          </div>
          <div class="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-white/10 dark:border-white/10 border-slate-200 animate-float shadow-xl backdrop-blur-md z-30" style="animation-delay: 1.5s;">
            <span class="text-xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg) scale(var(--tw-scale-x)); }
  to { transform: rotate(360deg) scale(var(--tw-scale-x)); }
}
</style>

<template>
  <section id="experience" class="py-24 relative z-10">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Experience</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      <!-- Timeline -->
      <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
        
        <!-- Experience 1 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <!-- Icon -->
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-blue-500 dark:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Briefcase class="w-5 h-5" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group-hover:border-blue-500/30">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 class="font-bold text-xl text-slate-900 dark:text-white">Jr Software Engineer</h3>
              <time class="text-sm font-medium text-blue-500 dark:text-blue-400">Sep 2025 - Present</time>
            </div>
            <div class="text-slate-600 dark:text-slate-300 font-medium mb-4">SIM IT SDN BHD</div>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              Working on maintaining and improving the <a href="https://simtrainsystem.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">SimTrainSystem</a> product, which includes both web-based and mobile applications.
            </p>
          </div>
        </div>

        <!-- Experience 2 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <!-- Icon -->
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-teal-500 dark:text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <GraduationCap class="w-5 h-5" />
          </div>
          <!-- Card -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group-hover:border-teal-500/30">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 class="font-bold text-xl text-slate-900 dark:text-white">Developer Intern</h3>
              <time class="text-sm font-medium text-teal-600 dark:text-teal-400">Feb - Aug 2025</time>
            </div>
            <div class="text-slate-600 dark:text-slate-300 font-medium mb-2">ARAKEN SDN BHD</div>
            <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">Marang Digital App</div>
            <ul class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm space-y-2 list-disc list-inside">
              <li>Contributed to a web-based management system for a parking application, built modules such as compound management and reporting using Vue.js & Node.js (RESTful APIs).</li>
              <li>Implemented database queries via Prisma ORM (MySQL) to support reporting.</li>
              <li>Enhanced UI per client requests, improving usability for management tasks.</li>
              <li>Deployed updates and hotfixes using PM2 on Linux servers; tracked and resolved L2 support tickets via ClickUp software.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Briefcase, GraduationCap } from 'lucide-vue-next'
</script>

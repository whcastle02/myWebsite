<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden pt-20">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
    </div>

    <div class="flex flex-col lg:flex-row items-center justify-center z-10 px-6 max-w-6xl mx-auto gap-12">
      <!-- Profile Picture -->
      <div class="flex-shrink-0 animate-fade-in">
        <div class="relative">
          <img
            src="/assets/img/profile-pic.png"
            alt="Ubaidah Profile Picture"
            class="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
          />
          <div class="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
        </div>
      </div>

      <!-- Text Content -->
      <div class="text-center lg:text-left animate-fade-in">
        <h2 class="text-xl md:text-2xl text-blue-300 mb-4 font-light">Hi there! I'm</h2>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
          Ubaidah
        </h1>
        <h3 class="text-2xl md:text-3xl text-gray-300 mb-6">Developer Intern</h3>
        <p class="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Just do vibe coding with Security I guess 😏😏, ongoing to full-stack developer
          <br />
          Now Chat-GPT is my partner and love Outdoor activity
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#about"
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#work"
            class="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            My work
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

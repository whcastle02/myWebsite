<template>
  <div class="py-32 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
    <div class="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">My Space</h1>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full mb-8"></div>
      <p class="text-lg text-slate-600 dark:text-slate-300">
        A collection of my technical learnings and personal life adventures.
      </p>
    </div>

    <!-- Tabs/Sections Toggle -->
    <div class="flex justify-center mb-12 animate-in slide-in-from-bottom-4 duration-700 fade-in">
      <div class="glass p-1.5 rounded-2xl flex relative overflow-hidden bg-white/50 dark:bg-slate-900/50">
        <!-- Active Pill Background -->
        <div 
          class="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl transition-all duration-300 ease-out shadow-md"
          :class="activeTab === 'knowledge' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'"
        ></div>

        <button 
          @click="activeTab = 'knowledge'"
          :class="['px-8 py-3 rounded-xl font-bold transition-colors duration-300 z-10 w-48', activeTab === 'knowledge' ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white']"
        >
          Knowledge Base
        </button>
        <button 
          @click="activeTab = 'life'"
          :class="['px-8 py-3 rounded-xl font-bold transition-colors duration-300 z-10 w-48', activeTab === 'life' ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white']"
        >
          Life & Diary
        </button>
      </div>
    </div>

    <!-- Knowledge Section -->
    <div v-show="activeTab === 'knowledge'" class="animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div class="grid gap-8">
        <NuxtLink 
          v-for="article in knowledgePosts" 
          :key="article._path" 
          :to="article._path"
          class="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/30 block"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ article.title }}
            </h2>
            <span v-if="article.date" class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 md:mt-0 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              {{ new Date(article.date).toLocaleDateString() }}
            </span>
          </div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {{ article.description }}
          </p>
          <div class="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-2 transition-all">
            Read Article <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </NuxtLink>
        <div v-if="!knowledgePosts?.length" class="text-center text-slate-500 py-12 glass rounded-2xl">
          No knowledge posts yet.
        </div>
      </div>
    </div>

    <!-- Life Section -->
    <div v-show="activeTab === 'life'" class="animate-in fade-in duration-500">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink 
          v-for="post in lifePosts" 
          :key="post._path" 
          :to="post._path"
          class="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-slate-200 dark:border-white/5 flex flex-col"
        >
          <div class="h-64 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img 
              :src="post.image || 'https://images.unsplash.com/photo-1506744012022-71da23552dd5?q=80&w=800&auto=format&fit=crop'" 
              :alt="post.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-4 left-6 right-6">
              <span v-if="post.date" class="text-xs font-bold text-white/80 uppercase tracking-wider mb-2 block">
                {{ new Date(post.date).toLocaleDateString() }}
              </span>
              <h2 class="text-2xl font-bold text-white leading-tight">
                {{ post.title }}
              </h2>
            </div>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between bg-white/50 dark:bg-transparent">
            <p class="text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 leading-relaxed">
              {{ post.description }}
            </p>
            <div class="text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:gap-2 flex items-center transition-all">
              View Diary <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </NuxtLink>
        <div v-if="!lifePosts?.length" class="text-center text-slate-500 py-12 col-span-full glass rounded-2xl">
          No diary posts yet.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('knowledge')

const { data: knowledgePosts } = await useAsyncData('knowledge-posts', () => 
  queryContent('/blog')
    .where({ type: 'knowledge' })
    .sort({ date: -1 })
    .find()
)

const { data: lifePosts } = await useAsyncData('life-posts', () => 
  queryContent('/blog')
    .where({ type: 'life' })
    .sort({ date: -1 })
    .find()
)
</script>

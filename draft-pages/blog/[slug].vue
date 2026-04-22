<template>
  <ContentDoc v-slot="{ doc }">
    <div :class="doc.type === 'life' ? 'max-w-5xl' : 'max-w-3xl'" class="py-32 px-6 mx-auto min-h-screen relative z-10">
      
      <div class="mb-12">
        <NuxtLink to="/blog" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-8 transition-colors group bg-white/50 dark:bg-slate-900/50 px-4 py-2 rounded-full glass border border-slate-200 dark:border-slate-800">
          <span class="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Space
        </NuxtLink>
        
        <!-- Life Type Layout -->
        <article v-if="doc.type === 'life'" class="glass-card rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl">
          <div class="w-full h-[400px] md:h-[600px] relative">
            <img 
              :src="doc.image || 'https://images.unsplash.com/photo-1506744012022-71da23552dd5?q=80&w=1600&auto=format&fit=crop'" 
              class="w-full h-full object-cover" 
              alt="Cover Image" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-center animate-in slide-in-from-bottom-8 duration-1000">
              <h1 class="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight tracking-tight">
                {{ doc.title }}
              </h1>
              <div v-if="doc.date" class="text-white/90 font-bold text-lg flex items-center justify-center gap-2 tracking-wider uppercase">
                <span>📍</span> {{ new Date(doc.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
              </div>
            </div>
          </div>
          
          <div class="p-8 md:p-16 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
            <div class="prose prose-lg md:prose-xl dark:prose-invert max-w-4xl mx-auto prose-img:rounded-3xl prose-img:shadow-2xl prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-headings:font-bold prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-300">
              <ContentRenderer :value="doc" />
            </div>
          </div>
        </article>

        <!-- Knowledge Type Layout -->
        <article v-else class="glass-card p-8 md:p-16 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl">
          <header class="mb-12 text-center animate-in slide-in-from-top-8 duration-700">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 mb-8 bg-blue-50/80 dark:bg-transparent">
              <span class="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">Knowledge Share</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              {{ doc.title }}
            </h1>
            <div v-if="doc.date" class="text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800/50 w-max mx-auto px-4 py-1.5 rounded-full">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              Published on {{ new Date(doc.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </div>
            <div class="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mt-12"></div>
          </header>
          
          <div class="prose prose-lg dark:prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700/50 prose-pre:shadow-2xl prose-pre:rounded-2xl prose-img:rounded-2xl prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-li:text-slate-700 dark:prose-li:text-slate-300">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </div>

    </div>
  </ContentDoc>
</template>

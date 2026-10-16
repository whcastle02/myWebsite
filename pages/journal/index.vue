<script setup>
import { ArrowUpRight, NotebookPen } from "lucide-vue-next";
usePortfolioSeo({
  title: "Journal — notes and stories",
  description:
    "Notes on technology, work, life, and adventures from Ubaidah Nazri.",
});
const { data: posts } = await useAsyncData("journal-index", () =>
  queryContent("/journal")
    .where({ status: "published" })
    .sort({ date: -1 })
    .find(),
);
</script>
<template>
  <div class="container journal-page">
    <header class="page-heading">
      <p class="eyebrow">THE NOTEBOOK</p>
      <h1>Notes and stories<span class="red-dot">.</span></h1>
      <p>
        What I build, learn, and experience along the way.<br />Technology,
        work, life, and a little adventure.
      </p>
    </header>
    <div v-if="posts?.length" class="journal-index-list">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="clay peach journal-feature"
        ><div class="journal-feature-icon" aria-hidden="true">
          <NotebookPen :size="64" :stroke-width="1" />
        </div>
        <div>
          <span class="eyebrow">{{ post.category }}</span>
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <div class="journal-card-bottom">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time
            ><span>Read story <ArrowUpRight :size="18" /></span>
          </div></div
      ></NuxtLink>
    </div>
    <div v-else class="empty-state">
      <NotebookPen :size="36" />
      <h2>The notebook is open.</h2>
      <p>
        No published entries yet. Notes will appear here when they’re ready.
      </p>
    </div>
    <p class="journal-endnote">
      A small collection for now. Room for more stories, one at a time.
    </p>
    <ContactStrip />
  </div>
</template>

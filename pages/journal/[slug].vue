<script setup>
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
const route = useRoute();
const { data: post } = await useAsyncData("journal-" + route.params.slug, () =>
  queryContent("/journal/" + route.params.slug)
    .where({ status: "published" })
    .findOne(),
);
if (!post.value)
  throw createError({
    statusCode: 404,
    statusMessage: "This story is not available",
  });
usePortfolioSeo({
  title: () => post.value.title,
  description: () => post.value.description,
  ogType: "article",
});
const minutes = computed(() => {
  const text = (node) =>
    node.type === "text"
      ? node.value
      : (node.children || []).map(text).join(" ");
  const words = text(post.value?.body || {})
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
});
</script>
<template>
  <article v-if="post" class="container article-page">
    <NuxtLink to="/journal" class="back-link"
      ><ArrowLeft :size="17" /> Back to Journal</NuxtLink
    >
    <header class="article-header clay lilac">
      <p class="eyebrow">{{ post.category }} / JOURNAL</p>
      <h1>{{ post.title }}</h1>
      <p class="lead">{{ post.description }}</p>
      <div class="article-meta">
        <span>Ubaidah Nazri</span><span aria-hidden="true">·</span
        ><time :datetime="post.date">{{ formatDate(post.date) }}</time
        ><span aria-hidden="true">·</span><span>{{ minutes }} min read</span>
      </div>
    </header>
    <div class="article-content">
      <ContentRenderer :value="post" />
      <div class="article-end">
        <p>Thanks for reading.</p>
        <NuxtLink class="text-link" to="/journal"
          >Back to the notebook <ArrowRight :size="17" /></NuxtLink
        ><NuxtLink class="text-link" to="/work"
          >Explore my work <ArrowRight :size="17"
        /></NuxtLink>
      </div>
    </div>
  </article>
</template>

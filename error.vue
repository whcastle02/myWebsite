<script setup>
import { ArrowRight } from "lucide-vue-next";
const props = defineProps({ error: Object });
useHead({
  title: "Page unavailable | Ubaidah Nazri",
  meta: [{ name: "robots", content: "noindex" }],
});
</script>
<template>
  <NuxtLayout
    ><div class="container error-page">
      <p class="eyebrow">{{ error?.statusCode || "ERROR" }} / A SMALL DETOUR</p>
      <h1>
        {{
          error?.statusCode === 404
            ? "Nothing here. Yet."
            : "Something went off track."
        }}
      </h1>
      <p>
        {{
          error?.statusCode === 404
            ? "This page may have moved, or the story isn’t published yet."
            : "Please try again in a moment."
        }}
      </p>
      <div class="button-row">
        <a href="/work" class="button button-primary"
          >Explore the work <ArrowRight :size="17" /></a
        ><a href="/journal" class="button">Visit Journal</a>
      </div>
    </div></NuxtLayout
  >
</template>

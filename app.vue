<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const origin = config.public.siteUrl || useRequestURL().origin;
useSeoMeta({
  ogSiteName: "Ubaidah Nazri",
  ogType: "website",
  ogImage: () => new URL("/og_banner.png", origin).href,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Ubaidah Nazri — software engineer in Malaysia",
  twitterCard: "summary_large_image",
});
useHead(() => ({
  link: [{ rel: "canonical", href: new URL(route.path, origin).href }],
}));
</script>
<template>
  <NuxtLayout><NuxtPage /></NuxtLayout>
</template>

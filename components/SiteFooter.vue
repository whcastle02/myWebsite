<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import { profile, navigation } from "~/data/portfolio";
const { openPreferences } = usePrivacyPreferences();
</script>
<template>
  <footer class="site-footer container">
    <div class="footer-main">
      <div>
        <NuxtLink to="/" class="footer-name"
          >Ubaidah Nazri<span>.</span></NuxtLink
        >
        <p>Malaysia <span class="separator">/</span> MYT UTC+8</p>
      </div>
      <nav aria-label="Footer navigation">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{
          item.label
        }}</NuxtLink
        ><a :href="profile.resume" target="_blank" rel="noopener noreferrer"
          >Resume <span class="sr-only">(opens in a new tab)</span></a
        >
      </nav>
      <div class="footer-social">
        <a :href="profile.github" target="_blank" rel="noopener noreferrer"
          >GitHub <ArrowUpRight :size="13" /></a
        ><a :href="profile.linkedin" target="_blank" rel="noopener noreferrer"
          >LinkedIn <ArrowUpRight :size="13"
        /></a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} Ubaidah Nazri</span>
      <div class="footer-privacy">
        <NuxtLink to="/privacy"
          >Privacy / <span lang="ms">Privasi</span></NuxtLink
        >
        <button type="button" @click="openPreferences">
          Privacy choices / <span lang="ms">Pilihan privasi</span>
        </button>
      </div>
      <span>Built with Nuxt. Made to keep growing.</span>
    </div>
  </footer>
</template>

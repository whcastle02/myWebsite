<script setup>
import { ArrowUpRight, Menu, X } from "lucide-vue-next";
import { profile, navigation } from "~/data/portfolio";
const open = ref(false);
const menuButton = ref(null);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
function closeMenu() {
  open.value = false;
  menuButton.value?.focus();
}
</script>
<template>
  <header class="header-wrap container">
    <div class="site-header" @keydown.esc="closeMenu">
      <NuxtLink to="/" class="brand" aria-label="Ubaidah Nazri, home"
        >UN<span class="brand-dot">.</span></NuxtLink
      >
      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{
          item.label
        }}</NuxtLink>
      </nav>
      <a
        :href="profile.resume"
        class="button button-small resume-link"
        target="_blank"
        rel="noopener noreferrer"
        >Resume <ArrowUpRight :size="15" /><span class="sr-only">
          (opens in a new tab)</span
        ></a
      >
      <button
        ref="menuButton"
        class="menu-button"
        :aria-expanded="open"
        aria-controls="mobile-navigation"
        @click="open = !open"
      >
        <component :is="open ? X : Menu" :size="20" />
        {{ open ? "Close" : "Menu" }}
      </button>
      <Transition name="menu">
        <nav
          v-if="open"
          id="mobile-navigation"
          class="mobile-nav"
          aria-label="Mobile navigation"
        >
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to"
            >{{ item.label }} <ArrowUpRight :size="17"
          /></NuxtLink>
          <a :href="profile.resume" target="_blank" rel="noopener noreferrer"
            >Resume <ArrowUpRight :size="17" /><span class="sr-only">
              (opens in a new tab)</span
            ></a
          >
        </nav>
      </Transition>
    </div>
  </header>
</template>

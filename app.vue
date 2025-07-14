<template>
  <NuxtPage />
</template>

<script setup>
import Header from '~/components/Header.vue'
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI({
    adapter: "vue"
  });
}
</script>

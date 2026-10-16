<script setup>
import { ArrowUpRight, Copy, Check } from "lucide-vue-next";
import { profile } from "~/data/portfolio";
const status = ref("");
const copied = ref(false);
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    status.value = "Email copied to clipboard.";
  } catch {
    copied.value = false;
    status.value =
      "Copy is unavailable. Select the email address below to copy it.";
  }
}
</script>
<template>
  <div class="email-actions">
    <div class="button-row">
      <a class="button button-primary" :href="'mailto:' + profile.email"
        >Email Ubaidah <ArrowUpRight :size="17" /></a
      ><button class="button" @click="copyEmail">
        <component :is="copied ? Check : Copy" :size="16" />{{
          copied ? "Copied!" : "Copy email"
        }}
      </button>
    </div>
    <a class="email-address" :href="'mailto:' + profile.email">{{
      profile.email
    }}</a>
    <p class="copy-status" role="status">{{ status }}</p>
  </div>
</template>

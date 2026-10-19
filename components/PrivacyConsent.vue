<script setup>
import { X } from "lucide-vue-next";
const {
  bannerOpen,
  browserOptOut,
  storageWarning,
  message,
  closePreferences,
  setAnalyticsChoice,
} = usePrivacyPreferences();
</script>

<template>
  <Transition name="privacy-banner">
    <section
      v-if="bannerOpen"
      class="privacy-banner"
      aria-labelledby="privacy-choice-title"
      data-privacy-banner
      @keydown.esc="closePreferences"
    >
      <button
        class="privacy-close"
        type="button"
        aria-label="Close privacy choices / Tutup pilihan privasi"
        @click="closePreferences"
      >
        <X :size="19" />
      </button>
      <p class="eyebrow">YOUR CHOICE / PILIHAN ANDA</p>
      <h2 id="privacy-choice-title" tabindex="-1">Your privacy choices</h2>
      <p>
        Optional analytics helps me understand visits. It stays off until you
        allow it. The site works if you reject. Hosting still handles basic site
        requests.
      </p>
      <p lang="ms">
        Analitik pilihan membantu saya memahami lawatan. Ia dimatikan sehingga
        anda membenarkannya. Laman masih berfungsi jika anda menolak. Pengehosan
        masih mengendalikan permintaan asas laman.
      </p>
      <div class="privacy-notice-links">
        <NuxtLink to="/privacy#english" @click="closePreferences"
          >Read privacy notice</NuxtLink
        ><NuxtLink
          to="/privacy#bahasa-melayu"
          lang="ms"
          @click="closePreferences"
          >Baca notis privasi</NuxtLink
        >
      </div>
      <p v-if="browserOptOut" class="privacy-warning">
        Your browser requests no tracking. Analytics remains off.
        <span lang="ms"
          >Pelayar anda meminta tiada penjejakan. Analitik kekal
          dimatikan.</span
        >
      </p>
      <p v-if="storageWarning" class="privacy-warning" role="alert">
        Your browser could not save your choice. It applies to this visit only.
        <span lang="ms"
          >Pelayar tidak dapat menyimpan pilihan. Pilihan hanya terpakai untuk
          lawatan ini.</span
        >
      </p>
      <div class="privacy-choice-buttons">
        <button
          class="button"
          type="button"
          @click="setAnalyticsChoice('denied')"
        >
          Reject analytics <span lang="ms">Tolak analitik</span>
        </button>
        <button
          class="button"
          type="button"
          :disabled="browserOptOut"
          @click="setAnalyticsChoice('allowed')"
        >
          Allow analytics <span lang="ms">Benarkan analitik</span>
        </button>
      </div>
      <p v-if="message" class="privacy-feedback" role="status">{{ message }}</p>
    </section>
  </Transition>
  <p class="sr-only" role="status">{{ message }}</p>
</template>

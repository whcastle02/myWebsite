<script setup>
const {
  choice,
  ready,
  analyticsAllowed,
  browserOptOut,
  storageWarning,
  message,
  setAnalyticsChoice,
} = usePrivacyPreferences();
</script>

<template>
  <section
    id="privacy-settings"
    class="privacy-settings clay lilac"
    aria-labelledby="privacy-settings-title"
  >
    <p class="eyebrow">YOU ARE IN CONTROL / ANDA MENGAWAL PILIHAN</p>
    <h2 id="privacy-settings-title">
      Analytics preferences <span lang="ms">/ Pilihan analitik</span>
    </h2>
    <p>
      You can use the site either way and change your choice at any time.
      Turning analytics off may refresh this page.
    </p>
    <p lang="ms">
      Laman boleh digunakan dengan kedua-dua pilihan dan pilihan boleh diubah
      pada bila-bila masa. Mematikan analitik mungkin memuat semula halaman ini.
    </p>
    <ClientOnly>
      <div v-if="ready" class="privacy-settings-controls">
        <p class="privacy-current" role="status">
          Optional analytics:
          <strong>{{
            analyticsAllowed ? "Allowed / Dibenarkan" : "Off / Dimatikan"
          }}</strong
          ><span v-if="choice === 'unset'">
            — no choice saved / tiada pilihan disimpan</span
          >
        </p>
        <p v-if="browserOptOut" class="privacy-warning">
          Your browser’s privacy signal keeps analytics off.
          <span lang="ms"
            >Isyarat privasi pelayar anda mengekalkan analitik dalam keadaan
            dimatikan.</span
          >
        </p>
        <p v-if="storageWarning" class="privacy-warning" role="alert">
          Preference storage is unavailable; your choice only lasts for this
          visit.
          <span lang="ms"
            >Pilihan tidak dapat disimpan dan hanya terpakai untuk lawatan
            ini.</span
          >
        </p>
        <div class="privacy-choice-buttons">
          <button
            class="button"
            type="button"
            @click="setAnalyticsChoice('denied')"
          >
            Disable analytics <span lang="ms">Matikan analitik</span>
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
        <p class="privacy-feedback" role="status">{{ message }}</p>
      </div>
      <template #fallback
        ><p>
          Optional analytics is not active without JavaScript. /
          <span lang="ms">Analitik pilihan tidak aktif tanpa JavaScript.</span>
        </p></template
      >
    </ClientOnly>
  </section>
</template>

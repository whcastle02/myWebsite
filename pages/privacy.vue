<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import { profile } from "~/data/portfolio";
import { privacyNotices } from "~/data/privacy";
usePortfolioSeo({
  title: "Privacy notice & choices",
  description:
    "English and Bahasa Melayu privacy notice: hosting, optional analytics, email enquiries and your choices.",
});
</script>
<template>
  <div class="container privacy-page">
    <header class="page-heading">
      <p class="eyebrow">YOUR PRIVACY / PRIVASI ANDA</p>
      <h1>Privacy, explained<span class="red-dot">.</span></h1>
      <p>What this portfolio receives and the choices you have.</p>
      <p lang="ms">
        Maklumat yang diterima oleh portfolio ini dan pilihan anda.
      </p>
      <nav class="privacy-language-links" aria-label="Privacy notice languages">
        <a href="#english" lang="en">English ↓</a
        ><a href="#bahasa-melayu" lang="ms">Bahasa Melayu ↓</a>
      </nav>
    </header>
    <PrivacySettings />
    <div class="privacy-reading">
      <section
        v-for="notice in privacyNotices"
        :id="notice.id"
        :key="notice.id"
        :lang="notice.lang"
        :aria-labelledby="notice.id + '-title'"
        class="privacy-notice"
      >
        <header>
          <p class="eyebrow">{{ notice.language }}</p>
          <h2 :id="notice.id + '-title'">{{ notice.title }}</h2>
          <p class="privacy-updated">{{ notice.updated }} · Ubaidah Nazri</p>
          <a class="text-link" :href="'mailto:' + profile.email"
            >{{ profile.email }} <ArrowUpRight :size="15"
          /></a>
        </header>
        <section
          v-for="(section, index) in notice.sections"
          :key="section.title"
          class="privacy-notice-section"
        >
          <h3>{{ section.title }}</h3>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </section>
      </section>
      <section class="privacy-sources" aria-labelledby="privacy-sources-title">
        <h2 id="privacy-sources-title">
          Further information<br /><span lang="ms">Maklumat lanjut</span>
        </h2>
        <div class="product-links">
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            >Vercel Web Analytics <ArrowUpRight :size="15" /></a
          ><a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            >Vercel Privacy Policy <ArrowUpRight :size="15" /></a
          ><a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            >Google Privacy Policy <ArrowUpRight :size="15" /></a
          ><a
            href="https://www.pdp.gov.my/"
            target="_blank"
            rel="noopener noreferrer"
            >Malaysia · JPDP <ArrowUpRight :size="15"
          /></a>
        </div>
      </section>
    </div>
  </div>
</template>

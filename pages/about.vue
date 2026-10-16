<script setup>
import {
  ArrowUpRight,
  Mountain,
  Bike,
  Tent,
  CookingPot,
} from "lucide-vue-next";
usePortfolioSeo({
  title: "About me",
  description:
    "Meet Ubaidah Nazri, a junior software engineer at SIM IT in Malaysia, working on web and mobile applications.",
});
const interests = [
  { label: "Hiking", icon: Mountain, tint: "lilac" },
  { label: "Biking", icon: Bike, tint: "blue" },
  { label: "Camping", icon: Tent, tint: "mint" },
  { label: "Cooking", icon: CookingPot, tint: "peach" },
];
</script>
<template>
  <div class="container">
    <section class="about-hero">
      <div>
        <p class="eyebrow">THE PERSON BEHIND THE WORK</p>
        <h1>A little about me<span class="red-dot">.</span></h1>
        <p class="lead">
          I’m Ubaidah, a software engineer building web and mobile applications.
        </p>
        <p>
          Currently a Junior Software Engineer at SIM IT SDN BHD, I work on
          maintaining and improving SimTrainSystem across web and mobile.
        </p>
        <p>
          My background is in Information Security and Assurance. I’m interested
          in how useful interfaces, reliable systems, and thoughtful
          implementation come together.
        </p>
        <NuxtLink to="/work" class="text-link"
          >Explore my work <ArrowUpRight :size="17"
        /></NuxtLink>
      </div>
      <PortraitStage />
    </section>
    <section id="experience" class="content-section">
      <p class="eyebrow">THE JOURNEY SO FAR</p>
      <h2>Learning through the work.</h2>
      <div class="timeline">
        <article>
          <div class="timeline-date">
            <span class="small-pill">Now</span>
            <p>Sep 2025 — present</p>
          </div>
          <div>
            <h3>Junior Software Engineer</h3>
            <p class="company">SIM IT SDN BHD</p>
            <p>
              Maintaining and improving SimTrainSystem, including web-based and
              mobile applications.
            </p>
            <a
              class="text-link"
              href="https://simtrainsystem.com/"
              target="_blank"
              rel="noopener noreferrer"
              >About the product <ArrowUpRight :size="16"
            /></a>
          </div>
        </article>
        <article>
          <div class="timeline-date">
            <span class="small-pill">Previously</span>
            <p>Feb — Aug 2025</p>
          </div>
          <div>
            <h3>Developer Intern</h3>
            <p class="company">ARAKEN SDN BHD</p>
            <p>
              Contributed to Marang Digital’s web-based management modules and
              reporting using Vue.js, Node.js, Prisma, and MySQL.
            </p>
            <p>
              Supported client-requested UI changes, deployments and hotfixes
              with PM2 on Linux, and L2 support tickets in ClickUp.
            </p>
            <NuxtLink class="text-link" to="/work/marang-digital"
              >Explore my contribution <ArrowUpRight :size="16"
            /></NuxtLink>
          </div>
        </article>
        <article>
          <div class="timeline-date">
            <span class="small-pill">Education</span>
          </div>
          <div>
            <h3>B.Com.Sc. (Hons)</h3>
            <p class="company">Universiti Sains Islam Malaysia (USIM)</p>
            <p>Information Security and Assurance</p>
          </div>
        </article>
      </div>
    </section>
    <section class="content-section">
      <p class="eyebrow">A LITTLE BEYOND CODE</p>
      <h2>There’s life away from the screen.</h2>
      <p class="section-intro">
        I enjoy getting outside for hiking, biking, or camping, and cooking
        something delicious at home.
      </p>
      <div class="interests-grid">
        <div
          v-for="item in interests"
          :key="item.label"
          :class="['clay', 'interest-card', item.tint]"
        >
          <component :is="item.icon" :size="30" :stroke-width="1.5" />
          <h3>{{ item.label }}</h3>
        </div>
      </div>
    </section>
    <ContactStrip />
  </div>
</template>

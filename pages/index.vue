<script setup>
import {
  ArrowRight,
  ArrowUpRight,
  Mountain,
  Code2,
  Layers,
  GitBranch,
} from "lucide-vue-next";
import { profile } from "~/data/portfolio";
usePortfolioSeo({
  title: "Software engineer in Malaysia",
  description:
    "Ubaidah Nazri builds web and mobile applications. Explore contributions to Marang Digital, notes on development, and the person behind the work.",
});
const { data: posts } = await useAsyncData("home-journal", () =>
  queryContent("/journal")
    .where({ status: "published" })
    .sort({ date: -1 })
    .limit(3)
    .find(),
);
const steps = [
  {
    number: "01",
    title: "The context",
    text: "Web-based management tools for a parking application, built as part of a team.",
    icon: Code2,
    tint: "blue",
  },
  {
    number: "02",
    title: "My contribution",
    text: "Compound management, reporting queries, UI changes and deployment support.",
    icon: Layers,
    tint: "mint",
  },
  {
    number: "03",
    title: "A closer look",
    text: "Explore the tools behind the work and a small reporting example with synthetic data.",
    icon: GitBranch,
    tint: "lilac",
  },
];
</script>
<template>
  <div class="container">
    <section class="hero" aria-labelledby="hero-title">
      <PortraitStage />
      <div class="hero-copy">
        <p class="eyebrow">
          <span class="inline-dot" aria-hidden="true"></span> SOFTWARE ENGINEER
          / MALAYSIA
        </p>
        <h1 id="hero-title">Ubaidah Nazri<span class="red-dot">.</span></h1>
        <h2>
          Building web and<br class="desktop-break" />
          mobile applications.
        </h2>
        <p class="hero-description">
          Currently working on
          <a
            href="https://simtrainsystem.com/"
            target="_blank"
            rel="noopener noreferrer"
            >SimTrainSystem</a
          >
          at SIM IT.<br class="desktop-break" />
          Explore my contributions, the things I’m learning,<br
            class="desktop-break"
          />
          and a little of life beyond the screen.
        </p>
        <div class="button-row">
          <NuxtLink to="/work" class="button button-primary"
            >View selected work <ArrowUpRight :size="18" /></NuxtLink
          ><a
            :href="profile.resume"
            target="_blank"
            rel="noopener noreferrer"
            class="button"
            >Resume <ArrowUpRight :size="17" /><span class="sr-only">
              (opens in a new tab)</span
            ></a
          >
        </div>
      </div>
    </section>
    <section class="home-section" aria-labelledby="selected-work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">A LITTLE OF WHAT I DO</p>
          <h2 id="selected-work-title">Selected work</h2>
        </div>
        <NuxtLink class="text-link" to="/work"
          >View all work <ArrowRight :size="17"
        /></NuxtLink>
      </div>
      <ProjectCard />
      <p class="section-note">
        One contribution, a closer look. More personal builds will join when
        there’s something useful to share.
      </p>
    </section>
    <section class="home-section" aria-labelledby="behind-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">MORE THAN THE FINISHED SCREEN</p>
          <h2 id="behind-title">Behind the interface</h2>
        </div>
      </div>
      <p class="section-intro">
        A project makes more sense when you can see the context and the part I
        played.
      </p>
      <div class="three-grid">
        <NuxtLink
          v-for="step in steps"
          :key="step.number"
          to="/work/marang-digital"
          :class="['clay', 'approach-card', step.tint]"
          ><div class="approach-top">
            <span>{{ step.number }}</span
            ><component :is="step.icon" :size="22" />
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <ArrowUpRight class="card-arrow" :size="18"
        /></NuxtLink>
      </div>
    </section>
    <section class="home-section" aria-labelledby="journal-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">LEARNING OUT LOUD</p>
          <h2 id="journal-title">Notes and stories</h2>
        </div>
        <NuxtLink class="text-link" to="/journal"
          >Visit Journal <ArrowRight :size="17"
        /></NuxtLink>
      </div>
      <p class="section-intro">
        Technology, work, life, and the occasional adventure. A small space to
        write things down.
      </p>
      <div v-if="posts?.length" class="journal-preview-grid">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          class="clay peach journal-card"
          ><span class="eyebrow">{{ post.category }}</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <div class="journal-card-bottom">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time
            ><ArrowUpRight :size="20" /></div
        ></NuxtLink>
        <div class="journal-aside">
          <span class="journal-mark" aria-hidden="true">“</span>
          <p>
            A place for what I build,<br />
            learn, and notice along the way.
          </p>
          <NuxtLink class="text-link" to="/journal"
            >Take a look inside <ArrowRight :size="17"
          /></NuxtLink>
        </div>
      </div>
      <p v-else class="empty-state">
        The notebook is open. New entries will appear here when they’re ready.
      </p>
    </section>
    <section class="beyond-strip clay">
      <div class="nature-icon" aria-hidden="true">
        <Mountain :size="38" :stroke-width="1.4" />
      </div>
      <div>
        <p class="eyebrow">AWAY FROM THE KEYBOARD</p>
        <h2>A little beyond code</h2>
        <p>
          Hiking, biking, camping, and cooking.<br />A few of the things that
          fill the rest of my days.
        </p>
      </div>
      <NuxtLink class="text-link" to="/about"
        >More about me <ArrowRight :size="17"
      /></NuxtLink>
    </section>
    <ContactStrip />
  </div>
</template>

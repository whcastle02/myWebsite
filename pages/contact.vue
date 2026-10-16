<script setup>
import {
  Github,
  Linkedin,
  ArrowUpRight,
  FileText,
  MapPin,
} from "lucide-vue-next";
import { profile } from "~/data/portfolio";
usePortfolioSeo({
  title: "Let’s connect",
  description:
    "Contact Ubaidah Nazri for a role, a project, or a conversation about software development. Based in Malaysia, UTC+8.",
});
</script>
<template>
  <div class="container contact-page">
    <header class="page-heading">
      <p class="eyebrow">A CONVERSATION STARTS HERE</p>
      <h1>Let’s connect<span class="red-dot">.</span></h1>
      <p>
        For a role, a project, or a conversation about the work.<br />Say hello
        — I’d love to hear what you have in mind.
      </p>
    </header>
    <div class="contact-grid">
      <section class="clay lilac contact-card">
        <div class="contact-icon" aria-hidden="true"><span>↗</span></div>
        <h2>Good things start<br />with a hello.</h2>
        <EmailActions />
        <p class="location-line">
          <MapPin :size="17" /> Malaysia <span>/</span> MYT UTC+8
        </p>
      </section>
      <section class="contact-links" aria-labelledby="elsewhere-title">
        <p class="eyebrow" id="elsewhere-title">A FEW OTHER PLACES</p>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer"
          ><Github :size="24" />
          <div>
            <h2>GitHub</h2>
            <p>Code, projects, and experiments</p>
          </div>
          <ArrowUpRight :size="20" /></a
        ><a :href="profile.linkedin" target="_blank" rel="noopener noreferrer"
          ><Linkedin :size="24" />
          <div>
            <h2>LinkedIn</h2>
            <p>My professional profile</p>
          </div>
          <ArrowUpRight :size="20" /></a
        ><a :href="profile.resume" target="_blank" rel="noopener noreferrer"
          ><FileText :size="24" />
          <div>
            <h2>Resume</h2>
            <p>View my resume on Google Drive</p>
          </div>
          <ArrowUpRight :size="20"
        /></a>
      </section>
    </div>
  </div>
</template>

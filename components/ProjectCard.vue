<script setup>
import {
  ArrowUpRight,
  LayoutDashboard,
  BarChart3,
  Check,
} from "lucide-vue-next";
import { marang } from "~/data/portfolio";
</script>
<template>
  <article class="project-card clay blue">
    <div class="project-card-copy">
      <div class="label-row">
        <span class="eyebrow">TEAM CONTRIBUTION</span
        ><span class="small-pill">2025</span>
      </div>
      <h3><NuxtLink to="/work/marang-digital">Marang Digital</NuxtLink></h3>
      <p>{{ marang.summary }}</p>
      <div class="tags">
        <span v-for="tech in marang.technologies" :key="tech">{{ tech }}</span>
      </div>
      <NuxtLink to="/work/marang-digital" class="button button-primary"
        >Explore my contribution <ArrowUpRight :size="17"
      /></NuxtLink>
    </div>
    <div
      class="workspace-preview"
      aria-label="Illustrative management workspace with synthetic example states"
    >
      <div class="preview-top">
        <div class="preview-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <span>ILLUSTRATIVE PREVIEW · SYNTHETIC DATA</span>
      </div>
      <div class="workspace-content">
        <div class="workspace-heading">
          <div class="workspace-icon"><LayoutDashboard :size="21" /></div>
          <div>
            <span class="mini-label">MARANG DIGITAL</span>
            <h4>Management workspace</h4>
          </div>
        </div>
        <div class="workspace-summary">
          <span>Module overview</span><BarChart3 :size="16" />
        </div>
        <div class="workspace-table">
          <div class="workspace-table-head">
            <span>Module</span><span>Example state</span>
          </div>
          <div>
            <span>Reporting</span
            ><span class="demo-state"><Check :size="13" /> Demo view</span>
          </div>
          <div>
            <span>Management</span
            ><span class="demo-state"><Check :size="13" /> Demo view</span>
          </div>
        </div>
        <p class="preview-footnote">
          A simplified illustration, not a production screenshot.
        </p>
      </div>
    </div>
  </article>
</template>

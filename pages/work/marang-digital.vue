<script setup>
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Database,
  Server,
} from "lucide-vue-next";
import { marang } from "~/data/portfolio";
usePortfolioSeo({
  title: "Marang Digital contribution",
  description:
    "My internship contribution to Marang Digital at ARAKEN: compound management, reporting queries, UI updates, deployments, and support.",
});
</script>
<template>
  <div class="container case-page">
    <NuxtLink to="/work" class="back-link"
      ><ArrowLeft :size="17" /> All work</NuxtLink
    >
    <header class="case-header clay blue">
      <div class="label-row">
        <p class="eyebrow">TEAM CONTRIBUTION / INTERNSHIP</p>
        <span class="small-pill">Existing product</span>
      </div>
      <h1>Marang Digital<span class="red-dot">.</span></h1>
      <p class="lead">
        Behind the management side<br />of a parking application.
      </p>
      <p>
        During my internship at ARAKEN, I contributed to web-based management
        modules, including compound management and reporting. My work also
        included database queries, client-requested UI updates, deployments, and
        support.
      </p>
      <dl class="project-facts">
        <div>
          <dt>MY ROLE</dt>
          <dd>Developer Intern</dd>
        </div>
        <div>
          <dt>TEAM</dt>
          <dd>ARAKEN SDN BHD</dd>
        </div>
        <div>
          <dt>WHEN</dt>
          <dd>February – August 2025</dd>
        </div>
      </dl>
    </header>
    <div class="case-layout">
      <aside class="case-nav">
        <p class="eyebrow">IN THIS CONTRIBUTION</p>
        <a href="#context">01 · The context</a
        ><a href="#contribution">02 · My contribution</a
        ><a href="#example">03 · Reporting example</a
        ><a href="#product">04 · Product context</a>
      </aside>
      <div class="case-body">
        <section id="context">
          <p class="eyebrow">01 / THE CONTEXT</p>
          <h2>Supporting the work behind the app.</h2>
          <p>
            Marang Digital is a parking application. Alongside the public app,
            its web-based management system supports tasks such as compound
            management and reporting.
          </p>
          <p>
            I contributed to that management system as a developer intern within
            the ARAKEN team. This page describes my part in a larger product,
            rather than ownership of the whole application.
          </p>
        </section>
        <section id="contribution">
          <p class="eyebrow">02 / MY CONTRIBUTION</p>
          <h2>From the interface to the query.</h2>
          <div class="contribution-list">
            <article>
              <Code2 :size="23" />
              <div>
                <h3>Management modules & UI</h3>
                <p>
                  Contributed to compound management and reporting modules using
                  Vue.js and Node.js REST APIs. Made UI changes in response to
                  client requests.
                </p>
              </div>
            </article>
            <article>
              <Database :size="23" />
              <div>
                <h3>Queries & reporting</h3>
                <p>
                  Implemented database queries with Prisma ORM and MySQL to
                  support reporting within the management system.
                </p>
              </div>
            </article>
            <article>
              <Server :size="23" />
              <div>
                <h3>Deployment & support</h3>
                <p>
                  Deployed updates and hotfixes using PM2 on Linux servers, and
                  tracked and resolved L2 support tickets in ClickUp.
                </p>
              </div>
            </article>
          </div>
          <div class="tags">
            <span
              v-for="tech in [...marang.technologies, 'PM2', 'Linux']"
              :key="tech"
              >{{ tech }}</span
            >
          </div>
        </section>
        <section id="example">
          <p class="eyebrow">03 / A SMALL INTERACTIVE EXAMPLE</p>
          <h2>Explore a reporting flow.</h2>
          <p>
            Try narrowing a set of fictional records by date and status. This
            standalone example illustrates a reporting interaction; it is not
            the production interface or evidence of an exact feature I shipped.
          </p>
          <ReportingDemo />
          <h3 class="subheading">What this example makes visible</h3>
          <p>
            Inputs are applied together, an invalid date range keeps the
            existing results in place, and an empty result offers a clear way to
            reset. These are decisions in this portfolio demo, rather than
            claims about the original product.
          </p>
        </section>
        <section id="product">
          <p class="eyebrow">04 / PRODUCT CONTEXT</p>
          <h2>See the product in the world.</h2>
          <p>
            These public links provide context for Marang Digital. They
            demonstrate the product’s existence, rather than individual
            authorship. Private screens, customer records, and internal code are
            not included here.
          </p>
          <div class="product-links">
            <a :href="marang.website" target="_blank" rel="noopener noreferrer"
              >Official website <ArrowUpRight :size="16" /></a
            ><a :href="marang.android" target="_blank" rel="noopener noreferrer"
              >Google Play <ArrowUpRight :size="16" /></a
            ><a :href="marang.ios" target="_blank" rel="noopener noreferrer"
              >App Store <ArrowUpRight :size="16" /></a
            ><a :href="marang.huawei" target="_blank" rel="noopener noreferrer"
              >AppGallery <ArrowUpRight :size="16"
            /></a>
          </div>
          <div class="evidence-note">
            <h3>A note on outcomes</h3>
            <p>
              This summary draws on my existing experience record. No
              performance metrics, before-and-after results, or production
              verification artifacts are claimed here.
            </p>
          </div>
        </section>
      </div>
    </div>
    <ContactStrip />
  </div>
</template>

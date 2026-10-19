<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabindex="-1"><slot /></main>
    <SiteFooter />
    <ClientOnly><PrivacyConsent /></ClientOnly>
  </div>
</template>

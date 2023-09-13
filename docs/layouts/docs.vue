<script setup lang="ts">
const { navigation, page, surround, globals } = useContent()

console.log('navigation:', navigation.value)
console.log('page:', page.value)
console.log('surround:', surround.value)
console.log('globals:', globals.value)
</script>

<template>
  <div>
    <!-- <AuAlert
      title="⚠️ Library is still under development ⚠️"
      theme="warning"
      :close-btn="false"
    /> -->

    <AppHeader />

    <AuContainer size="xlarge" class="uk-flex uk-position-relative">
      <aside
        class="uk-visible@m uk-overflow-auto uk-padding-small app-sidebar-nav"
      >
        <DocsNavigation />
      </aside>

      <main class="uk-width-expand uk-article uk-docs-article">
        <DocsHero
          :title="page.title"
          :dir="page._dir"
          :description="page.description"
          uk-docs-label="Accordion"
          :uk-docs-url="page.ukDocsUrl"
        />
        <slot />
      </main>

      <aside class="uk-width-auto uk-visible@m">
        <h4>On this page</h4>
        <DocsToc :items="normalizeToc(page.body?.toc?.links)" />
      </aside>
    </AuContainer>
  </div>
</template>

<style lang="scss">
.uk-docs-article {
  overflow-x: auto;
  padding: 20px;
  @media (min-width: 640px) {
    padding: 20px 40px;
  }
  h1,
  h2 {
    font-weight: bold;
  }
  h2 a,
  h3 a {
    color: var(--au-global-color-text) !important;
  }
  /* table {
    @extend .uk-table;
  } */
}
.app-sidebar-nav {
  position: sticky;
  top: 0;
  left: 0;
  min-width: 12.5rem;
  max-height: 100vh;
  // border-right: 1px solid var(--au-global-color-muted);
}
</style>

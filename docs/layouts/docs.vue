<script setup lang="ts">
import { AuContainer } from '#components'

const { app } = useAppConfig()
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

    <AuContainer size="xlarge" class="uk-flex">
      <aside
        class="uk-width-auto uk-visible@m uk-padding-small uk-padding-remove-horizontal uk-position-relative app-docs-sidebar-left"
      >
        <div class="app-docs-sidebar-left-content">
          <DocsNavigation :nav-tree="navigation[0].children" />
        </div>
      </aside>

      <main class="uk-width-expand uk-padding-small uk-docs-article uk-article">
        <DocsHero
          :title="page.title"
          :dir="page._dir"
          :description="page.description"
          uk-docs-label="Accordion"
          :uk-docs-url="page.ukDocsUrl"
        />
        <slot />
      </main>

      <aside
        class="uk-width-auto uk-visible@m uk-padding-small uk-padding-remove-right"
      >
        <h4>On this page</h4>
        <DocsNavigationTree :items="normalizeToc(page.body?.toc?.links)" />
      </aside>
    </AuContainer>
  </div>
</template>

<style lang="scss">
.uk-docs-article {
  h2 a,
  h3 a {
    color: var(--au-global-color-text) !important;
  }
}
.app-docs-sidebar {
  &-left {
    &-content {
      position: sticky;
      top: var(--au-global-spacing-medium);
    }
  }
}
</style>

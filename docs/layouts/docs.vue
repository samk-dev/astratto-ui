<script setup lang="ts">
import { AuContainer } from '#components'

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

const normalizedNavigation = computed(() => {
  const items: any = []

  if (navigation.value?.length) {
    navigation.value.map((el) => {
      items.push({
        label: el.title,
        ...el
      })

      return el
    })
  }

  return items
})

console.log(normalizedNavigation)
</script>

<template>
  <div>
    <header
      class="uk-navbar-container uk-padding-small uk-padding-remove-horizontal"
    >
      <AuContainer size="xlarge">
        <div class="uk-navbar">
          <div class="uk-navbar-left uk-logo uk-text-bold">Astratto UI</div>
          <div class="uk-navbar-right">
            main navigation and other stuff here
          </div>
        </div>
      </AuContainer>
    </header>

    <AuContainer size="xlarge" class="uk-flex">
      <aside class="uk-width-auto uk-visible@m">
        <div>getting started menu here</div>

        <div>
          <NavDocs :navigation-tree="navigation" />
        </div>
      </aside>
      <slot />
    </AuContainer>
  </div>
</template>

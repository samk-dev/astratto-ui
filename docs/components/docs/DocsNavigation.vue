<script setup lang="ts">
import type { PropType } from '#imports'

interface NavItem {
  title: string
  _path: string
}
interface NavTree {
  title: string
  icon: string
  open: boolean
  children: NavItem[]
}
const props = defineProps({
  navTree: {
    type: Array as PropType<NavTree[]>,
    required: true
  }
})
</script>

<template>
  <AuAccordion :items="props.navTree" multiple cls-title="uk-text-bold">
    <template #label="{ item }">
      {{ item.titleAlt ? item.titleAlt : item.title }}
    </template>

    <template #default="{ item }">
      <DocsNavigationTree :items="item.children" />
    </template>
  </AuAccordion>
</template>

<style scoped lang="scss">
.docs-nav,
.docs-subnav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.docs-subnav,
.docs-nav {
  &-item,
  &-link {
    width: 100%;
  }

  &-item {
    line-height: 1;
    padding-left: 1.75rem;

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }

  &-link {
    color: var(--au-global-color-text);

    &:hover {
      color: var(--au-global-color-primary);
    }
  }

  &-link-active {
    color: var(--au-global-color-primary);
  }
}

.docs-subnav {
  &-title {
    display: block;
    font-size: 0.95rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  &-item {
    padding-left: 1rem;
  }
  &-link {
    font-size: 0.9rem;
  }
}
</style>

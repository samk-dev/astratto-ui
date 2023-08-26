<script setup lang="ts">
import type { PropType } from '#imports'
import type { NavItem } from '~/utils'

const props = defineProps({
  items: {
    type: Array as PropType<NavItem[]>,
    required: true
  }
})
</script>

<template>
  <ul class="docs-nav">
    <template v-for="link in props.items" :key="link._path">
      <li
        v-if="!link.children"
        :class="[
          'docs-nav-item',
          link.titleClickable ? 'docs-nav-item-toc' : ''
        ]"
      >
        <NuxtLink
          :to="link._path"
          active-class="uk-active docs-nav-link-active"
          class="docs-nav-link"
        >
          {{ link.title }}
        </NuxtLink>
      </li>

      <li
        v-else-if="link.children && link.children.length"
        :class="[
          'docs-nav-item has-children',
          link.titleClickable ? 'docs-nav-item-toc' : ''
        ]"
      >
        <span
          v-if="!link.titleClickable"
          class="docs-subnav-title uk-text-bold"
        >
          {{ link.title }}
        </span>

        <NuxtLink
          v-else
          :to="link._path"
          class="docs-subnav-title uk-text-bold"
        >
          {{ link.title }}
        </NuxtLink>

        <ul class="docs-subnav">
          <li
            v-for="sublink in link.children"
            :key="sublink._path"
            class="docs-subnav-item"
          >
            <NuxtLink
              :to="sublink._path"
              active-class="docs-subnav-link-active"
              class="docs-subnav-link"
            >
              {{ sublink.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </template>
  </ul>
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

  &-item-toc {
    padding-left: 0;
  }

  &-link {
    font-size: 0.95rem;
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

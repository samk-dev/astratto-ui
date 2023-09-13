<script setup lang="ts">
import type { PropType } from '#imports'
import type { NavItem } from '~/utils'
const { navigation } = useContent()
const props = defineProps({
  items: {
    type: Array as PropType<NavItem[]>,
    required: true
  }
})
</script>

<template>
  <div>
    <ul class="uk-nav uk-nav-default">
      <template v-for="item in props.items" :key="item._path">
        <li
          :class="['uk-nav-header', item.children?.length ? 'uk-parent' : '']"
        >
          <NuxtLink
            :to="item._path"
            exact-active-class="uk-toc-active"
            uk-scroll
          >
            {{ item.title }}
          </NuxtLink>

          <ul v-if="item.children?.length" class="uk-sub-nav">
            <li v-for="children in item.children" :key="children._path">
              <NuxtLink
                :to="children._path"
                exact-active-class="uk-toc-active"
                uk-scroll
              >
                {{ children.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>

    <hr />
    <ul class="uk-nav uk-nav-default">
      <li>
        <NuxtLink to="https://github.com/samk-dev">
          <span uk-icon="push" class="uk-margin-small-right" />
          <span>Open in Playground</span>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          to="https://github.com/samk-dev/astratto-ui/issues"
          target="_blank"
        >
          <span uk-icon="warning" class="uk-margin-small-right" />
          <span>Report Issue</span>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="https://github.com/samk-dev">
          <span uk-icon="file-edit" class="uk-margin-small-right" />
          <span>Edit Page</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { navigation } = useContent()
</script>

<template>
  <ul class="uk-nav-default uk-nav-divider uk-docs-nav" uk-nav="multiple: true">
    <li
      v-for="item in navigation[0].children"
      :key="JSON.stringify(item)"
      :class="[item.children.length ? 'uk-parent' : '', 'uk-open']"
    >
      <a href="#" class="uk-docs-nav-title">
        {{ item.title }}
        <span uk-nav-parent-icon> </span>
      </a>

      <ul class="uk-nav-sub uk-docs-subnav">
        <li v-for="subItem in item.children" :key="subItem._path">
          <NuxtLink :to="subItem._path" active-class="uk-active">
            {{ subItem.title }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
/* TODO: Remove important */
.uk-docs-nav {
  &-title {
    color: var(--au-global-color-text) !important;
  }
}
.uk-docs-subnav {
  a {
    padding-left: 0.5rem;
  }
  .uk-active {
    border-left: 2px solid var(--au-global-color-primary);
  }
}
</style>

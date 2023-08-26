<script setup lang="ts">
const { app } = useAppConfig()
</script>

<template>
  <header class="app-header">
    <AuContainer
      size="xlarge"
      class="uk-flex uk-flex-middle uk-flex-between app-header-container"
    >
      <NuxtLink to="/" class="uk-text-bold app-header-logo">
        {{ app.name }}
      </NuxtLink>

      <div class="uk-flex uk-flex-middle">
        <ul class="app-header-nav uk-flex uk-flex-middle">
          <li
            v-for="item in app.mainNavigation"
            :key="item.label"
            class="app-header-nav-item"
          >
            <NuxtLink
              :to="item.href"
              :target="item.target"
              class="uk-flex uk-flex-middle"
              active-class="uk-active"
            >
              <AuIcon
                :name="item.iconLeading"
                :ratio="0.7"
                class="app-header-nav-icon-leading"
              />
              {{ item.label }}
              <AuIcon
                v-show="item.target === '_blank'"
                name="link-external"
                :ratio="0.5"
                class="app-header-nav-icon-trailing"
              />
            </NuxtLink>
          </li>

          <li>
            <AuIcon name="search" />
          </li>
          <li>
            <AuIcon name="github" :ratio="1.1" />
          </li>
        </ul>
      </div>
    </AuContainer>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  &-container {
    border-bottom: 1px solid var(--au-global-color-muted);
    padding-top: 15px;
    padding-bottom: 15px;
  }
  &-nav {
    list-style: none;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
      margin-right: 1rem;
    }

    li a {
      color: var(--au-global-color-text);
    }

    &-icon-leading {
      margin-right: 0.25rem;
    }

    &-icon-trailing {
      margin-left: 0.25rem;
    }
  }
}
</style>

<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div>
    <div
      v-if="page._dir"
      class="uk-flex uk-flex-middle uk-article-meta uk-margin-small-bottom uk-docs-article-meta"
    >
      <AuIcon name="folder" :ratio="1" class="uk-docs-article-icon" />
      <span class="uk-text-capitalize">
        {{ page._dir }}
      </span>
    </div>

    <div class="uk-flex uk-flex-between uk-flex-middle">
      <h1 class="uk-article uk-margin-remove uk-docs-article-title">
        {{ page.title || '-' }}
      </h1>

      <div
        v-if="page.gitUrl || page.uikitUrl"
        class="uk-flex uk-flex-middle uk-flex-gap-small"
      >
        <NuxtLink
          v-if="page.gitUrl"
          class="uk-button uk-button-default uk-button-small uk-icon-link"
          uk-icon="github"
          target="_blank"
          aria-label="see the component on github"
          :to="page.gitUrl"
        >
        </NuxtLink>

        <NuxtLink
          v-if="page.uikitUrl"
          class="uk-button uk-button-primary uk-button-small uk-icon-link"
          uk-icon="uikit"
          target="_blank"
          aria-label="see the component on uikit"
          :to="page.uikitUrl"
        >
        </NuxtLink>
      </div>
    </div>

    <p v-if="page.description" class="uk-text-lead uk-docs-article-text-lead">
      {{ page.description }}
    </p>
    <hr />
  </div>
</template>

<style scoped lang="scss">
.uk-docs-article {
  &-meta {
    font-size: 1rem;
    color: var(--au-global-color-muted-200);
    line-height: 1;
  }
  &-icon {
    margin-right: 0.25rem;
  }
  &-text-lead {
    font-size: 1.25rem;
    margin-top: 10px;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  dir: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  editUrl: {
    type: String,
    default: null
  },
  ukDocsLabel: {
    type: String,
    default: null
  },
  ukDocsUrl: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div>
    <div class="uk-flex uk-flex-bottom uk-article-meta uk-margin-small-bottom">
      <AuIcon name="folder" :ratio="0.75" style="margin-right: 0.25rem" />
      <span class="uk-text-capitalize" style="line-height: 1">
        {{ props.dir }}
      </span>
    </div>

    <div class="uk-flex uk-flex-between uk-flex-middle">
      <h1 class="uk-article uk-margin-remove">
        {{ props.title }}
      </h1>
      <div>
        <NuxtLink
          :to="props.ukDocsUrl"
          class="uk-button uk-button-default uk-button-small"
        >
          {{ props.ukDocsLabel }}
        </NuxtLink>
      </div>
    </div>

    <p class="uk-text-lead">{{ props.description }}</p>
    <hr />
  </div>
</template>

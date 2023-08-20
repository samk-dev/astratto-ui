<script setup lang="ts">
const props = defineProps({
  clsColor: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    :class="[
      `uk-background-${props.clsColor}`,
      'uk-width-1-1 uk-height-1-1 uk-position-relative uk-border-small uk-border-default'
    ]"
  >
    <span
      class="uk-position-small uk-position-bottom-left uk-background-muted-50 uk-text-small uk-border-rounded"
      style="padding: 0.3rem"
    >
      {{ props.clsColor }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  badge: {
    type: Boolean,
    default: false
  },
  badgeText: {
    type: String,
    default: ''
  },
  badgeTheme: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="uk-card uk-card-body">
    <div v-if="props.badge" class="uk-card-badge uk-label">
      {{ props.badgeText }}
    </div>

    <h3 class="uk-card-title">Title</h3>
    <p>
      Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</template>

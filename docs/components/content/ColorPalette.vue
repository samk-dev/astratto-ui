<script setup lang="ts">
const theme = [
  {
    label: 'Base',
    variations: ['light', 'dark']
  },
  {
    label: 'Muted',
    variations: ['muted-50', 'muted', 'muted-100', 'muted-150', 'muted-200']
  },
  {
    label: 'Primary',
    variations: [
      'primary-50',
      'primary',
      'primary-100',
      'primary-150',
      'primary-200'
    ]
  },
  {
    label: 'Secondary',
    variations: [
      'secondary-50',
      'secondary',
      'secondary-100',
      'secondary-150',
      'secondary-200'
    ]
  },
  {
    label: 'Success',
    variations: [
      'success-50',
      'success',
      'success-100',
      'success-150',
      'success-200'
    ]
  },
  {
    label: 'Warning',
    variations: [
      'warning-50',
      'warning',
      'warning-100',
      'warning-150',
      'warning-200'
    ]
  },
  {
    label: 'Danger',
    variations: [
      'danger-50',
      'danger',
      'danger-100',
      'danger-150',
      'danger-200'
    ]
  }
]
</script>

<template>
  <ul class="uk-list">
    <li v-for="color in theme" :key="color.label">
      <h3>
        {{ color.label }}
      </h3>

      <ul class="uk-flex uk-flex-middle uk-flex-wrap uk-list">
        <li
          v-for="variation in color.variations"
          :key="variation"
          class="uk-width-1-2 uk-width-1-3@s uk-width-1-5@m uk-height-small"
          style="margin-top: 0"
        >
          <div
            :class="[
              `uk-background-${variation}`,
              'uk-width-1-1 uk-height-1-1 uk-position-relative uk-border-small uk-border-default'
            ]"
          >
            <span
              class="uk-position-small uk-position-bottom-left uk-background-muted-50 uk-text-small uk-border-rounded"
              style="padding: 0.3rem"
            >
              {{ variation }}
            </span>
          </div>
        </li>
      </ul>

      <hr class="uk-divider-icon" />
    </li>
  </ul>
</template>

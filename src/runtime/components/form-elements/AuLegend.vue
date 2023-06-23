<script setup lang="ts">
defineOptions({
  name: 'AuLegend'
})
// TODO: icon
export interface PropsAuLegend {
  /**
   * @description legend text
   * */
  label: string
  /**
   * @description if the legend is visible or only for screen readers
   * @default false
   * */
  srOnly?: boolean
}

const props = withDefaults(defineProps<PropsAuLegend>(), {
  srOnly: false
})
</script>

<template>
  <legend
    :class="['uk-legend', props.srOnly ? 'uk-sr-only' : '']"
    :aria-label="props.label"
  >
    <slot>{{ props.label }}</slot>
  </legend>
</template>

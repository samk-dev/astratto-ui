<script setup lang="ts">
defineOptions({
  name: 'AuLegend'
})
// TODO: icon
export interface PropsAuLegend {
  label: string
  icon?: string
  srOnly?: boolean
}

const props = withDefaults(defineProps<PropsAuLegend>(), {
  icon: undefined,
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

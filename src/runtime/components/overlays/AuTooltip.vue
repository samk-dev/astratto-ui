<script setup lang="ts">
interface PropsTooltip {
  text: string
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
  delay?: number
}
const props = withDefaults(defineProps<PropsTooltip>(), {
  position: 'top',
  delay: 50
})
</script>

<template>
  <div :data-uk-tooltip="`title: ${props.text}; delay: ${props.delay}`">
    <slot />
  </div>
</template>

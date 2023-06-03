<script setup lang="ts">
interface PropsAuLabel {
  for: string
  label?: string
}

const props = withDefaults(defineProps<PropsAuLabel>(), {
  label: undefined
})
</script>

<template>
  <label :for="props.label">
    <slot> {{ props.label }}</slot>
  </label>
</template>

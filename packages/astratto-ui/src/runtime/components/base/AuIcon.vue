<script setup lang="ts">
import type { PropType } from '#imports'

defineOptions({
  name: 'AuIcon'
})

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  ratio: {
    type: Number,
    default: 1
  },
  tag: {
    type: String as PropType<'span' | 'a'>,
    default: 'span'
  }
})
</script>

<template>
  <component
    :is="props.tag"
    :uk-icon="`icon: ${props.name}; ratio: ${props.ratio}`"
    aria-hidden
  />
</template>

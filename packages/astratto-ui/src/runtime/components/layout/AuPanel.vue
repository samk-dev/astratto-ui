<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuPanel'
})

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  scrollable: {
    type: Boolean,
    default: false
  }
})

const elCls = computed(() => {
  return props.scrollable ? 'uk-panel-scrollable' : ''
})
</script>

<template>
  <Component :is="props.as" :class="['uk-panel', elCls]">
    <slot />
  </Component>
</template>

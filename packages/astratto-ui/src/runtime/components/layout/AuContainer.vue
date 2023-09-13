<script setup lang="ts">
import { computed } from '#imports'
import type { PropType } from '#imports'
defineOptions({
  name: 'AuContainer'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  size: {
    type: String as PropType<
      'default' | 'xsmall' | 'small' | 'large' | 'xlarge' | 'expand'
    >,
    default: null
  }
})

const elCls = computed(() => {
  const elSize = props.size ? `uk-container-${props.size}` : ''
  return `${elSize}`
})
</script>

<template>
  <component :is="props.tag" :class="['uk-container', elCls]">
    <slot />
  </component>
</template>

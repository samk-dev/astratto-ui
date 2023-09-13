<script setup lang="ts">
import { computed } from '#imports'
import type { PropType } from '#imports'

defineOptions({
  name: 'AuGrid'
})

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  gap: {
    type: String as PropType<
      'default' | 'small' | 'medium' | 'large' | 'collapse'
    >,
    default: null
  },
  matchHeight: {
    type: Boolean,
    default: false
  },
  masonry: {
    type: Boolean,
    default: false
  },
  parallax: {
    type: Number,
    default: null
  },
  divider: {
    type: Boolean,
    default: false
  }
})

const elCls = computed(() => {
  const elGap = props.gap ? `uk-grid-${props.gap}` : ''
  const elMatchHeight = props.matchHeight ? 'uk-grid-match' : ''
  const elDivider = props.divider ? 'uk-grid-divider' : ''

  return `${elGap} ${elMatchHeight} ${elDivider}`
})

const elAttrs = computed(() => {
  const attrsMassonry = `masonry: ${props.masonry}`
  const attrsParallax = props.parallax ? `;parallax: ${props.parallax}` : ''

  return `${attrsMassonry}${attrsParallax}`
})
</script>

<template>
  <component :is="props.as" :uk-grid="elAttrs" :class="['uk-grid', elCls]">
    <slot />
  </component>
</template>

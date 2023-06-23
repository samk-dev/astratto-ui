<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuGrid'
})

interface PropsAuGrid {
  /**
   * @description grid html tag
   * @default div
   */
  tag?: string
  /**
   * @description space between grid cells
   * @default undefined
   */
  gap?: 'small' | 'medium' | 'large' | 'collapse'
  /**
   * @description match the height of the direct child of each cell
   * @default false
   */
  matchHeight?: boolean
  /**
   * @description if grid cells have different heights, a layout free of gaps can be created
   * @default false
   */
  masonry?: boolean
  /**
   * @description move single columns of a grid at different speeds while scrolling
   * @default false
   */
  parallax?: number
  /**
   * @description separate grid cells with lines
   * @default false
   */
  divider?: boolean
}

const props = withDefaults(defineProps<PropsAuGrid>(), {
  tag: 'div',
  gap: undefined,
  matchHeight: false,
  masonry: false,
  parallax: undefined,
  divider: false
})

const elCls = computed(() => {
  return {
    elGap: props.gap ? `au-grid-${props.gap}` : '',
    elMatchHeight: props.matchHeight ? 'au-grid-match' : '',
    elDivider: props.divider ? 'au-grid-divider' : ''
  }
})

const elAttrs = computed(() => {
  const attrsMassonry = `masonry: ${props.masonry}`
  const attrsParallax = props.parallax ? `;parallax: ${props.parallax}` : ''
  return `${attrsMassonry}${attrsParallax}`
})
</script>

<template>
  <component
    :is="props.tag"
    :data-au-grid="elAttrs"
    :class="['au-grid', elCls.elGap, elCls.elDivider, elCls.elMatchHeight]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { PropType } from '#imports'
import { computed } from '#imports'

defineOptions({
  name: 'AuHeading'
})

const props = defineProps({
  as: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    required: true
  },
  size: {
    type: String as PropType<
      'small' | 'medium' | 'large' | 'xlarge' | '2xlarge'
    >,
    default: 'medium'
  },
  divider: {
    type: Boolean,
    default: false
  },
  bullet: {
    type: Boolean,
    default: false
  },
  line: {
    type: Boolean,
    default: false
  }
})

const elCls = computed(() => {
  const elDivider = props.divider ? 'uk-heading-divider' : ''
  const elBullet = props.bullet ? 'uk-heading-bullet' : ''
  const elLine = props.line ? 'uk-heading-line' : ''

  return `uk-heading-${props.size} ${elDivider} ${elBullet} ${elLine}`
})
</script>

<template>
  <component :is="props.as" :class="[elCls]">
    <slot />
  </component>
</template>

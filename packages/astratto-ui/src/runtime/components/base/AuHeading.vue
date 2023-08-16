<script setup lang="ts">
import type { PropType } from '#imports'

defineOptions({
  name: 'AuHeading'
})

const props = defineProps({
  tag: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    required: true
  },
  text: {
    type: String,
    default: ''
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
  }
})
</script>

<template>
  <component
    :is="props.tag"
    :class="[
      `uk-heading-${props.size}`,
      props.divider ? 'uk-heading-divider' : '',
      props.bullet ? 'uk-heading-bullet' : ''
    ]"
  >
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

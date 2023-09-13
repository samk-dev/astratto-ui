<script setup lang="ts">
import { computed } from '#imports'
import type { PropType } from '#imports'

defineOptions({
  name: 'AuSection'
})

const props = defineProps({
  as: {
    type: String,
    default: 'section',
    desciption: 'The html element the Section should render as.'
  },
  theme: {
    type: String as PropType<
      | 'default'
      | 'primary'
      | 'secondary'
      | 'muted'
      | 'warning'
      | 'success'
      | 'danger'
    >,
    default: null,
    description: 'Section theme'
  },
  size: {
    type: String as PropType<
      'default' | 'xsmall' | 'small' | 'large' | 'xlarge'
    >,
    default: null,
    description: 'Section vertical padding size.'
  },
  removePaddingY: {
    type: Boolean,
    default: false,
    description: 'Remove vertical padding'
  },
  overlap: {
    type: String,
    default: null,
    description:
      'To include textured backgrounds and borders, you can set overlap prop, to apply a border image and a negative offset to the following section. Note that this only works in styles that implement the feature, if there are subsequent sections.'
  }
})

const elCls = computed(() => {
  const elTheme = props.theme ? `uk-section-${props.theme}` : ''
  const elSize = props.size ? `uk-section-${props.size}` : ''
  const elRemoveVerticalPadding = props.removePaddingY
    ? 'uk-padding-remove-vertical'
    : ''
  return `${elTheme} ${elSize} ${elRemoveVerticalPadding}`
})
</script>

<template>
  <section :class="['uk-section', elCls]">
    <slot />
  </section>
</template>

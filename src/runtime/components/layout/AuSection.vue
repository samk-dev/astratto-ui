<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuSection'
})

interface PropsAuSection {
  /**
   * @description section background
   * @default undefined
   */
  bgColor?: 'default' | 'primary' | 'secondary' | 'muted'
  /**
   * @description section size
   * @default undefined
   */
  size?: 'xsmall' | 'small' | 'large' | 'xlarge'
  /**
   * @description removes vertical padding
   * @default false
   */
  removeVerticalPadding?: boolean
}

const props = withDefaults(defineProps<PropsAuSection>(), {
  bgColor: undefined,
  size: undefined,
  removeVerticalPadding: false
})

const elCls = computed(() => {
  return {
    elBgColor: props.bgColor ? `uk-section-${props.bgColor}` : '',
    elSize: props.size ? `uk-section-${props.size}` : '',
    elRemoveVerticalPadding: props.removeVerticalPadding
      ? 'uk-padding-remove-vertical'
      : ''
  }
})
</script>

<template>
  <section
    :class="[
      'uk-section',
      elCls.elBgColor,
      elCls.elSize,
      elCls.elRemoveVerticalPadding
    ]"
  >
    <slot />
  </section>
</template>

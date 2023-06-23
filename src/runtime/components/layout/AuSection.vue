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
    elBgColor: props.bgColor ? `au-section-${props.bgColor}` : '',
    elSize: props.size ? `au-section-${props.size}` : '',
    elRemoveVerticalPadding: props.removeVerticalPadding
      ? 'au-padding-remove-vertical'
      : ''
  }
})
</script>

<template>
  <section
    :class="[
      'au-section',
      elCls.elBgColor,
      elCls.elSize,
      elCls.elRemoveVerticalPadding
    ]"
  >
    <slot />
  </section>
</template>

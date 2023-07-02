<script setup lang="ts">
defineOptions({
  name: 'AuHeading'
})

interface PropsAuHeading {
  /**
   * @description heading html tag
   */
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * @description heading text
   * @default undefined
   */
  text?: string
  /**
   * @description heading size
   * @default medium
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge'
  /**
   * @description heading undeline divider
   * @default false
   */
  divider?: boolean
  /**
   * @description heading left bullet
   * @default false
   */
  bullet?: boolean
}

const props = withDefaults(defineProps<PropsAuHeading>(), {
  text: undefined,
  size: 'medium',
  divider: false,
  bullet: false
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

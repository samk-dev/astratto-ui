<script setup lang="ts">
defineOptions({
  name: 'AuHeading'
})

interface PropsAuHeading {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text?: string
  size?: 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge'
  divider?: boolean
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

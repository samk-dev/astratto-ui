<script setup lang="ts">
defineOptions({
  name: 'AuContainer'
})

interface PropsAuContainer {
  tag?: string
  size?: 'xsmall' | 'small' | 'large' | 'xlarge' | 'expand'
}
const props = withDefaults(defineProps<PropsAuContainer>(), {
  tag: 'div',
  size: undefined
})
</script>

<template>
  <component
    :is="props.tag"
    :class="['uk-container', props.size ? `uk-container-${props.size}` : '']"
  >
    <slot />
  </component>
</template>

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
    :class="['au-container', props.size ? `au-container-${props.size}` : '']"
  >
    <slot />
  </component>
</template>

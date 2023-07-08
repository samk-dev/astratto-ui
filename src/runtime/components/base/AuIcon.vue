<script setup lang="ts">
defineOptions({
  name: 'AuIcon'
})

interface PropsAuIcon {
  name: string
  ratio?: number
  tag?: 'span' | 'a'
}

const props = withDefaults(defineProps<PropsAuIcon>(), {
  ratio: 0.8,
  tag: 'span'
})
</script>

<template>
  <component
    :is="props.tag"
    :data-uk-icon="`icon: ${props.name}; ratio: ${props.ratio}`"
    aria-hidden
  />
</template>

<script setup lang="ts">
import { AuSection } from '#components'

const props = defineProps({
  dir: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  editURL: {
    type: String,
    default: null
  },
  ukDocsURL: {
    type: String,
    default: null
  }
})
</script>

<template>
  <AuSection remove-horizontal-padding>
    <span v-if="props.dir">{{ props.dir }}</span>
    <h1>{{ props.title }}</h1>
  </AuSection>
</template>

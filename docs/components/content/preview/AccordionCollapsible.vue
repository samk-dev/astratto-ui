<script setup lang="ts">
const items = [
  {
    title: 'Accordion demo',
    icon: 'rocket',
    content: 'Accordion content demo'
  },
  {
    title: 'Accordion demo 2',
    icon: 'life-buoy',
    content: 'Accordion content demo'
  },
  {
    title: 'Accordion demo 3',
    icon: 'beaker',
    content: 'Accordion content demo with open option set to true'
  }
]
</script>

<template>
  <AuAccordion :items="items" :collapsible="false" />
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Accordion demo',
    content: 'Accordion content demo'
  },
  {
    title: 'Accordion demo 2',
    content: 'Accordion content demo'
  },
  {
    title: 'Accordion demo 3',
    content: 'Accordion content demo with open option set to true'
  }
]
</script>

<template>
  <AuAccordion :items="items">
    <template #label="{ item, index }">
      <p class="uk-margin-remove">
        {{ index + 1 }} -
        {{ item.label }}
      </p>
    </template>
  </AuAccordion>
</template>

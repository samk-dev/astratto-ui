<script setup lang="ts">
const items = [
  {
    title: 'Accordion Items 01',
    content: 'lorem ipsum'
  },
  {
    title: 'Accordion Items 02',
    content: 'lorem ipsum'
  }
]
</script>

<template>
  <AuSection>
    <AuContainer>
      <AuAccordion :items="items" @item-open="(e) => console.log(e)" />
    </AuContainer>
  </AuSection>
</template>

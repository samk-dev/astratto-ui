<script setup lang="ts">
const items = [
  {
    title: 'Accordion Items 01',
    content: 'lorem ipsum',
    icon: 'home'
  },
  {
    title: 'Accordion Items 02',
    content: 'lorem ipsum',
    icon: 'happy'
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

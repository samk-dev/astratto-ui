<script setup lang="ts">
import type { Component } from 'vue'
defineOptions({
  name: 'AuAccordion'
})

type AccordionItem = {
  id: string | number
  label?: string
  content?: string
  component?: Component
  open?: boolean
}
interface PropsAccordion {
  items: AccordionItem[]
}

const props = defineProps<PropsAccordion>()
</script>

<template>
  <ul data-uk-accordion>
    <template v-for="(item, i) in props.items" :key="i">
      <li :class="item.open ? 'uk-open' : ''">
        <a class="uk-accordion-title" href="#">
          <slot name="header">
            {{ item.label }}
          </slot>
        </a>
        <div class="uk-accordion-content">
          <slot>
            {{ item.content }}
          </slot>
        </div>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { useSlugify } from '../../utils/'
import type { PropType } from '#imports'

defineOptions({
  name: 'AuAccordion'
})

type AccordionItem = {
  label?: string
  content?: string
  component?: Component
  open?: boolean
}

defineProps({
  items: {
    type: Array as PropType<AccordionItem[]>,
    required: true
  }
})
</script>

<template>
  <ul data-uk-accordion>
    <template
      v-for="(item, i) in items"
      :key="`${useSlugify(item.label)}-${i}`"
    >
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

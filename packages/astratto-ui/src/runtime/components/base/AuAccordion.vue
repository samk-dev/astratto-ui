<script setup lang="ts">
import { useSlugify } from '../../utils/'
import type { PropType } from '#imports'
import { computed } from '#imports'

defineOptions({
  name: 'AuAccordion'
})

interface AccordionItem {
  label?: string
  content?: string
  component?: Component
  open?: boolean
}

const props = defineProps({
  animation: {
    type: Boolean,
    default: true
  },
  animationDuration: {
    type: Number,
    default: 200
  },
  transition: {
    type: String,
    default: 'ease'
  },
  offset: {
    type: Number,
    default: 0
  },
  collapsible: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array as PropType<AccordionItem[]>,
    required: true
  },
  clsItem: {
    type: String,
    default: ''
  },
  clsTitle: {
    type: String,
    default: ''
  },
  clsContent: {
    type: String,
    default: ''
  }
})

const emits = defineEmits<{
  (e: 'itemClick', value: AccordionItem): void
}>()

const uikitAttrs = computed(() => {
  return `collapsible: ${props.collapsible}; multiple: ${props.multiple}; offset: ${props.offset}; animation: ${props.animation}; duration: ${props.animationDuration}; transition: ${props.transition}`
})
</script>

<template>
  <ul :uk-accordion="uikitAttrs">
    <template v-for="item in props.items" :key="useSlugify(item.label)">
      <li :class="[item.open ? 'uk-open' : '', props.clsItem]">
        <a
          :class="['uk-accordion-title', clsTitle]"
          href="#"
          @click.prevent="emits('itemClick', item)"
        >
          <slot name="header">
            {{ item.label }}
          </slot>
        </a>
        <div :class="['uk-accordion-content', props.clsContent]">
          <slot>
            {{ item.content }}
          </slot>
        </div>
      </li>
    </template>
  </ul>
</template>

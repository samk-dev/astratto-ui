<script setup lang="ts">
import { useSlugify } from '../../utils/'
import { useUIkit } from '../../composables/useUikit'
import type { PropType } from '#imports'
import { computed } from '#imports'

defineOptions({
  name: 'AuAccordion'
})

interface AccordionItem {
  title: string
  icon?: string
  content?: any
  open?: boolean
  [key: string]: any
}

const props = defineProps({
  id: {
    type: String,
    default: null
  },
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
  iconOpen: {
    type: String,
    default: 'chevron-down'
  },
  iconClose: {
    type: String,
    default: 'chevron-up'
  },
  clsItem: {
    type: String,
    default: ''
  },
  clsTitle: {
    type: String,
    default: ''
  },
  clsIcon: {
    type: String,
    default: ''
  },
  clsIconOpen: {
    type: String,
    default: ''
  },
  clsIconClose: {
    type: String,
    default: ''
  },
  clsContent: {
    type: String,
    default: ''
  }
})

const emits = defineEmits<{
  (e: 'itemOpen', value: AccordionItem): void
  (e: 'beforeshow', event: Event): void
  (e: 'show', event: Event): void
  (e: 'shown', event: Event): void
  (e: 'beforehide', event: Event): void
  (e: 'hide', event: Event): void
  (e: 'hidden', event: Event): void
}>()

const uikitAttrs = computed(() => {
  return `collapsible: ${props.collapsible}; multiple: ${props.multiple}; offset: ${props.offset}; animation: ${props.animation}; duration: ${props.animationDuration}; transition: ${props.transition}`
})

// TODO: check why .util is not being found in uikit types

if (props.id) {
  const uikit = useUIkit()
  // @ts-ignore
  uikit?.util.on(`#${props.id}`, 'beforeshow', (e: Event) => {
    emits('beforeshow', e)
  })

  // @ts-ignore
  uikit?.util.on(`#${props.id}`, 'show', (e: Event) => {
    emits('show', e)
  })

  // @ts-ignore
  uikit?.util.on(`#${props.id}`, 'shown', (e: Event) => {
    emits('shown', e)
  })

  // @ts-ignore
  uikit?.util.on(`#${props.id}`, 'beforehide', (e: Event) => {
    emits('beforehide', e)
  })

  // @ts-ignore
  uikit?.util.on(`#${props.id}`, 'hide', (e: Event) => {
    emits('hide', e)
  })

  // @ts-ignore
  uikit?.util.on(`#${props.id}`, 'hidden', (e: Event) => {
    emits('hidden', e)
  })
}
</script>

<template>
  <ul :id="props.id" :uk-accordion="uikitAttrs">
    <template
      v-for="(item, index) in props.items"
      :key="useSlugify(`${item.label}-${index}`)"
    >
      <li
        :class="[
          item.open ? 'uk-open' : '',
          'uk-accordion-item',
          props.clsItem
        ]"
      >
        <a
          :class="[
            'uk-accordion-title uk-flex uk-flex-middle uk-flex-between',
            props.clsTitle
          ]"
          href="#"
          @click.prevent="emits('itemOpen', item)"
        >
          <span class="uk-flex uk-flex-middle">
            <slot name="icon" :item="item" :index="index">
              <AuIcon
                v-if="item.icon"
                :name="item.icon"
                :class="[
                  'uk-accordion-icon uk-accordion-icon-leading',
                  props.clsIcon
                ]"
              />
            </slot>

            <slot name="label" :item="item" :index="index">
              <span>{{ item.title }}</span>
            </slot>
          </span>

          <slot name="icon-trailing">
            <AuIcon
              :name="props.iconOpen"
              :class="['uk-accordion-icon-open', props.clsIconOpen]"
            />
            <AuIcon
              :name="props.iconClose"
              :class="['uk-accordion-icon-close', props.clsIconClose]"
            />
          </slot>
        </a>

        <div :class="['uk-accordion-content', props.clsContent]">
          <slot :item="item" :index="index">
            {{ item.content }}
          </slot>
        </div>
      </li>
    </template>
  </ul>
</template>

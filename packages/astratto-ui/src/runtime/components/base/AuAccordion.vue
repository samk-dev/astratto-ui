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

interface EmittedData {
  index: number
  item: AccordionItem
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
    default: 'plus'
  },
  iconClose: {
    type: String,
    default: 'minus'
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

const elID = computed(() => {
  const id = useSlugify(props.items[0].title)
  return props.id || `accordion-${id}`
})

const emits = defineEmits<{
  show: [data: EmittedData]
  shown: [data: EmittedData]
  beforeHide: [data: EmittedData]
  hide: [data: EmittedData]
  hidden: [data: EmittedData]
}>()

const uikitAttrs = computed(() => {
  return `collapsible: ${props.collapsible}; multiple: ${props.multiple}; animation: ${props.animation}; duration: ${props.animationDuration}; transition: ${props.transition}`
})

const activeIndex = ref<EmittedData>()

// TODO: check why .util is not being found in uikit types
const uikit = useUIkit()
// // @ts-ignore
// uikit?.util.on(`#${elID}`, 'beforeshow', function () {
//   emits('beforeShow', activeIndex.value as EmittedData)
// })

// @ts-ignore
uikit?.util.on(`#${elID.value}`, 'show', function () {
  emits('show', activeIndex.value as EmittedData)
}) as any
// @ts-ignore
uikit?.util.on(`#${elID.value}`, 'shown', function () {
  emits('shown', activeIndex.value as EmittedData)
})
// @ts-ignore
uikit?.util.on(`#${elID.value}`, 'beforehide', function () {
  emits('beforeHide', activeIndex.value as EmittedData)
})
// @ts-ignore
uikit?.util.on(`#${elID.value}`, 'hide', function () {
  emits('hide', activeIndex.value as EmittedData)
})
// @ts-ignore
uikit?.util.on(`#${elID.value}`, 'hidden', function () {
  emits('hidden', activeIndex.value as EmittedData)
})
</script>

<template>
  <ul :id="elID" :uk-accordion="uikitAttrs">
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
          @click.prevent="activeIndex = { index, item }"
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

          <slot name="icon-trailing" :item="item" :index="index">
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

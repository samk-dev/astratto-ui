<script setup lang="ts">
import { computed } from '#imports'
import type { PropType } from '#imports'

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  asHeader: {
    type: String,
    default: 'div'
  },
  asBody: {
    type: String,
    default: 'div'
  },
  asFooter: {
    type: String,
    default: 'div'
  },
  theme: {
    type: String as PropType<'muted' | 'primary' | 'secondary'>,
    default: null
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    default: null
  },
  badgeText: {
    type: String,
    default: null
  },
  clsHeader: {
    type: String,
    default: null
  },
  clsBadge: {
    type: String,
    default: null
  },
  clsTitle: {
    type: String,
    default: null
  },
  clsBody: {
    type: String,
    default: null
  },
  clsFooter: {
    type: String,
    default: null
  }
})

const elCls = computed(() => {
  const elTheme = props.theme ? `uk-card-${props.theme}` : ''
  const elSize = props.size ? `uk-card-${props.size}` : ''

  return `${elTheme} ${elSize}`
})

const slots = useSlots()
</script>

<template>
  <Component :is="props.as" :class="['uk-card', elCls]">
    <div v-if="props.badgeText" :class="['uk-card-badge', clsBadge]">
      {{ props.badgeText }}
    </div>

    <Component
      :is="props.asHeader"
      v-if="slots.header"
      :class="['uk-card-header', clsHeader]"
    >
      <slot name="header" />
    </Component>

    <Component
      :is="props.asBody"
      v-if="slots.default"
      :class="['uk-card-body', clsBody]"
    >
      <slot />
    </Component>

    <Component
      :is="props.asFooter"
      v-if="slots.footer"
      :class="['uk-card-footer', clsFooter]"
    >
      <slot name="footer" />
    </Component>
  </Component>
</template>

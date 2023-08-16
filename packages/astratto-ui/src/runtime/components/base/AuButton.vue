<script setup lang="ts">
import type { UiKitThemeButton, UiKitSizeButton } from '../../../types'
import type { PropType } from '#imports'
import { computed } from '#imports'

defineOptions({
  name: 'AuButton'
})

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  labelSrOnly: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<HTMLButtonElement['type']>,
    default: 'button'
  },
  theme: {
    type: String as PropType<UiKitThemeButton>,
    default: 'default'
  },
  size: {
    type: String as PropType<UiKitSizeButton>,
    default: null
  },
  iconLeading: {
    type: String,
    default: null
  },
  iconTrailing: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  clsIconLeading: {
    type: String,
    default: ''
  },
  clsIconTrailing: {
    type: String,
    default: ''
  },
  clsIconSpinner: {
    type: String,
    default: ''
  }
})

const elCls = computed(() => {
  const size = props.size ? `uk-button-${props.size}` : ''

  let spinnerSize = 0.5
  if (props.size === 'small') {
    spinnerSize = 0.35
  } else if (props.size === 'large') {
    spinnerSize = 0.65
  }

  let iconSize = 1
  if (props.size === 'small') {
    iconSize = 0.9
  } else if (props.size === 'large') {
    iconSize = 1.5
  }

  return { size, spinnerSize, iconSize }
})
</script>

<template>
  <button
    :type="props.type"
    :title="props.label"
    :disabled="props.disabled"
    :class="[
      'uk-button uk-flex-inline uk-flex-center uk-flex-middle',
      `uk-button-${props.theme}`,
      elCls.size
    ]"
  >
    <span
      :uk-icon="`icon: ${props.iconLeading}; ratio: ${elCls.iconSize}`"
      :class="props.clsIconLeading"
    />

    <span>
      <slot>
        <span v-if="!props.loading">
          {{ props.label }}
        </span>
        <span
          v-else
          :uk-spinner="`ratio: ${elCls.spinnerSize}`"
          :class="props.clsIconSpinner"
        />
      </slot>
    </span>

    <span
      :uk-icon="`icon: ${props.iconTrailing}; ratio: ${elCls.iconSize}`"
      :class="props.clsIconTrailing"
    />
  </button>
</template>

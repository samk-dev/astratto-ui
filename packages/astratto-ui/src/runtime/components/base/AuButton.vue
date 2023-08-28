<script setup lang="ts">
import type { UiKitThemeButton, UiKitSizeButton } from '../../../types'
import AuIcon from './AuIcon.vue'
import { computed } from '#imports'
import type { PropType } from '#imports'

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
    default: null
  },
  clsIconTrailing: {
    type: String,
    default: null
  },
  clsIconSpinner: {
    type: String,
    default: null
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
    <AuIcon
      v-if="!props.loading && props.iconLeading"
      :name="props.iconLeading"
      :ratio="elCls.iconSize"
      :class="['uk-button-icon-leading', props.clsIconLeading]"
    />

    <span>
      <slot>
        <span v-if="!props.loading" :class="['uk-button-title']">
          {{ props.label }}
        </span>
        <span
          v-else
          :uk-spinner="`ratio: ${elCls.spinnerSize}`"
          :class="['uk-button-spinner', props.clsIconSpinner]"
        />
      </slot>
    </span>

    <AuIcon
      v-if="!props.loading && props.iconTrailing"
      :name="props.iconTrailing"
      :ratio="elCls.iconSize"
      :class="['uk-button-icon-trailing', props.clsIconTrailing]"
    />
  </button>
</template>

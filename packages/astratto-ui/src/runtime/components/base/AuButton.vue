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
  }
})

const elCls = computed(() => {
  const theme = `uk-button-${props.theme}`
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

  return { theme, size, spinnerSize, iconSize }
})
</script>

<template>
  <button
    :type="props.type"
    :title="props.label"
    :disabled="props.disabled"
    :class="[
      'uk-button uk-flex-inline uk-flex-center uk-flex-middle',
      elCls.theme,
      elCls.size
    ]"
  >
    <au-icon
      v-if="props.iconLeading"
      :name="props.iconLeading"
      :ratio="elCls.iconSize"
      style="margin-right: 0.5rem"
    />

    <span>
      <slot>
        <span v-if="!props.loading">
          {{ props.label }}
        </span>
        <span v-else :data-uk-spinner="`ratio: ${elCls.spinnerSize}`" />
      </slot>
    </span>

    <au-icon
      v-if="props.iconTrailing"
      :name="props.iconTrailing"
      :ratio="elCls.iconSize"
      style="margin-left: 0.5rem"
    />
  </button>
</template>

<style scoped lang="scss">
$button-default-background: red;
</style>

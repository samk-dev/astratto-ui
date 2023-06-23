<script setup lang="ts">
import AuIcon from './AuIcon.vue'
import { computed } from '#imports'

defineOptions({
  name: 'AuButton'
})

export interface PropsBaseButton {
  /**
   * @description label for the button, also used for title attr
   */
  label: string
  /**
   * @description button HTML type
   * @default button
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * @description background color
   * @default default
   */
  theme?: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link'
  /**
   * @description size
   * @default undefined
   */
  size?: string
  /**
   * @description disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * @description laoding state
   * @default false
   */
  loading?: boolean
  /**
   * @description leading icon. uikit icon name
   * @default undefined
   */
  leadingIcon?: string
  /**
   * @description traling icon. uikit icon name
   * @default undefined
   */
  trailingIcon?: string
}

const props = withDefaults(defineProps<PropsBaseButton>(), {
  type: 'button',
  theme: 'default',
  size: undefined,
  disabled: false,
  loading: false,
  leadingIcon: undefined,
  trailingIcon: undefined
})

const elCls = computed(() => {
  const theme = `au-button-${props.theme}`
  const size = props.size ? `au-button-${props.size}` : ''

  let spinnerSize = 0.5
  if (props.size === 'small') {
    spinnerSize = 0.35
  } else if (props.size === 'large') {
    spinnerSize = 0.65
  }

  let iconSize = 0.8
  if (props.size === 'small') {
    iconSize = 0.7
  } else if (props.size === 'large') {
    iconSize = 0.9
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
      'au-button au-flex-inline au-flex-center au-flex-middle',
      elCls.theme,
      elCls.size
    ]"
  >
    <au-icon
      v-if="props.leadingIcon"
      :name="props.leadingIcon"
      :ratio="elCls.iconSize"
      style="margin-right: 0.5rem"
    />

    <span>
      <slot>
        <span v-if="!props.loading">{{ props.label }}</span>
        <span v-else :data-au-spinner="`ratio: ${elCls.spinnerSize}`" />
      </slot>
    </span>

    <au-icon
      v-if="props.trailingIcon"
      :name="props.trailingIcon"
      :ratio="elCls.iconSize"
      style="margin-left: 0.5rem"
    />
  </button>
</template>

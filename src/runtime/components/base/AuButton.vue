<script setup lang="ts">
import AuIcon from './AuIcon.vue'
import { computed } from '#imports'

defineOptions({
  name: 'AuButton'
})

export interface PropsBaseButton {
  label: string
  type?: 'button' | 'submit' | 'reset'
  theme?: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link'
  size?: 'small' | 'large'
  radius?: 'rounded' | 'pill'
  disabled?: boolean
  loading?: boolean
  leadingIcon?: string
  trailingIcon?: string
}

const props = withDefaults(defineProps<PropsBaseButton>(), {
  type: 'button',
  theme: 'default',
  size: undefined,
  radius: 'rounded',
  disabled: false,
  loading: false,
  leadingIcon: undefined,
  trailingIcon: undefined
})

const elCls = computed(() => {
  const theme = `uk-button-${props.theme}`
  const size = props.size ? `uk-button-${props.size}` : ''
  const radius = props.radius ? `uk-border-${props.radius}` : ''

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

  return { theme, size, spinnerSize, iconSize, radius }
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
      elCls.size,
      elCls.radius
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
        <span v-else :data-uk-spinner="`ratio: ${elCls.spinnerSize}`" />
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

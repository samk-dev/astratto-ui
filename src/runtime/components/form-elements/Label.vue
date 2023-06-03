<script setup lang="ts">
export interface PropsAuLabel {
  /**
   * @description assigns the label to an input
   * */
  for: string
  /**
   * @description label text
   * */
  label: string
  /**
   * @description if the label is visible or only for screen readers
   * @default false
   * */
  srOnly?: boolean
  /**
   * @description if the input related to the label is required
   * @default false
   * */
  required?: boolean
}

const props = withDefaults(defineProps<PropsAuLabel>(), {
  srOnly: false,
  required: false
})
</script>

<template>
  <label
    :for="props.for"
    :class="['uk-form-label', props.srOnly ? 'uk-sr-only' : '']"
    :aria-label="props.label"
  >
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

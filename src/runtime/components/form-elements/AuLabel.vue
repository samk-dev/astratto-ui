<script setup lang="ts">
defineOptions({
  name: 'AuLabel'
})

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
  visible?: boolean
  /**
   * @description if the input related to the label is required
   * @default false
   * */
  required?: boolean
}

const props = withDefaults(defineProps<PropsAuLabel>(), {
  visible: false,
  required: false
})
</script>

<template>
  <label
    :for="props.for"
    :class="['uk-form-label', !props.visible ? 'uk-sr-only' : '']"
    :aria-label="props.label"
  >
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

<style scoped>
.uk-sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>

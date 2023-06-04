<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import { computed } from '#imports'

interface PropsAuCheckbox extends PropsBaseInput {
  /**
   * @description checkbox model value
   * */
  modelValue: boolean
}

const props = withDefaults(defineProps<PropsAuCheckbox>(), {
  required: false,
  disabled: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isChecked = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})
</script>

<template>
  <label>
    <input
      v-bind="$attrs"
      :id="`id-${props.name}`"
      v-model="isChecked"
      :name="props.name"
      class="uk-checkbox"
      type="checkbox"
      :aria-label="props.label"
      :aria-checked="isChecked"
      :disabled="props.disabled"
      :required="props.required"
    />
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

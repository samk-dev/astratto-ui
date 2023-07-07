<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuCheckbox',
  inheritAttrs: false
})

interface PropsAuCheckbox {
  label: string
  hint?: string
  required?: boolean
  disabled?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  modelValue: boolean
}

interface EmitsAuCheckbox {
  (e: 'update:modelValue', value: PropsAuCheckbox['modelValue']): void
  (e: 'focus'): void
  (e: 'blur'): void
}

const props = withDefaults(defineProps<PropsAuCheckbox>(), {
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  required: false,
  disabled: false
})

const emit = defineEmits<EmitsAuCheckbox>()

const isChecked = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <label>
    <input
      v-bind="$attrs"
      v-model="isChecked"
      class="uk-checkbox uk-margin-small-right"
      type="checkbox"
      :checked="isChecked"
      :aria-label="props.label"
      :aria-checked="isChecked"
      :disabled="props.disabled"
      :required="props.required"
      @focus="emit('focus')"
      @blur="emit('blur')"
    />
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

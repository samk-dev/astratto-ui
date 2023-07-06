<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuCheckbox',
  inheritAttrs: false
})

// TODO: validation msg && hints
interface PropsAuCheckbox {
  /**
   * @description label text
   * */
  label: string
  /**
   * @description hint message
   * @default undefined
   * */
  hint?: string
  /**
   * @description if the input related to the label is required
   * @default false
   * */
  required?: boolean
  /**
   * @description input disabled state
   * @default false
   * */
  disabled?: boolean
  /**
   * @description validation message will be displayed under the input
   * @default undefined
   * */
  validationMsg?: string
  /**
   * @description validation type that will style borders and text
   * @default undefined
   * */
  validationtype?: 'danger' | 'success'
  /**
   * @description checkbox model value
   * */
  modelValue: boolean
}

interface EmitsAuCheckbox {
  (e: 'update:modelValue', value: boolean): boolean

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

const isChecked = computed({
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
      class="uk-checkbox"
      type="checkbox"
      :checked="isChecked"
      :aria-label="props.label"
      :aria-checked="isChecked"
      :disabled="props.disabled"
      :required="props.required"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      @focus="emit('focus')"
      @blur="emit('blur')"
    />
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

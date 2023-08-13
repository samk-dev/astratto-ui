<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuRange'
})

// TODO: validation msg && hints
interface PropsAuRange {
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
  min?: number
  max?: number
  step?: number
  modelValue: string | number
}

const props = withDefaults(defineProps<PropsAuRange>(), {
  min: 0,
  max: 10,
  step: 1,
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): string | number
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emits('update:modelValue', newValue)
  }
})
</script>
<template>
  <input
    v-model.number="value"
    type="range"
    :value="props.modelValue"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :required="props.required"
    :disabled="props.disabled"
    class="uk-range"
    @focus="emits('focus')"
    @blur="emits('blur')"
  />
</template>

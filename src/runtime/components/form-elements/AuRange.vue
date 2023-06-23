<script setup lang="ts">
import AuLabel from './AuLabel.vue'

defineOptions({
  name: 'AuRange',
  inheritAttrs: false
})

// TODO: validation msg && hints
interface PropsAuRange {
  /**
   * @description label text
   * */
  label: string
  /**
   * @description label visibility, it hides the label for browsers and active for screen readers
   * @default false
   * */
  srOnly?: boolean
  /**
   * @description unique input id, it is used as id and name attrs
   * */
  name?: string
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
  srOnly: false,
  min: 0,
  max: 10,
  step: 1,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): string | number
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>
<template>
  <div>
    <au-label
      :for="`id-${props.name}`"
      :label="props.label"
      :required="props.required"
      :sr-only="props.srOnly"
    />
    <input
      v-bind="$attrs"
      :id="`id-${props.name}`"
      :name="props.name"
      type="range"
      :value="props.modelValue"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :aria-label="props.label"
      :required="props.required"
      :disabled="props.disabled"
      class="au-range"
      @change="
        emits('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @focus="emits('focus')"
      @blur="emits('blur')"
    />
  </div>
</template>

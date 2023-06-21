<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import AuLabel from './AuLabel.vue'

defineOptions({
  name: 'AuRange',
  inheritAttrs: false
})

interface PropsAuRange extends PropsBaseInput {
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
  (e: 'update:modelValue', value: string | number): void
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
      class="uk-range"
      @change="
        emits('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @focus="emits('focus')"
      @blur="emits('blur')"
    />
  </div>
</template>

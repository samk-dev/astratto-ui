<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import AuLabel from './AuLabel.vue'

defineOptions({
  name: 'AuTextArea'
})

interface PropsAuTextArea extends PropsBaseInput {
  placeholder: string
  autofocus?: boolean
  cols?: number
  rows?: number
  maxLength?: number
  wrap?: 'hard' | 'soft'
  modeValue?: string
}

const props = withDefaults(defineProps<PropsAuTextArea>(), {
  cols: 50,
  rows: 4,
  maxLength: 300,
  wrap: 'soft',
  disabled: false,
  required: false,
  modeValue: ''
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div>
    <au-label
      :for="`id-${props.name}`"
      :required="props.required"
      :label="props.label"
    />

    <textarea
      v-bind="$attrs"
      :id="`id-${props.name}`"
      :name="props.name"
      :placeholder="props.placeholder"
      :autofocus="props.autofocus"
      :cols="props.cols"
      :rows="props.rows"
      :maxlength="props.maxLength"
      :wrap="props.wrap"
      :aria-label="props.label"
      class="uk-textarea"
      @input="
        emits('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      @focus="emits('focus')"
      @blur="emits('blur')"
    />
  </div>
</template>

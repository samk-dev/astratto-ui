<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import AuLabel from './Label.vue'

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
      :id="`id-${props.name}`"
      :name="props.name"
      :placeholder="props.placeholder"
      :autofocus="props.autofocus"
      :cols="props.cols"
      :rows="props.rows"
      :maxlength="props.maxLength"
      :wrap="props.wrap"
      :aria-label="props.label"
      @input="
        emits('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
    />
  </div>
</template>

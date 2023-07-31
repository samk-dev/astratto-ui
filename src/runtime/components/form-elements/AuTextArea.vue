<script setup lang="ts">
defineOptions({
  name: 'AuTextArea'
})

interface PropsAuTextArea {
  hint?: string
  required?: boolean
  disabled?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  radius?: 'rounded' | 'none'
  placeholder: string
  autofocus?: boolean
  cols?: number
  rows?: number
  maxLength?: number
  wrap?: 'hard' | 'soft'
  modelValue?: string | number
}
interface EmitsTextArea {
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}

const props = withDefaults(defineProps<PropsAuTextArea>(), {
  cols: 50,
  rows: 4,
  maxLength: 300,
  wrap: 'soft',
  disabled: false,
  required: false,
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  radius: 'rounded',
  modelValue: ''
})

const emits = defineEmits<EmitsTextArea>()
</script>

<template>
  <textarea
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :autofocus="props.autofocus"
    :cols="props.cols"
    :rows="props.rows"
    :maxlength="props.maxLength"
    :wrap="props.wrap"
    :class="['uk-textarea', props.radius ? `uk-border-${props.radius}` : '']"
    @input="
      emits('update:modelValue', ($event.target as HTMLTextAreaElement).value)
    "
    @focus="emits('focus')"
    @blur="emits('blur')"
  />
</template>

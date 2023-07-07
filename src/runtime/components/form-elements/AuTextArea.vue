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
  placeholder: string
  autofocus?: boolean
  cols?: number
  rows?: number
  maxLength?: number
  wrap?: 'hard' | 'soft'
  modeValue: string
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
  validationtype: undefined
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>

<template>
  <textarea
    :placeholder="props.placeholder"
    :autofocus="props.autofocus"
    :cols="props.cols"
    :rows="props.rows"
    :maxlength="props.maxLength"
    :wrap="props.wrap"
    class="uk-textarea"
    @input="
      emits('update:modelValue', ($event.target as HTMLTextAreaElement).value)
    "
    @focus="emits('focus')"
    @blur="emits('blur')"
  />
</template>

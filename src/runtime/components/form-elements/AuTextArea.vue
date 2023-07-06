<script setup lang="ts">
defineOptions({
  name: 'AuTextArea'
})

// TODO: validation msg && hints & icons
interface PropsAuTextArea {
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
  (e: 'update:modelValue', value: string): string
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div>
    <textarea
      v-bind="$attrs"
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
  </div>
</template>

<script setup lang="ts">
import AuLabel from './AuLabel.vue'

defineOptions({
  name: 'AuTextArea'
})

// TODO: validation msg && hints & icons
interface PropsAuTextArea {
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
  (e: 'update:modelValue', value: string): string
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
      :sr-only="props.srOnly"
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
      class="au-textarea"
      @input="
        emits('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      @focus="emits('focus')"
      @blur="emits('blur')"
    />
  </div>
</template>

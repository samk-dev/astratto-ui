<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { AuLabel } from '../index'
import type { PropsBaseInput } from '../../../types'
import { computed, ref } from '#imports'

interface PropsAuInput extends PropsBaseInput {
  /**
   * @description hide the label for browsers but enable it on screen readers
   * @default undefined
   * */
  labelSrVisibility?: boolean
  /**
   * @description hint message
   * @default undefined
   * */
  hint?: string
  /**
   * @description input icon, uses uikit icons
   * @example <au-input icon="heart" />
   * @default undefined
   * */
  icon?: string
  /**
   * @description input placeholder
   * */
  placeholder: string
  /**
   * @description input autocomplete
   * @default off
   * */
  autocomplete?: 'on' | 'off'
  /**
   * @description input HTML type
   * @default text
   * */
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel'
  /**
   * @description applies uikit input size class
   * @default undefined
   * */
  size?: 'small' | 'large'
  /**
   * @description applies uikit input width class
   * @default undefined
   * */
  width?: 'xsmall' | 'small' | 'medium' | 'large'
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
   * @description input model value
   * */
  modelValue: string | number
}

const props = withDefaults(defineProps<PropsAuInput>(), {
  labelSrVisibility: undefined,
  name: undefined,
  hint: undefined,
  icon: undefined,
  autocomplete: 'off',
  type: 'text',
  size: undefined,
  width: undefined,
  disabled: false,
  required: false,
  validationMsg: undefined,
  validationtype: undefined
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})

const elCls = computed(() => {
  let clsState, clsSize

  if (props.validationtype) {
    clsState =
      props.validationtype === 'danger' ? 'uk-form-danger' : 'uk-form-success'
  }

  if (props.size) {
    clsSize = props.size === 'small' ? 'uk-form-small' : 'uk-form-large'
  }

  return [clsState, clsSize]
})

const isPassVisible = ref(false)
</script>

<template>
  <div>
    <au-label
      :for="`id-${props.name}`"
      :label="props.label"
      :required="props.required"
      :sr-only="props.labelSrVisibility"
      class="uk-display-block"
    />

    <div class="uk-inline-block">
      <span v-if="props.icon" class="uk-form-icon" :data-uk-icon="props.icon" />

      <input
        v-bind="$attrs"
        :id="`id-${props.name}`"
        v-model="inputValue"
        :name="props.name"
        :placeholder="props.placeholder"
        :autocomplete="props.autocomplete"
        :value="inputValue"
        :type="!isPassVisible ? props.type : 'text'"
        :disabled="props.disabled"
        :required="props.required"
        :class="['uk-input', elCls]"
        :aria-label="props.label"
        @focus="emits('focus')"
        @blur="emits('blur')"
      />
      <a
        v-if="props.type === 'password'"
        class="uk-form-icon uk-form-icon-flip"
        href=""
        :data-uk-icon="!isPassVisible ? 'eye' : 'eye-slash'"
        @click.prevent="isPassVisible = !isPassVisible"
      />
    </div>

    <span v-if="props.hint" class="uk-display-block">
      {{ props.hint }}
    </span>
    <span
      v-if="props.validationMsg"
      :class="['uk-display-block', `uk-text-${props.validationtype}`]"
    >
      {{ props.validationMsg }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useSlugify } from '../../utils'
import { computed } from '#imports'

defineOptions({
  name: 'AuRadio',
  inheritAttrs: false
})

// TODO: validation msg && hint
interface PropsRadio {
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
  options: any
  /**
   * @description Radio model value
   * */
  modelValue: string | number | boolean | object
}

interface EmitsAuRadio {
  (
    e: 'update:modelValue',
    value: PropsRadio['modelValue']
  ): PropsRadio['modelValue']

  (e: 'focus'): void

  (e: 'blur'): void
}

const props = withDefaults(defineProps<PropsRadio>(), {
  disabled: false,
  required: false
})

const emit = defineEmits<EmitsAuRadio>()

const selectedVal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
const slugify = useSlugify
</script>

<template>
  <div
    class="uk-margin uk-grid-small uk-child-width-auto uk-grid"
    role="radiogroup"
  >
    <label v-for="(option, i) of options" :key="i">
      <input
        :id="`id-${slugify(option.value)}`"
        v-model="selectedVal"
        :name="option.value"
        :value="option.value"
        type="radio"
        class="uk-radio"
        @change="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        @focus="emit('focus')"
        @blur="emit('blur')"
      />
      <slot>
        {{ option.value }}
      </slot>
    </label>
  </div>
</template>

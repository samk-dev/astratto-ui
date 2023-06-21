<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import { useSlugify } from '../../utils'
import { computed } from '#imports'

defineOptions({
  name: 'AuRadio',
  inheritAttrs: false
})

interface PropsRadio extends PropsBaseInput {
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

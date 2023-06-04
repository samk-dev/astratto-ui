<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import { computed } from '#imports'

interface PropsRadio extends PropsBaseInput {
  options: any
  /**
   * @description Radio model value
   * */
  modelValue: string | number | boolean | object
}

const props = withDefaults(defineProps<PropsRadio>(), {
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: PropsRadio['modelValue']): void
}>()

const selectedVal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})
</script>

<template>
  <div
    class="uk-margin uk-grid-small uk-child-width-auto uk-grid"
    role="radiogroup"
  >
    <label v-for="(option, i) of options" :key="i">
      <input
        :id="`id-${option.id}`"
        v-model="selectedVal"
        :name="option.id"
        :value="option.value"
        type="radio"
        class="uk-radio"
      />
      <slot>
        {{ option.label }}
      </slot>
    </label>
  </div>
</template>

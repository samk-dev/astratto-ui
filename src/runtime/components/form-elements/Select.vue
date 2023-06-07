<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import { AuLabel } from '../index'

interface PropsAuSelect extends PropsBaseInput {
  options: any
  modelValue: string | number
}

const props = withDefaults(defineProps<PropsAuSelect>(), {
  labelVisibility: true,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div>
    <au-label
      v-if="props.labelVisibility"
      :for="`id-${props.name}`"
      :label="props.label"
      :required="props.required"
      :aria-required="props.required"
    />
    <select
      v-bind="$attrs"
      :id="`id-${props.name}`"
      :name="props.name"
      class="uk-select"
      :aria-label="props.label"
      @input="
        emits('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
      @focus="emits('focus')"
      @blur="emits('blur')"
    >
      <option v-for="(option, i) in props.options" :key="i">
        {{ option }}
      </option>
    </select>
  </div>
</template>

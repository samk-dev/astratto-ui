<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import { useSlugify } from '../../utils'
import { computed } from '#imports'

defineOptions({
  name: 'AuCheckbox',
  inheritAttrs: false
})

interface PropsAuCheckbox extends PropsBaseInput {
  /**
   * @description checkbox model value
   * */
  modelValue: boolean
}

interface EmitsAuCheckbox {
  (e: 'update:modelValue', value: boolean): boolean

  (e: 'focus'): void

  (e: 'blur'): void
}

const props = withDefaults(defineProps<PropsAuCheckbox>(), {
  required: false,
  disabled: false
})

const emit = defineEmits<EmitsAuCheckbox>()

const isChecked = computed({
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
  <label>
    <input
      v-bind="$attrs"
      :id="`id-${slugify(props.label)}`"
      v-model="isChecked"
      :name="slugify(props.label)"
      class="uk-checkbox"
      type="checkbox"
      :aria-label="props.label"
      :aria-checked="isChecked"
      :disabled="props.disabled"
      :required="props.required"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      @focus="emit('focus')"
      @blur="emit('blur')"
    />
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

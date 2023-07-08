<script setup lang="ts">
import { computed } from '#imports'

defineOptions({
  name: 'AuSelect',
  inheritAttrs: false
})

type SelectOption = {
  id: string | number
  label: string
  disabled?: boolean
}

interface PropsAuSelect {
  iconLeading?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  loading?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  radius?: 'rounded' | 'none'
  placeholder: string
  options: SelectOption[]
  modelValue: string
}

const props = withDefaults(defineProps<PropsAuSelect>(), {
  iconLeading: undefined,
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  radius: 'rounded',
  loading: false,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const elCls = computed(() => {
  let styles

  if (props.iconLeading) {
    styles = 'padding-left: 40px'
  }

  const borderRadius = props.radius ? `uk-border-${props.radius}` : ''
  return { styles, borderRadius }
})
</script>

<template>
  <div class="uk-position-relative">
    <span
      v-if="props.iconLeading"
      data-uk-icon="happy"
      class="uk-form-icon"
      style="width: 40px"
    />
    <select
      v-bind="$attrs"
      :class="['uk-select', elCls.borderRadius]"
      :style="elCls.styles"
      :disabled="props.disabled"
      :required="props.required"
      @input="
        emits('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
      @focus="emits('focus')"
      @blur="emits('blur')"
    >
      <option
        v-if="props.placeholder"
        disabled
        selected
        value=""
        style="display: none"
      >
        {{ props.placeholder }}
      </option>

      <template
        v-for="(option, i) in options"
        :key="`${option.id}-${option.label}-${i}`"
      >
        <option
          :value="option.label"
          :selected="option.label === props.modelValue"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </template>
    </select>
  </div>
</template>

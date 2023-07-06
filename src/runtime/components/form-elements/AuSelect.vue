<script setup lang="ts">
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
  hint?: string
  required?: boolean
  disabled?: boolean
  loading?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  placeholder: string
  options: SelectOption[]
  modelValue: string
}

const props = withDefaults(defineProps<PropsAuSelect>(), {
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  loading: false,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): string
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div>
    <select
      v-bind="$attrs"
      class="uk-select"
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

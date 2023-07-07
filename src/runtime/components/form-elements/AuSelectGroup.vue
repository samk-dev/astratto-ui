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

type GroupOptions = {
  label: string
  options: SelectOption[]
}

interface PropsAuSelectGroup {
  iconLeading?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  loading?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  placeholder: string
  options: GroupOptions[]
  modelValue: string
}

const props = withDefaults(defineProps<PropsAuSelectGroup>(), {
  iconLeading: undefined,
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  loading: false,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: PropsAuSelectGroup['modelValue']): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const elCls = computed(() => {
  let styles

  if (props.iconLeading) {
    styles = 'padding-left: 40px'
  }

  return { styles }
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
      class="uk-select"
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
        v-for="(groupOpt, i) in options"
        :key="`${groupOpt.label}-${i}`"
      >
        <optgroup :label="groupOpt.label">
          <template
            v-for="(option, k) in groupOpt.options"
            :key="`${option.id}-${option.label}-${k}`"
          >
            <option
              :value="option.label"
              :selected="option.label === props.modelValue"
              :disabled="option.disabled"
            >
              {{ option.label }}
            </option>
          </template>
        </optgroup>
      </template>
    </select>
  </div>
</template>

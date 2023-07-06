<script setup lang="ts">
import type { PropsAuSelectBase } from '../../../types'

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

// TODO: validation msg && hints && icons
interface PropsAuSelectGroup extends PropsAuSelectBase {
  options: GroupOptions[]
  modelValue: string
}

const props = withDefaults(defineProps<PropsAuSelectGroup>(), {
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

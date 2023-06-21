<script setup lang="ts">
import type { PropsBaseInput } from '../../../types'
import { useSlugify } from '../../utils'
import AuLabel from './AuLabel.vue'

defineOptions({
  name: 'AuSelect',
  inheritAttrs: false
})

type SelectOption = {
  label: string
  value: string | number
}

type selectGroup = {
  groupLabel: string
  groupOptions: SelectOption[]
}

interface PropsAuSelect extends PropsBaseInput {
  placeholder?: string
  options?: SelectOption[]
  groupOptions?: selectGroup[]
  modelValue: string | number
}

const props = withDefaults(defineProps<PropsAuSelect>(), {
  placeholder: undefined,
  labelVisibility: false,
  options: undefined,
  groupOptions: undefined,
  disabled: false,
  required: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const slugify = useSlugify
</script>

<template>
  <div>
    <au-label
      :for="`id-${slugify(props.label)}`"
      :label="props.label"
      :sr-only="props.labelVisibility"
      :required="props.required"
      :aria-required="props.required"
    />
    <select
      v-bind="$attrs"
      :id="`id-${slugify(props.label)}`"
      :name="slugify(props.label)"
      class="uk-select"
      :aria-label="props.label"
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

      <template v-for="(option, i) in props.options" :key="i">
        <option
          v-if="props.options"
          :value="option.value"
          :selected="
            option.value === props.modelValue ||
            option.label === props.modelValue
          "
        >
          {{ option.label }}
        </option>
      </template>

      <template v-for="(group, j) in props.groupOptions" :key="j">
        <optgroup v-if="props.groupOptions" :label="group.groupLabel">
          <template v-for="(optionGroup, k) in group.groupOptions" :key="k">
            <option
              :value="optionGroup.value"
              :selected="
                optionGroup.value === props.modelValue ||
                optionGroup.label === props.modelValue
              "
            >
              {{ optionGroup.label }}
            </option>
          </template>
        </optgroup>
      </template>
    </select>
  </div>
</template>

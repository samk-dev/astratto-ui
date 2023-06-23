<script setup lang="ts">
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

// TODO: validation msg && hints && icons
interface PropsAuSelect {
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
  (e: 'update:modelValue', value: string | number): string | number
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

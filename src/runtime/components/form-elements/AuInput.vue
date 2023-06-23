<script setup lang="ts">
import { useSlugify } from '../../utils'
import AuLabel from './AuLabel.vue'
import { computed, ref } from '#imports'

defineOptions({
  name: 'AuInput',
  inheritAttrs: false
})

interface PropsAuInput {
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
   * @default the label prop slugfied
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
  /**
   * @description input left icon, uses uikit icons
   * @example <au-input icon="heart" />
   * @default undefined
   * */
  leftIcon?: string
  /**
   * @description input right icon, uses uikit icons
   * @example <au-input icon="heart" />
   * @default undefined
   * */
  rightIcon?: string
  /**
   * @description render the icon as clickable element
   * @default false
   * */
  rightIconClickable?: boolean
  /**
   * @description input placeholder
   * */
  placeholder: string
  /**
   * @description input autocomplete
   * @default off
   * */
  autocomplete?: 'on' | 'off'
  /**
   * @description input HTML type
   * @default text
   * */
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'url'
  /**
   * @description applies uikit input size class
   * @default undefined
   * */
  size?: 'small' | 'large'
  /**
   * @description applies uikit input width class
   * @default undefined
   * */
  width?: 'xsmall' | 'small' | 'medium' | 'large'
  loading?: boolean
  /**
   * @description input model value
   * */
  modelValue: string | number
}
interface EmitsAuInput {
  (e: 'update:modelValue', value: string | number): string | number
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'rightIconClick'): void
}

const props = withDefaults(defineProps<PropsAuInput>(), {
  srOnly: true,
  leftIcon: undefined,
  rightIcon: undefined,
  rightIconClickable: false,
  autocomplete: 'off',
  type: 'text',
  size: undefined,
  width: undefined,
  disabled: false,
  required: false,
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  loading: false
})
const emits = defineEmits<EmitsAuInput>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})

const elCls = computed(() => {
  let clsState, clsSize

  if (props.validationtype) {
    clsState =
      props.validationtype === 'danger' ? 'au-form-danger' : 'au-form-success'
  }

  if (props.size) {
    clsSize = props.size === 'small' ? 'au-form-small' : 'au-form-large'
  }

  return [clsState, clsSize]
})

const isPassVisible = ref(false)

const handleRightIconClick = () => {
  if (props.rightIconClickable) emits('rightIconClick')
}

const slugify = useSlugify
</script>

<template>
  <div>
    <au-label
      :for="`id-${slugify(props.label)}`"
      :label="props.label"
      :required="props.required"
      :sr-only="props.srOnly"
      class="au-display-block"
    />

    <div class="au-inline-block au-width-1-1">
      <span
        v-if="props.leftIcon"
        class="au-form-icon"
        :data-au-icon="props.leftIcon"
      />

      <input
        v-bind="$attrs"
        :id="`id-${slugify(props.label)}`"
        v-model="inputValue"
        :name="slugify(props.label)"
        :placeholder="props.placeholder"
        :autocomplete="props.autocomplete"
        :value="inputValue"
        :type="!isPassVisible ? props.type : 'text'"
        :disabled="props.disabled"
        :required="props.required"
        :class="['au-input', elCls]"
        :aria-label="props.label"
        @focus="emits('focus')"
        @blur="emits('blur')"
      />

      <a
        v-if="!props.loading && props.type === 'password'"
        class="au-form-icon au-form-icon-flip"
        href=""
        :data-au-icon="!isPassVisible ? 'eye' : 'eye-slash'"
        @click.prevent="isPassVisible = !isPassVisible"
      />

      <component
        :is="props.rightIconClickable ? 'a' : 'span'"
        v-if="props.type !== 'password' && props.rightIcon && !props.loading"
        class="au-form-icon au-form-icon-flip"
        :href="props.rightIconClickable"
        :data-au-icon="props.rightIcon"
        @click.prevent="handleRightIconClick"
      />

      <span
        v-if="props.loading"
        data-au-spinner="ratio: 0.5"
        class="au-form-icon au-form-icon-flip"
      />
    </div>

    <span v-if="props.hint" class="au-display-block">
      {{ props.hint }}
    </span>
    <span
      v-if="props.validationMsg"
      :class="['au-display-block', `au-text-${props.validationtype}`]"
    >
      {{ props.validationMsg }}
    </span>
  </div>
</template>

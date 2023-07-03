<script setup lang="ts">
import { useSlugify } from '../../utils'
import AuLabel from './AuLabel.vue'
import { computed, ref, onMounted } from '#imports'
defineOptions({
  name: 'AuInput',
  inheritAttrs: false
})

interface PropsAuInput {
  label: string
  srOnly?: boolean
  name?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  leftIcon?: string
  rightIcon?: string
  rightIconClickable?: boolean
  placeholder: string
  autocomplete?: 'on' | 'off'
  autofocus?: boolean
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
  size?: 'small' | 'large'
  width?: 'xsmall' | 'small' | 'medium' | 'large'
  loading?: boolean
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
  autofocus: false,
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

const refSearchInput = ref<HTMLInputElement | null>(null)

const autoFocus = () => {
  refSearchInput.value?.focus()
}

onMounted(() => {
  if (props.autofocus) {
    autoFocus()
  }
})

const elCls = computed(() => {
  let clsState, clsSize

  if (props.validationtype) {
    clsState =
      props.validationtype === 'danger' ? 'uk-form-danger' : 'uk-form-success'
  }

  if (props.size) {
    clsSize = props.size === 'small' ? 'uk-form-small' : 'uk-form-large'
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
      class="uk-display-block"
    />

    <div class="uk-inline-block uk-width-1-1">
      <span
        v-if="props.leftIcon"
        class="uk-form-icon"
        :data-uk-icon="props.leftIcon"
      />

      <input
        v-bind="$attrs"
        :id="`id-${slugify(props.label)}`"
        ref="refSearchInput"
        v-model="inputValue"
        :name="slugify(props.label)"
        :placeholder="props.placeholder"
        :autocomplete="props.autocomplete"
        :value="inputValue"
        :type="!isPassVisible ? props.type : 'text'"
        :disabled="props.disabled"
        :required="props.required"
        :class="['uk-input', elCls]"
        :aria-label="props.label"
        @focus="emits('focus')"
        @blur="emits('blur')"
      />

      <a
        v-if="!props.loading && props.type === 'password'"
        class="uk-form-icon uk-form-icon-flip"
        href=""
        :data-uk-icon="!isPassVisible ? 'eye' : 'eye-slash'"
        @click.prevent="isPassVisible = !isPassVisible"
      />

      <component
        :is="props.rightIconClickable ? 'a' : 'span'"
        v-if="props.type !== 'password' && props.rightIcon && !props.loading"
        class="uk-form-icon uk-form-icon-flip"
        :href="props.rightIconClickable"
        :data-uk-icon="props.rightIcon"
        @click.prevent="handleRightIconClick"
      />

      <span
        v-if="props.loading"
        data-uk-spinner="ratio: 0.5"
        class="uk-form-icon uk-form-icon-flip"
      />
    </div>

    <span v-if="props.hint" class="uk-display-block">
      {{ props.hint }}
    </span>
    <span
      v-if="props.validationMsg"
      :class="['uk-display-block', `uk-text-${props.validationtype}`]"
    >
      {{ props.validationMsg }}
    </span>
  </div>
</template>

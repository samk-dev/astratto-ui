<script setup lang="ts">
import { computed, ref, onMounted } from '#imports'

defineOptions({
  name: 'AuInput',
  inheritAttrs: false
})

interface PropsAuInput {
  placeholder: string
  hint?: string
  required?: boolean
  disabled?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  iconLeading?: string
  iconTrailing?: string
  iconTrailingClickable?: boolean
  autocomplete?: 'on' | 'off'
  autofocus?: boolean
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'search'
  size?: 'small' | 'large'
  width?: 'xsmall' | 'small' | 'medium' | 'large'
  loading?: boolean
  modelValue: string | number
}

interface EmitsAuInput {
  (e: 'update:modelValue', value: PropsAuInput['modelValue']): void
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'iconTrailingClick'): void
}

const props = withDefaults(defineProps<PropsAuInput>(), {
  iconLeading: undefined,
  iconTrailing: undefined,
  iconTrailingClickable: false,
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

const refInput = ref<HTMLInputElement | null>(null)

const autoFocus = () => {
  refInput.value?.focus()
}

onMounted(() => {
  if (props.autofocus) {
    autoFocus()
  }
})

const elCls = computed(() => {
  let clsState, clsSize, clsWidth

  if (props.validationtype) {
    clsState =
      props.validationtype === 'danger' ? 'uk-form-danger' : 'uk-form-success'
  }

  if (props.size) {
    clsSize = props.size === 'small' ? 'uk-form-small' : 'uk-form-large'
  }

  if (props.width) {
    switch (props.width) {
      case 'xsmall':
        clsWidth = 'uk-form-width-xsmall'
        break
      case 'small':
        clsWidth = 'uk-form-width-small'
        break
      case 'medium':
        clsWidth = 'uk-form-width-medium'
        break
      case 'large':
        clsWidth = 'uk-form-width-large'
        break
      default:
        clsWidth = ''
    }
  }

  return [clsState, clsSize, clsWidth]
})

const isPassVisible = ref(false)

const handleiconTrailingClick = () => {
  if (props.iconTrailingClickable) emits('iconTrailingClick')
}
</script>

<template>
  <div>
    <div class="uk-inline-block uk-width-1-1">
      <span
        v-if="props.iconLeading"
        class="uk-form-icon"
        :data-uk-icon="props.iconLeading"
      />

      <input
        v-bind="$attrs"
        ref="refInput"
        :placeholder="props.placeholder"
        :autocomplete="props.autocomplete"
        :value="props.modelValue"
        :type="!isPassVisible ? props.type : 'text'"
        :disabled="props.disabled || props.loading"
        :required="props.required"
        :class="['uk-input', elCls]"
        @input="
          emits('update:modelValue', ($event.target as HTMLInputElement).value)
        "
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
        :is="props.iconTrailingClickable ? 'a' : 'span'"
        v-if="props.type !== 'password' && props.iconTrailing && !props.loading"
        class="uk-form-icon uk-form-icon-flip"
        :href="props.iconTrailingClickable"
        :data-uk-icon="props.iconTrailing"
        @click.prevent="handleiconTrailingClick"
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

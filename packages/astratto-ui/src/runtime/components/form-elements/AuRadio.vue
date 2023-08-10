<script setup lang="ts">
import { useSlugify } from '../../utils'
import { computed } from '#imports'

defineOptions({
  name: 'AuRadio',
  inheritAttrs: false
})

interface PropsRadio {
  label: string
  srOnly?: boolean
  hint?: string
  disabled?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  options: any
  clsWrapper?: string
  clsLabel?: string
  modelValue: string | number | boolean
}

interface EmitsAuRadio {
  (e: 'update:modelValue', value: PropsRadio['modelValue']): void
  (e: 'focus'): void
  (e: 'blur'): void
}

const props = withDefaults(defineProps<PropsRadio>(), {
  hint: undefined,
  validationMsg: undefined,
  validationtype: undefined,
  disabled: false,
  required: false
})

const emit = defineEmits<EmitsAuRadio>()

const selectedVal = computed({
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
  <div
    :class="['uk-grid-small uk-child-width-auto uk-grid', props.clsWrapper]"
    role="radiogroup"
  >
    <label v-for="(option, i) of options" :key="i">
      <input
        :id="`${slugify(option.value)}-${i}`"
        v-bind="$attrs"
        v-model="selectedVal"
        :name="slugify(option.value)"
        :value="option.value"
        type="radio"
        class="uk-radio uk-margin-small-right"
        @focus="emit('focus')"
        @blur="emit('blur')"
      />
      <slot>
        <span :class="props.clsLabel">{{ option.value }}</span>
        <span
          v-if="option.description"
          class="uk-text-small uk-display-block"
          style="padding-left: 26px; margin-top: 0.4rem"
        >
          {{ option.description }}
        </span>
      </slot>
    </label>
  </div>
</template>

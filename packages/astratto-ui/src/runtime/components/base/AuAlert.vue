<script setup lang="ts">
import type { UiKitThemeStates } from '../../../types'
import type { PropType } from '#imports'
import { computed } from '#imports'

defineOptions({
  name: 'AuAlert'
})

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  closeBtn: {
    type: Boolean,
    default: true
  },
  theme: {
    type: String as PropType<UiKitThemeStates>,
    default: 'default'
  },
  animation: {
    type: Boolean,
    default: true
  },
  animationDuration: {
    type: Number,
    default: 150
  },
  clsTitle: {
    type: String,
    default: ''
  },
  clsMessage: {
    type: String,
    default: ''
  },
  clsClose: {
    type: String,
    default: ''
  }
})

const emits = defineEmits<{
  (e: 'close'): void
}>()

const uikitAttrs = computed(() => {
  return `animation: ${props.animation}; duration: ${props.animationDuration}`
})
</script>

<template>
  <div
    :uk-alert="uikitAttrs"
    :class="[props.theme ? `uk-alert-${props.theme}` : '']"
  >
    <slot name="close">
      <a
        v-show="props.closeBtn"
        :class="['uk-alert-close', props.clsClose]"
        uk-close
        @click.prevent="emits('close')"
      />
    </slot>
    <slot name="title">
      <h3 v-if="props.title" :class="['uk-alert-title', props.clsTitle]">
        {{ props.title }}
      </h3>
    </slot>
    <slot>
      <p v-if="props.message" :class="[props.clsMessage]">
        {{ props.message }}
      </p>
    </slot>
  </div>
</template>

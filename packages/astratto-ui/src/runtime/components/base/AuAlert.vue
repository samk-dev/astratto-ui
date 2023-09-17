<script setup lang="ts">
import type { UiKitThemeStates } from '../../../types'
import AuIcon from '../content/AuIcon.vue'
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
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<'default' | 'small'>,
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
  clsIcon: {
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
  <div :uk-alert="uikitAttrs" :class="[`uk-alert-${props.theme}`]">
    <slot name="close">
      <a
        v-show="props.closeBtn"
        :class="['uk-alert-close', props.clsClose]"
        uk-close
        @click.prevent="emits('close')"
      />
    </slot>

    <div class="uk-flex uk-flex-top">
      <slot name="icon">
        <AuIcon
          v-if="props.icon"
          :name="props.icon"
          :class="[
            'uk-alert-icon uk-margin-small-right uk-flex-none',
            props.clsIcon
          ]"
        />
      </slot>

      <div class="uk-alert-content">
        <slot name="title">
          <h3 v-if="props.title" :class="['uk-alert-title', props.clsTitle]">
            {{ props.title }}
          </h3>
        </slot>

        <slot>
          <p
            v-if="props.message"
            :class="['uk-alert-message', props.clsMessage]"
          >
            {{ props.message }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

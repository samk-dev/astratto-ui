<script setup lang="ts">
defineOptions({
  name: 'AuAlert'
})

// TODO: border radius 'xsmall' | 'small' etc..
interface PropsAuAlert {
  title: string
  message?: string
  closeBtn?: boolean
  theme?: 'primary' | 'success' | 'warning' | 'danger'
  animation?: boolean
  duration?: number
}

const props = withDefaults(defineProps<PropsAuAlert>(), {
  message: undefined,
  closeBtn: true,
  theme: undefined,
  animation: true,
  duration: 150
})
</script>

<template>
  <div
    :data-uk-alert="`animation: ${props.animation}; duration: ${props.duration}`"
    :class="[props.theme ? `uk-alert-${props.theme}` : '']"
  >
    <slot name="close">
      <a v-show="props.closeBtn" class="uk-alert-close" uk-close />
    </slot>
    <slot name="title">
      <h3>
        {{ props.title }}
      </h3>
    </slot>
    <slot>
      <p v-if="props.message">
        {{ props.message }}
      </p>
    </slot>
  </div>
</template>

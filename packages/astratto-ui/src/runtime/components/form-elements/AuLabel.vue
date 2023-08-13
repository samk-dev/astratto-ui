<script setup lang="ts">
defineOptions({
  name: 'AuLabel'
})

export interface PropsAuLabel {
  for: string
  label: string
  size?: 'small' | 'default' | 'large'
  srOnly?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<PropsAuLabel>(), {
  size: 'default',
  srOnly: false,
  required: false
})
</script>

<template>
  <label
    :for="props.for"
    :class="[
      props.srOnly ? 'uk-sr-only' : '',
      props.size ? `uk-text-${props.size}` : ''
    ]"
    :aria-label="props.label"
    :aria-required="props.required"
  >
    <slot>
      {{ props.label }}
      <span v-if="props.required" class="uk-text-danger">*</span>
    </slot>
  </label>
</template>

<style scoped>
.uk-sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>

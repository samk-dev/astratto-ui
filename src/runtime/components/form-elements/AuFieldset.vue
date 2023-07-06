<script setup lang="ts">
import AuLegend from './AuLegend.vue'

defineOptions({
  name: 'AuFieldset'
})

export interface PropsAuFieldset {
  legend?: string
  srOnly?: boolean
}

const props = withDefaults(defineProps<PropsAuFieldset>(), {
  legend: undefined,
  srOnly: false
})
</script>

<template>
  <fieldset class="uk-fieldset">
    <slot name="legend">
      <au-legend
        v-if="legend"
        :label="legend"
        :class="[props.srOnly ? 'uk-sr-only' : '']"
      />
    </slot>
    <slot />
  </fieldset>
</template>

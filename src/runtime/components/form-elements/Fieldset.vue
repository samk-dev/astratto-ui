<script setup lang="ts">
import { AuLegend } from '../index'

export interface PropsAuFieldset {
  /**
   * @description legend text
   * */
  legend?: string
  /**
   * @description if the legend is visible or only for screen readers
   * @default false
   * */
  srOnly?: boolean
}

const props = withDefaults(defineProps<PropsAuFieldset>(), {
  legend: undefined,
  srOnly: false
})
</script>

<template>
  <fieldset :class="['uk-fieldset', props.srOnly ? 'uk-sr-only' : '']">
    <slot name="legend">
      <au-legend v-if="legend" :label="legend" />
    </slot>
    <slot />
  </fieldset>
</template>

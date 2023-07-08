<script setup lang="ts">
import AuLegend from './AuLegend.vue'

defineOptions({
  name: 'AuFieldset'
})

export interface PropsAuFieldset {
  legend?: string
  icon?: string
  iconRatio?: string
  srOnly?: boolean
}

const props = withDefaults(defineProps<PropsAuFieldset>(), {
  legend: undefined,
  icon: undefined,
  iconRatio: '1.3',
  srOnly: false
})
</script>

<template>
  <fieldset class="uk-fieldset">
    <slot name="legend">
      <div class="uk-flex uk-flex-middle">
        <span
          v-if="props.icon"
          :data-uk-icon="`icon: ${props.icon}; ratio: ${props.iconRatio}`"
          class="uk-margin-small-right"
        />
        <au-legend
          v-if="legend"
          :label="legend"
          :class="[props.srOnly ? 'uk-sr-only' : '']"
        />
      </div>
    </slot>
    <slot />
  </fieldset>
</template>

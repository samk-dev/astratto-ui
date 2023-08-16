<script setup lang="ts">
import { useSlugify } from '../../utils'
import type { PropType } from '#imports'

defineOptions({
  name: 'AuDescriptionList'
})

const props = defineProps({
  divider: {
    type: Boolean,
    default: true
  },
  items: {
    type: Array as PropType<any>,
    required: true
  },
  clsLabel: {
    type: String,
    default: ''
  },
  clsContent: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <dl
    :class="[
      'uk-description-list',
      props.divider ? 'uk-description-list-divider' : ''
    ]"
  >
    <template v-for="item in props.items" :key="useSlugify(item.label)">
      <dt :class="props.clsLabel">
        <slot name="label">
          {{ item.label }}
        </slot>
      </dt>

      <dd :class="props.clsContent">
        <slot>
          {{ item.description }}
        </slot>
      </dd>
    </template>
  </dl>
</template>

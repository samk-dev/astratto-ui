<script setup lang="ts">
import { useSlugify } from '../../utils'
import type { PropType } from '#imports'

interface PropsTab {
  label: string
  icon?: string
}

const props = defineProps({
  tabs: {
    type: Array as PropType<PropsTab[]>,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
})
const emits = defineEmits<{
  (e: 'tabClick', value: PropsTab): void
}>()
</script>

<template>
  <ul class="uk-tab" role="tablist">
    <template v-for="item in props.tabs" :key="useSlugify(item.label)">
      <li
        :class="[props.activeTab === item.label ? 'uk-active' : '']"
        role="presentation"
      >
        <slot>
          <a href="#" @click.prevent="emits('tabClick', item)">
            <span v-show="item.icon" :uk-icon="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </slot>
      </li>
    </template>
  </ul>
</template>

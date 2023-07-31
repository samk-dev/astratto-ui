<script setup lang="ts">
type PropsTab = {
  label: string
  icon: string
}
interface PropsTabs {
  tabs: PropsTab[]
  activeItem: string
}
interface EmitsTabs {
  (e: 'tabClick', value: any): void
}
const props = defineProps<PropsTabs>()
const emits = defineEmits<EmitsTabs>()
</script>

<template>
  <ul class="uk-tab" role="tablist">
    <template v-for="item in props.tabs" :key="item.label">
      <li
        :class="[props.activeItem === item.label ? 'uk-active' : '']"
        role="presentation"
      >
        <slot>
          <a href="#" @click.prevent="emits('tabClick', item)">
            <span :uk-icon="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </slot>
      </li>
    </template>
  </ul>
</template>

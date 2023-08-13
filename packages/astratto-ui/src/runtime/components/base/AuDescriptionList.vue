<script setup lang="ts">
defineOptions({
  name: 'AuDescriptionList'
})

interface PropsAuDescriptionList {
  divider?: boolean
  items: any
}
const props = withDefaults(defineProps<PropsAuDescriptionList>(), {
  divider: true
})
</script>

<template>
  <dl
    :class="[
      'uk-description-list',
      props.divider ? 'uk-description-list-divider' : ''
    ]"
  >
    <template v-for="(item, i) in props.items" :key="i">
      <dt>
        <slot name="title">
          {{ item.term }}
        </slot>
      </dt>

      <dd>
        <slot>
          {{ item.description }}
        </slot>
      </dd>
    </template>
  </dl>
</template>

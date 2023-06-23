<script setup lang="ts">
defineOptions({
  name: 'AuDescriptionList'
})

interface PropsAuDescriptionList {
  /**
   * @description horizontal line between list item
   * @default true
   */
  divider?: boolean
  /**
   * @description description list items
   */
  items: any
}
const props = withDefaults(defineProps<PropsAuDescriptionList>(), {
  divider: true
})
</script>

<template>
  <dl
    :class="[
      'au-description-list',
      props.divider ? 'au-description-list-divider' : ''
    ]"
  >
    <template v-for="(item, i) in props.items" :key="i">
      <dt>
        {{ item.term }}
      </dt>

      <dd>
        {{ item.description }}
      </dd>
    </template>
  </dl>
</template>

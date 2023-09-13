<script setup lang="ts">
import type { PropType } from '#imports'
defineOptions({
  name: 'AuTable'
})

interface Item {
  [key: string | number]: any
}

const props = defineProps({
  cols: {
    type: Array as PropType<Item[]>,
    required: true
  },
  items: {
    type: Array as PropType<Item[]>,
    required: true
  }
})
</script>

<template>
  <table class="uk-table uk-table-small uk-table-divider uk-table-striped">
    <thead>
      <tr>
        <th v-for="th in props.cols" :key="th.key">
          <slot :col="th">
            {{ th.title }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tr in props.items" :key="JSON.stringify(tr)">
        <td v-for="(value, key) of tr" :key="key">
          <slot name="trow" :item="{ key, value }">
            {{ value }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

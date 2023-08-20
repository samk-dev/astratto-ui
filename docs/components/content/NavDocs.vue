<script setup lang="ts">
import { AuAccordion } from '#components'

const props = defineProps({
  navigationTree: {
    type: Array as PropType<any>,
    default: () => []
  }
})
</script>

<template>
  <div>
    <template v-for="item in props.navigationTree" :key="item._id">
      <!-- <NuxtLink v-if="!item.children.length" :to="item.path" /> -->
      <!-- <AuAccordion v-else :items="props.navigationTree">
        <template #default="slotProps">
          <pre>{{ slotProps.item }}</pre>
        </template>
      </AuAccordion> -->
    </template>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { label: 'preview', icon: 'eye' },
  { label: 'code', icon: 'code' }
]
const activeTab = ref('preview')
</script>

<template>
  <div>
    <div class="uk-position-relative">
      <AuTabs
        :tabs="tabs"
        :active-tab="activeTab"
        @tab-click="(e) => (activeTab = e.label as string)"
      />

      <AuIcon
        role="button"
        name="copy"
        :ratio="0.8"
        class="uk-position-small uk-position-bottom-right"
      />
    </div>

    <div v-if="activeTab === 'code'">
      <ContentSlot v-if="$slots.default" :use="$slots.default" />
    </div>
    <div v-else>
      <ContentSlot v-if="$slots.preview" :use="$slots.preview" />
    </div>
  </div>
</template>

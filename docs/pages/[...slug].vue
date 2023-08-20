<script setup lang="ts">
const { navigation, page, surround, globals } = useContent()

console.log(page.value)
</script>

<template>
  <main class="uk-width-expand">
    <ContentDoc />
  </main>
</template>

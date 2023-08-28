<script setup>
const clrs = ['muted', 'primary', 'secondary', 'warning', 'danger', 'success']
const clrVars = [50, 0, 100, 150, 200]
</script>

<template>
  <div>
    <div v-for="clr in clrs" :key="clr">
      <h3>
        {{ clr }}
      </h3>
      <div class="uk-grid">
        <template v-for="clrVar in clrVars" :key="clrVar">
          <div
            :class="[
              clrVar !== 0
                ? `uk-background-${clr}-${clrVar}`
                : `uk-background-${clr}`,
              'uk-width-small uk-height-small'
            ]"
          />
        </template>
      </div>
    </div>
  </div>
</template>

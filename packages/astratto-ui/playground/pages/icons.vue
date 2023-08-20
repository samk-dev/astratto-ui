<script setup lang="ts">
import { auIcons } from '../../src/runtime/assets/js/au-icons'

const someVar = ''

console.log(someVar)
</script>

<template>
  <AuSection>
    <AuContainer size="small">
      <ul uk-grid class="uk-grid uk-grid-small">
        <li
          v-for="(_icon, key) of auIcons"
          :key="key"
          class="uk-flex uk-flex-column uk-flex-center uk-flex-middle"
          style="width: 100px"
        >
          <span :uk-icon="`icon: ${key}`" />

          <span
            :uk-tooltip="`title: ${key}`"
            class="uk-text-truncate uk-text-small"
            style="margin-top: 0.5rem"
          >
            {{ key }}
          </span>
        </li>
      </ul>
    </AuContainer>
  </AuSection>
</template>

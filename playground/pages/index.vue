<script setup lang="ts">
import { ref } from '#imports'
import { AuInput } from '#components'

const formBuilder = ref([
  {
    id: 'asda3',
    type: 'text',
    label: 'Text Input',
    placeholder: 'Enter some text',
    modelValue: '',
    component: () => AuInput
  },
  {
    id: 'asda4',
    type: 'number',
    label: 'Number Input',
    placeholder: 'Enter some numbers',
    modelValue: '',
    component: () => AuInput
  }
])
</script>

<template>
  <div>
    <div class="uk-container">
      <section>
        <h1>Astratto UI Playground</h1>
      </section>

      <form-elements />

      <pre>
        <span v-for="value in formBuilder" :key="value.id">
          {{ value.modelValue }}
        </span>
      </pre>
      <form>
        <component
          :is="item.component()"
          v-for="item in formBuilder"
          :key="item.id"
          v-model="item.modelValue"
          :label="item.label"
          :placeholder="item.placeholder"
        />
      </form>
    </div>
  </div>
</template>

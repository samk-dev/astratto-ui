<script setup lang="ts">
// import { ref } from '#imports'
// import { AuInput } from '#components'

// const formBuilder = ref([
//   {
//     id: 'asda3',
//     type: 'text',
//     label: 'Text Input',
//     placeholder: 'Enter some text',
//     modelValue: '',
//     component: () => AuInput
//   },
//   {
//     id: 'asda4',
//     type: 'number',
//     label: 'Number Input',
//     placeholder: 'Enter some numbers',
//     modelValue: '',
//     component: () => AuInput
//   }
// ])
// const handleClose = () => {
//   console.log('closed')
// }
</script>

<template>
  <div>
    <div class="uk-container">
      <section>
        <h1>Astratto UI Playground</h1>
      </section>

      <AuButton
        label="Default Button"
        label-sr-only
        theme="secondary"
        icon-leading="heart"
        icon-trailing="check"
        size="small"
      />

      <span data-uk-icon="wallet" />

      <AuAccordion
        :items="[
          { label: 'Accordion demo', content: 'Accordion content demo' },
          { label: 'Accordion demo 2', content: 'Accordion content demo' }
        ]"
        @item-click="(e) => console.log(e)"
      />

      <AuAccordion
        :items="[
          { label: 'Accordion demo', content: 'Accordion content demo' }
        ]"
      >
        <template #header> Custom title </template>
      </AuAccordion>

      <AuAccordion
        :items="[
          {
            label: 'Accordion demo',
            content: 'Accordion content demo',
            open: true
          }
        ]"
      >
        <template #header> Custom title with open option set to true </template>
        With custom content
      </AuAccordion>

      <AuAlert title="Alert Title" message="Alert Message" />
      <!-- <button data-uk-toggle="target: #offcanvas-test">Open modal</button>

      <au-offcanvas id="offcanvas-test"> hello </au-offcanvas> -->

      <!--

      <au-modal id="modal-test" @close="handleClose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          obcaecati veritatis porro amet? Culpa sint ea harum iste, dolor, modi
          fugiat officia quos eaque illum maxime laborum at quam laudantium.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          obcaecati veritatis porro amet? Culpa sint ea harum iste, dolor, modi
          fugiat officia quos eaque illum maxime laborum at quam laudantium.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          obcaecati veritatis porro amet? Culpa sint ea harum iste, dolor, modi
          fugiat officia quos eaque illum maxime laborum at quam laudantium.
        </p>
      </au-modal> -->
      <!-- <form-elements />

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
      </form> -->
    </div>
  </div>
</template>

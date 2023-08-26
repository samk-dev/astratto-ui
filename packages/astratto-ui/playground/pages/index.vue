<script setup lang="ts">
// import { ref } from '#imports'
// import { AuInput } from '#components'

// const formBuilder = ref([
//   {
//     id: 'asda3',
//    label: 'Text Input',
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
// }   type: 'text',
//

// const { showNotification } = useNotification()
// const handleNotification = () => {
//   showNotification({
//     message: 'my-message!',
//     status: 'primary',
//     pos: 'top-right',
//     timeout: 5000
//   })
// }
const items = [
  {
    title: 'Accordion demo',
    icon: 'rocket',
    content: 'Accordion content demo'
  },
  {
    title: 'Accordion demo 2',
    icon: 'life-buoy',
    content: 'Accordion content demo'
  },
  {
    title: 'Accordion demo 3',
    icon: 'beaker',
    content: 'Accordion content demo with open option set to true'
  }
]
</script>

<template>
  <div>
    <div>
      <!-- <AuSection uk-margin class="uk-margin-medium">
        <AuContainer>
          <h1>Astratto UI Playground</h1>
        </AuContainer>

        <AuContainer>
          <h3>Buttons</h3>
          <div uk-grid>
            <div>
              <AuButton label="Default Button" />
            </div>

            <div>
              <AuButton
                label="Primary Button"
                theme="primary"
                @click="handleNotification"
              />
            </div>

            <div>
              <AuButton label="Secondary Button" theme="secondary" />
            </div>

            <div>
              <AuButton label="Success Button" theme="success" />
            </div>

            <div>
              <AuButton label="Warning Button" theme="warning" />
            </div>

            <div>
              <AuButton label="Danger Button" theme="danger" />
            </div>
          </div>
        </AuContainer>
      </AuSection> -->

      <AuSection>
        <AuContainer>
          <h3>small</h3>

          <AuAccordion
            id="some-accordion-small"
            size="small"
            :items="items"
            @item-open="(e) => console.log(e)"
            @hidden="(e) => console.log(e)"
          />

          <h3>default</h3>

          <AuAccordion
            id="some-accordion"
            :items="items"
            @item-open="(e) => console.log(e)"
            @hidden="(e) => console.log(e)"
          />
        </AuContainer>
      </AuSection>

      <!-- <AuAlert
        title="A new software update is available. See what’s new in version 1.1.1"
        icon="info-circle"
        theme="default"
      />
      <AuAlert
        title="New arrivals in our gift store"
        icon="gift"
        theme="primary"
      />
      <AuAlert
        title="Product created successfully"
        icon="check"
        theme="success"
      />
      <AuAlert
        title="You have no credits left!"
        message="Please renew your account before 19/12/2023"
        icon="alert-triangle"
        theme="warning"
      />
      <AuAlert
        title="403 Access Denied"
        message="You don't have permissions to access this data. Please contact your sys admin."
        icon="ban"
        theme="danger"
      /> -->

      <!-- <span class="uk-label">Default</span>

      <span class="uk-label uk-label-success">Success</span>

      <span class="uk-label uk-label-warning">Warning</span>

      <span class="uk-label uk-label-danger">Danger</span>

      <span class="uk-badge">100</span> -->
    </div>
  </div>
</template>

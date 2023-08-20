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

const { showNotification } = useNotification()
const handleNotification = () => {
  showNotification({
    message: 'my-message!',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
  })
}
</script>

<template>
  <div>
    <div>
      <AuSection uk-margin class="uk-margin-medium">
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
      </AuSection>

      <AuAccordion
        :items="[
          { label: 'Accordion demo', content: 'Accordion content demo' },
          { label: 'Accordion demo 2', content: 'Accordion content demo' },
          {
            label: 'Accordion demo 3',
            content: 'Accordion content demo with open option set to true',
            open: true
          }
        ]"
        @item-click="(e) => console.log(e)"
      />

      <AuAlert title="Alert Title" message="Alert Message" theme="default" />
      <AuAlert message="Alert Message" theme="primary" />
      <AuAlert title="Alert Title" theme="success" />
      <AuAlert title="Alert Title" message="Alert Message" theme="warning" />
      <AuAlert title="Alert Title" message="Alert Message" theme="danger" />

      <span class="uk-label">Default</span>

      <span class="uk-label uk-label-success">Success</span>

      <span class="uk-label uk-label-warning">Warning</span>

      <span class="uk-label uk-label-danger">Danger</span>

      <span class="uk-badge">100</span>

      <div class="uk-child-width-1-2@s uk-text-center" uk-grid>
        <div>
          <div class="uk-background-default uk-padding uk-panel">
            <p class="uk-h4">Default</p>
          </div>
        </div>
        <div>
          <div class="uk-background-muted uk-padding uk-panel">
            <p class="uk-h4">Muted</p>
          </div>
        </div>
        <div>
          <div class="uk-background-primary uk-light uk-padding uk-panel">
            <p class="uk-h4">Primary</p>
          </div>
        </div>
        <div>
          <div class="uk-background-secondary uk-light uk-padding uk-panel">
            <p class="uk-h4">Secondary</p>
          </div>
        </div>
      </div>

      <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
        <div>
          <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-primary uk-card-body">
            <h3 class="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-secondary uk-card-body">
            <h3 class="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div class="uk-margin">
        <input
          class="uk-input uk-form-danger uk-form-width-medium"
          type="text"
          placeholder="form-danger"
          aria-label="form-danger"
          value="form-danger"
        />
      </div>

      <div class="uk-margin">
        <input
          class="uk-input uk-form-success uk-form-width-medium"
          type="text"
          placeholder="form-success"
          aria-label="form-success"
          value="form-success"
        />
      </div>

      <div class="uk-margin">
        <input
          class="uk-input uk-form-width-medium"
          type="text"
          placeholder="disabled"
          aria-label="disabled"
          value="disabled"
          disabled
        />
      </div>

      <div class="uk-section uk-section-default">
        <div class="uk-container">
          <h3>Section Default</h3>

          <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-section uk-section-muted">
        <div class="uk-container">
          <h3>Section Muted</h3>

          <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-section uk-section-primary uk-light">
        <div class="uk-container">
          <h3>Section Primary</h3>

          <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-section uk-section-secondary uk-light">
        <div class="uk-container">
          <h3>Section Secondary</h3>
        </div>
      </div>
    </div>
  </div>
</template>

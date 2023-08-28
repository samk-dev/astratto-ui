<template>
  <AuSection>
    <AuContainer>
      <Backgrounds />

      <div uk-grid>
        <div><AuButton label="Default Button" /></div>

        <div><AuButton label="Primary Button" theme="primary" /></div>

        <div><AuButton label="Secondary Button" theme="secondary" /></div>

        <div><AuButton label="Warning Button" theme="warning" /></div>

        <div><AuButton label="Danger Button" theme="danger" /></div>

        <div><AuButton label="Success Button" theme="success" /></div>

        <div><AuButton label="Icon Leading Button" icon-leading="plus" /></div>

        <div>
          <AuButton label="Icon Trainling Button" icon-trailing="plus" />
        </div>

        <div>
          <AuButton
            label="Icons Button"
            icon-leading="plus"
            icon-trailing="minus"
          />
        </div>

        <div><AuButton label="Icon Leading Button" :loading="true" /></div>
        <div><AuButton label="Icon Leading Button" :disabled="true" /></div>
      </div>

      <div uk-grid>
        <div><AuButton label="Default Button" size="small" /></div>

        <div>
          <AuButton label="Primary Button" theme="primary" size="small" />
        </div>

        <div>
          <AuButton label="Secondary Button" theme="secondary" size="small" />
        </div>

        <div>
          <AuButton label="Warning Button" theme="warning" size="small" />
        </div>

        <div>
          <AuButton label="Danger Button" theme="danger" size="small" />
        </div>

        <div>
          <AuButton label="Success Button" theme="success" size="small" />
        </div>

        <div>
          <AuButton
            label="Icon Leading Button"
            icon-leading="plus"
            size="small"
          />
        </div>

        <div>
          <AuButton
            label="Icon Trainling Button"
            icon-trailing="plus"
            size="small"
          />
        </div>

        <div>
          <AuButton
            label="Icons Button"
            icon-leading="plus"
            icon-trailing="minus"
            size="small"
          />
        </div>

        <div>
          <AuButton label="Icon Leading Button" :loading="true" size="small" />
        </div>
        <div>
          <AuButton label="Icon Leading Button" :disabled="true" size="small" />
        </div>
      </div>

      <div uk-grid>
        <div><AuButton label="Default Button" size="large" /></div>

        <div>
          <AuButton label="Primary Button" theme="primary" size="large" />
        </div>

        <div>
          <AuButton label="Secondary Button" theme="secondary" size="large" />
        </div>

        <div>
          <AuButton label="Warning Button" theme="warning" size="large" />
        </div>

        <div>
          <AuButton label="Danger Button" theme="danger" size="large" />
        </div>

        <div>
          <AuButton label="Success Button" theme="success" size="large" />
        </div>

        <div>
          <AuButton
            label="Icon Leading Button"
            icon-leading="plus"
            size="large"
          />
        </div>

        <div>
          <AuButton
            label="Icon Trainling Button"
            icon-trailing="plus"
            size="large"
          />
        </div>

        <div>
          <AuButton
            label="Icons Button"
            icon-leading="plus"
            icon-trailing="minus"
            size="large"
          />
        </div>

        <div>
          <AuButton label="Icon Leading Button" :loading="true" size="large" />
        </div>
        <div>
          <AuButton label="Icon Leading Button" :disabled="true" size="large" />
        </div>
      </div>

      <!-- <AuAlert title="New software update available" />

      <AuAlert
        title="New products in our gift shop"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        theme="primary"
        icon="gift"
      />

      <AuAlert
        title="Attention needed"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        theme="warning"
        icon="alert-triangle"
      />

      <AuAlert
        title="There were 2 errors with your submission"
        theme="danger"
        icon="ban"
      >
        <ul>
          <li>Your password must be at least 8 characters</li>
          <li>
            Your password must include at least one pro wrestling finishing move
          </li>
        </ul>
      </AuAlert>

      <AuAlert
        title="Order completed"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        theme="success"
        icon="check"
      /> -->
    </AuContainer>
  </AuSection>
</template>

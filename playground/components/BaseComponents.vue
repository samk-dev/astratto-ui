<template>
  <section class="au-margin">
    <h2>Buttons</h2>
    <div>
      <au-button label="Default Button" />
      <au-button label="Primary Button" theme="primary" />
      <au-button label="Secondary Button" theme="secondary" />
      <au-button label="Danger Button" theme="danger" />
      <au-button label="Disabled Button" theme="primary" disabled />
      <au-button label="Text Button" theme="text" />
      <au-button label="Link Button" theme="link" />
    </div>

    <div class="au-margin">
      <au-button label="Small Button" size="small" />
      <au-button label="Large Button" size="large" />
    </div>

    <div class="au-margin">
      <au-button label="Loading Button" size="small" loading />
      <au-button label="Loading Button" loading />
      <au-button label="Loading Button" size="large" loading />
    </div>

    <div class="au-margin">
      <au-button label="Leading Icon" leading-icon="print" size="small" />
      <au-button
        label="Trailing Icon"
        trailing-icon="arrow-right"
        size="small"
      />

      <au-button label="Leading Icon" leading-icon="print" />
      <au-button label=" Trailing Icon" trailing-icon="arrow-right" />

      <au-button label="Leading Icon" leading-icon="print" size="large" />
      <au-button
        label=" Trailing Icon"
        trailing-icon="arrow-right"
        size="large"
      />
    </div>
  </section>
</template>

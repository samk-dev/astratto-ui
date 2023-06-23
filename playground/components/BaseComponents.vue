<script setup lang="ts"></script>

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

  <section>
    <h2>Alerts</h2>

    <au-alert title="Default" />
    <au-alert
      title="Primary with message"
      message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae illum sint obcaecati autem harum dolore."
      theme="primary"
    />
    <au-alert
      title="Danger theme and none closable"
      message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae illum sint obcaecati autem harum dolore."
      theme="danger"
      :close-btn="false"
    />
    <au-alert
      title="Success theme and close event"
      message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae illum sint obcaecati autem harum dolore."
      theme="success"
    />
    <au-alert
      title="Warning theme and title slot"
      message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repudiandae illum sint obcaecati autem harum dolore."
      theme="warning"
    >
      <template #title>
        <h2>Warning theme and title slot &rarr;</h2>
      </template>
    </au-alert>
  </section>
</template>

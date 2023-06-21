<script setup lang="ts">
import { ref } from '#imports'

const form = ref({
  username: '',
  email: '',
  password: '',
  age: '',
  phone: '',
  mode: '',
  policy: false
})

const radioGroupOpts = [
  {
    id: 'a',
    label: 'A',
    value: 'A'
  },
  {
    id: 'b',
    label: 'B',
    value: 'B'
  },
  {
    id: 'c',
    label: 'C',
    value: 'C'
  }
]
</script>
<template>
  <section>
    <h2>Form Elements</h2>
    <pre>
      {{ form }}
    </pre>
    <form class="uk-form-stack">
      <div class="uk-form-controls uk-margin">
        <au-input
          v-model="form.username"
          name="username"
          label="Username"
          placeholder="Enter your username"
          :required="true"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-input
          v-model="form.email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          :required="true"
          icon="mail"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-input
          v-model="form.password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          :required="true"
          icon="lock"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-input
          v-model="form.age"
          name="age"
          label="Age"
          placeholder="Enter your age"
          type="number"
          :required="true"
          icon="happy"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-input
          v-model="form.phone"
          name="phone"
          label="Phone"
          placeholder="Enter your phone number"
          type="tel"
          :required="true"
          icon="receiver"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-radio
          v-model="form.mode"
          name="radio-group"
          label="Select your option"
          :options="radioGroupOpts"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-checkbox
          v-model:model-value="form.policy"
          name="policy"
          label="I have read and accept your 💩 policy"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-fieldset legend="Legend">
          <template #legend>
            <span>Legend Slot</span>
            <span data-uk-icon="arrow-right"></span>
          </template>
          <div class="uk-form-controls uk-margin">
            <au-input
              v-model="form.username"
              name="username"
              class="uk-width-medium"
              label="Username"
              placeholder="Enter your username"
              :required="true"
            />
          </div>

          <div class="uk-form-controls uk-margin">
            <au-input
              v-model="form.email"
              name="email"
              class="uk-width-medium"
              label="Email"
              placeholder="Enter your email"
              type="email"
              :required="true"
              icon="mail"
            />
          </div>
        </au-fieldset>
      </div>
    </form>
  </section>
</template>

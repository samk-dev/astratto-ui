<script setup lang="ts">
import { ref } from '#imports'

const form = ref({
  username: '',
  email: '',
  password: '',
  age: '',
  phone: '',
  mode: '',
  select: '',
  range: 0,
  comment: '',
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
const selectOpts = ['Option One', 'Option Two']
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
        <au-select
          v-model="form.select"
          label="Select Option"
          name="select-option"
          :options="selectOpts"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-range v-model="form.range" name="form-range" label="Slide me" />
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
        <au-text-area
          v-model="form.comment"
          label="Your comment"
          name="comment"
          placeholder="Enter your comment"
        />
      </div>

      <div class="uk-form-controls uk-margin">
        <au-checkbox
          v-model:model-value="form.policy"
          name="policy"
          label="I have read and accept your 💩 policy"
        />
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from '#imports'

const form = ref({
  text: '',
  email: '',
  number: '',
  password: '',
  tel: '',
  url: '',
  search: '',
  date: '',
  time: '',
  datetime: '',
  month: '',
  week: '',
  select: '',
  selectGroup: '',
  disabled: '',
  withLeftIcon: '',
  withRightIcon: '',
  withRightIconClicable: '',
  withHintText: '',
  withErrMsg: '',
  successState: '',
  withVisibleLabel: '',
  withVisibleRequired: '',
  loading: '',
  radioGroup: 'Option Two',
  textArea: '',
  checkbox: false
})

const handleClickableIcon = () => {
  alert('icon clicked!!')
}

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
const selectOpts = [
  {
    label: 'Option One',
    value: 'Option One'
  },
  {
    label: 'Option Two',
    value: 'Option Two'
  },
  {
    label: 'Option Three',
    value: 'Option Three'
  }
]
const selectGroupOpts = [
  {
    groupLabel: 'Group 01',
    groupOptions: [
      {
        label: 'Option One',
        value: 'Option One'
      },
      {
        label: 'Option Two',
        value: 'Option Two'
      },
      {
        label: 'Option Three',
        value: 'Option Three'
      }
    ]
  },
  {
    groupLabel: 'Group 02',
    groupOptions: [
      {
        label: 'Option One',
        value: 'Option One'
      },
      {
        label: 'Option Two',
        value: 'Option Two'
      },
      {
        label: 'Option Three',
        value: 'Option Three'
      }
    ]
  },
  {
    groupLabel: 'Group 03',
    groupOptions: [
      {
        label: 'Option One',
        value: 'Option One'
      },
      {
        label: 'Option Two',
        value: 'Option Two'
      },
      {
        label: 'Option Three',
        value: 'Option Three'
      }
    ]
  }
]
</script>
<template>
  <section>
    <h2>Form Elements</h2>

    <div class="uk-flex uk-flex-wrap uk-flex-top">
      <div class="uk-width-auto uk-margin-medium-right">
        <pre>
      {{ form }}
    </pre
        >
      </div>

      <form
        class="uk-form-stack uk-width-expand uk-flex uk-flex-wrap uk-flex-top"
        style="gap: 15px"
      >
        <fieldset
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <legend>Inputs</legend>

          <div>
            <au-input
              v-model="form.text"
              label="text"
              placeholder="Text Input"
            />
          </div>

          <div>
            <au-input
              v-model="form.email"
              label="Email"
              placeholder="Email Input"
              type="email"
            />
          </div>

          <div>
            <au-input
              v-model="form.password"
              label="Password"
              placeholder="Password Input"
              type="password"
              :required="true"
            />
          </div>

          <div>
            <au-input
              v-model="form.tel"
              label="Tel"
              placeholder="Tel Input"
              type="tel"
            />
          </div>

          <div>
            <au-input
              v-model="form.url"
              label="Url"
              placeholder="Url Input"
              type="url"
            />
          </div>

          <div class="uk-form-controls">
            <au-input
              v-model="form.withVisibleLabel"
              label="With Visible Label"
              show-label
              placeholder="Visible Label and"
            />
          </div>
        </fieldset>

        <fieldset
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <legend>Inputs state</legend>

          <div>
            <au-input
              v-model="form.disabled"
              label="Loading"
              placeholder="Loading Input"
              loading
            />
          </div>

          <div>
            <au-input
              v-model="form.disabled"
              label="Disabled"
              placeholder="Disabled Input"
              :disabled="true"
            />
          </div>

          <div>
            <au-input
              v-model="form.withHintText"
              label="With hint text"
              placeholder="With hint text"
              hint="Help text here"
            />
          </div>

          <div>
            <au-input
              v-model="form.withErrMsg"
              label="With error msg"
              placeholder="With error msg"
              validationtype="danger"
              validation-msg="Invalid value!"
            />
          </div>

          <div>
            <au-input
              v-model="form.successState"
              label="Success state"
              placeholder="Success state"
              validationtype="success"
            />
          </div>
        </fieldset>

        <fieldset
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <legend>Date time</legend>

          <div>
            <au-input
              v-model="form.date"
              label="date"
              placeholder="Date Input"
              type="date"
            />
          </div>

          <div>
            <au-input
              v-model="form.time"
              label="time"
              placeholder="Time Input"
              type="time"
            />
          </div>

          <div>
            <au-input
              v-model="form.datetime"
              label="datetime"
              placeholder="Datetime Input"
              type="datetime-local"
            />
          </div>

          <div>
            <au-input
              v-model="form.month"
              label="Month"
              placeholder="Month Input"
              type="month"
            />
          </div>

          <div>
            <au-input
              v-model="form.week"
              label="Week"
              placeholder="Week Input"
              type="week"
            />
          </div>
        </fieldset>

        <fieldset
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <legend>Selection</legend>

          <div>
            <au-select
              v-model="form.select"
              label="Select input"
              placeholder="Select input"
              :options="selectOpts"
            />
          </div>

          <div>
            <au-select
              v-model="form.selectGroup"
              label="Select group input"
              placeholder="Select group input"
              :group-options="selectGroupOpts"
            />
          </div>

          <div>
            <au-radio
              v-model="form.radioGroup"
              name="radio-group"
              label="Select your option"
              :show-label="true"
              :options="radioGroupOpts"
            />
          </div>

          <au-checkbox
            v-model="form.checkbox"
            label="I have read and accept your 💩 policy"
          />
        </fieldset>

        <fieldset>
          <legend>Decoration</legend>

          <div>
            <au-input
              v-model="form.withLeftIcon"
              label="With left icon"
              placeholder="Left icon"
              left-icon="happy"
            />
          </div>

          <div>
            <au-input
              v-model="form.withRightIcon"
              label="With right icon"
              placeholder="Right icon"
              right-icon="github"
            />
          </div>

          <div>
            <au-input
              v-model="form.withRightIconClicable"
              label="With right icon clicks"
              placeholder="Right icon clickable"
              right-icon="search"
              right-icon-clickable
              @right-icon-click="handleClickableIcon"
            />
          </div>
        </fieldset>
      </form>
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

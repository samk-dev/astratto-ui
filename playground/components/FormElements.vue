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
  select: '',
  selectGroup: '',
  selectBox: '',
  selectBoxMulti: '',
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
    id: 'option-one'
  },
  {
    label: 'Option Two',
    id: 1
  },
  {
    label: 'Option Three',
    id: 'option-three'
  }
]
const selectBoxOpts = [
  {
    id: 0,
    label: 'Option One'
  },
  {
    id: 1,
    label: 'Option Two'
  },
  {
    id: 2,
    label: 'Option Three'
  }
]
const selectGroupOpts = [
  {
    label: 'Group 01',
    options: [
      {
        label: 'Option One',
        id: 'a1063085-3886-5885-a0e1-aa891105c646'
      },
      {
        label: 'Option Two',
        id: '9393e5d8-80cf-5198-bba5-47f4f34cd138'
      },
      {
        label: 'Option Three',
        id: 'ab570f00-fb79-5fd7-8e72-8046e3619bd8'
      }
    ]
  },
  {
    label: 'Group 02',
    options: [
      {
        label: 'Option One',
        id: '2f93d379-2ea4-5bb5-85d1-9f454cb95f88'
      },
      {
        label: 'Option Two',
        id: '38fd7b3b-2b98-5aa3-a756-5cc35313ee4d'
      },
      {
        label: 'Option Three',
        id: 'b38e8e62-c9cd-5e15-8ecf-51608cd1b8e1'
      }
    ]
  },
  {
    label: 'Group 03',
    options: [
      {
        label: 'Option One',
        id: 'a48bf59c-ae61-53b7-8faf-4fc0e90cb389'
      },
      {
        label: 'Option Two',
        id: 'e2571345-0524-52c7-8ab9-80bc8e6906ca'
      },
      {
        label: 'Option Three',
        id: '76d94296-2757-58e1-b046-fe99e3b220e3'
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
        <au-fieldset
          legend="Inputs"
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <div>
            <au-input v-model="form.text" placeholder="Text Input" autofocus />
          </div>

          <div>
            <au-input
              v-model="form.email"
              placeholder="Email Input"
              type="email"
            />
          </div>

          <div>
            <au-input
              v-model="form.number"
              placeholder="Number Input"
              type="number"
            />
          </div>

          <div>
            <au-input
              v-model="form.password"
              placeholder="Password Input"
              type="password"
              :required="true"
            />
          </div>

          <div>
            <au-input v-model="form.tel" placeholder="Tel Input" type="tel" />
          </div>

          <div>
            <au-input v-model="form.url" placeholder="Url Input" type="url" />
          </div>

          <div class="au-form-controls">
            <au-input
              v-model="form.withVisibleLabel"
              :sr-only="false"
              placeholder="Visible Label"
            />
          </div>
        </au-fieldset>

        <au-fieldset
          legend="Inputs state"
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <div>
            <au-input
              v-model="form.disabled"
              placeholder="Loading Input"
              loading
            />
          </div>

          <div>
            <au-input
              v-model="form.disabled"
              placeholder="Disabled Input"
              :disabled="true"
            />
          </div>

          <div>
            <au-input
              v-model="form.withHintText"
              placeholder="With hint text"
              hint="Help text here"
            />
          </div>

          <div>
            <au-input
              v-model="form.withErrMsg"
              placeholder="With error msg"
              validationtype="danger"
              validation-msg="Invalid value!"
            />
          </div>

          <div>
            <au-input
              v-model="form.successState"
              placeholder="Success state"
              validationtype="success"
            />
          </div>
        </au-fieldset>

        <au-fieldset
          legend="Selection"
          class="uk-form-controls uk-flex uk-flex-column"
          style="gap: 20px"
        >
          <div>
            <au-select
              v-model="form.select"
              placeholder="Select input"
              :options="selectOpts"
            />
          </div>

          <div>
            <au-select-group
              v-model="form.selectGroup"
              placeholder="Select group input"
              :options="selectGroupOpts"
            />
          </div>

          <div>
            <au-select-box
              v-model="form.selectBox"
              placeholder="Please select"
              :options="selectBoxOpts"
            />
          </div>

          <div>
            <au-select-box
              v-model="form.selectBoxMulti"
              placeholder="Please select"
              multiselect
              :options="selectBoxOpts"
            />
          </div>

          <div>
            <au-radio
              v-model="form.radioGroup"
              label="Select your option"
              :options="radioGroupOpts"
            />
          </div>

          <au-checkbox
            v-model="form.checkbox"
            label="I have read and accept your 💩 policy"
          />
        </au-fieldset>

        <au-fieldset legend="Decoration">
          <div>
            <au-input
              v-model="form.withLeftIcon"
              placeholder="Left icon"
              icon-leading="happy"
            />
          </div>

          <div>
            <au-input
              v-model="form.withRightIcon"
              placeholder="Right icon"
              icon-trailing="github"
            />
          </div>

          <div>
            <au-input
              v-model="form.withRightIconClicable"
              placeholder="Right icon clickable"
              icon-trailing="search"
              icon-trailing-clickable
              @icon-trailing-click="handleClickableIcon"
            />
          </div>
        </au-fieldset>

        <au-fieldset legend="Legend">
          <template #legend>
            <span>Legend Slot</span>
            <span data-au-icon="arrow-right"></span>
          </template>
          <div class="uk-form-controls uk-margin">
            <au-input
              v-model="form.text"
              name="username"
              class="uk-width-medium"
              label="Username"
              placeholder="Enter your username"
              :required="true"
            />
          </div>

          <div class="uk-form-controls au-margin">
            <au-input
              v-model="form.text"
              class="uk-width-medium"
              placeholder="Enter your email"
              type="email"
              :required="true"
              icon="mail"
            />
          </div>
        </au-fieldset>
      </form>
    </div>
  </section>
</template>

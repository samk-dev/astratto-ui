<script setup lang="ts">
import { ref } from '#imports'

// const input = ref('')
// const select = ref('')

// const selectOpts = [
//   {
//     label: 'Option One',
//     id: 'option-one'
//   },
//   {
//     label: 'Option Two',
//     id: 1
//   },
//   {
//     label: 'Option Three',
//     id: 'option-three'
//   }
// ]

// const selectGroupOpts = [
//   {
//     label: 'Group 01',
//     options: [
//       {
//         label: 'Option One',
//         id: 'a1063085-3886-5885-a0e1-aa891105c646'
//       },
//       {
//         label: 'Option Two',
//         id: '9393e5d8-80cf-5198-bba5-47f4f34cd138'
//       },
//       {
//         label: 'Option Three',
//         id: 'ab570f00-fb79-5fd7-8e72-8046e3619bd8'
//       }
//     ]
//   },
//   {
//     label: 'Group 02',
//     options: [
//       {
//         label: 'Option One',
//         id: '2f93d379-2ea4-5bb5-85d1-9f454cb95f88'
//       },
//       {
//         label: 'Option Two',
//         id: '38fd7b3b-2b98-5aa3-a756-5cc35313ee4d'
//       },
//       {
//         label: 'Option Three',
//         id: 'b38e8e62-c9cd-5e15-8ecf-51608cd1b8e1'
//       }
//     ]
//   },
//   {
//     label: 'Group 03',
//     options: [
//       {
//         label: 'Option One',
//         id: 'a48bf59c-ae61-53b7-8faf-4fc0e90cb389'
//       },
//       {
//         label: 'Option Two',
//         id: 'e2571345-0524-52c7-8ab9-80bc8e6906ca'
//       },
//       {
//         label: 'Option Three',
//         id: '76d94296-2757-58e1-b046-fe99e3b220e3'
//       }
//     ]
//   }
// ]

const selectBox = ref('')
const selectBoxMultiple = ref([])
const selectBoxOpts = [
  {
    id: 0,
    label: 'Option One',
    icon: 'heart'
  },
  {
    id: 1,
    label: 'Option Two',
    icon: 'home'
  },
  {
    id: 2,
    label: 'Option Three',
    icon: 'happy',
    disabled: true
  }
]
</script>

<template>
  <div>
    <pre>
      <!-- {{ input }}
      {{ select }} -->
      {{ selectBox }}
      {{ selectBoxMultiple }}
    </pre>
    <form>
      <au-select-box
        v-model="selectBox"
        placeholder="Selectbox"
        :options="selectBoxOpts"
      />

      <au-select-box
        v-model="selectBoxMultiple"
        placeholder="Selectbox Multiple"
        multiselect
        :options="selectBoxOpts"
      />
      <!-- <au-select
        v-model="select"
        placeholder="Native Select"
        :options="selectOpts"
      />

      <au-select
        v-model="select"
        placeholder="Native Select"
        icon-leading="happy"
        :options="selectOpts"
      />

      <au-select-group
        v-model="select"
        placeholder="Native Select Group"
        :options="selectGroupOpts"
      />

      <au-select-group
        v-model="select"
        placeholder="Native Select Group"
        icon-leading="happy"
        :options="selectGroupOpts"
      /> -->

      <!-- <au-input v-model="input" placeholder="Default input" />

      <au-input v-model="input" placeholder="Autofocus" autofocus />

      <au-input
        v-model="input"
        placeholder="State danger"
        validationtype="danger"
        validation-msg="Invalid value!"
      />

      <au-input
        v-model="input"
        placeholder="State success"
        validationtype="success"
        validation-msg="Valid value!"
      />

      <au-input v-model="input" placeholder="State disabled" disabled />
      <au-input v-model="input" placeholder="State loading" loading />

      <au-input v-model="input" placeholder="Size small" size="small" />
      <au-input v-model="input" placeholder="Size default" />
      <au-input v-model="input" placeholder="Size large" size="large" />

      <au-input v-model="input" placeholder="Width xsmall" width="xsmall" />
      <au-input v-model="input" placeholder="Width small" width="small" />
      <au-input v-model="input" placeholder="Width medium" width="medium" />
      <au-input v-model="input" placeholder="Width large" width="large" />

      <au-input
        v-model="input"
        placeholder="Icon leading"
        icon-leading="happy"
      />

      <au-input
        v-model="input"
        placeholder="Icon trailing"
        icon-trailing="heart"
      />

      <au-input
        v-model="input"
        placeholder="Icon trailing clickable"
        icon-trailing="search"
        icon-trailing-clickable
        @icon-trailing-click="console.log('Input icon trailing clicked')"
      /> -->
    </form>
  </div>
</template>

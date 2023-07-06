<script setup lang="ts">
import { ref, computed } from '#imports'

defineOptions({
  name: 'AuSelectBox'
})

type Option = {
  id: string | number
  label: string
  icon?: string
  disabled?: boolean
}

interface PropsAuSelectBox {
  placeholder: string
  size?: '' | 'small' | 'large' | 'xlarge'
  iconLeading?: string
  iconTrailing?: string
  iconSelected?: string
  multiselect?: boolean
  search?: boolean
  isExternalSearch?: boolean
  disabled?: boolean
  required?: boolean
  options: Option[]
  modelValue: string | string[]
}

interface EmitsAuSelectBox {
  (e: 'update:modelValue', value: PropsAuSelectBox['modelValue']): void
  (e: 'optionToggled', value: Option | Option[]): void
  (e: 'search', value: string): void
}
const props = withDefaults(defineProps<PropsAuSelectBox>(), {
  size: '',
  iconLeading: '',
  iconTrailing: '',
  iconSelected: 'check',
  multiselect: false,
  search: false,
  isExternalSearch: false,
  disabled: false,
  required: false
})
const emits = defineEmits<EmitsAuSelectBox>()

const searchQuery = ref<string>('')
const searchLoading = ref<boolean>(false)

const handleClearSearch = () => {
  searchQuery.value = ''
}

const selectedOptions = ref<PropsAuSelectBox['modelValue']>([])

const selectLabel = computed(() => {
  if (!props.multiselect) {
    const value = selectedOptions.value as string
    return value.length ? selectedOptions.value : props.placeholder
  }

  const value = selectedOptions.value as string[]
  return value.length ? selectedOptions.value[0] : props.placeholder
})

const filtredOptions = computed(() => {
  return !searchQuery.value
    ? props.options
    : props.options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
})

const isSelected = (option: Option) => {
  if (!props.multiselect) {
    return selectedOptions.value === option.label
  } else {
    const values = selectedOptions.value as string[]
    return values.includes(option.label)
  }
}

const handleToggleSelectItem = (option: Option, index: number) => {
  if (!props.multiselect && !isSelected(option)) {
    selectedOptions.value = option.label
  } else if (!props.multiselect && isSelected(option)) {
    selectedOptions.value = ''
  }

  if (props.multiselect && !isSelected(option)) {
    const value = selectedOptions.value as string[]
    value.push(option.label)
  } else if (props.multiselect && isSelected(option)) {
    const value = selectedOptions.value as string[]
    value.splice(index, 1)
  }

  emits('update:modelValue', selectedOptions.value)
  emits('optionToggled', option)
}

defineExpose({
  selectedOptions,
  filtredOptions,
  searchQuery,
  searchLoading
})
</script>

<template>
  <div class="uk-inline">
    <button type="button" class="uk-button uk-button-default">
      {{ selectLabel }}
      <span uk-drop-parent-icon />
    </button>

    <input
      :value="selectedOptions"
      style="position: absolute; top: 0; left: 0; opacity: 0; cursor: default"
      :disabled="props.disabled"
      :required="props.required"
      tabindex="-1"
      aria-hidden="true"
    />

    <div
      data-uk-drop="mode: click"
      class="uk-background-default uk-padding-small"
    >
      <au-input
        v-model="searchQuery"
        label="Search"
        placeholder="search"
        icon-leading="search"
        :icon-trailing="searchQuery.length > 1 ? 'close' : undefined"
        icon-trailing-clickable
        size="small"
        type="search"
        :loading="searchLoading"
        @update:model-value="
          (e) => emits('update:modelValue', props.modelValue)
        "
        @input="emits('search', searchQuery)"
        @icon-trailing-click="handleClearSearch"
      />

      <ul role="listbox" tabindex="0" class="uk-list">
        <slot>
          <template v-for="(option, i) in filtredOptions" :key="option.id">
            <li
              tabindex="0"
              role="option"
              :aria-selected="isSelected(option)"
              @click="handleToggleSelectItem(option, i)"
            >
              <span v-if="option.icon" :data-uk-icon="props.iconLeading" />
              <span>
                {{ option.label }}
              </span>
              <span
                v-show="isSelected(option)"
                :data-uk-icon="props.iconSelected"
              />
            </li>
          </template>
        </slot>
      </ul>
    </div>
  </div>
</template>

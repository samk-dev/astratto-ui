<template>
  <div class="multi-select">
    <div class="selected-items">
      <div v-for="item in selectedItems" :key="item.id" class="selected-item">
        <span>{{ item.label }}</span>
        <button
          class="remove-button"
          aria-label="Remove item"
          @click="removeSelectedItem(item)"
        >
          &#x2715;
        </button>
      </div>
    </div>

    <input
      v-model="searchQuery"
      type="text"
      class="search-input"
      placeholder="Search..."
    />

    <ul
      ref="optionsList"
      class="options-list"
      tabindex="0"
      role="listbox"
      @keydown.enter="toggleSelection()"
      @keydown.down.prevent="navigateOptions('down')"
      @keydown.up.prevent="navigateOptions('up')"
      @focus="setActiveOptionIndex(0)"
      @blur="setActiveOptionIndex(-1)"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="option.id"
        :class="{ 'option-active': index === activeOptionIndex }"
        role="option"
        :aria-selected="isSelected(option)"
        @click="toggleSelection(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

interface Option {
  id: number
  label: string
}

const options: Option[] = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' }
  // Add more options as needed
]

const selectedItems = ref<Option[]>([])
const searchQuery = ref('')
const activeOptionIndex = ref(-1)

const filteredOptions = computed(() => {
  return options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const isSelected = (option: Option) => {
  return selectedItems.value.some((item) => item.id === option.id)
}

const toggleSelection = (option?: Option) => {
  if (!option) return

  if (isSelected(option)) {
    selectedItems.value = selectedItems.value.filter(
      (item) => item.id !== option.id
    )
  } else {
    selectedItems.value = [...selectedItems.value, option]
  }
}

const removeSelectedItem = (item: Option) => {
  selectedItems.value = selectedItems.value.filter(
    (selectedItem) => selectedItem.id !== item.id
  )
}

const navigateOptions = (direction: string, page = false) => {
  if (direction === 'up') {
    activeOptionIndex.value =
      activeOptionIndex.value === -1
        ? filteredOptions.value.length - 1
        : activeOptionIndex.value - 1
  } else if (direction === 'down') {
    activeOptionIndex.value =
      activeOptionIndex.value === filteredOptions.value.length - 1
        ? -1
        : activeOptionIndex.value + 1
  }

  if (page) {
    const visibleOptions = Math.floor(
      document.documentElement.clientHeight / 40
    ) // Assuming each option has 40px height
    activeOptionIndex.value =
      direction === 'up'
        ? Math.max(activeOptionIndex.value - visibleOptions, 0)
        : Math.min(
            activeOptionIndex.value + visibleOptions,
            filteredOptions.value.length - 1
          )
  }

  if (activeOptionIndex.value !== -1) {
    const activeOptionElement = document.getElementById(
      `option-${activeOptionIndex.value}`
    )
    if (activeOptionElement)
      activeOptionElement.scrollIntoView({ block: 'nearest' })
  }
}

const setActiveOptionIndex = (index: number) => {
  activeOptionIndex.value = index
}

watchEffect(() => {
  if (activeOptionIndex.value !== -1) {
    const activeOptionElement = document.getElementById(
      `option-${activeOptionIndex.value}`
    )
    if (activeOptionElement)
      activeOptionElement.scrollIntoView({ block: 'nearest' })
  }
})
</script>

<style scoped>
.multi-select {
  position: relative;
  width: 200px;
}

.selected-items {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
}

.selected-item {
  display: flex;
  align-items: center;
  padding: 2px 5px;
  margin-right: 5px;
  background-color: #f0f0f0;
  border-radius: 3px;
}

.remove-button {
  margin-left: 5px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #999;
}

.search-input {
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.options-list {
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.option-active {
  background-color: #f0f0f0;
}

li[role='option'] {
  padding: 5px;
  cursor: pointer;
}
</style>

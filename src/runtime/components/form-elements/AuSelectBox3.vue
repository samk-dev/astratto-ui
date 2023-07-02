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

    <div ref="listboxContainer" class="listbox-container">
      <button
        class="listbox-button"
        :aria-expanded="isOptionsVisible"
        :aria-haspopup="true"
        :aria-controls="optionsListId"
        @click="toggleOptionsVisibility"
      >
        <span v-if="!selectedItems.length">Select an option</span>
        <span v-else>{{ selectedItems.length }} item(s) selected</span>
        <span class="arrow" :class="{ 'arrow-up': isOptionsVisible }"></span>
      </button>

      <input
        v-model="searchQuery"
        type="text"
        class="search-input"
        placeholder="Search..."
      />

      <ul
        v-show="isOptionsVisible"
        :id="optionsListId"
        ref="optionsList"
        class="options-list"
        tabindex="-1"
        role="listbox"
        @keydown.enter="toggleSelection()"
        @keydown.down.prevent="navigateOptions('down')"
        @keydown.up.prevent="navigateOptions('up')"
        @keydown.pageup.prevent="navigateOptions('up', true)"
        @keydown.pagedown.prevent="navigateOptions('down', true)"
        @focus="setActiveOptionIndex(0)"
        @blur="setActiveOptionIndex(-1)"
      >
        <li
          v-for="(option, index) in filteredOptions"
          :id="`option-${index}`"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'

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
const isOptionsVisible = ref(false)
const optionsListId = 'options-list-' + Math.random().toString(36).substring(7)

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

const toggleOptionsVisibility = () => {
  isOptionsVisible.value = !isOptionsVisible.value
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const listboxContainer = listboxContainerRef.value

  if (!listboxContainer?.contains(target)) {
    isOptionsVisible.value = false
  }
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOptionsVisible.value = false
  }
}

const listboxContainerRef = ref<HTMLElement | null>(null)

watchEffect(() => {
  if (activeOptionIndex.value !== -1) {
    const activeOptionElement = document.getElementById(
      `option-${activeOptionIndex.value}`
    )
    if (activeOptionElement)
      activeOptionElement.scrollIntoView({ block: 'nearest' })
  }
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
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

.listbox-container {
  position: relative;
}

.listbox-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.listbox-button:focus {
  outline: none;
}

.arrow {
  margin-left: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 4px 0 4px;
  border-color: #000 transparent transparent transparent;
  transition: transform 0.2s ease-in-out;
}

.arrow-up {
  transform: rotate(180deg);
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

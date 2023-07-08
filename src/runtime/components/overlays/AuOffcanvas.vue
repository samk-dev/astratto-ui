<script setup lang="ts">
defineOptions({
  name: 'AuModal'
})

interface PropsOffcanvas {
  id: string
  animation?: 'slide' | 'push' | 'reveal' | 'none'
  flip?: boolean
  title?: string
}
interface EmitsOffcanvas {
  (e: 'close'): void
}

const props = withDefaults(defineProps<PropsOffcanvas>(), {
  title: undefined,
  animation: 'slide',
  flip: false
})
const emits = defineEmits<EmitsOffcanvas>()
</script>

<template>
  <div
    :id="props.id"
    :data-uk-offcanvas="`mode: ${props.animation}; overlay: true`"
  >
    <div class="uk-offcanvas-bar">
      <button
        class="uk-offcanvas-close"
        type="button"
        data-uk-close
        @click="emits('close')"
      />

      <slot />
    </div>
  </div>
</template>

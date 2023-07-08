<script setup lang="ts">
defineOptions({
  name: 'AuModal'
})

interface PropsModal {
  id: string
}
interface EmitsModal {
  (e: 'close'): void
}

const props = defineProps<PropsModal>()
const emits = defineEmits<EmitsModal>()
</script>

<template>
  <div :id="props.id" class="uk-flex-top" data-uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button
        class="uk-modal-close-default"
        type="button"
        data-uk-close
        @click="emits('close')"
      />

      <div class="uk-modal-body" data-uk-overflow-auto>
        <slot />
      </div>
    </div>
  </div>
</template>

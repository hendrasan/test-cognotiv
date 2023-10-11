<script setup lang="ts">
import { cn } from '@/lib/cn'
import VButton from '@/components/base/VButton.vue'
import InputText from '../form/InputText.vue'
import InputTextarea from '../form/InputTextarea.vue'
import { computed, reactive } from 'vue'

defineProps<{
  isMounted: boolean
}>()

defineEmits<{
  (e: 'click-button'): void
}>()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isDisabled = computed(() => {
  return !form.name || !form.email || !form.message
})

const onSubmitForm = () => {
  alert('form submitted')

  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <div
    :class="
      cn(
        'relative',
        'before:hidden before:lg:block after:hidden after:lg:block',
        'before:absolute before:-top-10 before:-left-10 before:bg-primary before:h-[14px] ',
        'after:absolute after:-top-10 after:-left-10 after:bg-primary after:w-[14px] ',
        'before:transition-width after:transition-height before:transition-timing-snappier after:transition-timing-snappier',
        isMounted ? 'before:w-[100px] after:h-[100px]' : 'before:w-0 after:h-0 '
      )
    "
  >
    <div
      :class="
        cn(
          'bg-white/50 shadow-card text-neutral rounded-2lg p-4 lg:p-8 lg:opacity-100 scale-0 lg:min-w-[500px]',
          isMounted ? 'transition-timing-snappier scale-100 transition-transform' : 'scale-0'
        )
      "
    >
      <form class="space-y-4 lg:space-y-8" @submit.prevent="onSubmitForm">
        <input-text
          id="name"
          label="Name"
          placeholder="Enter your name"
          v-model="form.name"
          required
        />

        <input-text
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          v-model="form.email"
          required
        />

        <input-textarea
          id="message"
          label="Message"
          type="message"
          placeholder="Enter your message"
          v-model="form.message"
          required
        />

        <v-button type="submit" :disabled="isDisabled" classNames="w-full">Submit</v-button>
      </form>
    </div>
  </div>
</template>

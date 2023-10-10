<script setup lang="ts">
import { cn } from '@/lib/cn'
import VButton from '@/components/base/VButton.vue'

defineProps<{
  isMounted: boolean
}>()

defineEmits<{
  (e: 'click-button'): void
}>()
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
          'bg-white/50 shadow-card text-neutral rounded-2lg p-4 lg:p-8 2xl:p-12 opacity-0 translate-y-10 lg:opacity-100 lg:translate-y-0 lg:translate-x-[100vw]',
          isMounted
            ? 'animate-fade-in-up transition-timing-snappier lg:translate-x-0 lg:transition-transform'
            : 'lg:transition-opacity lg:opacity-0'
        )
      "
    >
      <div class="space-y-4 lg:space-y-8">
        <h1
          :class="
            cn(
              'font-bold text-2xl leading-none lg:text-4xl 2xl:text-6xl opacity-0 translate-x-10',
              isMounted ? 'animate-fade-in-left animation-delay-[750ms]' : ''
            )
          "
        >
          Our People Come First
        </h1>
        <p
          :class="
            cn(
              'font-semibold text-lg leading-snug lg:text-2xl 2xl:text-4xl opacity-0 translate-x-10',
              isMounted ? 'animate-fade-in-left animation-delay-[850ms]' : ''
            )
          "
        >
          We are independently owned, strategic creative agency forever curious and ready to
          transform the way business is done.
        </p>
      </div>
    </div>

    <div
      :class="
        cn(
          'flex justify-end mt-4 lg:mt-8  opacity-0 translate-y-10 lg:opacity-100 lg:translate-y-[100vh]',
          isMounted
            ? 'animate-fade-in-up animation-delay-[150ms] lg:translate-y-0 lg:transition-transform lg:transition-timing-snappier'
            : 'lg:transition-opacity lg:opacity-0'
        )
      "
    >
      <v-button @click="$emit('click-button')">Learn More</v-button>
    </div>
  </div>
</template>

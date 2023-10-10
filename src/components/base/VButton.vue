<script setup lang="ts">
import { cn } from '@/lib/cn'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    to?: string
    ashref?: boolean
    type?: string
    classNames?: string
  }>(),
  {
    type: 'button'
  }
)

const isLink = computed(() => {
  return props.to || props.ashref
})
</script>

<template>
  <component
    :is="to ? 'router-link' : ashref ? 'a' : 'button'"
    :to="to"
    :href="to"
    :type="!isLink && type"
    :class="
      cn(
        'bg-primary hover:bg-primary/90 transition-colors rounded-2lg text-white py-2 px-4 lg:py-4 lg:px-6 text-lg lg:text-2xl font-bold',
        classNames
      )
    "
  >
    <slot />
  </component>
</template>

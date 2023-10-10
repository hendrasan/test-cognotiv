<script setup lang="ts">
import { cn } from '@/lib/cn'

defineProps<{
  activeMenu: string
  slug: string
  label: string
}>()

defineEmits<{
  (e: 'select-menu', menu: string): void
}>()
</script>

<template>
  <li
    :class="
      cn(
        'cursor-pointer overflow-hidden transition-colors text-white lg:text-dark hover:text-primary',
        'after:h-[2px] after:bg-primary after:w-full after:-translate-x-full after:block after:transition-transform after:transition-timing-snappier lg:after:hidden',
        'lg:flex lg:items-center lg:before:transition-transform lg:before:transition-timing-snappier lg:before:h-4 lg:before:bg-primary lg:before:w-32 lg:before:-translate-x-full lg:before:mr-8',
        activeMenu === slug
          ? 'text-primary lg:text-primary after:translate-x-0 lg:before:translate-x-0'
          : ''
      )
    "
  >
    <a
      href="#"
      :class="cn('font-semibold', 'lg:font-bold lg:text-5xl 2xl:text-7xl')"
      @click="$emit('select-menu', slug)"
    >
      {{ label }}
    </a>
  </li>
</template>

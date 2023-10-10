<script setup lang="ts">
import { cn } from '@/lib/cn'
import { useMediaQuery } from '@vueuse/core'

// hardcoded for now, maybe can get from tailwind config
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

defineProps<{
  isMounted: boolean
  activeIndex: number
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-row fixed top-0',
        'lg:flex-col lg:fixed lg:top-0 lg:right-0 lg:z-10 lg:left-1/3 lg:w-2/3 transition-all transition-timing-snappier',
        isMounted ? 'grayscale' : ''
      )
    "
    :style="{
      transform: isLargeScreen
        ? `translateY(calc(-${activeIndex} * 100vh))`
        : `translateX(calc(-${activeIndex} * 100vw))`
    }"
  >
    <div class="min-w-full h-[100vh] lg:h-auto lg:max-h-screen">
      <img
        class="w-full h-full lg:h-screen object-cover"
        src="/images/about-image.jpg"
        alt="about image"
      />
    </div>

    <div class="min-w-full h-[100vh] lg:h-auto lg:max-h-screen">
      <img
        class="w-full h-full lg:h-screen object-cover"
        src="/images/product-image.jpg"
        alt="about image"
      />
    </div>

    <div class="min-w-full h-[100vh] lg:h-auto lg:max-h-screen">
      <img
        class="w-full h-full lg:h-screen object-cover"
        src="/images/contact-image.jpg"
        alt="about image"
      />
    </div>
  </div>
</template>

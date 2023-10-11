<script setup lang="ts">
import { cn } from '@/lib/cn'
import Flicking from '@egjs/vue3-flicking'
import { Arrow } from '@egjs/flicking-plugins'
import '@egjs/vue3-flicking/dist/flicking.css'
import IconPlay from '../icons/IconPlay.vue'

defineProps<{
  isMounted: boolean
}>()
</script>

<template>
  <div
    :class="
      cn(
        'relative',
        isMounted ? 'transition-timing-snappier scale-100 transition-transform' : 'scale-0'
      )
    "
  >
    <Flicking :plugins="[new Arrow()]" :options="{ align: 'center', circular: true }">
      <div
        v-for="index in 3"
        :key="index"
        :class="
          cn(
            'mx-2 bg-white/50 shadow-card text-neutral rounded-2lg p-8 lg:opacity-100 min-h-[200px] lg:max-w-[420px]'
          )
        "
      >
        <h2 class="text-dark font-bold text-2x mb-5 lg:leading-tight lg:mb-10 text-4xl lg:text-5xl">
          We Solve <br class="hidden lg:block" />Your
        </h2>
        <span
          class="block relative overflow-hidden text-white font-bold uppercase text-3xl lg:text-5xl before:absolute before:animate-bg-x-in before:content-['Problem'] before:uppercase before:text-primary before:text-fill"
          >Problem</span
        >
      </div>
      <template #viewport>
        <span class="flicking-arrow-prev hidden"></span>
        <span
          class="flicking-arrow-next cursor-pointer bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white w-10 h-10 lg:w-20 lg:h-20 absolute right-5 lg:right-10 top-1/2 transform -translate-y-1/2 z-10"
        >
          <IconPlay class="w-6 h-6 lg:w-12 lg:h-12" />
        </span>
      </template>
    </Flicking>
  </div>
</template>

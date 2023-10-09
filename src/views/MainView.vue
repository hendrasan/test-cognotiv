<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { cn } from '@/lib/cn'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

const isLeaving = ref(false)
const isMounted = ref(false)

// simulate a delay when leaving the page
// not recommended, but necessary to add a leaving effect
// on elements on the page
onBeforeRouteLeave((to, from, next) => {
  isLeaving.value = true

  setTimeout(() => {
    next()
  }, 500)
})

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true
  }, 150)
})
</script>

<template>
  <div>
    <div class="pt-4 pl-4 lg:pt-12 lg:pl-12 relative">
      <div
        :class="
          cn(
            'hidden bg-primary h-72 w-5/12 lg:block lg:-translate-x-full transition-transform transition-timing-snappier absolute top-0 left-0 z-10',
            isMounted ? 'lg:translate-x-0' : '',
            isLeaving ? 'lg:-translate-x-[50px]' : ''
          )
        "
      ></div>
      <RouterLink
        to="/"
        :class="
          cn(
            'flex gap-1 items-center transition-all transition-timing-snappier relative z-20',
            isMounted ? 'lg:text-white' : '',
            isLeaving ? 'lg:-translate-x-[50px] opacity-0' : ''
          )
        "
      >
        <IconArrowLeft />
        Back</RouterLink
      >
    </div>
    <!-- menu -->

    <!-- right image area -->

    <!-- content -->
    <h1>This is a main page</h1>
  </div>
</template>

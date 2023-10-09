<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { cn } from '@/lib/cn'
import IconLongArrowRight from '@/components/icons/IconLongArrowRight.vue'

const isHover = ref(false)
const isLeaving = ref(false)

// simulate a delay when leaving the page
// not recommended, but necessary to add a leaving effect
// on elements on the page
onBeforeRouteLeave((to, from, next) => {
  isLeaving.value = true

  setTimeout(() => {
    next()
  }, 500)
})
</script>

<template>
  <div>
    <!-- lines -->
    <div class="hidden lg:flex fixed bottom-[50px] left-[50px] gap-[20px]">
      <div class="w-[140px]">
        <div
          :class="
            cn(
              'transition-transform transition-timing-snappy origin-left w-[1px] h-[18px] bg-primary',
              isHover ? 'scale-x-[140]' : 'scale-x-0'
            )
          "
        ></div>
      </div>
      <div class="w-[67px]">
        <div
          :class="
            cn(
              'transition-transform transition-timing-snappy origin-left w-[1px] h-[18px] bg-primary',
              isHover ? 'scale-x-[67]' : 'scale-x-0'
            )
          "
        ></div>
      </div>
    </div>

    <div class="hidden lg:flex fixed top-[50px] right-[50px] gap-[20px]">
      <div class="w-[67px]">
        <div
          :class="
            cn(
              'transition-width float-right transition-timing-snappy origin-right h-[18px] bg-primary',
              isHover ? 'w-[67px]' : 'w-0'
            )
          "
        ></div>
      </div>
      <div class="w-[140px]">
        <div
          :class="
            cn(
              'transition-width float-right transition-timing-snappy origin-right h-[18px] bg-primary',
              isHover ? 'w-[140px]' : 'w-0'
            )
          "
        ></div>
      </div>
    </div>
    <!-- /lines -->

    <div
      class="container max-w-6xl mx-auto px-4 flex flex-col justify-center min-h-screen relative"
    >
      <div class="max-w-[800px] 2xl:max-w-[960px] mx-auto">
        <div class="flex flex-col justify-center relative group">
          <h1
            :class="
              cn(
                'text-primary font-bold text-5xl lg:text-8xl 2xl:text-[150px] z-[2] leading-none mb-4 lg:mb-0 lg:absolute lg:top-0 lg:-left-16 lg:-translate-y-1/2 group-hover:scale-105 transition-transform origin-top-left transition-timing-snappy',
                isLeaving ? 'lg:-translate-y-[400vh]' : ''
              )
            "
          >
            We Create
          </h1>
          <div class="overflow-hidden">
            <img
              src="/images/splash.jpg"
              alt="splash image"
              :class="
                cn(
                  'max-h-[440px] 2xl:max-h-none grayscale transition-timing-snappy group-hover:grayscale-0 group-hover:scale-125',
                  isLeaving ? 'opacity-0' : ''
                )
              "
              @mouseenter="isHover = true"
              @mouseleave="isHover = false"
            />
          </div>
          <div
            :class="
              cn(
                'mt-4 lg:mt-0 lg:absolute lg:-bottom-10 2xl:-bottom-16 lg:-left-16 2xl:-left-24 translate-y-1/2 transition-timing-snappy',
                isLeaving ? 'translate-y-[400vh] opacity-0' : ''
              )
            "
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
          >
            <RouterLink
              to="/main"
              class="inline-flex items-center gap-8 2xl:gap-8 leading-none z-[2] -translate-y-1/2 group/btn bg-primary lg:bg-transparent lg:hover:bg-primary px-6 py-4 2xl:px-12 2xl:py-6 rounded-lg"
            >
              <!-- <span class="rounded bg-primary"></span> -->
              <span
                class="shrink-0 uppercase font-bold text-white lg:text-primary text-3xl lg:text-5xl 2xl:text-[72px] group-hover/btn:text-white transition-all transition-timing-snappy lg:-translate-x-full lg:invisible lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:visible lg:group-hover:opacity-100"
                >Awesome Things</span
              >
              <IconLongArrowRight
                class="text-white lg:text-primary grow-0 max-w-[50px] 2xl:max-w-none group-hover/btn:text-white transition-all transition-timing-snappy lg:translate-x-full lg:invisible lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:visible lg:group-hover:opacity-100"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

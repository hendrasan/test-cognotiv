<script setup lang="ts">
import { ref } from 'vue'

const isHover = ref(false)
</script>

<template>
  <div class="hidden lg:flex fixed bottom-[50px] left-[50px] gap-[20px]">
    <div class="w-[140px]">
      <div
        class="transition-transform transition-timing-snappy origin-left w-[1px] h-[18px] bg-primary"
        :class="[isHover ? 'scale-x-[140]' : 'scale-x-0']"
      ></div>
    </div>
    <div class="w-[67px]">
      <div
        class="transition-transform transition-timing-snappy origin-left w-[1px] h-[18px] bg-primary"
        :class="[isHover ? 'scale-x-[67]' : 'scale-x-0']"
      ></div>
    </div>
  </div>

  <div class="hidden lg:flex fixed top-[50px] right-[50px] gap-[20px]">
    <div class="w-[67px]">
      <div
        class="transition-width float-right transition-timing-snappy origin-right h-[18px] bg-primary"
        :class="[isHover ? 'w-[67px]' : 'w-0']"
      ></div>
    </div>
    <div class="w-[140px]">
      <div
        class="transition-width float-right transition-timing-snappy origin-right h-[18px] bg-primary"
        :class="[isHover ? 'w-[140px]' : 'w-0']"
      ></div>
    </div>
    <!-- <div class="w-[67px] h-[18px] bg-primary"></div>
    <div class="w-[140px] h-[18px] bg-primary"></div> -->
  </div>

  <div class="container max-w-6xl mx-auto px-4 flex flex-col justify-center min-h-screen relative">
    <!-- <div class="grid grid-rows-[24px_1fr] lg:grid-rows-[64px_1fr] 2xl:grid-rows-[92px_1fr]">
      <h1 class="text-primary font-bold text-5xl lg:text-9xl 2xl:text-[185px] z-[2] leading-none">
        We Create
      </h1> -->
    <div class="max-w-[800px] 2xl:max-w-[960px] mx-auto">
      <div class="flex flex-col justify-center relative group">
        <h1
          class="text-primary font-bold text-5xl lg:text-8xl 2xl:text-[150px] z-[2] leading-none absolute top-0 -left-16 -translate-y-1/2 group-hover:scale-105 transition-transform origin-top-left transition-timing-snappy"
        >
          We Create
        </h1>
        <div class="overflow-hidden">
          <img
            src="/images/splash.jpg"
            alt="splash image"
            class="max-h-[440px] 2xl:max-h-none grayscale transition-timing-snappy group-hover:grayscale-0 group-hover:scale-125"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
          />
        </div>
        <div
          class="absolute -bottom-10 2xl:-bottom-16 -left-16 2xl:-left-24 translate-y-1/2"
          @mouseenter="isHover = true"
          @mouseleave="isHover = false"
        >
          <RouterLink
            to="/main"
            class="inline-flex items-center gap-8 2xl:gap-8 leading-none z-[2] -translate-y-1/2 group/btn hover:bg-primary px-6 py-4 2xl:px-12 2xl:py-6 rounded-lg"
          >
            <!-- <span class="rounded bg-primary"></span> -->
            <span
              class="shrink-0 uppercase text-3xl lg:text-5xl 2xl:text-[72px] font-bold text-primary group-hover/btn:text-white transition-all transition-timing-snappy -translate-x-full invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100"
              >Awesome Things</span
            >
            <svg
              width="151"
              height="30"
              viewBox="0 0 151 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-primary group-hover/btn:text-white grow-0 max-w-[50px] 2xl:max-w-none transition-all transition-timing-snappy translate-x-full invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100"
            >
              <path
                d="M149.536 40.5355C151.488 38.5829 151.488 35.4171 149.536 33.4645L117.716 1.64465C115.763 -0.307971 112.597 -0.30797 110.645 1.64465C108.692 3.59727 108.692 6.7631 110.645 8.71572L138.929 37L110.645 65.2843C108.692 67.2369 108.692 70.4027 110.645 72.3553C112.597 74.308 115.763 74.308 117.716 72.3553L149.536 40.5355ZM4.37114e-07 42L146 42L146 32L-4.37114e-07 32L4.37114e-07 42Z"
                fill="currentColor"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

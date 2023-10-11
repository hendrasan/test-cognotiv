<script setup lang="ts">
import { cn } from '@/lib/cn'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { computed, reactive } from 'vue'
import IconPlay from '../icons/IconPlay.vue'

const modules = [Navigation]

const swiperOptions = {
  navigation: {
    nextEl: '.js-next'
  }
}

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
  <div class="relative">
    <button
      class="js-next bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white w-10 h-10 lg:w-20 lg:h-20 absolute -right-5 lg:-right-10 top-1/2 transform -translate-y-1/2 z-10"
    >
      <IconPlay class="w-6 h-6 lg:w-12 lg:h-12" />
    </button>
    <swiper
      :slides-per-view="1"
      :space-between="30"
      :navigation="swiperOptions.navigation"
      :modules="modules"
      :centeredSlides="true"
      :rewind="true"
      class="lg:max-w-[400px]"
    >
      <swiper-slide v-for="index in 3" :key="index">
        <div
          :class="
            cn(
              'bg-white/50 shadow-card text-neutral rounded-2lg p-8 lg:opacity-100 scale-0 min-h-[200px] lg:max-w-[400px]',
              isMounted ? 'transition-timing-snappier scale-100 transition-transform' : 'scale-0'
            )
          "
        >
          <h2
            class="text-dark font-bold text-2x mb-5 lg:leading-tight lg:mb-10 text-4xl lg:text-5xl"
          >
            We Solve <br class="hidden lg:block" />Your
          </h2>
          <span
            class="block relative overflow-hidden text-white font-bold uppercase text-3xl lg:text-5xl before:absolute before:animate-fill-in before:content-['Problem'] before:uppercase before:text-primary before:overflow-hidden"
            >Problem</span
          >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

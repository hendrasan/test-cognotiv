<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { cn } from '@/lib/cn'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import NavItem from '@/components/ui/NavItem.vue'
import ContentBg from '@/components/ui/ContentBg.vue'
import AboutContent from '@/components/content/AboutContent.vue'

const isLeaving = ref(false)
const isMounted = ref(false)

const menus = [
  {
    id: 1,
    label: 'About Us',
    slug: 'about'
  },
  {
    id: 2,
    label: 'Our Product',
    slug: 'product'
  },
  {
    id: 3,
    label: 'Contact Us',
    slug: 'contact'
  }
]

const activeMenu = ref('about')
// find the index of the active menu
const activeIndex = computed(() => {
  return menus.findIndex((menu) => menu.slug === activeMenu.value)
})

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

const setActiveMenu = async (menu: string) => {
  activeMenu.value = menu
  isMounted.value = false

  await nextTick()

  setTimeout(() => {
    isMounted.value = true
  }, 1500)
}
</script>

<template>
  <div>
    <div class="pt-4 pl-4 lg:pt-12 lg:pl-12 relative">
      <div
        :class="
          cn(
            'bg-primary h-14 w-full lg:h-72 lg:w-5/12 -translate-x-full absolute top-0 left-0 z-10 transition-transform',
            isMounted ? 'translate-x-0 transition-timing-snappier' : '-translate-x-full',
            isLeaving ? '-translate-x-[50px]' : ''
          )
        "
      ></div>
      <RouterLink
        to="/"
        :class="
          cn(
            'flex gap-1 items-center transition-all transition-timing-snappier relative z-20',
            isMounted ? 'text-white' : '',
            isLeaving ? 'lg:-translate-x-[50px] opacity-0' : ''
          )
        "
      >
        <IconArrowLeft />
        Back</RouterLink
      >
    </div>

    <!-- menu -->
    <nav class="relative z-20 mt-12 px-4 lg:pl-12 lg:mt-0 lg:absolute lg:bottom-20 lg:left-20">
      <ul class="flex gap-4 justify-between lg:flex-col lg:gap-8">
        <NavItem
          v-for="menu in menus"
          :key="menu.id"
          :activeMenu="activeMenu"
          :slug="menu.slug"
          :label="menu.label"
          @select-menu="setActiveMenu"
        />
      </ul>
    </nav>

    <!-- right image area -->
    <ContentBg :isMounted="isMounted" :activeIndex="activeIndex" />

    <!-- content -->
    <div
      :class="
        cn(
          'mt-5 px-5',
          'lg:fixed lg:top-0 lg:left-1/2 lg:max-w-[40%] lg:h-full lg:z-20 lg:flex lg:flex-col lg:justify-center'
        )
      "
    >
      <!-- About content -->
      <AboutContent
        v-if="activeMenu === 'about'"
        :isMounted="isMounted"
        @click-button="
          () => {
            console.log('button clicked')
            setActiveMenu('product')
          }
        "
      />

      <!-- Product content -->

      <!-- Contact content -->
    </div>
  </div>
</template>

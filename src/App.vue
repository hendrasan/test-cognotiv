<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
.app {
  background: url('/images/bg.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
}
</style>

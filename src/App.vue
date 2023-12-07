<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/layouts/MainHeader.vue'
</script>

<template>
  <MainHeader />
  <RouterView class="bg-cyan-200 dark:bg-cyan-800" />
</template>

<style>
@import './assets/tailwind.css';
</style>

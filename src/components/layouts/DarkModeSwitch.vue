<script setup lang="ts">
import { ref } from 'vue'

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
}
</script>

<template>
  <button @click="toggleDarkMode" class="p-2 text-cyan-900 dark:text-cyan-300 font-bold mx-4">
    {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

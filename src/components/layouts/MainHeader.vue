<script setup lang="ts">
import { ref } from 'vue'
import DarkModeSwitch from './DarkModeSwitch.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-cyan-300 p-4 dark:bg-cyan-900">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-cyan-900 text-xl font-bold dark:text-cyan-300">Web Developer Challenge</div>

      <nav class="hidden md:flex items-center">
        <router-link to="/" class="text-cyan-900 font-bold mx-4 dark:text-cyan-300"
          >Home</router-link
        >
        <DarkModeSwitch />
      </nav>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-cyan-900 hover:bg-white focus:ring-cyan-300 dark:text-cyan-300 dark:hover:bg-white dark:hover:text-cyan-900 dark:focus:ring-cyan-900"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="justify-between items-center w-full md:hidden lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <router-link to="/" class="text-cyan-900 font-bold ml-6 dark:text-cyan-300"
            >Home</router-link
          >
        </li>
        <li>
          <DarkModeSwitch />
        </li>
      </ul>
    </div>
  </header>
</template>

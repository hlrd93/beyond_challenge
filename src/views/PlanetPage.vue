<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import LoadingScreen from '../components/layouts/LoadingScreen.vue'

const route = useRoute()
const router = useRouter()
const planet = ref<Planet>()

const fetchData = async (url: string) => {
  try {
    const apiUrl = url
    const response = await fetch(apiUrl)
    const data = await response.json()
    planet.value = data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const goBack = () => {
  router.go(-1)
}

onMounted(() => {
  fetchData(route.params.url as string)
})
</script>

<template>
  <div v-if="planet" class="p-10 flex flex-col items-center w-full h-full fixed">
    <h1 class="text-xl font-bold mb-4 text-cyan-900 dark:text-cyan-300">Star Wars Planet</h1>
    <div class="bg-cyan-300 px-10 py-6 shadow-lg rounded-lg">
      <h2 class="text-xl text-cyan-900 font-bold mb-5">{{ planet.name }}</h2>
      <p><strong class="text-cyan-900 font-bold">Population:</strong> {{ planet.population }}</p>
      <p>
        <strong class="text-cyan-900 font-bold">Orbital Period:</strong> {{ planet.orbital_period }}
      </p>
      <p>
        <strong class="text-cyan-900 font-bold">Rotation Period:</strong>
        {{ planet.rotation_period }}
      </p>
      <p>
        <strong class="text-cyan-900 font-bold">Orbital Period:</strong> {{ planet.orbital_period }}
      </p>
      <p><strong class="text-cyan-900 font-bold">Diameter:</strong> {{ planet.diameter }}</p>
      <p><strong class="text-cyan-900 font-bold">Climate:</strong> {{ planet.climate }}</p>
      <p><strong class="text-cyan-900 font-bold">Gravity:</strong> {{ planet.gravity }}</p>
      <p><strong class="text-cyan-900 font-bold">Terrain:</strong> {{ planet.terrain }}</p>
      <p>
        <strong class="text-cyan-900 font-bold">Surface Water:</strong> {{ planet.surface_water }}
      </p>
      <p><strong class="text-cyan-900 font-bold">Population:</strong> {{ planet.population }}</p>
      <p><strong class="text-cyan-900 font-bold">Residents:</strong> {{ planet.residents }}</p>
      <p><strong class="text-cyan-900 font-bold">Films:</strong> {{ planet.films }}</p>
    </div>
    <div class="mt-10">
      <button
        @click="goBack"
        class="bg-cyan-700 text-cyan-100 font-bold dark:bg-cyan-300 dark:text-cyan-900 px-4 py-2 rounded-full"
      >
        Back
      </button>
    </div>
  </div>
  <LoadingScreen v-else />
</template>

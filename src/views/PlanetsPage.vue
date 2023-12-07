<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingScreen from '../components/layouts/LoadingScreen.vue'
import PlanetItem from '../components/planets/PlanetItem.vue'
import PaginationButtons from '../components/planets/PaginationButtons.vue'

const planets = ref<PlanetItem[]>([])
const nextLink = ref<string | null>(null)
const previousLink = ref<string | null>(null)

const fetchData = async (url: string | null = null) => {
  try {
    const apiUrl = url || 'https://swapi.dev/api/planets/'
    const response = await fetch(apiUrl)
    const data = await response.json()
    planets.value = data.results
    nextLink.value = data.next
    previousLink.value = data.previous
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
const fetchNextPage = () => {
  planets.value = []
  if (nextLink.value) {
    fetchData(nextLink.value)
  }
}
const fetchPreviousPage = () => {
  planets.value = []
  if (previousLink.value) {
    fetchData(previousLink.value)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div v-if="planets.length" class="p-10 flex flex-col items-center w-full h-full fixed">
    <h1 class="text-xl font-bold mb-4 text-cyan-900 dark:text-cyan-300">Star Wars Planets</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PlanetItem v-for="planet in planets" :key="planet.name" :planet="planet" />
    </div>

    <PaginationButtons
      :previousLink="previousLink"
      :nextLink="nextLink"
      @previous="fetchPreviousPage"
      @next="fetchNextPage"
    />
  </div>
  <LoadingScreen v-else />
</template>

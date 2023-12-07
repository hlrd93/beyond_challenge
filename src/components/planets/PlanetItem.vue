<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  planet: PlanetItem
}>()

const goPlanetPage = () => {
  router.push({ name: 'planet', params: { url: props.planet.url } })
}
</script>

<template>
  <div class="bg-cyan-300 px-10 py-5 shadow-lg rounded-lg cursor-pointer" @click="goPlanetPage">
    <h2 class="text-xl text-cyan-900 font-bold mb-2">{{ planet.name }}</h2>
    <p><strong class="text-cyan-900 font-bold">Population:</strong> {{ planet.population }}</p>
    <p><strong class="text-cyan-900 font-bold">Rotation Period:</strong> {{ planet.rotation_period }}</p>
    <p><strong class="text-cyan-900 font-bold">Orbital Period:</strong> {{ planet.orbital_period }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  previousLink: string | null
  nextLink: string | null
}>()
const emit = defineEmits<{
  (event: 'previous'): void
  (event: 'next'): void
}>()

const fetchPreviousPage = () => {
  emit('previous')
}
const fetchNextPage = () => {
  emit('next')
}
</script>

<template>
  <div class="mt-10">
    <button
      v-if="previousLink"
      @click="fetchPreviousPage"
      class="bg-cyan-700 text-cyan-100 font-bold dark:bg-cyan-300 dark:text-cyan-900 px-4 py-2 rounded-full mr-10"
    >
      Previous
    </button>

    <button v-if="nextLink" @click="fetchNextPage" class="bg-cyan-700 text-cyan-100 font-bold dark:bg-cyan-300 dark:text-cyan-900 px-4 py-2 rounded-full">
      Next
    </button>
  </div>
</template>

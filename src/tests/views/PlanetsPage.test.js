import { shallowMount } from '@vue/test-utils'
import '@testing-library/jest-dom'
import PlanetsPage from '@/views/PlanetsPage.vue'

test('Renders planets and pagination buttons correctly', () => {
  const data = {
    results: [
      {
        name: 'Planet 1',
        population: '50',
        rotation_period: '24',
        orbital_period: '365',
        url: 'https://swapi.dev/api/planets/1'
      },
      {
        name: 'Planet 2',
        population: '60',
        rotation_period: '23',
        orbital_period: '300',
        url: 'https://swapi.dev/api/planets/2'
      }
    ],
    next: 'https://swapi.dev/api/planets/?page=2',
    previous: null
  }
  const wrapper = shallowMount(PlanetsPage, {
    attrs: {
      planets: data.results,
      nextLink: data.next,
      previousLink: data.previous
    }
  })

  expect(wrapper.find('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4')).toBeTruthy()
  expect(wrapper.find('bg-cyan-300 px-10 py-5 shadow-lg rounded-lg cursor-pointer')).toBeTruthy()
  expect(
    wrapper.find(
      'bg-cyan-700 text-cyan-100 font-bold dark:bg-cyan-300 dark:text-cyan-900 px-4 py-2 rounded-full mr-10'
    )
  ).toBeTruthy()
})

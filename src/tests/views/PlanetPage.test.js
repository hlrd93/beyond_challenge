import { shallowMount } from '@vue/test-utils'
import '@testing-library/jest-dom'
import PlanetsPage from '@/views/PlanetsPage.vue'

test('Renders planet correctly', () => {
  const data = {
    results: {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/6/',
        'https://swapi.dev/api/people/7/',
        'https://swapi.dev/api/people/8/',
        'https://swapi.dev/api/people/9/',
        'https://swapi.dev/api/people/11/',
        'https://swapi.dev/api/people/43/',
        'https://swapi.dev/api/people/62/'
      ],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/4/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/'
      ]
    }
  }
  const wrapper = shallowMount(PlanetsPage, {
    attrs: {
      planets: data.results,
    }
  })

  expect(wrapper.find('bg-cyan-300 px-10 py-6 shadow-lg rounded-lg')).toBeTruthy()
})

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
    <div class="max-w-md w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div v-if="!hasStarted" class="flex flex-col items-center justify-center p-12 space-y-6">
        <img src="/pokeball.png" alt="Pokeball" class="w-32 h-32 animate-bounce" />
        <h2 class="text-3xl font-bold text-gray-800">¡Encuentra tu Pokémon!</h2>
        <PokeButton @click="startSearch" />
      </div>

      <div v-else-if="loading" class="flex flex-col items-center justify-center p-12 gap-8">
        <div class="relative">
          <div class="animate-spin rounded-full h-20 w-20 border-4 border-blue-500 border-t-transparent shadow-lg"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/pokeball.png" alt="Pokeball" class="w-10 h-10" />
          </div>
        </div>
        <span class="text-2xl font-bold text-gray-700 animate-pulse">
          Buscando Pokémon...
        </span>
      </div>

      <div v-else-if="pokeName" class="relative p-6">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 rounded-2xl"></div>
        <div class="relative flex flex-col items-center space-y-6">
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img 
              :src="pokeImg" 
              :alt="pokeName"
              @click="toggleShiny"
              class="w-64 md:w-96 lg:w-[300px] object-contain transform transition-all duration-300 hover:scale-110 cursor-pointer drop-shadow-xl"
            >
          </div>

          <div class="text-center space-y-4">
            <h1 class="text-4xl font-bold capitalize bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ pokeName }} {{ isShiny ? '✨' : '' }}
            </h1>

            <div class="flex gap-2 justify-center flex-wrap">
              <span 
                v-for="type in pokeTypes" 
                :key="type.type.name"
                class="px-4 py-1.5 rounded-full text-sm font-semibold capitalize shadow-md transition-transform hover:scale-105"
                :class="getTypeColor(type.type.name)"
              >
                {{ type.type.name }}
              </span>
            </div>
          </div>

          <PokeButton @click="fetchData" class="mt-6" />
        </div>
      </div>

      <div v-else-if="error" class="p-8 text-center">
        <div class="bg-red-100 text-red-700 p-4 rounded-lg">
          <p class="font-semibold">¡Ups! Algo salió mal</p>
          <p class="text-sm">{{ error.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from './composables/api'
import { useFetch } from './composables/apiFetch'
import PokeButton from './PokeButton.vue'

const hasStarted = ref(false)
const apiURL = ref(api.defaults.baseURL as string)
const { 
  pokeName, 
  pokeTypes,
  pokeImg, 
  error, 
  loading, 
  fetchData, 
  toggleShiny, 
  isShiny 
} = useFetch(apiURL.value)

const startSearch = () => {
  hasStarted.value = true
  fetchData()
}

const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    normal: 'bg-gray-400 text-white',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    electric: 'bg-yellow-400 text-black',
    grass: 'bg-green-500 text-white',
    ice: 'bg-blue-200 text-black',
    fighting: 'bg-red-700 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-yellow-600 text-white',
    flying: 'bg-indigo-400 text-white',
    psychic: 'bg-pink-500 text-white',
    bug: 'bg-lime-500 text-white',
    rock: 'bg-yellow-800 text-white',
    ghost: 'bg-purple-700 text-white',
    dragon: 'bg-indigo-700 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-gray-500 text-white',
    fairy: 'bg-pink-300 text-black'
  }
  
  return colors[type] || 'bg-gray-400 text-white'
}
</script>

<style scoped>
</style>

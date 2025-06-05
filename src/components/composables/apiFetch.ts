import { ref, type Ref, computed } from 'vue'   
import type { Pokemon } from '../interface/pokemon'
import api  from './api'

export function useFetch(url: string) {
    const pokemon: Ref<Pokemon | null> = ref(null)
    const error: Ref<Error | null> = ref(null)
    const loading = ref(false)
    const isShiny = ref(false)

    const fetchData = async () => {
        loading.value = true
        try {
            const num = ref(Math.floor(Math.random() * 1025) + 1)
            const { data } = await api.get<Pokemon>(`${url}/${num.value}`)
            await new Promise(resolve => setTimeout(resolve, 1000))
            pokemon.value = data 
            error.value = null
        } catch (e) {
            error.value = e as Error
            pokemon.value = null
        } finally {
            loading.value = false
        }
    }

    const toggleShiny = () => {
        isShiny.value = !isShiny.value
    }

    const pokeName = computed(() => pokemon.value?.forms[0].name ?? '')
    const pokeImg = computed(() => 
        isShiny.value ? pokemon.value?.sprites.front_shiny : pokemon.value?.sprites.front_default
    )
    const pokeTypes = computed(() => pokemon.value?.types ?? [])

    return {
        pokemon,
        error,
        loading,
        isShiny,
        fetchData,
        toggleShiny,
        pokeName,
        pokeImg,
        pokeTypes
    }
}
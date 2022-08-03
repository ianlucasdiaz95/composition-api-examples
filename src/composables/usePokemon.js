import { ref } from 'vue';
import axios from 'axios';

const usePokemon = (id) => {
    const pokemon = ref(null);
    const isLoading = ref(true);
    const error = ref(null);

    const searchPokemon =  async (id) => {

        if(!id) return;

        isLoading.value = true
        pokemon.value = null;

        try {

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            pokemon.value = data;
            isLoading.value = false;
            error.value = null;

        } catch (error) {

            error.value = error.message;

        }
        
    }

    searchPokemon(id);


   return {
        pokemon,
        isLoading,
        error,
        searchPokemon
   }
}

export default usePokemon;
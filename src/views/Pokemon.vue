<template>
  <div>

    <div v-if="!isLoading">
      <h1>Pokemon encontrado</h1>
      <h2>{{pokemon.name}}</h2>
      <img :src="pokemon.sprites.front_default" alt="pokemon.name">
    </div>
    <div v-if="isLoading">Buscando...</div>
    <router-link :to="{name: 'search-pokemon'}">Regresar </router-link>

  </div>
</template>

<script setup>
    import { watch } from 'vue';
    import { useRoute, onBeforeRouteLeave } from 'vue-router'
    import usePokemon from '../composables/usePokemon'

    const route = useRoute();

    watch(
      () => route.params.id,
      () => {
        
        searchPokemon(route.params.id);

    });

    onBeforeRouteLeave(() => {
      
      const answer = window.confirm('¿Está seguro que desea salir?');

      if(!answer) {
        return false;
      }

    });

    const {
        pokemon,
        isLoading,
        error,
        searchPokemon
    } = usePokemon(route.params.id);

</script>

<style scoped>
  img{
    margin: 0 auto;
    display: inline-block;
  }
</style>
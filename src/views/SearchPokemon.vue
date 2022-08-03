<template>
  <h1>Buscar pokemon <span>{{pokemonId}}</span></h1>
  <form @submit.prevent="onSubmit" action="">
    <input type="number" name="" placeholder="Pokemon Number" ref="focusedInput" v-model="pokemonId">
    <br><br>
    <span>Presione enter para buscar</span>
  </form>
</template>

<script setup>
    import { ref,
            onActivated,        
    } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const pokemonId = ref(1);
    const focusedInput = ref();

    onActivated(() => {
        focusedInput.value.select();
    });

    const onSubmit = () => {
        console.log('Pokemon buscado: ',pokemonId.value);

        router.push({ name: 'pokemon', params: { id: pokemonId.value } });

    }

</script>

<style scoped>

</style>
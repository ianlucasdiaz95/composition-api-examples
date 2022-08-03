<template>
    <h1>Slots!</h1>

    <button @click="toggleModal">Open modal</button>
    
    <modal title="Tituloo" v-if="isOpen" @on:close="toggleModal">
        <template v-slot:header >
            <h3>Un modal con Slots</h3>
        </template>

        <template v-slot:content >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, laboriosam!</p>
        </template>
        
        <template v-slot:actions >
            <button @click="toggleModal">Go back</button>
        </template>

        <!--  <template v-slot:exposed="slotProps" >
            <h3>{{ slotProps.title }}</h3>
        </template> slotProps -->   

        <template v-slot:exposed="{ title } " >
            <h3>{{ title }}</h3>
        </template><!-- destructured slotProps -->     
    </modal>
</template>

<script setup>
    import Modal from '../components/Modal.vue';
    import useModal from '../composables/useModal.js';

    const {
        isOpen,
        toggleModal
    } = useModal();

</script>

<style scoped>

</style>


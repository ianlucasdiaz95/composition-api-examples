<template>
    <h1>Our heroes</h1>
    <br>
    <h3>Iron man</h3>
    <p>Name: {{ironman.name}}</p>
    <p>Age: {{ironman.age}}</p>
    <br>
    <h3>Hulk</h3>
    <p>Name: {{hulk.name}}</p>
    <p>Age: {{hulk.age}}</p>
    <br>
    <button @click="changeIronman(); changeHulk()">Cover identities</button>
</template>

<script setup>
import { ref, reactive } from "vue";


    const ironman = ref({
        name: 'Tony Stark',
        age: 35,
    })

    const hulk = reactive({
        name: 'Bruce Banner',
        age: 40,
    })

    const changeIronman = () => {
        ironman.value.name = 'Not Tony Stark';
    }

    const changeHulk = () => {
        hulk.name = 'Not Bruce Banner';
    }
</script>


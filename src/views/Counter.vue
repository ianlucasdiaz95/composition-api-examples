<template>
    <div class="counter">
        <h1>Counter!</h1>
        <h3>{{count}}</h3>
        <button @click="grow">Grow count!</button>
        <button @click="shrink">Shrink count!</button>
    </div>
</template>

<script setup>
    import useCounter from './../composables/useCounter.js'
    const { count, grow, shrink } = useCounter(200);
</script>

<style scoped>

</style>


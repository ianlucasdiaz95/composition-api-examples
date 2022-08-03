<template>
  <div class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'counter' }">Counter</router-link>
    <router-link :to="{ name: 'users' }">Users</router-link>
    <router-link :to="{ name: 'search-pokemon' }">Search Pokemon</router-link>
    <router-link :to="{ name: 'todo' }">To Do</router-link>
    <router-link :to="{ name: 'slots' }">Slots</router-link>
  </div>


  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive"/>
  </router-view>
</template>

<script setup>
  
</script>

<style scoped>
  .nav{
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
</style>

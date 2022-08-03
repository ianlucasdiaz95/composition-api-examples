<template>
  <div class="userList">
    <slot v-for="user in users" :user="user" :key="user.id" ></slot>
  </div><!-- userList -->
</template>

<script setup>
    const props = defineProps({
        users: {
            type: Array,
            default: [],
            required: true,
        }
    });


</script>

<style scoped>
    .userList{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 50px;
    }
</style>
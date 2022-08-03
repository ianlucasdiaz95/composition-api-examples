<template>
    <div class="users">
        <h1 v-if="isLoading">Wait please...</h1>
        
        <div  v-if="!isLoading" class="userList">
            <h1>Users</h1>
            <user-list v-if="users.length != 0" v-slot="{ user }" :users="users">
                <user :user="user"></user>
            </user-list>
            <div v-if="users.length == 0" class="noResults">
                <p>No more users.</p>
            </div>
            <button @click="page != 1 ? page-- : page">Prev page</button><span>{{page}}</span><button @click="page++">Next page</button>
        </div>
        
    </div>
</template>

<script setup>
    import useUsers from '../composables/useUsers'
    import UserList from '../components/UserList.vue'
    import User from '../components/User.vue'

    const {users,isLoading,page} = useUsers();
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-bottom: 50px;
    }

    li{
        padding: 0;
        margin: 0;
    }

</style>


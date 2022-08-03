import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/search-pokemon',
        name: 'search-pokemon',
        component: () => import(/* webpackChunkName: "search-pokemon" */ '../views/SearchPokemon.vue')
    },
    {
        path: '/pokemon/:id',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import(/* webpackChunkName: "todo" */ '../views/ToDo.vue')
    },
    {
        path: '/slots',
        name: 'slots',
        component: () => import(/* webpackChunkName: "todo" */ '../views/Slots.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

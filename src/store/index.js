import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
    state: {
        todos: [
            { id : 1, text : 'Learn Vuex', done : true },
            { id : 2, text : 'Learn Composable Functions', done : false },
            { id : 3, text : 'Learn Lifecycle Hooks', done : true },
            { id : 4, text : 'Create a simple fetch API', done : false },
            { id : 5, text : 'Learn script setup syntax', done : false },
            { id : 6, text : 'Learn Vue Router Composables', done : true },
            { id : 7, text : 'Learn Vuex Store Modules', done : false },
        ]
    },
    mutations: {
        toggleTodo(state, task) {
            let todo = state.todos.find(t => t.id === task.id)
            todo = task
        },
        createTodo(state, task) {
            task.id = uuidv4()

            state.todos.push(task)
        }
    },
    actions: {
        toggleTodo({ commit }, task) {
            commit('toggleTodo', task)
        },
        createTodo({ state, commit }, task) {
            commit('createTodo', task)
        }
    },
    getters: {
        pendingTodos: state => {
            return state.todos.filter(todo => !todo.done)
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodosByStatus: (state, getters) => (status) => {
            switch (status) {
                case 'all':
                    return state.todos.map(todo => todo);
                case 'pending':
                    return getters.pendingTodos;
                case 'done':
                    return getters.doneTodos;
                default:
                    break;
            }
        },
    }
})

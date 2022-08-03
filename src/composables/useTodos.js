import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodos = () => {

    const store = useStore();
    const newTask = ref({})
    const status = ref('all');

    const toggleTodo = (task) => {
        store.dispatch('toggleTodo', task);
    }

    const createTodo = () => {
        store.dispatch('createTodo', newTask.value);
        newTask.value = {};
    }

    const pending = computed(() => {
        return store.getters['pendingTodos']
    });

    const done = computed(() => {
        return store.getters['doneTodos']
    });

    const getTodosByStatus = computed(() => {
        return store.getters['getTodosByStatus'](status.value)
    });

    return {
        status,
        pending,
        done,
        getTodosByStatus,
        toggleTodo,
        createTodo,
        newTask,
    }

}

export default useTodos;
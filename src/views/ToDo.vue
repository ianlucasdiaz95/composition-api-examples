<template>
    <div class="todo">
        <h1>ToDo List!</h1>
        <button @click="toggleModal">Create task</button>
        <h4>Pending ({{pending.length}})</h4>
        <div class="tasks">
            <div v-for="task in pending" :key="task.id" class="task">
                <p>{{task.text}}</p>
                <input @change="toggleTodo(task)" v-model="task.done" type="checkbox" name="done" id="">
            </div>
        </div>
        <h4>Completed ({{done.length}})</h4>
        <div class="tasks">
            <div v-for="task in done" :key="task.id" class="task -completed">
                <p>{{task.text}}</p>
                <input @change="toggleTodo(task)" v-model="task.done" type="checkbox" name="done" id="">
            </div>
        </div>
        <br>
        <br>
        <h1>Alternative ToDo List!</h1>
        <div class="buttons">
            <button @click="status = 'all'" >Get all tasks</button>
            <button @click="status = 'done'" >Get done tasks</button>
            <button @click="status = 'pending'" >Get pending tasks</button>
        </div>
        <br>
        <br>

        <div class="tasks">
            <div v-for="task in getTodosByStatus" :key="task.id" :class="{'-completed': task.done}" class="task">
                <p>{{task.text}}</p>
                <input @change="toggleTodo(task)" v-model="task.done" type="checkbox" name="done" id="">
            </div>
        </div>

        <modal v-if="isOpen" @on:close="toggleModal">
            <template v-slot:header >
                <h3>Create Task!</h3>
            </template>

            <template v-slot:content >
                <p>Complete the following fields to add a new task</p>
                <form @submit.prevent>
                    <label for="text">Text</label>
                    <br>
                    <input type="text" name="text" id="text" required v-model="newTask.text">
                    <br>
                    <label for="done">Done</label>
                    <input type="checkbox" name="done" id="done" v-model="newTask.done">
                    <br>
                    <br>
                    <button @click="createTodo" type="submit">Create</button>
                </form>
                <br>
            </template>
            
            <template v-slot:actions >
                <button @click="toggleModal">Close</button>
            </template>
        </modal>
    </div>
</template>

<script setup>
    import Modal from '../components/Modal.vue';
    import useTodos from '../composables/useTodos.js';
    import useModal from '../composables/useModal.js';
    
    const {
        status,
        pending,
        done,
        getTodosByStatus,
        toggleTodo,
        createTodo,
        newTask,
    } = useTodos();

    const {
        isOpen,
        toggleModal
    } = useModal();
    
</script>

<style scoped>
    .buttons{
        display: flex;
        gap: 20px;
    }

    input{
        border-radius: 12px;
        border: 1px solid #ccc;
        padding: 15px;
        margin-top: 10px;
    }
</style>


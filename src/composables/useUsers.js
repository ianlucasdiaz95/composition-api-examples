import {
    onMounted,
    watch,
    ref
} from 'vue';

const useUsers = () => {
    const users = ref([]);
    const isLoading = ref(true);
    const page = ref(1);

    async function fetchUsers() {
        const response = await fetch(`https://reqres.in/api/users?page=${page.value}`);
        const { data } = await response.json();
        users.value = data;
        isLoading.value = false;
    }

    onMounted(() => {
        fetchUsers();
    });

    watch(page, () => {
        isLoading.value = true;
        fetchUsers();
    });

    return {
        users,
        isLoading,
        page
    }
};

export default useUsers;
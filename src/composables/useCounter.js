import { ref } from 'vue'

const useCounter = (initialValue = 0) => {
    const count = ref(initialValue);

    const grow = () => {
        count.value++;
    };

    const shrink = () => {
        count.value--;
    };

    return {
        count,
        grow,
        shrink
    }
};

export default useCounter;
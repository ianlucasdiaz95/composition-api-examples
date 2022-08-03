<template>
  <div @click.self="$emit('on:close')" class="modal-background fade-in">

    <div class="modal-container">

        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="actions"></slot>

        <slot name="exposed" :title="props.title"></slot>
        
    </div>

  </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'Titulo por default'
        }
    });

    const emit = defineEmits(['on:close'])

</script>

<style scoped>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
    }

    .modal-container {
        min-width: 500px;
        max-width: 100%;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.09);
        padding: 20px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 250px;
        color: red;
    }


    .fade-in {
    animation: fadeIn ease-out 0.2s;
    -webkit-animation: fadeIn ease-out 0.2s;
    -moz-animation: fadeIn ease-out 0.2s;
    -o-animation: fadeIn ease-out 0.2s;
    -ms-animation: fadeIn ease-out 0.2s;
    }

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
</style>
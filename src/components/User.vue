<template>
  <div class="user">
    <div class="user__image">
      <img :src="user.avatar" alt="">
    </div>
    <div class="user__content">
      <span>{{props.user.first_name}} {{props.user.last_name}}</span>
      <strong>{{props.user.email}}</strong>
    </div>
  </div><!-- user -->
</template>

<script setup>
    const props = defineProps({
        user: {
            type: Object,
            default: {},
            required: true,
        }
    });

    console.log(props.user);


</script>

<style scoped>
    .user{
      padding: 5px 25px;
      border-radius: 8px;
      border: 1px solid transparent;
      font-size: 1em;
      font-weight: 500;
      box-shadow: 0px 0px 7px rgba(0,0,0,0.09);
      display: flex;
      align-items: center;
    }
  .user__content{
    text-align: left;
  }
    .user__content strong{
      font-size: 0.9em;
      display: block;
    }

    .user__image{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
    .user__image img{
      vertical-align: top;
      height: 100%;
    }
</style>
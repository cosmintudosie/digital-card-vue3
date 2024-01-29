
<template>
  <router-link to="/edit-profile" @click="closeMenu">
    <i class="fa-solid fa-user-pen fa-2x"></i>
  <slot></slot>
  </router-link>
</template>
<script setup>
  import {useUserStore} from "../../stores/user.js";
  const userStore = useUserStore()
  const closeMenu =()=>{
     userStore.showMenu=false
    //userStore.initialUser=JSON.parse(JSON.stringify(userStore.user))
                                    // userStore.edit=true
  }
</script>
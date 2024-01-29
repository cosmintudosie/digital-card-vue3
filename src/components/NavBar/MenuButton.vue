<template>
  <div v-if="loggedIn">
  <i @click = "showMenu" class="fa-solid fa-bars fa-2x menu cursor-pointer z-20"></i>
  </div>
  <div v-else>
    This is a Vivinet digital card
  </div>
</template>
<script setup>
  import {useUserStore} from "../../stores/user.js";
  const userStore = useUserStore()
  const showMenu =()=>{
     userStore.showMenu=true
  }
  const loggedIn = localStorage.getItem("id")
</script>
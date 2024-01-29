<template>
  <router-link to="/settings" @click="closeMenu">
  <i class="fa-solid fa-gear fa-2x"></i>
  <slot></slot>
  </router-link>
</template>
<script setup>
  import {useUserStore} from "../../stores/user.js";
  const userStore = useUserStore()
  const closeMenu =()=>{
     userStore.showMenu=false
  }
</script>
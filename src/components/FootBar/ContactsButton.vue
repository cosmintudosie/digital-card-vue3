<template>
  
    <router-link to="/contacts" @click="closeMenu">
      <i class="fa-regular fa-address-book fa-2x"></i
    >
    <slot></slot>
    </router-link>
  
</template>

<script setup>

import { useUserStore } from "../../stores/user.js";

  const userStore = useUserStore()
  const closeMenu =()=>{
     userStore.showMenu=false
  }
</script>

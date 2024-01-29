<template>
    <router-link type="button" :to="id? '/'+id : '/'" class="py-2 rounded-full cursor-pointer bg-transparent" @click = "closeMenu">
        <i class="fa-solid fa-house fa-2x"></i>
<slot></slot>
    </router-link>
</template>

<script setup>
    import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
import {useUserStore} from "../../stores/user.js";
  const userStore = useUserStore()
  const id=ref(userStore.user._id)
  
  const closeMenu =()=>{
     userStore.showMenu=false
  }
</script>
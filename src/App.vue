
<template >
  <div @click="handleDocumentClick" class="relative max-w-md min-h-full mx-auto m-2  
  font-mono ">
    <transition name="slide-left">
    <SideMenu v-if="showMenu" />
    </transition>
    <router-view ></router-view>
  </div>
</template>
    
<script setup>
    import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
    import MainApp from './components/MainApp.vue'
 import {storeToRefs} from "pinia";
  import Nav from "./components/NavBar/Nav.vue";
  import SideMenu from "./components/Menu/SideMenu.vue";
    import { RouterLink, RouterView } from "vue-router";
   import { useUserStore } from "./stores/user.js";
   const userStore = useUserStore()
   const {showMenu} = storeToRefs(userStore)
  const handleDocumentClick = (event) => {

    if (showMenu.value && !event.target.closest('.menu-container')&&!event.target.closest('.menu')) {
      showMenu.value = false;
    }
  };
    </script>
<style >

h1{
    font-size: 2rem;
}
.slide-down-leave-active,
.slide-down-enter-active {
  transition: 0.3s;
}
.slide-down-enter-from {
  transform: translate(0,100%);
}
.slide-down-leave-to {
  transform: translate(0,100%);
}
  .slide-left-leave-active,
  .slide-left-enter-active {
    transition: 0.3s;
  }
  .slide-left-enter-from {
    transform: translate(-100%,0);
  }
  .slide-left-leave-to {
    transform: translate(-100%,0);
  }
</style>

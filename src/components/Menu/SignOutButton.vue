<template>

<div @click="confirmMessage=true">
<i  class="fa-solid fa-right-from-bracket py-2 fa-2x cursor-pointer "></i>
  <slot></slot>
   <div v-if="confirmMessage" class=" h-60 w-full absolute bg-white border-2 z-50  m-auto top-14 right-0 flex flex-col items-center justify-around rounded-xl  ">
      <p> Sign out?</p>
     <div>
     <button class="px-5 py-1 me-4 rounded-xl border-2" @click="signOut">OK</button>
     <button class="px-5 py-1 rounded-xl border-2 " @click="confirmMessage =false">Cancel</button>
     </div>
    </div>
  </div>
</template>

<script setup>
    import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
 import { useRoute, useRouter } from 'vue-router'
  const router = useRouter()
  import {useUserStore} from "../../stores/user.js"
  const userStore = useUserStore()
  const confirmMessage = ref(false)
const signOut = ()=>{
  localStorage.clear();
  userStore.user={}
 // window.location.reload()
  userStore.showMenu=false
  router.push({ path: `/` });
}

</script>
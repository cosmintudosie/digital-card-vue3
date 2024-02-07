<template>
  <div class="mx-auto  relative"> 
<transition name='slide'>
    <Qrcode  v-if="showQr"/>
</transition>
   
    <div  class="relative text-gray-800 h-[175px] rounded-xl mx-1 mb-24">
      <img  :src="user.image" class="rounded-lg text-gray-800 h-full w-full" alt="No photo"  />
       
    <div  class="relative relative  w-[150px] h-[150px] border-white border-4
      rounded-full z-20 overflow-hidden mx-auto -mt-[15%]"
    >
      <img :src="user.avatar" alt="No photo" />
     
    </div>
    </div>
    <div class="flex justify-center py-2 "   >
    <div class="my-6 mx-3 text-center ">
    
     <h1 class="text-center text-lg font-bold mb-2  " >{{user.name?user.name:"My name"}}</h1>
    <p class="text-center text-gray-300 text-md " >{{user.about}}</p>
    </div>
</div>
    
  </div>
</template>

<script setup>
import {
  defineComponent,
  onBeforeMount,
  reactive,
  ref,
  computed,
  watch,
} from "vue";
import { storeToRefs } from "pinia";
import { useContactStore } from "../../stores/contact.js";
import Qrcode from "../Share/Qrcode.vue"
import Share from "../NavBar/Share.vue";

 const contactStore = useContactStore();

const {user, showQr} = storeToRefs(contactStore);
 
const openQr = () => (showQr.value = true);

</script>
<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s;
}
.slide-enter-from {
  transform: translate(0, -100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
}
</style>

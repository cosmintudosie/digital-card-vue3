<template>
    <div class="relative min-h-[700px] m-auto rounded-2xl 
    font-mono pt-4 overflow-hidden flex flex-col border-2 justify-between">
     
     <div class="flex flex-col items-start w-full ps-3">
        
         <div v-for="contact in updatedContacts" :key="contact.name" class="m-3 cursor-pointer text-left flex" >
           <img  :src="contact.avatar" class="rounded-full text-gray-800 w-[50px] h-[50px]" alt="No photo"  />
       <router-link :to="'/'+contact._id" class="ps-4 flex items-center ">{{contact.name}}</router-link>
         </div>
     </div>
      <div class = "sticky bottom-3 border-t-2 w-full  flex justify-around">
      <Back/>
        <Home />
      <button class="rounded-full px-1 bg-transparent" @click="showModal=true"><i class="fa-solid fa-plus fa-3x"></i></button>
      </div>
      <transition name='slide-down'>
  <ContactModal  v-if="showModal" @close="showModal=false"/>
      </transition>
 </div>
 </template>
 <script setup>
     import { ref, onMounted} from "vue";
     import { storeToRefs } from "pinia"
 import {useUserStore} from "../../stores/user.js";
 import Home from "../NavBar/Home.vue"
   import Nav from "../NavBar/Nav.vue"
    import Back from "../FootBar/Back.vue"
   import ContactModal from "./ContactModal.vue"
   import axios from "axios"
 const userStore = useUserStore()
 const contacts = userStore.user.contacts
   let updatedContacts =ref([])
   onMounted(async () => {
    const response = await axios.get("/api/users/contacts",{params:{contacts:contacts}})
     updatedContacts.value = response.data.sort((a, b) => a.name.localeCompare(b.name)) 
       })

 const showModal = ref(false);
     const selectedSite = ref(null);
   
 </script>
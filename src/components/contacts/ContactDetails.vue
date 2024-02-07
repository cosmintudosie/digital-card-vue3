<template>
   <div class="flex justify-center "
    >  
        <div v-if="user.company" class="flex flex-col flex-wrap items-center gap-1  rounded-2xl py-1 text-sm " >
            <i v-if="user.company" 
            class="fa-solid fa-building w-28 h-28 rounded-xl flex justify-center 
              items-center border-2 fa-4x"></i>
           
            <h2  class=" text-gray-300 " >Company name:</h2>
            <h2  class=" " >{{user.company}}</h2>
            </div>
        
        <div v-if="user.mail" class="flex flex-col flex-wrap items-center gap-1 rounded-2xl py-1 text-sm " >
            <i v-if="user.mail" 
            class="fa-solid fa-envelope w-28 h-28 rounded-xl flex justify-center 
              items-center border-2 fa-4x"></i>
            
            <div  v-if="user.mail" class='text-[12px]'>
                <h2  class=" text-gray-300 " >E-mail address</h2>
            <a :href="'mailto:' + user.mail" class="text-center self-center" >{{user.mail}}</a>
            </div>
        </div>
        <div v-if="user.phone" class="flex flex-col flex-wrap items-center gap-1  rounded-2xl py-1 text-sm  " >
            <i v-if="user.phone" 
            class="fa-solid fa-phone w-28 h-28 rounded-xl flex justify-center 
              items-center border-2 fa-4x"></i>
           
            <div v-if="user.phone" class='text-[12px]'>
                <h2  class=" text-gray-300 " >Mobile number</h2>   
            <a :href="'tel:' + user.phone"  class="text-center self-center" >{{user.phone}}</a>
            </div>
        </div>

   </div>
  
  </template>

  <script setup>
  import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
  import { storeToRefs } from "pinia"
  import {useContactStore} from "../../stores/contact.js";
 
  const contactStore = useContactStore()
  const  {user,edit}  = storeToRefs(contactStore)

  </script>
<template>
   <div class="flex justify-center"
    :class="{'flex-col':edit}">  
        <div  class="flex flex-col flex-wrap items-center gap-1 rounded-2xl py-1 text-sm " :class="edit ? 'justify-center' : 'justify-start '">
            <i  
            class="fa-solid fa-building  w-28 h-28 rounded-xl flex justify-center 
            items-center border-2 fa-4x"></i>
            <input v-if="edit"
            class=" my-5 min-h-[50px]   text-center border-2 border-gray-400 rounded-md bg-transparent w-full" 
            placeholder="Company Name"
            v-model="user.company"
            />
            <div v-else class="text-[12px]">
            <h2  class=" text-gray-300 " >Company name:</h2>
            <h2  class=" " >{{user.company}}</h2>
            </div>
        </div>
        <div  class="flex flex-col flex-wrap items-center gap-1 rounded-2xl py-1 text-sm " :class="edit ? 'justify-center' : 'justify-start '">
            <i  
            class="fa-solid fa-envelope w-28 h-28 rounded-xl flex justify-center 
              items-center border-2 fa-4x"></i>
            <input v-if="edit"
            class=" my-5 min-h-[50px] border-2 border-gray-400 rounded-md bg-transparent text-center  w-full" 
            placeholder="E-mail address"
            v-model="user.mail"
            />
            <div  v-else class='text-[12px]'>
                <h2  class=" text-gray-300 self-center" >E-mail address</h2>
            <a :href="'mailto:' + user.mail" class="text-center self-center" >{{user.mail}}</a>
            </div>
        </div>
        <div v-if="user.phone||edit" class="flex flex-col flex-wrap items-center gap-1  rounded-2xl py-1 text-sm  " :class="edit ? 'justify-center' : 'justify-start '">
            <i v-if="user.phone||edit" 
            class="fa-solid fa-phone w-28 h-28 rounded-xl flex justify-center 
              items-center border-2 fa-4x"></i>
            <input  v-if="edit"
            class=" my-5 min-h-[50px] border-2 border-gray-400 rounded-md bg-transparent self-center text-center "
            placeholder="Phone number"
            v-model="user.phone"
            />
            <div v-else-if="user.phone" class='text-[12px]'>
                <h2  class=" text-gray-300 " >Mobile number</h2>   
            <a :href="'tel:' + user.phone"  class="text-center self-center" >{{user.phone}}</a>
            </div>
        </div>
      
      
    </div>
  </template>
  
  <script>
  import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
  import { storeToRefs } from "pinia"
  import {useUserStore} from "../stores/user.js";
 export default defineComponent({
      name: 'Contact',
     setup(){
  const userStore = useUserStore()
  const  {user,edit}  = storeToRefs(useUserStore())
  const openForm=()=> showForm.value=true
  return{
      user,   
      edit
      }
  }
  })
  </script>
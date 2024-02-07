<template>
  <div class="w-full bg-white rounded-xl min-h-[300px] m-auto text-gray-700 border-2 flex flex-col 
    items-center px-2 z-20  absolute bottom-0">
        <button class="rounded-full cursor-pointer m-2 bg-transparent self-end " @click.prevent="closeModal">
            <i class="fa-regular fa-circle-xmark fa-2x z-50"></i>
        </button>
       
    <input 
       class=" my-5 min-h-[50px] ps-2 border-2 border-gray-400 rounded-md bg-transparent text-2xl w-full text-gray-400"
       placeholder="ID"
      v-model="contactId"
        />
    <div class=" max-w-full px-4 flex flex-col overflow-clip">
      <h2 class=" ">Link:</h2>
      <a class="overflow-clip" :href="contactLink">{{contactLink}}</a>
    </div>
       <QrReader @decoded="handleDecodedData"/> 
      
          
           <button  class=" my-5 min-h-[50px] border-2 rounded-xl text-2xl text-center font-bold w-full text-black " @click="addContact" >Add</button>
    
    </div>
</template>
<script setup>
  import QrReader from "./QrReader.vue";
import { defineComponent, onBeforeMount, reactive, ref, computed} from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/user.js";
  import axios from "axios"
  const emit = defineEmits(['close'])
const contactLink = ref(null)
  const contactId = ref(null)
 
    const userStore = useUserStore();
    const { user,edit } = storeToRefs(useUserStore());
    const closeModal = () => {
      emit("close");
    };
const addContact=async()=>{
  if(!userStore.user.contacts.includes(contactId.value))userStore.user.contacts.push(contactId.value)
  else{ 
    alert("Contact already in list")
  return}
  await userStore.modifyUser({
    id: userStore.user._id,
    contacts: userStore.user.contacts
  })
  closeModal()
  window.location.reload()
 
}
  const handleDecodedData = (data) => {
    contactLink.value = data; 
    contactId.value = data.split("/")[data.split("/").length - 1]
    console.log(data)
  }
</script>

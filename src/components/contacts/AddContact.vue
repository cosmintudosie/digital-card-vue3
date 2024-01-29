<template>
  <div  class="text-xl h-52 w-96 absolute m-auto bottom-3 left-0 right-0 flex flex-col items-center justify-around rounded-xl z-50">
    <p> Add contact?</p>
   <div>
   <button class="px-5 py-1 me-4 rounded-xl " @click="addContact">OK</button>
   <button class="px-5 py-1 rounded-xl " @click="closeAddMessage">Cancel</button>
   </div>
  </div>
</template>
<script setup>
  import {ref} from "vue"
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute()
  const router = useRouter()
  import { useUserStore } from "../../stores/user.js";
   const userStore = useUserStore();
  const emit = defineEmits(['close'])
  const closeAddMessage = () => {
    emit("closeAdd");
  };


  const addContact=async()=>{
  const contactId= route.params.id
    userStore.user.contacts.push(contactId)
    await userStore.modifyUser({
      id: userStore.user._id,
      contacts: userStore.user.contacts
    })
  
closeAddMessage()
    window.location.reload()
    // router.go(-1)
    

  }
</script>
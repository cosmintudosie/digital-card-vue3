<template>
  <div  class="bg-white border-2 text-red-700 text-xl h-52 w-96 absolute m-auto bottom-3 left-0 right-0 flex flex-col items-center justify-around rounded-xl z-50">
    <p> Remove contact?</p>
   <div>
   <button class="px-5 py-1 border-2 me-4 rounded-xl " @click="removeContact">OK</button>
   <button class="px-5 py-1 border-2 rounded-xl " @click="closeRemMessage">Cancel</button>
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
  const closeRemMessage = () => {
    emit("close");
  };

  
  const removeContact=async()=>{
  const contactId= route.params.id
    userStore.user.contacts=userStore.user.contacts.filter(contact=>contact!==contactId)
closeRemMessage()
    router.go(-1)
    await userStore.modifyUser({
      id: userStore.user._id,
      contacts: userStore.user.contacts
    })

  }
</script>
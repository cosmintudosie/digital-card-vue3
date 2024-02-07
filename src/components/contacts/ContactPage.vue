<template>
  <div v-if="user.isPublic"
    class=" max-w-md min-h-full border-2 mx-auto rounded-xl 
  font-mono  "
  >
    <Nav/>
    <transition name='slide'>
          <Qrcode class="mt-12" v-if="showQr"/>
      </transition>
     <div >
      <ContactPresentation />
      <ContactSocial />
      <div class = "sticky bg-white bottom-0 border-t-2 -[448px] h-[60px] flex justify-around">
        <Back v-if="showRemButton"/>
          <Home />
        <button v-if="showRemButton" class="rounded-full px-1 bg-transparent" @click="confirmMessage =true"><i class="fa-solid fa-trash fa-2x"></i></button>
        <button v-else-if="loggedIn" class="rounded-full px-1 bg-transparent" @click="confirmAddMessage =true"><i class="fa-solid fa-user-plus fa-2x"></i></button>
        </div>
       
      <div class="w-72 h-32 absolute top-48 bg-white m-auto left-0 right-0 gap-4 flex flex-col items-center justify-center z-50 " v-if="succesMessage">
        <p>VCard saved successfully</p>
        <button class="px-4 py-2" @click="succesMessage=false">OK</button>
      </div>
      <RemoveContact  v-if="confirmMessage" @close="confirmMessage=false"/>
      <AddContact  v-if="confirmAddMessage" @closeAdd="confirmAddMessage=false"/>

    </div>
    
  </div>
  <div v-else class="h-[400px]  text-red-600 flex flex-col items-center justify-between mt-16">
   <div> User inactive</div>
    <Home />
  </div>
</template>
<script setup>
import ContactPresentation from "./ContactPresentation.vue";
import ContactSocial from "./ContactSocial.vue";
  import ContactDetails from "./ContactDetails.vue";
  import RemoveContact from "./RemoveContact.vue";
  import AddContact from "./AddContact.vue";
   import SideMenu from "../Menu/SideMenu.vue";
import Qrcode from "../Share/Qrcode.vue";
import Share from "../NavBar/Share.vue";
import Home from "../NavBar/Home.vue"
  import Nav from "../NavBar/Nav.vue"
  import Back from "../FootBar/Back.vue"
import axios from "axios";
import { onBeforeMount, ref} from "vue";
import { useRoute } from 'vue-router';
  const route = useRoute()
import { useUserStore } from "../../stores/user.js";
   import { storeToRefs } from "pinia"
  const userStore = useUserStore()
  const {showQr} = storeToRefs(userStore)
  import VCard from "vcf"
  const openQr = () => (showQr.value = true);
import { useContactStore } from "../../stores/contact.js";
  const contactStore = useContactStore()
  const {user} = storeToRefs(contactStore)
  onBeforeMount(async () => {
  const activeId = route.params.id
    await contactStore.getContact(activeId)
   })
  const showRemButton = userStore.user.contacts?.includes(route.params.id)
 const confirmMessage=ref(false)
   const confirmAddMessage=ref(false)

const loggedIn = localStorage.getItem("id")
const succesMessage=ref(false)

  
  
  
  //651d44b767bac051378519a9
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
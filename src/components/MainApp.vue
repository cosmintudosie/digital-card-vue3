<template>
  <div @click="handleDocumentClick" 
    class="relative max-w-md min-h-full mx-auto m-2 rounded-xl border-2
  font-mono "
  >
    <div class="relative" v-if="activeUser">
      <Nav/>
      <Presentation class="" />
      <SocialField />
      <Bar />
    </div>
    <div v-else>
     <ContactPage/>
    </div>
  </div>
</template>
<script setup>
import Nav from "./NavBar/Nav.vue";
import Bar from "./FootBar/Bar.vue";
  import SideMenu from "./Menu/SideMenu.vue";
import Presentation from "./Presentation.vue";
import SocialField from "./SocialField.vue";
import Contact from "./Contact.vue";
import ContactPage from "./contacts/ContactPage.vue";
import Qrcode from "./Share/Qrcode.vue";
import { defineComponent,ref,onMounted,watch} from "vue";
  import { useRoute } from 'vue-router';
  const route = useRoute()
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";
  const userStore = useUserStore()
  const {showMenu} = storeToRefs(userStore)
  const activeId = userStore.user._id
  const activeUser=ref(false)
  if(route.params.id===activeId) activeUser.value=true
  
  watch(
    () => route.params.id,
    (newId, oldId) => {
      if (newId === activeId) {
        activeUser.value = true;
      } else {
        activeUser.value = false;
      }
    }
  );
</script>

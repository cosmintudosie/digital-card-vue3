
<template >
  
    <div class=" sticky bg-white flex flex-row border-2 justify-around -[448px] h-[60px] bottom-0 z-50  items-center ">
        <ProfileButton />
      <Home/>
        <ContactsButton/>
        
       
    </div>
</template>

<script setup >


import ContactsButton from "./ContactsButton.vue"
import ProfileButton from "./ProfileButton.vue"
  import Home from "../NavBar/Home.vue"
import { RouterLink, RouterView, useRoute,useRouter } from "vue-router";
import { defineComponent, onBeforeMount, reactive, ref, computed} from "vue";

</script>


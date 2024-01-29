<template>

  <div class=" flex flex-col items-center  bg-white z-50 gap-y-3 p-1 pt-2 menu-container border-2">
    <div class=" p-1  cursor-pointer ">
    <label for="name">Name</label>
      <input v-model="user.name" id="name" alt="your name" class="ms-2 border-2 border-black w-48"/>
    </div>
    <div class=" p-1 cursor-pointer">
    <label for="about">About</label>
      <input v-model="user.about" id="about" alt="about you" class="ms-2 border-2 border-black w-48"/>
    </div>
    <div class="flex flex-col items-center py-1 cursor-pointer mt-4 max-w-md">
    <button @click = "showPictureForm=!showPictureForm" class="border-2 px-4 border-black rounded-lg">  Edit Image</button>
      <UploadForm v-if="showPictureForm" formType="picture"  @closePicForm ="showPictureForm=false" class="max-w-sm shadow-none "/>
    </div>
    <div class="flex flex-col items-center py-1  cursor-pointer mt-4">
    <button @click = " showAvatarForm=!showAvatarForm" class="border-2 px-4 border-black rounded-lg">  Edit Avatar</button>
      <UploadForm v-if="showAvatarForm" formType="avatar" class="max-w-sm w-full shadow-none "/>
    </div>
    <div class="flex flex-col items-center py-1  cursor-pointer mt-4">
    <button @click="showLinks=!showLinks" class="border-2 px-4 border-black rounded-lg">  Edit links</button>
    </div>
    <SocialField v-if="showLinks"/>
    <div class="flex w-full gap-2 ">
    <ProfileButton class="border-2 w-full py-2"/>
      <button @click="router.back()" class="border-2 w-full">Cancel</button>
      </div>
   
    </div>

  

</template>
<script setup>
  import UploadForm from "../UploadPhotos/UploadForm.vue"
  import ProfileButton from "../FootBar/ProfileButton.vue"
  import SocialField from "../SocialField.vue"
  import SignOutButton from "./SignOutButton.vue"
  import Settings from "./Settings.vue"
  import ContactsButton from "../FootBar/ContactsButton.vue"
  import { useUserStore } from "../../stores/user.js";
  const userStore = useUserStore()
  import {storeToRefs} from "pinia"
  import {ref,onMounted} from 'vue'
  import { useRouter } from "vue-router"
  const router=useRouter()
  const {formType,user} = storeToRefs(useUserStore());
 const showPictureForm = ref(false)
  const showAvatarForm=ref(false)
  const showLinks=ref(false)
onMounted(()=>{
  userStore.initialUser=JSON.parse(JSON.stringify(userStore.user))
  userStore.edit=true
})
  
</script>
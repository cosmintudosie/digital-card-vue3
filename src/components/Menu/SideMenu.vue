<template>
  
  <div class="fixed flex flex-col  w-56 h-[100%] items-start top-0 left-0 bg-white z-50 gap-y-3 p-3 pt-12 menu-container border-2">
    <div class="border-b-2 p-3 w-full cursor-pointer">
    <home>  My profile</home>
    </div>
    <div class="border-b-2  p-3 w-full cursor-pointer">
    <EditProfileButton>  Edit Profile</EditProfileButton> 
    </div>
    <div class="border-b-2  p-3 w-full cursor-pointer">
    <ContactsButton>  Contacts</ContactsButton> 
    </div>
    <div class="border-b-2 p-3 w-full cursor-pointer">
    <Settings >  Settings</Settings>
    </div>
    <div class="border-b-2  p-3 w-full cursor-pointer">
    <SignOutButton >  Sign out</SignOutButton>
    </div>
  
  </div>
  
</template>
<script setup>
  import Home from "../NavBar/Home.vue"
  import SignOutButton from "./SignOutButton.vue"
  import EditProfileButton from "./EditProfileButton.vue"

  import Settings from "./Settings.vue"
  import ContactsButton from "../FootBar/ContactsButton.vue"
  //import EditProfile from "./EditProfile.vue"
  import {ref} from "vue"
  const showEdit = ref(false)
</script>
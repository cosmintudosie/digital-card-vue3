<template>

  <div class="border-2">
    <div class="mt-8 text-lg flex flex-col border-2 rounded-xl pt-6 m-2">   
     <div class="text-lg flex w-full justify-around mb-4">
      <label for="public">Public profile</label>  
      <input name="public" @click="goPublic" v-model="user.isPublic" id="public" class="w-8 h-8" type="checkbox"/>
     </div>
      <div v-if="publicMessage" class="absolute top-4 m-auto p-2 left-0 right-0 w-[300px] rounded-xl border-2 bg-gray-300 z-50 flex flex-col items-center">
        <h2>Your profile is now {{user.isPublic?'public':'private'}} </h2>
        <button class="border-2 px-3 py-1" @click="publicMessage=false">Ok</button>
      </div>
      <p class="text-sm">Your profile can be seen at your link</p>
     </div>
    
    <div class="mt-8 text-lg flex justify-around border-2 rounded-xl py-6 m-2">   
       <label for="active">Active profile</label>
      <input class="w-8 h-8" type="checkbox" id="active"/>
     </div>
    
    <div class="mt-8 text-lg  flex items-center flex-col border-2 rounded-xl pt-3 m-2">
      <button @click="showPassModal=true">Change password</button>
    <vee-form v-if="showPassModal" class="flex flex-col items-center p-8 mt-3 mb-8 w-full"
      
      @submit="changePassword"
      :validation-schema="schema"
      >
      <div class="flex flex-col">
        <label for="password">New Password</label>
        <div>
          <vee-field
            name="password"
            :type="showPass ? 'password' : 'text'"
            v-model="newPass" class="text-gray-800 border-2 border-black rounded-xl mb-6 ps-3"
          />
          <i
            @click="showPass = !showPass"
            class=" -m-6 "
            :class="[ showPass?'fa-solid fa-eye':'fa-solid fa-eye-slash']"
          ></i>
          <br />
          <ErrorMessage class="text-red-600 " name="password" />
        </div>
      </div>
      <div class="flex flex-col">
        <label for="confirmPassword">Confirm password</label>
        <div>
          <vee-field
            name="confirmPassword"
            :type="showPass ? 'password' : 'text'"
            class="confirmPassword passType text-gray-800 border-2 border-black rounded-xl mb-6 ps-3"
            required
          />
          <i
            @click="showPass = !showPass"
            class=" -m-6 "
            :class="[ showPass?'fa-solid fa-eye':'fa-solid fa-eye-slash']"
          ></i>
          <br />
          <ErrorMessage class="text-red-600 " name="confirmPassword" />
        </div>
      </div>
  
   <div class="flex justify-around gap-4">
      <button @click = "showPassModal=false" class="border-2 rounded-xl p-2">Cancel</button>
      <button  type="submit" class="border-2 rounded-xl py-2 px-4">Save</button>
   </div>  
    </vee-form>
      <div class = "fixed  bottom-0 bg-white w-[448px] border-2 flex justify-around">
        <Back />
          <Home />
        
        </div>
    </div>
    
  </div>

</template>
<script setup>
  import {ref} from 'vue'
  import {storeToRefs} from "pinia"
  import Home from "../NavBar/Home.vue"
  import Back from "../FootBar/Back.vue"
  import SignOutButton from "./SignOutButton.vue"
  import Settings from "./Settings.vue"
  import ContactsButton from "../FootBar/ContactsButton.vue"
  import { useUserStore } from "../../stores/user.js";
  const userStore = useUserStore()
  const {user} = storeToRefs(useUserStore())
  const showPassModal = ref(false)
  const newPass=ref('')
  const showPass=ref(true)
  const schema= {
    password: "required|min:4|max:12|excluded:password",
    confirmPassword: "passwords_mismatch:@password",
  }
 const changePassword=async()=>{
   //console.log(userStore.user._id,newPass.value)
   await userStore.modifyUser({
           id: userStore.user._id,
           password: newPass.value
           })
   
     showPassModal.value=false
     alert("Password changed")
   
   // .catch(()=>{
   //   alert("Something went wrong")
   // })
 }
  const publicMessage = ref(false)
  //const isPublic=ref(true)
 const goPublic = async()=> {
   
   await userStore.modifyUser({
    id: userStore.user._id,
    isPublic: !userStore.user.isPublic
    })
  // console.log(userStore.user.isPublic)
   publicMessage.value=true
 }
</script>
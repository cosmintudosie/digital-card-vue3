<template>
  <div class="mx-auto  relative"> 
<transition name='slide'>
    <Qrcode  v-if="showQr"/>
</transition>
    <div  class="relative   h-[175px] rounded-xl mx-1 ">
      <img :src="user.image" class="rounded-3xl text-gray-800 h-full w-full" alt="No photo"  />
      <button  v-if="edit" 
      class="border-gray-500 border-2 rounded-full p-2 text-end absolute bottom-0 right-0"
      @click="formType='picture'">
      <i class="fa-solid fa-pencil fa-2x text-white"></i>
      </button>
    <div  class="relative  w-[150px] h-[150px] border-white border-4
    rounded-full z-20 overflow-hidden mx-auto -mt-[15%]"
    :class="{'w-[150px] h-[150px] m-auto':edit}"
    >
      <img  :src="user.avatar" alt="No photo" />
      <button  v-if="edit" 
        class="border-gray-500 border-2 rounded-full absolute p-2 text-end  bottom-3 right-3 "
        @click="formType='avatar'">
        <i class="fa-solid fa-pencil fa-2x text-white"></i>
      </button>
    </div>
    </div>
    <div class="flex justify-center rounded-b-lg mt-16 py-2 "
    :class="{'flex-col ps-0 items-center':edit}">
    <div class="my-6 mx-3 text-left">
    <input v-if="edit"
     class=" my-5 min-h-[50px] border-2 border-gray-400 rounded-md bg-transparent text-2xl text-center font-bold w-full " 
     placeholder="Your Name"
     v-model="user.name"
     required='true'
     />
     <h1 v-else class="text-lg font-bold mb-2 " >{{user.name?user.name:"My name"}}</h1>
     <textarea  v-if="edit"
    class=" my-5 min-h-[50px] border-2 border-gray-400 rounded-md bg-transparent text-center w-full"
    placeholder="Write something about you"
    v-model="user.about">
    </textarea>
    <p v-else class="text-center text-gray-300 text-sm " >{{user.about}}</p>
    </div>
</div>
    <transition name='slide'>
    <UploadForm class="absolute  min-h-[400px]" :formType="formType" v-if="formType" @closePicForm = "formType=null"/>
    </transition>
    </div>
</template>

<script setup>
import {
  defineComponent,
  onBeforeMount,
  reactive,
  ref,
  computed,
  watch,
} from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";
import UploadForm from "./UploadPhotos/UploadForm.vue"
import Contact from "./Contact.vue";
import Qrcode from "./Share/Qrcode.vue"
import Share from "./NavBar/Share.vue";

const userStore = useUserStore();
const {user, showQr ,edit,formType} = storeToRefs(useUserStore());
const showForm = ref(false);
const openQr = () => (showQr.value = true);

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

<template>
    <cropper
    class="min-h-[200px] bg-gray-100 flex flex-col items-center"
    :src="props.imageUrl"
    :stencil-component="CircleStencil"
    :stencil-props="{
        handlers: {},
        movable: false,
        resizable: false,
    }"
    image-restriction="stencil"
    @change="change"
    /> 
    <button @click="saveAvatar" v-if="props.imageUrl" class="border-2 border-black shadow-black shadow-md h-12">Save</button>

</template>

 <script setup>
  import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import { ref, toRefs} from "vue";
import { storeToRefs } from "pinia"
import {useUserStore} from "../../stores/user.js";
const emit = defineEmits(['closeForm'])
const closeForm = ()=>emit('closeForm')
const userStore = useUserStore()


const avatarSent = ref(null)
const props = defineProps(['imageUrl'])

const change = ({ coordinates, canvas }) => {
  // Redimensionează imaginea la dimensiunile dorite
  const resizedCanvas = document.createElement("canvas");
  const ctx = resizedCanvas.getContext("2d");
  resizedCanvas.width = 200; // Setează lățimea dorită
  resizedCanvas.height = 200; // Setează înălțimea dorită
  ctx.drawImage(canvas, 0, 0, resizedCanvas.width, resizedCanvas.height);

  // Obține imaginea redimensionată sub formă de bază64
  avatarSent.value = resizedCanvas.toDataURL("image/jpeg"); // Poți schimba formatul la nevoie
}

const saveAvatar=()=>{
  console.log(avatarSent.value)
    userStore.setAvatar(avatarSent.value)
    closeForm()
}
    
</script>


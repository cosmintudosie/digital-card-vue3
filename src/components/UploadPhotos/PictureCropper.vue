<template>
    <cropper
    class="min-h-[200px] bg-gray-100 flex flex-col items-center"
    :src="props.imageUrl"
    :stencil-props="{
        handlers: {},
        movable: false,
        resizable: false,
    }"
    :stencil-size="{
        width: 440,
        height: 175
    }"
    image-restriction="stencil"
    @change="change"
    /> 
    <button @click="saveImage" v-if="props.imageUrl" class="border-2 border-black shadow-black shadow-md h-12">Save</button>
  
</template>

 <script setup>
  import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
  import { ref, toRefs} from "vue";
import { storeToRefs } from "pinia"
import {useUserStore} from "../../stores/user.js";
const emit = defineEmits(['closeForm'])
const closeForm = ()=>emit('closeForm')
const userStore = useUserStore()
const imageSent = ref(null)
const props = defineProps(['imageUrl'])
const change = ({ coordinates, canvas }) => {
  const resizedCanvas = document.createElement("canvas");
  const ctx = resizedCanvas.getContext("2d");
  resizedCanvas.width = 440; 
  resizedCanvas.height = 250; 
  ctx.drawImage(canvas, 0, 0, resizedCanvas.width, resizedCanvas.height);

  imageSent.value = resizedCanvas.toDataURL("image/jpeg"); 
}

const saveImage=()=>{
    userStore.setImage(imageSent.value)
    closeForm()
}
    
</script>


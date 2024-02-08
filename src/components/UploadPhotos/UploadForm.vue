<template>
    <div class="bsolute z-50 top-0 pt-2 w-full 
    bg-white flex flex-col justify-start shadow-black shadow-md">
        
        <button v-if="isHome" class="rounded-full cursor-pointer self-end" @click="closePicForm">
            <i class="fa-regular fa-circle-xmark fa-2x"></i>
        </button>
        <input type="file" @change="handleImageUpload" />
        <component :is="props.formType==='picture'? PictureCropper:AvatarCropper" 
        :imageUrl = "imageUrl" @closeForm = "closePicForm"
        />
        
    </div>
  </template>
    <script setup>
import { ref, computed} from "vue";
import PictureCropper from './PictureCropper.vue'
import AvatarCropper from './AvatarCropper.vue'
    import { useRouter } from "vue-router"
    const router=useRouter()
const imageFile = ref(null);
const emit = defineEmits(['closePicForm'])
const closePicForm = ()=>emit('closePicForm')
const imageUrl = ref(null)
const props = defineProps(['formType'])
const handleImageUpload=(event)=> {
      imageFile.value = event.target.files[0]; 
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageUrl.value = e.target.result; 
        };
        reader.readAsDataURL(imageFile.value);
      }
    }
    const isHome = computed(() => {
      let home=router.currentRoute.value.path
      return router.currentRoute.value.path !== '/edit-profile';
     
    });
</script>
  
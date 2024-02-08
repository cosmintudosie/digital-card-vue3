<template>
  <div class="relative max-w-lg min-h-[500px] mx-auto t-2 
   font-mono  text-gray-400 ">
    <Back class = "fixed ms-2 bg-white w-full "/>
    <div class="grid grid-cols-3 gap-4 justify-items-center pt-12 px-2">
       
        <div v-for="site in sites" :key="site.name" class="m-auto cursor-pointer" >
            <div class="text-5xl text-center" @click="openModal(site)"   >
              <img class=" w-20 h-20" :src="'/src/assets/icons8-'+site.name.toLowerCase()+'.svg'"/>
              
            </div>
            <h3 class="text-center">{{site.name}}</h3>
        </div>
    </div>
    <transition name='slide-down'>
    <SiteModal v-if="showModal" @close="closeModal" :site="selectedSite"
     class="absolute w-full mt-6 bottom-0 "/>
    </transition>
</div>
</template>
<script setup>
    import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
    import { storeToRefs } from "pinia"
import usePlatformStore from "../../stores/platform.js";
import Back from "../FootBar/Back.vue"
import SiteModal from "./SiteModal.vue"

    
const platformStore = usePlatformStore()
const sites = platformStore.sites
const showModal = ref(false);
    const selectedSite = ref(null);

    const openModal = (site) => {
      selectedSite.value = site;
      showModal.value = true;
       window.scrollTo(0,0)
    };

    const closeModal = () => {
      selectedSite.value = null;
      showModal.value = false;
    };

</script>
<style scoped>
    
    </style>
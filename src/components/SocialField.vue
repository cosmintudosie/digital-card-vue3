<template>
      <div class="min-h-[200px] ">
    <div v-if="sites.length!==0" >
        <div  >
          <h2 class="text-center" v-if="edit">Drag&Drop icons to change order</h2>
          <draggable v-if="edit"
            v-model="user.sites" 
            item-key="name"
            @start="drag=true"
            @end="drag=false"
            group="social"
            >
            <template #item="element">
              <div @click="openModal(element.element)"  
              class=" w-32 h-32 flex justify-start items-center  
              text-2xl  rounded-2xl cursor-pointer" >
                
                <img class=" w-28 h-28" :src="'/src/assets/icons8-'+element.element.name.toLowerCase()+'.svg'"/>
                <div class="text-center  "> {{element.element.name }}&nbsp</div>
                <div class="text-center " v-if="element.element.name!=='Contact'"> {{element.element.details}}</div>
                <i class="fa-solid fa-pencil text-red-500 border-red-500 border-2 rounded-full absolute p-2 ms-20 mt-16 text-end z-50"></i>
               
              </div>
            </template>
         </draggable>
          
          <div v-else  class="grid grid-cols-3 mx-2 mb-10  justify-center">
           <div  v-for="site in user.sites" :key="site.name" 
            class="m-auto min-h-[180px] text-gray-500 overflow-hidden " >
                <div @click="launch(site)"  
                class=" w-32 h-32 flex justify-start items-center  
                text-2xl  rounded-2xl cursor-pointer" >
                  <img class=" w-28 h-28" :src="'/src/assets/icons8-'+site.name.toLowerCase()+'.svg'"/>
                </div>
              <div class="text-center  ">{{site.name}}</div><div class="text-center " v-if="site.name!=='Contact'"> {{site.details}}</div>
            </div>
          </div> 
           
        </div>
        <transition name='slide-down'>
        <SiteModal v-if="showModal" @close="closeModal" :site="selectedSite" 
        :showDeleteButton="true"
        class="absolute w-full  h-auto "
        />
        </transition>
    </div>
<p v-else class="text-center" >There are no links in your profile</p>
<div class="mx-auto my-5 flex justify-center">
<router-link v-if="edit" to="/pick" class="p-2 border-2 rounded-xl">
    <i class="fa-solid fa-plus fa-3x"></i></router-link>
</div>
    </div>
</template>
<script setup>
import {
  defineComponent,
   ref,
  
} from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";
import SiteModal from "./Sites/SiteModal.vue";
  import draggable from 'vuedraggable';

  const drag=ref(false)
    const userStore = useUserStore();
    const sites = userStore.user.sites;
    const { user, edit } = storeToRefs(useUserStore());
    const showModal = ref(false);
    const selectedSite = ref(null);

    const openModal = (site) => {
      if(site.name){ 
      selectedSite.value = site;
      if(edit.value===true)showModal.value = true
        else if(site.name!=="Contact"){window.location.href = site.link};
      }
    };

    const closeModal = () => {
      selectedSite.value = null;
      showModal.value = false;
    };
  const launch=(site)=>{
    
    window.scrollTo({ top: 0, behavior: "smooth" })
  if(site.name==="Phone") {
    window.open(`tel:${site.link}`)
    }else if (site.name ==="Email"){
    window.open(`mailto:${site.link}`)
    }else if (site.name ==="Contact"){openModal(site)
    } else  { window.open(`${site.link}`)}
  }


</script>

<template>
  <div class=" absolute top-1  left-0 right-0 w-[97%] h-[75%] m-auto bg-white border-2 border-black rounded-2xl flex flex-col 
    items-center px-2 z-50 ">
        <button class="rounded-full cursor-pointer m-2 bg-transparent self-end " @click.prevent="closeModal">
            <i class="fa-regular fa-circle-xmark fa-2x  z-50"></i>
        </button>
    
    <img class=" w-28 h-28" :src="'/src/assets/icons8-'+site.name.toLowerCase()+'.svg'"/>
        
        <p >{{site.name}}</p>
    
    <div v-if="site.name==='Contact'">
      <div class="flex flex-col mb-2" v-for="detail in Object.keys(site.details)">
        <label>{{detail}}</label>
        <input class="border-2" v-model="site.details[detail]"/>
      </div>
    </div>
    <div v-else>
    <input  v-if="edit"
       class="my-5 min-h-[50px] border-2  rounded-md bg-transparent text-2xl text-center w-full "
       placeholder="Details"
       v-model="site.details" required
        />
       <input  v-if="edit||site.name===contact"
       class="my-5 min-h-[50px] border-2  rounded-md bg-transparent text-2xl text-center w-full "
       placeholder="Profile link"
       v-model="site.link" required
        />
        <a :href="site.link" v-else class="pt-4 ">{{site.link}}</a>
    </div>
       <div class="flex  justify-between w-full gap-6">
           <button class=" my-5 min-h-[50px] border-2 rounded-xl text-2xl text-center font-bold w-full " v-if="showDeleteButton&&edit" @click.prevent="deleteSite">Delete</button>
           <button v-if="edit" class=" my-5 min-h-[50px] border-2 rounded-xl text-2xl text-center font-bold w-full " @click.prevent="saveSite">Save</button>
    </div>
    </div>
</template>
<script>
import { defineComponent, onBeforeMount, reactive, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import usePlatformStore from "../../stores/platform.js";
import { useUserStore } from "../../stores/user.js";
import SiteModal from "./SiteModal.vue";
export default defineComponent({
  name: "SiteModal",
  props: {
    site: {
      type: Object,
      required: true,
    },
    showDeleteButton: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const platformStore = usePlatformStore();
    const sites = platformStore.sites;
    const userStore = useUserStore();
    const { user,edit } = storeToRefs(useUserStore());
    const closeModal = () => {
      emit("close");
    };

    const saveSite = () => {
      userStore.setSite(props.site);
      //console.log(userStore.user.sites);
      closeModal();
    };
    const deleteSite = () => {
      userStore.deleteSite(props.site);
      closeModal();
    };

    return {
      
      saveSite,
      deleteSite,
      closeModal,
      user,
      edit
    };
  },
});
</script>

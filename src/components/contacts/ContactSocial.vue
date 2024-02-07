<template>
  <div class="pb-32">
<div v-if="user.sites" >

    <div  class="grid grid-cols-3 mx-6 my-10 gap-3 justify-center">
        <div v-for="site in user.sites" :key="site.name" 
        class="m-auto min-h-[180px] text-gray-500 overflow-hidden" >
            <a @click="launch(site)"  
            class=" w-32 h-32 flex justify-start items-center  
              text-2xl  rounded-2xl cursor-pointer" >
            <img class=" w-28 h-28" :src="'/src/assets/icons8-'+site.name.toLowerCase()+'.svg'"/>
            </a>
              <div class="text-center min-h-12 ">{{site.name}}</div>
              <div class="text-center min-h-12 mb-2 "> {{site.name!=='Contact'?site.details:'Save'}}</div>
        </div>
    </div>
    </div>
<p v-else class="text-center" >There are no links in this profile</p>
<div class="mx-auto my-5 flex justify-center">

</div>
</div>
</template>
<script setup>
import {
ref,
} from "vue";
import { storeToRefs } from "pinia";
import { useContactStore } from "../../stores/contact.js";

const contactStore = useContactStore();
const { user } = storeToRefs(contactStore);
const launch=(site)=>{
  if(site.name==="Phone") {
    window.open(`tel:${site.link}`)
    }else if (site.name ==="Email"){
    window.open(`mailto:${site.link}`)
    
  }else if (site.name ==="Contact"){ 
    
        let activeUser=site.details
       
        const vcardData = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${activeUser.name}
N;CHARSET=UTF-8:
UID;CHARSET=UTF-8:
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:${activeUser.email_personal}
EMAIL;CHARSET=UTF-8;type=email:${activeUser.email_bussines}
PHOTO;ENCODING=b;TYPE=image/jpeg:${contactStore.user.avatar.split(",")[contactStore.user.avatar.split(",").length-1]}
TEL;TYPE=HOME,VOICE:${activeUser.phone_home}
TEL;TYPE=WORK,VOICE:${activeUser.phone_bussines}
TITLE;CHARSET=UTF-8:${activeUser.title}
ORG;CHARSET=UTF-8:${activeUser.organisation}
URL;type=website;CHARSET=UTF-8:${activeUser.website}
URL;type=WORK;CHARSET=UTF-8:
NOTE;CHARSET=UTF-8:${activeUser.title} @ ${activeUser.organisation}
URL;TYPE=profile:${activeUser.website}
REV:
END:VCARD
`
          const a = document.createElement('a');

          const blob = new Blob([vcardData], { type: 'text/vcard' });
        console.log(blob)
          const url = URL.createObjectURL(blob);

          a.href = url;
          a.download = `${contactStore.user.name}.vcf`; 
          a.click();

         URL.revokeObjectURL(url);
        
  }else{
    window.open(`${site.link}`)
  }
  
}
</script>

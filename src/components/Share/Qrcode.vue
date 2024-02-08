<template>
  
  <div class="absolute top-0 border-2 bg-white rounded-2xl z-50 w-full h-92 flex flex-col
     items-center gap-8 p-4  ">

        
      <div class="overflow-clip w-full flex gap-4 " >
        <a class="overflow-clip" :href="link">{{link}}</a>  
        <i class="fa-solid fa-copy fa-2x ps-4 cursor-pointer"
        @click="copyLink"
        ></i>
        <i class="fa-solid fa-share-nodes fa-2x cursor-pointer" @click="shareLink"></i>
      </div>
      
      <qrcode-vue :value="link" class="w-64" />
    </div>
  </template>
  
  <script setup>
  import QrcodeVue from 'vue-qrcode'
  import {ref} from 'vue'

  const link=window.location.href
  const qrCodeGenerated= ref(true) const linkToCopy = ref('')  
  const copyLink=()=>{
    const input = document.createElement('input');
      input.value = link;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    
  }
    const shareLink = () => {
      if (navigator.share) {
        navigator.share({
          title: 'Share Link',
          text: 'My digital card:',
          url: link,
        })
        .then(() => console.log('Link shared successfully'))
        .catch((error) => console.error('Error sharing link:', error));
      } else {
        alert('Funcția de partajare nu este suportată pe acest dispozitiv.');
      }
    }
  </script>
  <style scoped>
.modal-enter-from{
  transform: translateY(-100%)
}    
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease-in-out;
}
.modal-leave-to {
  transform: translateY(-100%);
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
  </style>
  

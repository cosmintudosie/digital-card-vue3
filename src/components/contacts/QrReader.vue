<template>
  <div class="flex flex-col justify-center ">
    <button class=" bg-transparent" @click="isScannerOpen =!isScannerOpen"><i class="fa-solid fa-qrcode fa-5x"></i></button>
    <div class="stream" v-if="isScannerOpen">
      <qr-stream @decode="onDecode" class="mb">
        <div style="color: red;" class="frame"></div>
      </qr-stream>
    </div>
    
  </div>
</template>

<script setup>
import { QrStream } from 'vue3-qr-reader';
import {ref,defineEmits } from "vue"
  const emit = defineEmits(['decoded'])
const isScannerOpen = ref(false);
//const data = ref(null);
  
const onDecode = (decodedData) => {
 // data.value = decodedData;
    console.log(decodedData)
  isScannerOpen.value = false
  emit('decoded', decodedData)
};

const startQRScanner = () => {
  isScannerOpen.value = true;
};

const stopQRScanner = () => {
  isScannerOpen.value = false;
  //data.value = null;
};
</script>

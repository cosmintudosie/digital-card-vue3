<template>
  <button class=" px-3 rounded-full cursor-pointer  " @click="openQr">
    <i class="fa-regular fa-share-from-square fa-2x"></i>
  </button>
</template>

<script setup>
import { useUserStore } from "../../stores/user.js";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUserStore());
const userStore = useUserStore();
const openQr = () => {
  userStore.openQr();
};
</script>

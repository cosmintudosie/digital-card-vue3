<template>
    <a @click="$router.back()" class="p-2 rounded-full cursor-pointer bg-transparent">
      <i class="fa-solid fa-backward fa-2x"></i>

    </a>
</template>

<script setup>
    import { defineComponent, onBeforeMount, reactive, ref, computed ,inject} from "vue";
import {useUserStore} from "../../stores/user.js";
  const userStore = useUserStore()
  const id=ref(userStore.user._id)
</script>
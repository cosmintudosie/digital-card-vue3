
<template >
    <div class="sticky bg-white flex flex-row justify-between w-full top-0 z-30 p-2 ">
        <MenuButton />
        <Share />
    </div>
</template>

<script setup>

import MenuButton from "./MenuButton.vue"
import Home from "./Home.vue"
import Share from "./Share.vue"
import { RouterLink, RouterView, useRoute,useRouter } from "vue-router";
import { defineComponent, onBeforeMount, reactive, ref, computed} from "vue";

</script>
<style scoped>

</style>

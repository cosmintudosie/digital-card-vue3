<template>
   <div class=" border-2 min-h-[600px] flex flex-col 
     items-center w-full gap-20 rounded-xl overflow-hidden">
    <div class="w-full h-[40px] flex justify-between justify-items-stretch text-black">
      <!-- Taburile pentru Login și Register -->
      <button class="grow  " 
       :class="{ 'bg-zinc-800 text-white': currentTab !== 'LoginForm' }"
        @click="showComponent('LoginForm')"
        
        >Login</button>
      <button class="grow " @click="showComponent('RegisterForm')"
        :class="{ 'bg-zinc-800 text-white': currentTab !== 'RegisterForm' }"
        >Register</button>
    </div>

    <!-- Componenta dinamică -->
    <component class="flex flex-col gap-6" :is="currentComponent" />
  </div>
</template>
<script setup>
  import LoginForm from "./LoginForm.vue"
  import RegisterForm from "./RegisterForm.vue"
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router"
  const router=useRouter()
   import {useUserStore} from "../../stores/user.js";
  const userStore = useUserStore()
  const components = {
    LoginForm,
    RegisterForm,
  };
   const currentTab = ref('LoginForm');
  const currentComponent = ref(components.LoginForm);
  const showComponent = (componentName) => {
    currentComponent.value = components[componentName];
     currentTab.value = componentName;
  };
  if(userStore.user._id){router.push({ path: `/${userStore.user._id}` })};
</script>
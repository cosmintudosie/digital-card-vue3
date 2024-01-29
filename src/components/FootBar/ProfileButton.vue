<template>
    
<button class="bg-inherit h-auto " 
    @click="toggleEdit">
    <i v-if="isHome" class="fa-regular fa-user fa-2x"></i>
  <h2 v-else>Save</h2>
</button>

    
</template>

<script setup>
     import { watch,toRaw,computed } from "vue";
    import {useUserStore} from "../../stores/user.js";
    import { storeToRefs } from "pinia"
  import { useRouter } from "vue-router"
  const router=useRouter()
    const  {user,edit}  = storeToRefs(useUserStore())
    const userStore = useUserStore()
  let modifiedUser = []
  let initialUser = null
  let updatedUser=null
  const isHome = computed(() => {
    let home=router.currentRoute.value.path
   // console.log(router.currentRoute.value.path)
    return router.currentRoute.value.path !== '/edit-profile';

    // Modificați ruta de acasă conform configurației dvs.
  })
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
  
  const toggleEdit = async()=>{
   // console.log('cliked')
   modifiedUser = {}
       if(!userStore.edit )
        { userStore.initialUser=JSON.parse(JSON.stringify(userStore.user))
       }
      else{
        let keys = Object.keys(userStore.user)
        updatedUser=toRaw(user.value)
        keys.forEach(key=>{
       if (!deepEqual(userStore.initialUser[key], updatedUser[key])){
          modifiedUser[key]=updatedUser[key]
         }            
      
        })
        modifiedUser.id= localStorage.getItem('id')
        await userStore.modifyUser(modifiedUser)
     
      }
    //console.log(isHome.value)
       userStore.toggleEdit()
   modifiedUser=null
    if(!isHome.value) {router.back()}
    }
  
</script>
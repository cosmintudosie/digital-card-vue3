<template>
  
  
  <vee-form class="flex flex-col gap-6 w-72 " @submit="login" :validation-schema="schema">
   
    <div class="flex flex-col">
      <label for="userMail">E-mail</label>
      <vee-field name="email" type="email" class="text-gray-800 border-2 ps-2" />
      <ErrorMessage class="msg" name="name" />
    </div>
    <div class="flex flex-col">
      <label for="password">Password</label>
      <div>
        <vee-field name="password" :type="showPass ? 'password' : 'text'" class="text-gray-800 border-2 ps-2" />
        <i
          @click="showPass = !showPass"
          class=" -m-6 "
          :class="[ showPass?'fa-solid fa-eye':'fa-solid fa-eye-slash']"
        ></i>
        <br />
        <ErrorMessage class="msg" name="password" />
      </div>
    </div>
    <button type="submit" class=" my-5 min-h-[50px] border-gray border-2 hover:bg-gray-200 rounded-xl text-center w-full ">Submit</button>
  </vee-form>
</template>

<script>
import { mapStores } from "pinia";
import { mapActions } from "pinia";
import {useAuthStore} from "../../stores/auth.js";
  import {useUserStore} from "../../stores/user.js";
import axios from "axios";
export default {
  name: "LoginForm",
  data() {
    return {
      showPass: true,
      email: "",
      password: "",
      schema: {
        email: "required|min:3|max:100|email",
        password: "required|min:4|max:100|excluded:password",
      },
    };
  },

  computed: {
    ...mapStores(useAuthStore),
    loggedUser() {
      return this.authStore.loggedUser;
    },
    ...mapStores(useUserStore),
    activeId() {
      return this.userStore.user._id;
    },
  },

  methods: {
    ...mapActions(useAuthStore, { authenticate: "authenticate" }),
    async login(values) {
      localStorage.clear()
      this.userStore.user={}
      try {
        await this.authenticate(values);
        if(this.activeId){this.$router.push({ path: `/${this.activeId}` })};
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
};
</script>
<style scoped>
.check {
  display: inline-block;
  margin-left: -2.5rem;
  cursor: pointer;
}

</style>

<template>
 
  <vee-form
    @submit="register"
    :validation-schema="schema"
    class="flex flex-col gap-10 w-72"
  >
    <div v-if="succesReg" class="bg-zinc-500 h-48 w-72 absolute m-auto left-0 right-0 flex flex-col items-center justify-around rounded-xl ">
      <p> Succesfuly registered!</p>
      <button class="px-5 py-1 rounded-xl" @click.prevent="reload">OK</button>
    </div>

    <div class="flex flex-col">
      <label for="name">Name</label>
      <vee-field name="name" type="text" v-model="name" class="text-gray-800 border-2 ps-2" />
      <ErrorMessage class="text-red-600  " name="name" />
    </div>
    <div class="flex flex-col">
      <label for="email">E-mail</label>
      <vee-field name="email" type="email" v-model="email" class="text-gray-800 border-2 ps-2"/>
      <ErrorMessage class="text-red-600 " name="email" />
    </div>
    <div class="flex flex-col">
      <label for="password">Password</label>
      <div>
        <vee-field
          name="password"
          :type="showPass ? 'password' : 'text'"
          v-model="password" class="text-gray-800 border-2 ps-2"
        />
        <i
          @click="showPass = !showPass"
          class=" -m-6 "
          :class="[ showPass?'fa-solid fa-eye':'fa-solid fa-eye-slash']"
        ></i>
        <br />
        <ErrorMessage class="text-red-600 " name="password" />
      </div>
    </div>
    <div class="flex flex-col">
      <label for="confirmPassword">Confirm password</label>
      <div>
        <vee-field
          name="confirmPassword"
          :type="showPass ? 'password' : 'text'"
          class="confirmPassword passType text-gray-800 border-2 ps-2"
          required
        />
        <i
          @click="showPass = !showPass"
          class=" -m-6 "
          :class="[ showPass?'fa-solid fa-eye':'fa-solid fa-eye-slash']"
        ></i>
        <br />
        <ErrorMessage class="text-red-600 " name="confirmPassword" />
      </div>
    </div>
    <button type="submit" class=" my-5 min-h-[50px] border-gray border-2 hover:bg-gray-200 rounded-xl text-center w-full">Submit</button>
  </vee-form>
</template>

<script>
import { mapActions, mapStores } from "pinia";
import {useAuthStore} from "../../stores/auth.js";
export default {
  name: "RegisterForm",
  data() {
    return {
      showPass: true,
      name: "",
      email: "",
      password: "",
      succesReg: false,
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        password: "required|min:4|max:100|excluded:password",
        confirmPassword: "passwords_mismatch:@password",
      },
    };
  },
  methods: {
    ...mapActions(useAuthStore, {
      createUser: "register",
    }),
    async register(values) {
      //console.log(values);
      try {
        await this.createUser(values);
        //this.$router.push({ path: '/' })
        this.succesReg = true
        //alert("Account created, please login");
      } catch (error) {
        console.log(error);
        return;
      }
    },
    reload(){
        window.location.reload()      
    }
  },
};
</script>

import { defineStore } from "pinia";
import { toRaw } from 'vue'
import axios from "axios";
import { toUint8Array } from 'base64-js'
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    edit: false,
    showQr: false, 
    showMenu: false,
    initialUser:null,
    formType:null,
      }),

  actions: {
    async updateUser() {
      if(!localStorage.getItem("id")) return
      try{
        let activeId = localStorage.getItem("id");
        const response = await axios.get('/api/users', {
            params: {
              id: activeId, 
            },
          });
        this.user=response.data;
      }catch(error){
        if(error){
          localStorage.clear()
        }
      }
        },
    
    setUser(activeUser) {
          this.user = activeUser;
    },
    async modifyUser(modifiedUser){
          await axios.patch('/api/users', modifiedUser);
    },
    setSite(site) {
        let activeSite = null
         if(this.user.sites.length>0) {
         activeSite=this.user.sites.find(el=>el.name === site.name&&el.details===site.details)
        
         }
        if (activeSite) {
          activeSite.link = site.link;
        } else {
          this.user.sites.push(site);
          console.log(site.value)
          console.log(this.user.sites)
        }
    },
    deleteSite(site) {
        const indexToDelete = this.user.sites.findIndex(
          (item) => item.icon === site.icon
        );
        if (indexToDelete !== -1) {
          this.user.sites.splice(indexToDelete, 1);
        }
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
    openQr() {
      this.showQr = !this.showQr;
    },
    setImage(image) {
      this.user.image = image;
    },
    setAvatar(avatar) {
      this.user.avatar = avatar;
    },
  },
  
});


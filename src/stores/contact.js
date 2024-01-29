import { defineStore } from "pinia";
//import { toRaw } from 'vue'
import axios from "axios";

export const useContactStore = defineStore("contact", {
  state: () => ({
    user: {},
    showQr: false, 
    //loading:true,
    }),

  actions: {
    async getContact(currentId) {
      
          const response = await axios.get('/api/users/currentContact', {
              params: {
                id: currentId, 
              },
            });
          this.user=response.data;

        },

    setUser(activeUser) {
          this.user = activeUser;
    },
    
    setSite(site) {
        let activeSite = null
         if(this.user.sites.length>0) {
         activeSite=this.user.sites.find(el=>el.name === site.name)

         }
        if (activeSite) {
          activeSite.link = site.link;
        } else {
          this.user.sites.push(site);
          console.log(site.value)
          console.log(this.user.sites)
        }
    },
    
    
    openQr() {
      this.showQr = !this.showQr;
    },
    
  },

});


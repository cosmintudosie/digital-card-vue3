import { defineStore } from "pinia";

export default defineStore("platform", {
  state: () => ({
       sites:[
        {
            name: 'Amazon',
            details:'' ,
            link:''
        },
        {
            name: 'Cashapp',
              details:'',
            link:''
        },
         {
             name: 'Contact',
             details:{
               name:'',
               email_personal:'',
               email_bussines:'',
               phone_home:'',
               phone_bussines:'',
               address:'',
               organisation:'',
               job_title:'', 
               website:'',
               title:''
         },
             link:''
         },
        {
            name: 'Discord',
              details:'',
            link:''
        },
        {
            name: 'Email',
            icon:'',
            link:''
        },
        {
            name: 'Facebook',
              details:'',
            link:''
        },
        {
            name: 'Fiverr',
              details:'',
            link:''
        },
        {
            name: 'Github',
              details:'',
            link:''
        },
        {
            name: 'Gmail',
              details:'',
            link:''
        },
        {
            name: 'Instagram',
              details:'',
            link:''
        },
        {
            name: 'Lineapp',
              details:'',
            link:''
        },
        {
            name: 'Maps',
              details:'',
            link:''
        }, {
             name: 'Medium',
               details:'',
             link:''
         }, {
             name: 'Messenger',
               details:'',
             link:''
         }, {
             name: 'Monzo',
               details:'',
             link:''
         }, {
             name: 'Onlyfans',
               details:'',
             link:''
         }, {
             name: 'Paypal',
               details:'',
             link:''
         }, {
             name: 'Phone',
               details:'',
             link:''
         }, {
             name: 'Pinterest',
               details:'',
             link:''
         }, {
             name: 'Quora',
               details:'',
             link:''
         }, {
             name: 'Reddit',
               details:'',
             link:''
         }, {
             name: 'Revolut',
               details:'',
             link:''
         }, {
             name: 'Skype',
               details:'',
             link:''
         },
         {
              name: 'Slack',
                details:'',
              link:''
          },
         {
              name: 'Snapchat',
                details:'',
              link:''
          },
         {
              name: 'Soundcloud',
                details:'',
              link:''
          },
         {
              name: 'Spotify',
                details:'',
              link:''
          },
         {
              name: 'Telegram',
                details:'',
              link:''
          },
         {
              name: 'TikTok',
                details:'',
              link:''
          },
         {
              name: 'Tinder',
                details:'',
              link:''
          },
         {
             name: 'Tripadvisor',
               details:'',
             link:''
         },
         {
             name: 'Tumblr',
               details:'',
             link:''
         },
         {
             name: 'Twitch',
               details:'',
             link:''
         },
         {
             name: 'Twitter',
               details:'',
             link:''
         },
         {
             name: 'Upwork',
               details:'',
             link:''
         },
         {
             name: 'Venmo',
               details:'',
             link:''
         },
         {
             name: 'Viber',
               details:'',
             link:''
         },
         {
              name: 'Vk',
                details:'',
              link:''
          },
         {
              name: 'Whatsapp',
                details:'',
              link:''
          },
         {
              name: 'Youtube',
                details:'',
              link:''
          },
         {
              name: 'Zoom',
                details:'',
              link:''
          },
         
         
       ],
    site:[
      "Facebook", "Twitter", "Instagram", "Youtube", "WhatsApp", "Discord", "Telegram", "Skype"
    ]
  }),
})
<template>
    <aside class="side-bar">
        <div class="top">
            <div class="icon">
                <router-link to="/community">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd" />
                    </svg>
                </router-link>
            </div>
    
            <div class="icon">
                <router-link to="/bookmark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                    </svg>
                </router-link>
            </div>
        </div>

        <div class="bottom">
            <router-link to="">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            </router-link>
        </div>
    </aside>
  </template>
  
  <style>
  router-link{
  color: inherit;   	    /* 부모 엘리먼트의 값을 물려받는다 */
  text-decoration: none;
  }

  .side-bar {
  position: fixed;    /* 스크롤을 따라오도록 지정 */
  background-color: rgb(177, 178, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 80px;
  }
  
  /* 모든 메뉴의 a에 속성값 부여 */
  #menu {
  display: block;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  }
  </style>
  
  <style scoped>
  svg{
    width: 40px;
    height: 40px;
    color: #ffffff;
    margin: 20px;
  }
  </style>
  
  <script>
  import { Bars3Icon, GlobeAltIcon } from '@heroicons/vue/24/solid';
  export default {
    name: 'MenuTest',
    components: Bars3Icon, GlobeAltIcon
  }
  </script>
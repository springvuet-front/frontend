<template>
  <aside class="side-bar">
      <div class="left-menu">
          <router-link to="/community">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd" />
              </svg>
          </router-link>
      </div>

      <div class="left-menu">
          <router-link to="/bookmark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
              </svg>
          </router-link>
      </div>
  </aside>
</template>

<style>
router-link{
color: inherit;   	    /* 부모 엘리먼트의 값을 물려받는다 */
text-decoration: none;
}

:root{
--side-bar-width: 100px;
--side-bar-height: 80vh;
}

.side-bar {
position: fixed;    /* 스크롤을 따라오도록 지정 */
background-color: rgb(177, 178, 255, 80%);
width: var(--side-bar-width);
min-height: var(--side-bar-height);   /* 사이드바의 높이를 전체 화면 높이의 90%로 지정 */
margin-top: calc((90vh - var(--side-bar-height)) / 2);    /* 사이드바 위와 아래의 마진을 동일하게 지정 */
transform: translate(calc(var(--side-bar-width) * -0.8), 0);  /* X축 이동, Y축 고정  */
border-radius: 0px 20px 20px 0px;
transition: .5s;
display: flex;
flex-direction: column;
justify-content: center;
}

.side-bar:hover {
transform: translate(-20px, 0);
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
  width: 60px;
  height: 60px;
  color: #333;
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
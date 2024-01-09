<template>
    <TopbarMenu />
    <LeftMenu />
      <div>MypageView페이지</div>
      <div>MypageView페이지</div>
      <div>MypageView페이지</div>
  </template>
    
    <script>
  import TopbarMenu from '@/components/TopbarMenu.vue';
  import LeftMenu from '@/components/LeftMenu.vue';
  
    export default {
      name: 'MypageView',
      components: {
        TopbarMenu,
        LeftMenu,
      },
    }
    </script>
    
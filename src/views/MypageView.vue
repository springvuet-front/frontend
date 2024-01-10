<template>
    <LeftMenu />

    <div class="container">
      <div>MypageView페이지</div>
      <div>MypageView페이지</div>
      <div>MypageView페이지</div>
    </div>
  </template>

  <style scoped>
    .container{
      padding: 20px 90px;
    }
  </style>
    
    <script>
  import LeftMenu from '@/components/LeftMenu.vue';
  
    export default {
      name: 'MypageView',
      components: {
        LeftMenu,
      },
    }
    </script>
    
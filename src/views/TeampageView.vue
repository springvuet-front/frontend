<template>
  <LeftMenu />

  <div id="container">
    <div>TeampageView페이지</div>
    <div>TeampageView페이지</div>
    <div>TeampageView페이지</div>
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
      name: 'TeampageView',
      components: {
        LeftMenu,
      },
    }
  </script>
    
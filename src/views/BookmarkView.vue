<template>
  <LeftMenu />

  <div class="container">
    <div>BookmarkView페이지</div>
    <div>BookmarkView페이지</div>
    <div>BookmarkView페이지</div>
  </div>
</template>

<style>
  .container{
    padding: 20px 90px;
  }
</style>
    
<script>
import LeftMenu from '@/components/LeftMenu.vue';

export default {
  name: 'BookmarkView',
  components: {
    LeftMenu,
  },
}
</script>
    
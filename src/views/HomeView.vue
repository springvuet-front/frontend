<template>
  <div class="home">
    <div class="logo">
      <img alt="Prolog logo" src="../assets/prolog.png" />
    </div>

    <div class="router-view">
      <ButtonComponent parameter="mypage" msg="마이페이지"/>
      <ButtonComponent parameter="community" msg="커뮤니티"/>
    </div>
  </div>
</template>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30vh;
}
.logo, .router-view{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: column;
}
.text{
    flex-direction: column;
  }

</style>

<script>
// @ is an alias to /src
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'HomeView',
  components: {
    ButtonComponent
  }
}
</script>

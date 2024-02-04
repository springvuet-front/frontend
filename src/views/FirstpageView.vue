<template>
  <div id="app">
    <div class="background">
      <div class="text">개발자 프로젝트 커뮤니티</div>
      <img src="../assets/prolog.png">
      <div class="router-view">
        <ButtonComponent parameter="login" msg="로그인"/>
        <ButtonComponent parameter="signup" msg="회원가입"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app{
  display: flex;
}
.background{
  width: 100vw;
  height: 90vh;
  margin-top: 5vh;
  background-color: #D2DAFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text{
  color: #565656;
  font-size: 15px;
  font-weight: 600;
}

img{
  width: 220px;
  margin: 20px 0px 60px 0px;
}
</style>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'FirstpageView',
  components: {
    ButtonComponent
  }
}
</script>
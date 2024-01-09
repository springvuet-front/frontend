<template>
  <div class="home">
    <div class="text">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Prolog"/>
    </div>

    <div class="router-view">
      <ButtonComponent parameter="login" msg="로그인"/>
      <ButtonComponent parameter="signup" msg="회원가입"/>
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
}
.text, .router-view{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.text{
    flex-direction: column;
  }

</style>

<script>
// @ is an alias to /src
import ButtonComponent from '@/components/ButtonComponent.vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ButtonComponent
}
}
</script>

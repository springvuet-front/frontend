<template>
  <div class="home">
    <div class="text">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Prolog"/>
    </div>

    <div class="router">
      <button @click="$router.push('/login')">로그인</button>
      <button @click="$router.push('/community')">커뮤니티</button>
    </div>
  </div>
</template>

<style>
.home{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text, .router{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  button {
    width: 15vw;
    margin: 10px;
    padding: 10px;
    background-color: mediumpurple;
    border: 0;
    color: white;
  }
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

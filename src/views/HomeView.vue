<template>
  <div id="app">
    <div class="background">
      <div class="text">개발자 프로젝트 커뮤니티</div>
      <img src="../assets/prolog.png">
      <div class="info" v-if="data">
        로그인 된 계정: <p id="nickname">{{ data.nickname }}</p>
        / 이메일 주소: <p id="email">{{  data.email }}</p>
      </div>
      <div class="router-view">
        <ButtonComponent parameter="mypage" msg="마이페이지"/>
        <ButtonComponent parameter="community" msg="커뮤니티"/>
        <ButtonComponent parameter="/" msg="로그아웃"/>
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

.info{
  color: #565656;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

#nickname{
  text-decoration: underline;
  padding: 0px 10px;
}

#email{
  text-decoration: underline;
  padding: 0px 0px 0px 10px;
}

img{
  width: 220px;
  margin: 20px 0px 50px 0px;
}
</style>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import api from '@/axios.js';
// import { ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/solid';
// import { resolveConfig } from 'v-calendar/dist/types/src/utils/locale';

export default {
  name: 'HomeView',
  components: {
    ButtonComponent
  },
  data() {
    return {
      data: undefined,
      email: undefined,
      nickname: undefined,
    }
  },
  created() {
    api.get('/me')
    .then(response => {
      this.data = response.data || {} ; 
      console.log(response.data.email);
      this.nickname = response.data.nickname;
    }) //요청이 맞다면 data담아서 response, data없는 부분은 null
    .catch(error => {
      console.error(error); //틀리다면 에러
    });
  },
}
</script>
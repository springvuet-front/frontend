<template>
    <div class="router-view">
      <ButtonComponent parameter="login" msg="로그인"/>
      <ButtonComponent parameter="signup" msg="회원가입"/>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'FirstpageView',
  components: {
    ButtonComponent
  }
}
</script>
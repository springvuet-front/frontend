<template>
    <button @click="onClickRedirect(parameter)">{{ msg }}</button>
</template>

<style scoped>
  button{
      width: 150px;
      margin: 10px;
      padding: 10px;
      font-size: 15px;
      font-weight: 600;
      background-color: #B1B2FF;
      border: 0;
      border-radius: 15px;
      color: white;
      /*box-shadow: 0px 4px 4px 0px #000000;*/
  }
</style>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    parameter: String,
    msg: String
  },
  methods:{
    onClickRedirect(parameter){
        this.$router.push(`/${parameter}`).catch(()=>{});
    }
  }
}
</script>
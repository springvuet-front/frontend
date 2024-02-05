<template>
    <button @click="onClickRedirect(parameter)">{{ msg }}</button>
</template>

<style scoped>
  button{
      width: 150px;
      height: 40px;
      margin: 10px;
      padding: 10px;
      font-size: 15px;
      font-weight: 600;
      background-color: #B1B2FF;
      border: 0;
      border-radius: 15px;
      color: white;
      box-shadow: 0px 4px 4px hsl(0deg 0% 0% / 0.25);
  }
</style>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    parameter: {
      type: String,
      default: "",
    },
    msg: String
  },
  methods:{
    onClickRedirect(parameter){
        if(parameter !== "")
          this.$router.push(`/${parameter}`).catch(()=>{});
    }
  }
}
</script>
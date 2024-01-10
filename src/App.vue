<template>
  <router-view/>
</template>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

img{
  width: 180px;
}

a {
  color: #565656;
  text-decoration: none; 
  outline: none
}

a:hover, a:active {
  color: #565656;
  text-decoration: none;
}

</style>

<script>
  export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>
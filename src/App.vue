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

.modal-wrap {
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.4);
}

.modal-wrap2 {
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
}
/* modal or popup */
.modal-container {
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 85vw;
height: 85vh;
background: #fff;
border-radius: 10px;
padding: 20px;
box-sizing: border-box;
display: flex;
flex-direction: column;
}

.modal-info{
  width: 85vw;
}

.close-btn{
  width: 30px;
  height: 30px;
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
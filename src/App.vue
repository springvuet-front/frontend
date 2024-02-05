<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300&display=swap" rel="stylesheet">
  <router-view/>
</template>

<style>
body{
  margin: 0;
}

body * {
  font-family: 'IBM Plex Sans KR', sans-serif;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
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
background: rgba(0, 0, 0, 0.7);
z-index: 150;
}

.modal-wrap2 {
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
z-index: 200;
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

::-webkit-scrollbar {
        width: 10px;
    }
  
::-webkit-scrollbar-thumb {
background-color:rgb(199, 199, 199) ;
border-radius: 10px;
background-clip: padding-box;
border: 2px solid transparent;
}

::-webkit-scrollbar-track {
  background-color: #e6e6e6;
  border-radius: 10px;
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

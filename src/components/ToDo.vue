<template>
<div class="checkToDoList">
  <input type="checkbox" v-model="checked">
  <input type="text" v-model="inputToDo" :disabled="checked">
</div>
</template>
<style>
.checkToDoList{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.checkToDoList input[type="checkbox"]{
  margin-left: 10px;
  width: 25px;
  height: 25px;
}
.checkToDoList input[type="text"]{
  width: 190px;
  min-height: 30px;
  border: 0;
  font-size: 14pt;
  background-color: #F1f1F1

}
.checkToDoList input[type="text"]:focus{
  outline: 0;
}

</style>
<script>
export default {
  name:'ToDo',
  components: {},
  data () {
    return {
      checked: false,
      inputToDo:'',
      sampleData: ''
    }
  },
  methods: {}
}
</script>

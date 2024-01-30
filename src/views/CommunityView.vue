<template>
  <div>
    <LeftMenu/>

      <div class ="container">
        <div id="back">
        <div class="bTitle">모집 커뮤니티
          <select
            v-model="partModel"
            class="part-select"
            v-bind:id="input_id"
            v-on:input="updateValue($event.target.value)"
          > 
            <option v-for="(item, index) in parts" :key="index">{{ item }}</option>
          </select>
          <select
            v-model="stateModel"
            class="state-select"
          > 
            <option v-for="(item, index) in states" :key="index">{{ item }}</option>
          </select>
          <SelectBox
            v-model="preselect_value"
            :items="somethings"
            :input_id="'my_selectbox'"
            @input="value => { preselect_value = value }"
        ></SelectBox>
        </div>

        <div class="new-post">
          <div class="write-post">
            
          </div>
          <Button type="button" @click="posting" class="button">등록하기</Button>
        </div>
        
        <div class="posts"> 

        </div>

      </div>
    </div>
  </div>
</template>

<style>
#back{
  margin-left: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height:2.0;
}
.bTitle{
  font-size: 30px;
  padding-left: 10px;
  text-align: left;
  font-weight: bold;
}
.part-select{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 10px;
  width: 90px; 
  height: 40px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 15pt;
}
.state-select{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 10px;
  margin-left: 130px;
  padding-left: 10px;
  width: 130px; 
  height: 40px;
  border-radius: 34px;
  border: none;
  color: white;
  font-size: 15pt;
}
.new-post{
  background-color: #D2DAFF;
  margin-left: 10px;
  margin-top: 20px;
  width: 1300px;
  height: 200px;
}
.write-post{
  background-color: #B1B2FF;
  margin-left: 20px;
  margin-top: 25px;
  width: 840px;
  height: 150px;
  border-color: black;
}
.button{
  background-color: #B1B2FF;
  margin-left: 20px;
  margin-right: 0;
  width: 180px;
  height: 40px;
  font-size: 13pt;
}
</style>


<style scoped>
.container{padding: 20px 90px}
</style>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
  export default {
    name: 'CommunityView',
    components: {
      LeftMenu
    },
    data() {
        return {
            partModel: '웹',
            stateModel: '모집중',
            parts: ['웹', '앱', '데분'],
            states:['모집중', '모집 완료'],
            message: "글을 입력하세요"
        };
    },
    methods: {
      updateValue: function(value){
        this.$emit('input', value);
      }
    }
  }
</script>

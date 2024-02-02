<template>
<LeftMenu/>
<div id="back">
  <div class="bTitle">새 프로젝트 만들기</div>
  <div class="bInputText">
    <div class="elementName">프로젝트명</div><input type="text" v-model="projectName">
  </div>
  <div class="bInputText">
    <div class="elementName">분야</div>
    <div class="bInputField">
      <label><input type="radio" v-bind:value="radioValue1" v-model="projectField">웹</label>
      <label><input type="radio" v-bind:value="radioValue2" v-model="projectField">앱</label>
      <label><input type="radio" v-bind:value="radioValue3" v-model="projectField">데이터분석</label>
      <span>{{projectField}}</span>
      <!-- <input type="radio" v-model="projectField" value="웹"/>
      <label>웹</label>
      <input type="radio" v-model="projectField" value="앱"/>
      <label>앱</label>
      <input type="radio" v-model="projectField" value="데분"/>
      <label>데분</label> -->
    </div>
  </div>
  <div class="bInputText">
    <div class="elementName">팀명</div><input type="text" v-model="projectTeam">
  </div>
  <div class="bInputText">
    <div class="elementName">프로젝트 기간</div>
    <div class="bInputDate">
      <div class="elementName">시작일</div><input type="date" v-model="projectStartDate"/>
      <div class="elementName">마감일</div><input type="date" v-model="projectEndDate"/>
    </div>
  </div>
  <div class="bInputText">
    <div class="elementName">깃허브링크</div><input type="text" v-model="projectGitLink">
  </div>
  <div class="bButton">
    <ButtonComponent parameter="" msg="프로젝트 생성하기" @click="createProject"/>
    <ButtonComponent parameter="mypage" msg="취소하기"/>
  </div>
</div>
</template>
<style>
#back{
  margin-left: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height:2.0;
}
.bInputText{
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px;
}
.bInputField{
  display:flex;
  width: 800px;
  flex-direction: row;
  justify-content: center;
}
.bInputDate{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.bTitle{
  font-size: 25px;
  padding-top: 20px;
  font-weight: bold;
}
[type="radio"] {
  /* 
  appearance: none;
  border: max(2px, 0.1em) solid gray; */
  /* vertical-align: middle;
  width: 1.25em;
  height: 1.25em; */
  display: none;
}
[type="radio"]+label{
}
.bInputField label{
  margin-right: 120px;
  cursor: pointer;
  border: 2px solid #C6C7FF;
  width: 100px;
  text-align: center;
}

.elementName{
  width: 200px;
  text-align: right;
  padding-right: 20px;
  font-weight: bold;
}
.bButton{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
}
input{
  width: 800px;
  height: 30px;
  border: 0;
  background-color: #C6C7FF;
  padding-left: 10px;
}
input:focus{
  outline: 0;
}
input[type=date]{
  width: 90px;
}

</style>
<script>
import LeftMenu from '@/components/LeftMenu.vue';
// import InputText from '@/components/InputText.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: "CreateNewView",
  components: {
    LeftMenu,
    // InputText,
    ButtonComponent,
  },
  data () {
    return {
      projectName:'',
      projectTeam:'',
      projectField:'',
      projectStartDate:'',
      projectEndDate:'',
      projectGitLink:'',

      radioValue1: '웹',
      radioValue2: '앱',
      radioValue3: '데분'
    }
  },
  methods: {
    createProject(){
      const today = new Date();
      if(this.projectEndDate<today | this.projectStartDate>this.projectEndDate){
        alert("유효한 기간을 입력하세요");
      }
    }
  }
}
</script>

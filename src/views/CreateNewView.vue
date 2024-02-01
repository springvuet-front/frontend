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
      <input type="radio" v-model="projectField" value="웹"/>
      <label>웹</label>
      <input type="radio" v-model="projectField" value="앱"/>
      <label>앱</label>
      <input type="radio" v-model="projectField" value="데분"/>
      <label>데분</label>
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
.bInputField label{
  display: flex;
  flex-direction: row;
  font-size: 12pt;
  padding-right: 50px;
  padding-left: 5px;
  justify-content: center;
}
[type="radio"] {
  /* vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
   */
  width: 1.25em;
  height: 1.25em;
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

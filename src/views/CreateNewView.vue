<template>
<LeftMenu/>
<div id="back">
  <div class="bTitle">새 프로젝트 만들기</div>
  <div class="bInputText">
    <div class="elementName">프로젝트명</div><input type="text">
  </div>
  <div class="bInputText">
    <div class="elementName">팀명</div><input type="text">
  </div>
  <div class="bInputText">
    <div class="elementName">프로젝트 기간</div>
    <label class="label">시작일</label>
    <label class="label">마감일</label>
  </div>
  <div class="bInputText">
    <div class="elementName">깃허브링크</div><input type="text">
  </div>
  <div class="bButton">
    <ButtonComponent parameter="" msg="프로젝트 생성하기"/>
    <ButtonComponent parameter="mypage" msg="취소하기"/>
  </div>
</div>
</template>
<style>
input{
    width: 700px;
    height: 30px;
    border: 0;
    background-color: #C6C7FF;
    padding-left: 10px;
}
input:focus{
    outline: 0;
}
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
.bTitle{
  font-size: 25px;
  padding-top: 20px;
  font-weight: bold;
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
    ButtonComponent
  },
  data () {
    return {
      sampleData: ''
    }
  },
  methods: {}
}
</script>

<template>
  <LeftMenu />
  <div class="container">
    <div class="bookMarkPageTitle"><p id="teamname">{{ project.teampageDetailResponseDto.teamName }}</p>북마크</div>
    <div class="bookMarkContent">
      <div class="singleBookMark" v-for="(item, index) in bookMarkList" :key="index">
        <input type="text" class="bookMark title" placeholder="제목" v-model="item.bookMarkTitle"/>
        <textarea class="bookMark textArea" placeholder="url만 입력하세용" v-model="item.bookMarkContent"></textArea>
        <div class="buttonArea">
          <ButtonComponent parameter="bookmark" msg="수정하기" @click="changeBookMark"/>
          <ButtonComponent parameter="bookmark" msg="삭제하기" @click="deleteBookMark(index)"/>
        </div>
      </div>
      <div class="createBookMark">
        <input type="text" class="bookMark title" placeholder="제목" v-model="inputTitle"/>
        <textarea class="bookMark textArea" placeholder="url만 입력하세용" v-model="inputContent"></textArea>
          <div class="buttonArea">
            <ButtonComponent msg="등록하기" @click="addBookMark"/>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding: 2vh 0px 2vh 90px;
}

.bookMarkPageTitle{
  padding-top: 20px;
  font-size: 20pt;
  font-weight: 900;
  padding-left: 60px;
  display: flex;
}

#teamname{
  margin: 0px 20px 0px 0px;
  text-decoration-line: underline;
}

.bookMarkContent{
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px 30px 20px;
}

.singleBookMark {
  margin: 20px;
  height: 250px;
  background-color: #D2DAFF;
  display: flex;
  flex-direction: column;
  width: calc(20% - 40px);
  border-radius: 5px;
}

.createBookMark{
  margin: 20px;
  width: 200px;
  height: 250px;
  background-color: #D2DAFF;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: calc(20% - 40px);
}

.bookMark.title{
  padding-top: 10px;
  padding-left: 15px;
  width: 190px;
  height: 30px;
  background-color: rgb(0,0,0,0);
  border: 0;
  font-weight: 700;
  font-size: 15pt;
}
hr{
  color: black;
}
.bookMark.textArea{
  background-color: rgb(0,0,0,0);
  height: 200px;
  border: 0;
  padding: 15px;
  font-size: 12pt;
  font-family: sans-serif;
  overflow-y: auto;
  resize: none;
}
.bookMark.textArea:focus{
  outline: 0;
}
.buttonArea {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
    
<script>
import api from '@/axios.js';
import LeftMenu from '@/components/LeftMenu.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'BookmarkView',
  props: ['teampageUuid'],
  created(){
    const teampageUuid = this.$route.params.teampageUuid;
    api.get(`/teampage/${teampageUuid}`)
        .then(response => {
          this.project = response.data || {} ;  // 응답 데이터를 project에 저장
        })
        .catch(error => {
        console.error(error);
    });
  },
  components: {
    LeftMenu,
    ButtonComponent
  },
  data(){
    return {
      inputTitle: '',
      inputContent: '',
      bookMarkList: [
        // {
        //   bookMarkTitle: "북마크1",
        //   bookMarkContent: "내용이 있어용"
        // },
        // {
        //   bookMarkTitle: "북마크2",
        //   bookMarkContent: "내용이 있어용"
        // }
      ],
      project:{
        teampageDetailResponseDto: {
          teamName: '...',
        },
      },
    }
  },
  methods : {
    addBookMark(){
      if(this.inputTitle.length !== 0 && this.inputContent.length !== 0){
        this.bookMarkList.push({ bookMarkTitle: this.inputTitle, bookMarkContent: this.inputContent });
        this.inputTitle = '';
        this.inputContent = '';
      }

      else{
        alert('제목과 내용을 입력하세요!')
      }
    },
    changeBookMark(event){
      var clickElement = event.target;
      var bookMarkToChange = clickElement.parentNode;
      var titleToChange = bookMarkToChange.firstChild; // 수정된 북마크 제목
      var contentToChange = titleToChange.nextSibling; // 수정된 북마크 내용
      if(titleToChange.length !== 0 && contentToChange.length !== 0){
        // 내용갱신
      }
    },
    deleteBookMark(index){
      this.bookMarkList.splice(index, 1);
    }
  }
}
</script>
    
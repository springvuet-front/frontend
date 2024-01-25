<template>
  <LeftMenu />
  <div class="container">
    <div class="bookMarkPageTitle">북마크</div>
    <div class="bookMarkContent">
      <div class="singleBookMark" v-for="(item, index) in bookMarkList" :key="index">
        <input type="text" class="bookMark title" placeholder="제목" v-model="item.bookMarkTitle"/>
        <textarea class="bookMark textArea" placeholder="url만 입력하세용" v-model="item.bookMarkContent"></textArea>
        <div class="buttonArea">
          <ButtonComponent parameter="bookmark" msg="수정하기" @click="changeBookMark"/>
          <ButtonComponent parameter="bookmark" msg="삭제하기" @click="deleteBookMark(index)"/>
        </div>
      </div>
      <div class="singleBookMark">
        <input type="text" class="bookMark title" placeholder="제목" v-model="inputTitle"/>
        <textarea class="bookMark textArea" placeholder="url만 입력하세용" v-model="inputContent"></textArea>
        <ButtonComponent parameter="bookmark" msg="등록하기" @click="addBookMark"/>
      </div>
    </div>
  </div>
</template>

<style>
.container{
  padding: 20px 90px;
}
.bookMarkPageTitle{
  padding-top: 20px;
  font-size: 20pt;
  font-weight: 900;
  padding-left: 120px;
}

.bookMarkContent{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-left: 100px;
}

.singleBookMark {
  margin: 20px;
  width: 200px;
  height: 250px;
  background-color: #D2DAFF;
  display: flex;
  flex-direction: column;
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
}
.bookMark.textArea:focus{
  outline: 0;
}
.buttonArea {
  display: flex;
  flex-direction: row;
}
</style>
    
<script>
import LeftMenu from '@/components/LeftMenu.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'BookmarkView',
  components: {
    LeftMenu,
    ButtonComponent
  },
  data(){
    return {
      inputTitle: '',
      inputContent: '',
      bookMarkList: [
        {
          bookMarkTitle: "북마크1",
          bookMarkContent: "내용이 있어용"
        },
        {
          bookMarkTitle: "북마크2",
          bookMarkContent: "내용이 있어용"
        }
      ],
    }
  },
  methods : {
    addBookMark(){
      if(this.inputTitle.length !== 0 && this.inputContent.length !== 0){
        this.bookMarkList.push({ bookMarkTitle: this.inputTitle, bookMarkContent: this.inputContent });
        this.inputTitle = '';
        this.inputContent = '';
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
    
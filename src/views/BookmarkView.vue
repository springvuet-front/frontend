<template>
  <LeftMenu />
  <div class="container">
    <div class="bookMarkPageTitle">북마크</div>
    <div class="bookMarkContent">
      <div class="singleBookMark" v-for="(item, index) in bookMarkList" :key="index">
        <input type="text" class="bookMark title" placeholder="제목" v-model="item.bookMarkTitle"/>
        <textarea class="bookMark textArea" placeholder="url만 입력하세용" v-model="item.bookMarkContent"></textArea>
      </div>
    </div>
  </div>
</template>

<style>okMarkContent
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
  display: flex;
  flex-direction: row;
  padding-left: 100px;
}

.singleBookMark {
  margin: 20px;
  width: 250px;
  height: 300px;
  background-color: #D2DAFF;
  display: flex;
  flex-direction: column;
}
.bookMark.title{
  padding-top: 10px;
  padding-left: 15px;
  width: 240px;
  height: 50px;
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
}
/* .bookMark.textArea:focus{
  outline: 0;
} */
</style>
    
<script>
import LeftMenu from '@/components/LeftMenu.vue';

export default {
  name: 'BookmarkView',
  components: {
    LeftMenu,
  },
  data(){
    return {
      inputItem: '',

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
  }
}
</script>
    
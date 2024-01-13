<template>
<LeftMenu />
<div id="wrap">
  <div class="b_left">
    <div class="schedule">
      <div class="title">마감 임박 일정</div>
      <div class="listBox">
      </div>
    </div>
    <div class="toDoList">
      <div class="title">To Do List  
       <button type="button" id="plusbtn" @click="addToDoList">+</button>
      </div>
      <div class="listBox">
        <label>
          <div class="checkToDoList" v-for="(toDo, index1) in toDos" :key="index1" v-html="toDo">
          </div>
        </label>
      </div>
    </div>
  </div>
  <div class="b_right">
    <div class="bproject current">
      <div class="title">현재 진행중인 프로젝트</div>
      <div class="projectlist">
        <button type="button" class="showPastbtn" @click="showPastProject">◀</button>
        <div v-for="(item, index2) in currentProjectList" :key="index2">
        <!-- <div v-for="(item, index2) in visibleProject" :key="index2"> -->
          <component :is="item.component" :data="item.data"></component>
        </div>
        <button type="button" class="showNextbtn" @click="showNextProject">▶</button>
      </div>
    </div>
    <div class="bproject complete">
      <div class="title">진행 완료된 프로젝트</div>
      <div class="projectlist">
        <button type="button" class="showPastbtn" @click="showPastProject">◀</button>
        <div v-for="(item, index2) in completeProjectList" :key="index2">
        <!-- <div v-for="(item, index2) in visibleProject" :key="index2"> -->
          <component :is="item.component" :data="item.data"></component>
        </div>
        <button type="button" class="showNextbtn" @click="showNextProject">▶</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
  padding: 20px 90px;
}
#wrap {
  display: flex;
  justify-content: center;
  
}
.b_left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: gray; */
  margin-top: 100px;
  width: 200px;
  height: 500px;
}
.b_right {
  /* background-color: gray; */
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  width: 700px;
  height: 500px;
}
.schedule {
  width: 190px;
  margin-top: 1vw;
  height: 240px;
  /* background-color: gray; */
}
.toDoList {
  width: 190px;
  margin-top: 1vw;
  height: 240px;
  /* background-color: gray; */
  align-content: center;
  justify-content: center;
}
.title {
  font-size: 12pt;
  text-align: center;
  font-weight: bold;
  padding: 1vw;
}

.bproject {
  background-color: white;
  min-height: 45%;
  margin: 1vw;
}
.bproject.current {
  display: block;
}
.bproject .title {
  padding-left: 20pt;
  padding-top: 10pt;
  text-align: left;
}
.bproject.complete {
  
}
.projectlist {
  background-color: #FFFFFF;
  width: 700px;
  height: 180px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.project-item {
  margin-right: 10px; 
}

#plusbtn{
  width: 17px;
  height: 17px;
  font-size: 16px;
  font-weight: bold;
  /* display: inline-flex; */
  flex-direction: column;  
  align-items: center; 
  justify-content: center;
  background-color: rgb(0,0,0,0);
  /* border: solid; */
  /* border-radius: 5px; */
}

.listBox {
  background-color: #F1F1F1;
  width: 170px;
  height: 180px;
  margin: 0.7vw;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  overflow-y: auto;
}
.checkToDoList{
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.listBox input[type="checkbox"]{
  width: 30px;
  height: 30px;
}
.listBox input[type="text"]{
  width: 120px;
  height: 25px;
  border: 0;
  background-color: #B1B2FF;
}
.showPastbtn{
  background-color: rgba(0,0,0,0);
  font-size: 20pt;
  color: gray;
  border: none;
}
.showPastbtn:active{
  color: #B1B2FF;
  border: none;
}
.showNextbtn{
  background-color: rgba(0,0,0,0);
  font-size: 20pt;
  color: gray;
  border: none;
}
.showNextbtn:active{
  color: #B1B2FF;
  border: none;
}
</style>
    
<script>
import LeftMenu from '@/components/LeftMenu.vue';
import ProjectBox from '@/components/ProjectBox.vue';
  
export default {
  name: 'MypageView',
  components: {
    LeftMenu,
    ProjectBox
  },
  data () {
    return {
      startIndex: 0,
      endIndex: 2,
      checked: false,
      inputToDo:'',
      sampleData: "",
      toDos: [],
      visibleProject: [],
      currentProjectList: [
        { component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "백", 
            project_name: "개발사이트 만들기", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "개발사이트 만들기", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "개발사이트 만들기", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        // { component: ProjectBox, 
        //   data: { project_field: "웹", 
        //     project_mypart: "프론트", 
        //     project_name: "개발사이트 만들기", 
        //     project_team: "스프링뷰트", 
        //     project_date_start: "2022-03-21",
        //     project_date_end: "2022-05-21",
        //   }
        // }
      ],
      completeProjectList: [
        { component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "백", 
            project_name: "프로젝트1", 
            project_team: "팀1", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "프로젝트2", 
            project_team: "팀2", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "프로젝트3", 
            project_team: "팀3", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
      ]
    }
  },
  methods: {
    addToDoList(){
      this.toDos.push('<input type="checkbox" v-model="checked"><input type="text" v-model="inputToDo" :disabled="checked">');
    },
    showPastProject(){

    },
    showNextProject(){
      this.visibleProject = this.currentProjectList.slice(this.startIndex, this.endIndex);
    }
  }
}
</script>
    
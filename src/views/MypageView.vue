<template>
<LeftMenu />
<div id="wrap">
  <div class="b_left">
    <div class="schedule">
      <div class="title">마감 임박 일정</div>
      <div class="listBox">
        <ul>
          <li v-for="(schedule, index) in scheduleList" :key="index">{{ schedule.work_title }}  &#40;{{schedule.date_end.month}}/{{schedule.date_end.day}}&#41;</li>
        </ul>
      </div>
    </div>
    <div class="toDoList">
      <div class="title">To Do List  
       <button type="button" id="plusbtn" @click="addToDoList">+</button>
      </div>
      <div class="listBox">
        <label>
          <component :is="toDo" v-for="(toDo, index) in toDos" :key="index"></component>
        </label>
      </div>
    </div>
  </div>
  <div class="b_right">
    <div class="bproject current">
      <div class="title">현재 진행중인 프로젝트</div>
      <div class="projectlist">
        <button type="button" class="showPastbtn" @click="showCurrentPast" :disabled="currentStartIndex===0">◀</button>
        <div v-for="(item, index) in visibleCurrentProject" :key="index">
          <!-- <component :is="item.component" :data="item.data"></component> -->
          <div class="projectBox">
            <div class="project category">
              <div class="project field">{{item.data.project_field}}</div>
              <div class="project myPart">{{item.data.project_mypart}}</div>
            </div>
            <div class="project info">
              <div class="project name">{{item.data.project_name}}</div>
              <div class="project team">팀: {{item.data.project_team}}</div>
              <div class="project date start">시작일: {{item.data.project_date_start}}</div>
              <div class="project date end">마감일: {{item.data.project_date_end}}</div>
            </div>
          </div>
        </div>
        <button type="button" class="showNextbtn" @click="showCurrentNext" :disabled="currentEndIndex === currentProjectList.length || currentProjectList.length <= 3">▶</button>
      </div>
    </div>
    <div class="bproject complete">
      <div class="title">진행 완료된 프로젝트</div>
      <div class="projectlist">
        <button type="button" class="showPastbtn" :disabled="completeStartIndex===0">◀</button>
        <div v-for="(item, index) in visibleCompleteProject" :key="index">
          <!-- <component :is="item.component" :data="item.data"></component> -->
          <div class="projectBox">
            <div class="project category">
              <div class="project field">{{item.data.project_field}}</div>
              <div class="project myPart">{{item.data.project_mypart}}</div>
            </div>
            <div class="project info">
              <div class="project name">{{item.data.project_name}}</div>
              <div class="project team">팀: {{item.data.project_team}}</div>
              <div class="project date start">시작일: {{item.data.project_date_start}}</div>
              <div class="project date end">마감일: {{item.data.project_date_end}}</div>
            </div>
          </div>
        </div>
        <button type="button" class="showNextbtn">▶</button>
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

.listBox {
  background-color: #F1F1F1;
  width: 170px;
  height: 180px;
  /* margin: 0.7vw; */
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  overflow-y: auto;
}

.listBox li {
  font-size: 12px;
  line-height:2.0;
}

.listBox li::marker {
  content: '■ ';
  color: #B1B2FF;
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

.title {
  font-size: 12pt;
  text-align: left;
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
}
.bproject.complete {
  
}
.projectlist {
  background-color: #FFFFFF;
  width: 700px;
  height: 180px;
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */
  justify-content: space-between;
}

.project-item {
  margin-right: 10px; 
}

.showPastbtn{
  background-color: rgba(0,0,0,0);
  font-size: 20pt;
  color: gray;
  /* border: none; */
}
.showPastbtn:active{
  color: #B1B2FF;
  border: none;
}
.showNextbtn{
  background-color: rgba(0,0,0,0);
  font-size: 20pt;
  color: gray;
  /* border: none; */
}
.showNextbtn:active{
  color: #B1B2FF;
  border: none;
}

/* ProjectBox */
.projectBox {
    width: 150px;
    height: 150px;
    background-color: #D2DAFF;
    border-radius: 5px;
    display: block;
    font-size: 12pt;
    margin: 20px;
}
.projectBox:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.project.category {
    width: 150px;
    height: 50px;
    display: flex;
}
.project.field {
    border-radius: 50%;
    background-color: #B1B2FF;
    margin-top: 10px;
    margin-left: 10px;
    width: auto;
    min-width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
.project.myPart {
    border-radius: 10px;
    border: solid;
    border-color: #B1B2FF;
    width: auto;
    min-width: 27px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    margin-top: 10px;
    margin-left: 10px;
}
.project.info{
    width: 150px;
    height: 100px;
    align-content:center;
    background-color: #B1B2FF;
    border-radius: 5px;
    font-size: 9pt;
    text-indent: 7px;
    line-height:1.5;
    color: white;
}
.project.name{
    font-size: 15pt;
    line-height:1.0;
    font-weight: bold;
}
.project.team{
    font-size: 12pt;
    font-weight: medium;
}
</style>
    
<script>
import LeftMenu from '@/components/LeftMenu.vue';
// import ProjectBox from '@/components/ProjectBox.vue';
import ToDo from '@/components/ToDo.vue';
  
export default {
  name: 'MypageView',
  components: {
    LeftMenu,
    // ProjectBox,
    ToDo
  },
  data () {
    return {
      // checked: false,
      // inputToDo:'',
      scheduleList: [ 
        { project_index: '', work_title: '기획발표회', date_end: { year: 2023, month: 1, day: 17 }},
        { project_index: '', work_title: '정기회의', date_end: {year: 2023, month: 1, day: 20 }} 
      ],
      toDos: [],
      currentProjectList: [
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "백", 
            project_name: "1", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "2", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "3", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "앱", 
            project_mypart: "프론트", 
            project_name: "4", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "앱", 
            project_mypart: "백", 
            project_name: "5", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "6", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        }
      ],
      completeProjectList: [
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "백", 
            project_name: "프로젝트1", 
            project_team: "팀1", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "프로젝트2", 
            project_team: "팀2", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "프로젝트3", 
            project_team: "팀3", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
      ],
      currentProjectPage: 1,
      currentStartIndex: 0,
      currentEndIndex: 3,
      completeStartIndex: 0,
      completeEndIndex: 3,
      disabledCurrentNext: false
    }
  },
  methods: {
    addToDoList(){
      // this.toDos.push('<input type="checkbox" v-model="checked"><input type="text" v-model="inputToDo" :disabled="checked">');
      this.toDos.push(ToDo);
    },
    showCurrentPast(){
      if(this.currentStartIndex != 0){
        this.currentStartIndex--;
        this.currentEndIndex--;
      }
    },
    showCurrentNext(){
      if(this.currentEndIndex != this.currentProjectList.length){
        this.currentStartIndex++;
        this.currentEndIndex++;
      }
    },
    showCompletePast(){

    },
    showCompleteNext(){

    },
    
  },
  computed: {
    visibleCurrentProject(){
      console.log('변화');
      return this.currentProjectList.slice(this.currentStartIndex, this.currentEndIndex);
    },
    visibleCompleteProject(){
      return this.completeProjectList.slice(this.completeStartIndex, this.completeEndIndex);
    },
    // setEndIndex(){
    //   if(this.currentProjectList.length <= 3) {
    //     this.currentEndIndex = this.currentProjectList.length;
    //     return this.currentEndIndex;
    //   }
    // }
  }
}
</script>
    
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
          <!-- <component :is="toDo" v-for="(toDo, index) in toDos" :key="index"></component> -->
          <div class="checkToDoList" v-for="(item, index) in saveToDoList" :key="index">
            <input id="toDoCheck" type="checkbox" v-model="item.toDoIsChecked">
            <input type="text" v-model="item.toDoContents" :disabled="item.toDoIsChecked">
          </div>
        </label>
      </div>
    </div>
  </div>
  <div class="b_right">
    <div class="bproject current">
      <div class="title">현재 진행중인 프로젝트</div>
      <div class="projectlist">
        <button type="button" class="showPastbtn" @click="showCurrentPast" :disabled="isDisabledCurrentPast">
          <img class="showbtnimg" v-if="isDisabledCurrentPast" alt="◀" src="../assets/showpastbtn.png"/>
          <img class="showbtnimg" v-if="isDisabledCurrentPast===false" alt="◀" src="../assets/showpastbtn_active.png" />
        </button>
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
        <router-link to="createnew">
          <button type="button" v-if="currentEndIndex===currentProjectList.length + 1" class="addProjectBtn" @click="addProject">새 프로젝트 만들기</button>
        </router-link>
        <button type="button" class="showNextbtn" @click="showCurrentNext" @mouseover="mouseOverNextBtn" :disabled="isDisabledCurrentNext">
          <img class="showbtnimg" v-if="isDisabledCurrentNext" alt="▶" src="../assets/shownextbtn.png" />
          <img class="showbtnimg" v-if="isDisabledCurrentNext===false" alt="▶" src="../assets/shownextbtn_active.png" />
        </button>
      </div>
    </div>
    <div class="bproject complete">
      <div class="title">진행 완료된 프로젝트</div>
      <div class="projectlist">
        <button type="button" class="showPastbtn" @click="showCompletePast" :disabled="isDisabledCompletePast">
          <img class="showbtnimg" v-if="isDisabledCompletePast" alt="◀" src="../assets/showpastbtn.png"/>
          <img class="showbtnimg" v-if="isDisabledCompletePast===false" alt="◀" src="../assets/showpastbtn_active.png" />
        </button>
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
        <button type="button" class="showNextbtn" @click="showCompleteNext" :disabled="isDisabledCompleteNext">
          <img class="showbtnimg" v-if="isDisabledCompleteNext" alt="▶" src="../assets/shownextbtn.png" />
          <img class="showbtnimg" v-if="isDisabledCompleteNext===false" alt="▶" src="../assets/shownextbtn_active.png" />
        </button>
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
  margin-top: 50px;
  margin-left: 100px;
  width: 400px;
  height: 570px;
  /* background-color: gray; */
}
@media(max-width:1000px){
  .b_left{
    display:none;
  }
}
.b_right {
  /* background-color: lightgray; */
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  width: 1200px;
  height: 570px;
}
.schedule {
  width: 250px;
  margin-top: 1vw;
  height: 270px;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
}
.toDoList {
  width: 250px;
  margin: 10px;
  height: 270px;
  display:flex;
  flex-direction: column;
  /* background-color: black; */
}

.listBox {
  background-color: #F1F1F1;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  overflow-y: auto;
  padding-top: 5px;
}

.listBox li {
  font-size: 14pt;
  line-height: 1.7;
}

.listBox li::marker {
  content: '■ ';
  color: #B1B2FF;
}

#plusbtn{
  width: 27px;
  height: 27px;
  font-size: 17pt;
  font-weight: 500;
  flex-direction: column;  
  align-items: center; 
  justify-content: center;
  background-color: rgb(0,0,0,0);
  border: solid;
  border-radius: 7px;
  float: right;
  margin-top: 5px;
}

.title {
  font-size: 19pt;
  text-align: left;
  font-weight: 900;
  padding: 10px;
  font-family: sans-serif;
}

.bproject {
  background-color: white;
  /* min-height: 45%;s */
  margin: 10px;
  height: 270px;
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
  /* background-color: #F2F2F2; */
  width: 850px;
  height: 200px;
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

/* ProjectBox */
.projectBox {
    width: 200px;
    height: 200px;
    background-color: #D2DAFF;
    border-radius: 15px;
    display: block;
    font-size: 12pt;
    margin: 20px;
    margin-top: 0px;
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
    width: 200px;
    height: 150px;
    background-color: #B1B2FF;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 10pt;
    text-indent: 7px;
    line-height: 1.5;
    color: white;
    overflow: hidden;
    justify-content: center;
}
.project.name{
  padding-top: 10px;
  font-size: 17pt;
  font-weight: 900;
  white-space: wrap;
}

.project.team{
  font-size: 13pt;
  font-weight: 600;
}

.project.date{
  line-height: 1.5;
}

/* toDoList */
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
.checkToDoList input[type="text"]:disabled{
  text-decoration: line-through;
}
/* addProjectBtn */
.addProjectBtn {
  width: 200px;
  height: 200px;
  background-color: #D2DAFF;
  border-radius: 15px;
  display: block;
  font-size: 12pt;
  border: 0;
}
.addProjectBtn:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.showbtnimg{
  width: 30px;
  height: 50px;
}

</style>
    
<script>
import LeftMenu from '@/components/LeftMenu.vue';
// import ProjectBox from '@/components/ProjectBox.vue';
// import ToDo from '@/components/ToDo.vue';
  
export default {
  name: 'MypageView',
  components: {
    LeftMenu,
    // ProjectBox,
    // ToDo
  },
  data () {
    return {
      // checked: false,
      // inputToDo:'',
      hoveredProjectName: 0,
      scheduleList: [ 
        { project_index: '', work_title: '기획발표회', date_end: { year: 2023, month: 1, day: 17 }},
        { project_index: '', work_title: '정기회의', date_end: {year: 2023, month: 1, day: 20 }} 
      ],
      currentProjectList: [
        { 
          // component: ProjectBox,
          data: { project_field: "웹", 
            project_mypart: "백", 
            project_name: "개발사이트 만들기", 
            project_team: "스프링뷰트", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "글씨넘치면어떻게하지", 
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
        // { 
        //   // component: ProjectBox, 
          
        //   data: { project_field: "앱", 
        //     project_mypart: "백", 
        //     project_name: "5", 
        //     project_team: "스프링뷰트", 
        //     project_date_start: "2022-03-21",
        //     project_date_end: "2022-05-21",
        //   }
        // },
        // { 
        //   // component: ProjectBox, 
          
        //   data: { project_field: "웹", 
        //     project_mypart: "프론트", 
        //     project_name: "6", 
        //     project_team: "스프링뷰트", 
        //     project_date_start: "2022-03-21",
        //     project_date_end: "2022-05-21",
        //   }
        // }
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
        { 
          // component: ProjectBox, 
          data: { project_field: "웹", 
            project_mypart: "프론트", 
            project_name: "프로젝트4", 
            project_team: "팀4", 
            project_date_start: "2022-03-21",
            project_date_end: "2022-05-21",
          }
        },
        { 
          // component: ProjectBox, 
          data: { project_field: "데분", 
            project_mypart: "프론트", 
            project_name: "프로젝트5", 
            project_team: "팀5", 
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
      disabledCurrentNext: false,
      
      /* toDoList */
      saveToDoList: [ { toDoIsChecked: true, toDoContents: '안녕하세요'}],
    }
  },
  methods: {
    addToDoList(){
      // this.toDos.push(ToDo);
      this.saveToDoList.push({ toDoIsChecked: false, toDoContents: this.toDoContents });
      console.log(this.saveToDoList);
    },
    /* 버튼활성화 여부 계산 */
    showCurrentPast(){
      if(this.currentStartIndex != 0){
        this.currentStartIndex--;
        this.currentEndIndex--;
      }
    },
    showCurrentNext(){
      if(this.currentEndIndex != this.currentProjectList.length + 1){
        this.currentStartIndex++;
        this.currentEndIndex++;
      }
    },
    showCompletePast(){
      if(this.completeStartIndex != 0){
        this.completeStartIndex--;
        this.completeEndIndex--;
      }
    },
    showCompleteNext(){
      if(this.completeEndIndex != this.completeProjectList.length){
        this.completeStartIndex++;
        this.completeEndIndex++;
      }
    },
  },
  computed: {
    /* 프로젝트 3개씩 보여주게 */
    visibleCurrentProject(){
      return this.currentProjectList.slice(this.currentStartIndex, this.currentEndIndex);
    },
    visibleCompleteProject(){
      return this.completeProjectList.slice(this.completeStartIndex, this.completeEndIndex);
    },

    /* 버튼 활성화 여부 */
    isDisabledCurrentPast(){
      return this.currentStartIndex===0;
    },
    isDisabledCurrentNext(){
      return this.currentEndIndex === this.currentProjectList.length + 1 || this.currentProjectList.length <= 3;
    },
    isDisabledCompletePast(){
      return this.completeStartIndex===0;
    },
    isDisabledCompleteNext(){
      return this.completeEndIndex === this.completeProjectList.length || this.completeProjectList.length <= 3;
    }
  },
  watch: {
    saveToDoList:function(){
      console.log("변경");
    }
  }
}
</script>
    
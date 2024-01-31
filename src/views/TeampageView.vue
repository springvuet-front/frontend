<template>
    <LeftMenu />

    <div id="container">
        <div class="flex-left">
            <div class="project-info">
                <div class="team-info">
                    <h2>{{ project.exProjectName }}</h2>
                    <ButtonComponent msg="수정하기" @click="modalOpen" />
                </div>


                <div class="project-date">
                    <div class="project-start">
                        <h5>프로젝트 시작일</h5>
                        <div>{{ project.ProjectStartDate }}</div>
                    </div>
                    <div class="project-end">
                        <h5>프로젝트 마감일</h5>
                        <div>{{ project.ProjectEndDate }}</div>
                    </div>
                </div>

                <div class="end-bar">
                    <h5>프로젝트 마감까지</h5>
                    <div id="bar"></div>
                    <h5>D-{{ project.dDay }}</h5>
                </div>
                
                <div class="btn-container">
                    <ButtonComponent msg="북마크" parameter="bookmark"/>
                    <ButtonComponent msg="깃허브" @click="onclickgithub" />
                </div>
            </div>

            <div class="calendar-container">
                <div class="calendar">
                    <CalendarView
                        :items="state.items"
                        :show-date="state.showDate"
                        :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
                        :disable-past="state.disablePast"
                        :disable-future="state.disableFuture"
                        :show-times="state.showTimes"
                        :date-classes="myDateClasses()"
                        :display-period-uom="state.displayPeriodUom"
                        :display-period-count="state.displayPeriodCount"
                        :starting-day-of-week="state.startingDayOfWeek"
                        :class="themeClasses"
                        :period-changed-callback="periodChanged"
                        :current-period-label="state.useTodayIcons ? 'icons' : ''"
                        :displayWeekNumbers="state.displayWeekNumbers"
                        @click-date="onClickDay"
                        @click-item="onClickItem"
                    >
                        <template #header="{ headerProps }">
                            <CalendarViewHeader :header-props="headerProps" @input="setShowDate" />
                        </template>
                    </CalendarView>
                </div>
            </div>
        </div>

        <div class="flex-right">
            <div class="right-menu-members">
                <h3>팀명</h3>
                <hr>
                <div class="members">
                    <div class="members-left">
                        <div class="member1">팀원1</div>
                        <div class="member2">팀원2</div>
                        <div class="member3">팀원3</div>
                    </div>

                    <div class="members-right">
                        <div class="member4">팀원4</div>
                        <div class="member5">팀원5</div>
                        <div class="member6">팀원6</div>
                    </div>
                </div>
            </div>

            <div class="right-menu-schedulelists">
                <h3>주요 일정</h3>
                <hr>

                <div class="schedule-list">
                    <ul id="ex">
                        <li v-for="item in state.items" v-bind:key="item.id">
                            - {{ item.title }}
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="right-menu-addschedule">
                <h3>일정 추가하기</h3>
                <hr>

                <div class="calendar-controls">
                    <div class="box">
                        <div class="field">
                            <label class="label">일정명</label>
                            <div class="control">
                                <input v-model="state.newItemTitle" type="text" class="input-text" />
                            </div>
                        </div>

                        <div class="schedule-input-container">
                            <div class="select-date">
                                <label class="label">시작 날짜</label>
                                <div class="control">
                                    <input v-model="state.newItemStartDate" type="date" />
                                </div>
                            </div>

                            <div class="select-date">
                                <label class="label">마감 날짜</label>
                                <div class="control">
                                    <input v-model="state.newItemEndDate" type="date" />
                                </div>
                            </div>
                        </div>

                    <ButtonComponent class="button is-info" @click="clickTestAddItem" msg="일정 추가하기" />
                    </div>
                </div>
            </div>
        </div>
	</div>
    
    <div class="modal-wrap" v-show="modalCheck">
        <div class="modal-container">
            <div class="flex-box">
                <div class="modal-info">
                    <h2>수정하기</h2>

                    <div class="container-modal-window">
                    <div class="input-container">
                        <div class="label-text">
                        <h4>프로젝트명</h4>
                        </div>
                        <div>
                        <input type="text" value="${project.exProjectName}" id="projectname" class="input-long"/>
                        </div>
                    </div>

                    <div class="input-container">
                        <div class="label-text">
                        <h4>팀명</h4>
                        </div>
                        <div>
                        <input type="text" value="${project.exTeamName}" id="teamname" class="input-long"/>
                        </div>
                    </div>

                    <ButtonComponent msg="팀원 추가하기" @click="modalOpen2"/>

                    <div class="input-container">
                        <div class="label-text">
                        <h4>프로젝트 기간</h4>
                        </div>
                        <div class="date-container">
                            <div class="project-start">
                                <h5>프로젝트 시작일</h5>
                                <input v-model="newProjectStartDate" id="startdate" type="date" />
                            </div>
                            <div class="project-end">
                                <h5>프로젝트 마감일</h5>
                                <input v-model="newProjectEndDate" id="enddate" type="date" />
                            </div>
                        </div>
                    </div>

                    <div class="input-container">
                        <div class="label-text">
                        <h4>깃허브 링크</h4>
                        </div>
                        <div>
                        <input type="text" id="githublink" value="https://github.com/springvuet-front/" class="input-long"/>
                        </div>
                    </div>

                    </div>
                    <div class="btn-container-right">
                        <ButtonComponent msg="저장하기" @click="saveBtn"/>
                    </div>
                </div>
            
                <div class="modal-btn">
                    <div class="close-btn" @click="modalOpen">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-wrap2" v-show="modalCheck2">
        <div class="modal-container">
            <div class="flex-box">
                <div class="modal-info">
                    <h2>팀원 추가하기</h2>
                    <div class="container-modal-window">
                        <div class="input-container">
                            <div class="label-text">
                            <h4>팀장</h4>
                            </div>
                            <input type="text" id="leader" class="input-short"/>
                        </div>
                        <div class="input-container">
                            <div class="label-text">
                            <h4>팀원1</h4>
                            </div>
                            <input type="text" id="member1" class="input-short"/>
                        </div>

                        <div class="input-container">
                            <div class="label-text">
                            <h4>팀원2</h4>
                            </div>
                            <input type="text" id="member2" class="input-short"/>
                        </div>

                        <div class="input-container">
                            <div class="label-text">
                            <h4>팀원3</h4>
                            </div>
                            <input type="text" id="member3" class="input-short"/>
                        </div>

                        <div class="input-container">
                            <div class="label-text">
                            <h4>팀원4</h4>
                            </div>
                            <input type="text" id="member4" class="input-short"/>
                        </div>

                    </div>
                    <div class="btn-container-right">
                        <ButtonComponent msg="저장하기" @click="saveBtn"/>
                    </div>
                </div>
            
                <div class="modal-btn">
                    <div class="close-btn" @click="modalOpen2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* 
https://madewithvuejs.com/vue-simple-calendar
https://github.com/richardtallent/vue-simple-calendar 
*/
  #container{
    padding: 2vh 0px 2vh 90px;
    height: 96vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-left{
    display: flex;
    flex-direction: column;
    width: 60vw;
    padding: 10px
  }

  .flex-right{
    display: flex;
    flex-direction: column;
    width: 25vw;
    padding: 0px 10px;
  }

  .project-info{
    display: flex;
    flex-direction: column;
  }

  .project-date{
    display: flex;
    justify-content: center;
  }

  .project-start, .project-end{
    display: flex;
    align-items: center;
    padding: 0px 30px 0px 30px;
  }

  .team-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .end-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    width: 55vw;
  }

  .btn-container-right{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 30px;
  }

  #bar{
    height: 10px;
    background-color: aqua;
  }

  .right-menu-addschedule{
    height: 220px;
    padding: 20px;
    margin: 5px;
    border-radius: 5px;
    background-color: #e1e1e1;
  }

  .right-menu-members, .right-menu-schedulelists{
    height: 160px;
    padding: 20px;
    margin: 5px;
    border-radius: 5px;
    background-color: #e1e1e1;
  }

  .members{
    display: flex;
    padding: 20px;
  }

  .calendar-container{
    display: flex;
    justify-content: center;
  }

  ul{
        padding: 0;
    }

  .schedule-list{
    height: 130px;
    overflow-y: auto;
  }

    .schedule-list::-webkit-scrollbar {
        width: 10px;
    }
  
    .schedule-list::-webkit-scrollbar-thumb {
    background-color: #e6e6e6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
    }

    .schedule-list::-webkit-scrollbar-track {
        background-color: rgb(199, 199, 199);
        border-radius: 10px;
    }

    .select-date{
        display: flex;
        flex-direction: column;
        margin-right: 5vw;
    }

    .input-text{
        width: 20vw;
    }

  .calendar{
	width: 60vw;
	height: 60vh;
    display: flex;
    justify-content: center;
  }

  .schedule-input-container{
    display: flex;
    padding: 0px 10px 10px 10px;
  }

  .field{
    padding: 5px 10px 10px 10px
  }

  input{
    height: 30px;
    border: 0;
    background-color: #C6C7FF;
    padding-left: 10px;
    border-radius: 3px;
    }

    input:focus{
        outline: 0;
    }

    h3{
        margin: 0;
    }

    hr{
        background-color: #D9D9D9;
        border-width: 2px 0 0 0;
    }

    ul{
        margin: 0;
    }

    .flex-box{
        display: flex;
    }

    .modal-info{
        width: 80vw;
        height: 70vh;
    }

    h2, h4{
    margin: 0;
  }

  .label-text{
    width: 10vw;
  }

input{
  height: 30px;
  border: 0;
  background-color: #C6C7FF;
  padding-left: 10px;
  border-radius: 3px;
  }

  input:focus{
      outline: 0;
  }

  .container-modal-window{
    padding-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .input-container{
    display: flex;
    align-items: center;
    height: 50px;
    width: 72vw;
    margin: 10px;
    padding: 10px;
  }

  .input-long{
    width: 60vw;
  }

  .input-short{
    width: 30vw;
  }

  .btn-container{
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }

  .date-container{
    display: flex;
    width: 60vw;
    justify-content: space-around;
  }

  .project-start, .project-end{
    display: flex;
    align-items: center;
    padding: 0px 30px 0px 30px;
  }

  input[type=date] {
    width: 110px;
    }

    #startdate{
        margin-left: 25px;
    }

    #enddate{
        margin-left: 25px;
    }

    .members-right{
        margin-left: 30px;
    }

</style>

<script>
import { CalendarView, CalendarViewHeader, CalendarMath } from "vue-simple-calendar"
import LeftMenu from "@/components/LeftMenu.vue"
import ButtonComponent from "@/components/ButtonComponent.vue"
import "../calendar-style/style.css"
import "../calendar-style/default.css"
import "../calendar-style/gcal.css"
import dayjs from "dayjs"

export default {
  name: 'TeampageView',
  data() {
    return {
        modalCheck: false,
        modalCheck2: false,
    }
    },
    methods: {
        modalOpen() {
            this.modalCheck = !this.modalCheck
            const projectNameInput = document.getElementById('projectname');
            const teamNameInput = document.getElementById('teamname');
            
            projectNameInput.value = this.exProjectName;
            teamNameInput.value = this.exTeamName;
        },

        modalOpen2() {
            this.modalCheck2 = !this.modalCheck2
        },
    },
    components: {
        LeftMenu, ButtonComponent
    }
}
</script>

<script setup>
import { onMounted, reactive, computed } from "vue"
const todayDate = dayjs();
const dueDate = dayjs('2024-02-07');

const thisMonth = (d, h = 0, m = 0) => {
    const t = new Date()
    return new Date(t.getFullYear(), t.getMonth(), d, h, m)
}

const project = ({
    exProjectName: '개발 전용 웹 페이지 만들기리기리기억되리',
    exTeamName: '스프링뷰트',
    newProjectStartDate: '',
    newProjectEndDate: '',
    ProjectStartDate: '2024-01-02', // 프로젝트 시작일 데이터
    ProjectEndDate: '2024-02-07', // 프로젝트 마감일 데이터
    dDay: dueDate.diff(todayDate, 'day'),
})

if (document.getElementById('bar')) {
  var dDaywidth = document.getElementById('bar')
  dDaywidth.style.width = project.dDay * 5 + 'px'
}

const state = reactive({
    showDate: thisMonth(1),
    message: "",
    startingDayOfWeek: 0,
    disablePast: false,
    disableFuture: false,
    displayPeriodUom: "month",
    displayPeriodCount: 1,
    displayWeekNumbers: false,
    showTimes: true,
    newItemTitle: "",
    newItemStartDate: "",
    newItemEndDate: "",
    useDefaultTheme: true,
    useHolidayTheme: true,
    useTodayIcons: false,
    items: [
         {
             id: "e1",
             startDate: thisMonth(15, 18, 30),
             title: "그냥"
         },
        // {
        //     id: "e2",
        //     startDate: thisMonth(15),
        //     title: "Single-day item with a long title",
        // },
        // {
        //     id: "e3",
        //     startDate: thisMonth(7, 9, 25),
        //     endDate: thisMonth(10, 16, 30),
        //     title: "Multi-day item with a long title and times",
        // },
        //... the rest of your items
    ],
})

const themeClasses = computed(() => ({
    "theme-default": state.useDefaultTheme,
}))

const myDateClasses = () => {
    const o = {}
    const theFirst = thisMonth(1)
    const ides = [2, 4, 6, 9].includes(theFirst.getMonth()) ? 15 : 13
    const idesDate = thisMonth(ides)
    o[CalendarMath.isoYearMonthDay(idesDate)] = ["ides"]
    o[CalendarMath.isoYearMonthDay(thisMonth(21))] = ["do-you-remember", "the-21st"]
    return o
}

onMounted(() => {
    state.newItemStartDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
    state.newItemEndDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
    state.newItemProjectStartDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
    state.newItemProjectEndDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
})

const periodChanged = () => {}

const onClickItem = (e) => {
    state.message = `You clicked: ${e.title}`
    
    if(confirm(`<${e.title}> 일정을 삭제하시겠습니까?`) == true){
        const index = state.items.findIndex(item => item.id === e.id);
        if (index !== -1) {
            state.items.splice(index, 1);
        }
    }
}

const setShowDate = (d) => {
    state.message = `Changing calendar view to ${d.toLocaleDateString()}`
    state.showDate = d
}

const clickTestAddItem = () => {
    if (state.newItemTitle == "") alert("일정명을 입력해주세요!")

    else{
        state.items.push({
            startDate: CalendarMath.fromIsoStringToLocalDate(state.newItemStartDate),
            endDate: CalendarMath.fromIsoStringToLocalDate(state.newItemEndDate),
            title: state.newItemTitle,
            id: "e" + Math.random().toString(36).substring(2, 11),
        })
        state.message = "You added a calendar item!"

        var el = document.getElementsByClassName('input-text');
        for(var i=0; i<el.length; i++){
            el[i].value = '';
        }
    }
}

const saveBtn = () => {
    const projectNameInput = document.getElementById('projectname');
    const teamNameInput = document.getElementById('teamname');
    //const teamMemberInput = document.getElementById('teammember');
    const projectStartDateInput = document.getElementById('startdate');
    const projectEndDateInput = document.getElementById('enddate');
    const githubLinkInput = document.getElementById('githublink');

    const projectName = projectNameInput.value; // 값을 새로운 변수에 할당합니다.
    const teamName = teamNameInput.value; // 값을 새로운 변수에 할당합니다.
    
    //teamMemberInput.value = '하암';
    projectStartDateInput.value = this.newProjectStartDate;
    projectEndDateInput.value = this.newProjectEndDate;
    githubLinkInput.value = '흠';

    console.log(projectName); //변경하는 이름
    console.log(teamName); //이것도
}

const onclickgithub = () => {
    window.open('https://github.com/springvuet-front/')
}
</script>
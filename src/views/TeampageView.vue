<template>
    <LeftMenu />

    <div id="container">
        <div class="flex-left">
            <div class="project-info">
                <div class="team-info">
                    <h2>프로젝트명</h2>
                    <ButtonComponent msg="수정하기" @click="modalOpen" />
                </div>


                <div class="project-date">
                    <div class="project-start">
                        <h5>프로젝트 시작일</h5>
                        <input v-model="state.newItemProjectStartDate" type="date" />
                    </div>
                    <div class="project-end">
                        <h5>프로젝트 마감일</h5>
                        <input v-model="state.newItemProjectEndDate" type="date" />
                    </div>
                </div>

                <div class="end-bar">
                    <h5>프로젝트 마감까지</h5>
                    <div id="bar"></div>
                    <h5>D-44</h5>
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
                            {{ item.title }}
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
        <div class="modal-info">
            <ModifyWindow />
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
  }

  .btn-container{
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }

  #bar{
    width: 300px;
    height: 10px;
    background-color: aqua;
  }

  .right-menu-addschedule{
    height: 220px;
    padding: 20px;
    margin: 5px;
    background-color: #e1e1e1;
  }

  .right-menu-members, .right-menu-schedulelists{
    height: 130px;
    padding: 20px;
    margin: 5px;
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
    height: 150px;
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
    padding: 10px;
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

</style>

<script>
export default {
  name: 'TeampageView',
  data() {
    return {
        modalCheck: false,
    }
    },
    methods: {
    modalOpen() {
        this.modalCheck = !this.modalCheck
    }
    }
}
</script>

<script setup>
import { CalendarView, CalendarViewHeader, CalendarMath } from "vue-simple-calendar"
import "../calendar-style/style.css"
import "../calendar-style/default.css"
import "../calendar-style/gcal.css"
import "../calendar-style/holidays-us.css"

import { onMounted, reactive, computed } from "vue"
import LeftMenu from "@/components/LeftMenu.vue"
import ButtonComponent from "@/components/ButtonComponent.vue"
import ModifyWindow from "@/components/ModifyWindow.vue"

const thisMonth = (d, h = 0, m = 0) => {
    const t = new Date()
    return new Date(t.getFullYear(), t.getMonth(), d, h, m)
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
    ]
})

const themeClasses = computed(() => ({
    "theme-default": state.useDefaultTheme,
    "holiday-us-traditional": state.useHolidayTheme,
    "holiday-us-official": state.useHolidayTheme,
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

const onclickgithub = () => {
    window.open('https://github.com/springvuet-front/')
}
</script>
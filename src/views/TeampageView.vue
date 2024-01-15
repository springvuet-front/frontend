<template>
    <LeftMenu />

    <div id="container">
        <div class="flex-left">
            <div class="project-info">
                <div class="team-info">
                    <h2>팀명</h2>
                    <ButtonComponent msg="수정하기" />
                </div>


                <div class="project-date">
                    <div class="project-start">
                        <h5>시작일</h5>
                        <input v-model="state.newItemProjectStartDate" class="input" type="date" />
                    </div>
                    <div class="project-end">
                        <h5>마감일</h5>
                        <input v-model="state.newItemProjectEndDate" class="input" type="date" />
                    </div>
                </div>

                <div class="end-bar">
                    <h5>프로젝트 마감까지</h5>
                    <div id="bar"></div>
                    <h5>D-44</h5>
                </div>
                
                <div class="btn-container">
                    <ButtonComponent msg="북마크" />
                    <ButtonComponent msg="깃허브" />
                </div>
            </div>

            <div class="calendar-container">
                <div class="calendar">
                    <CalendarView
                        :items="state.items"
                        :show-date="state.showDate"
                        :time-format-options="{ hour: 'numeric', minute: '2-digit' }"
                        :enable-drag-drop="true"
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
                        :enable-date-selection="true"
                        :selection-start="state.selectionStart"
                        :selection-end="state.selectionEnd"
                        @date-selection-start="setSelection"
                        @date-selection="setSelection"
                        @date-selection-finish="finishSelection"
                        @drop-on-date="onDrop"
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
            <div class="right-menu">
                <h3>팀원</h3>
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

            <div class="right-menu">
                <h3>팀원</h3>
                <hr>
            </div>
            
            <div class="right-menu">
                <div class="calendar-controls">
                    <div class="box">
                        <div class="field">
                            <label class="label">Title</label>
                            <div class="control">
                                <input v-model="state.newItemTitle" type="text" class="input" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Start date</label>
                            <div class="control">
                                <input v-model="state.newItemStartDate" class="input" type="date" />
                            </div>
                        </div>

                    <div class="field">
                        <label class="label">End date</label>
                        <div class="control">
                            <input v-model="state.newItemEndDate" class="input" type="date" />
                        </div>
                    </div>
                    <ButtonComponent class="button is-info" @click="clickTestAddItem" msg="일정 추가하기" />
                    <button class="button is-info" @click="clickTestAddItem">Add Item</button>
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

  .right-menu{
    height: 180px;
    padding: 10px;
    margin: 10px;
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

  .calendar{
	width: 60vw;
	height: 60vh;
    display: flex;
    justify-content: center;
  }

  input{
    width: 100px;
    height: 30px;
    border: 0;
    background-color: #C6C7FF;
    padding-left: 10px;
    }

    input:focus{
        outline: 0;
    }

</style>

<script setup>
import { CalendarView, CalendarViewHeader, CalendarMath } from "vue-simple-calendar"
import "../../node_modules/vue-simple-calendar/dist/style.css"
import "../../node_modules/vue-simple-calendar/dist/css/default.css"
import "../../node_modules/vue-simple-calendar/dist/css/gcal.css"
import "../../node_modules/vue-simple-calendar/dist/css/holidays-us.css"

import { onMounted, reactive, computed } from "vue"
import LeftMenu from "@/components/LeftMenu.vue";
import ButtonComponent from "@/components/ButtonComponent.vue"

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
    selectionStart: undefined,
    selectionEnd: undefined,
    newItemTitle: "",
    newItemStartDate: "",
    newItemEndDate: "",
    useDefaultTheme: true,
    useHolidayTheme: true,
    useTodayIcons: false,
    items: [
        // {
        //     id: "e1",
        //     startDate: thisMonth(15, 18, 30),
        // },
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

const onClickDay = (d) => {
    state.selectionStart = undefined
    state.selectionEnd = undefined
    state.message = `You clicked: ${d.toLocaleDateString()}`
}

const onClickItem = (e) => {
    state.message = `You clicked: ${e.title}`
}

const setShowDate = (d) => {
    state.message = `Changing calendar view to ${d.toLocaleDateString()}`
    state.showDate = d
}

const setSelection = (dateRange) => {
    state.selectionEnd = dateRange[1]
    state.selectionStart = dateRange[0]
}

const finishSelection = (dateRange) => {
    setSelection(dateRange)
    state.message = `You selected: ${state.selectionStart?.toLocaleDateString() ?? "n/a"} - ${state.selectionEnd?.toLocaleDateString() ?? "n/a"}`
}

const onDrop = (item, date) => {
    state.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`
    const eLength = CalendarMath.dayDiff(item.startDate, date)
    item.originalItem.startDate = CalendarMath.addDays(item.startDate, eLength)
    item.originalItem.endDate = CalendarMath.addDays(item.endDate, eLength)
}

const clickTestAddItem = () => {
    state.items.push({
        startDate: CalendarMath.fromIsoStringToLocalDate(state.newItemStartDate),
        endDate: CalendarMath.fromIsoStringToLocalDate(state.newItemEndDate),
        title: state.newItemTitle,
        id: "e" + Math.random().toString(36).substring(2, 11),
    })
    state.message = "You added a calendar item!"
}
</script>
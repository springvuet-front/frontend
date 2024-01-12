<template>
  <LeftMenu />

  <div id="container">
	<div class="control">
		<div class="select">
			<select v-model="state.startingDayOfWeek">
				<option v-for="(d, index) in dayNames" :key="index" :value="index">
					{{ d }}
				</option>
			</select>
		</div>
	</div>

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

    <div class="calendar-parent">
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
</template>

<style scoped>
/* 
https://madewithvuejs.com/vue-simple-calendar
https://github.com/richardtallent/vue-simple-calendar 
*/
  .container{
    padding: 20px 90px;
  }
  .calendar-controls{
	background-color: antiquewhite;
  }

  .calendar-parent{
	width: 40vw;
	height: 50vh;
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
//import "../../node_modules/vue-simple-calendar/dist/css/default.css"
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
        {
            id: "e1",
            startDate: thisMonth(15, 18, 30),
        },
        {
            id: "e2",
            startDate: thisMonth(15),
            title: "Single-day item with a long title",
        },
        {
            id: "e3",
            startDate: thisMonth(7, 9, 25),
            endDate: thisMonth(10, 16, 30),
            title: "Multi-day item with a long title and times",
        },
        //... the rest of your items
    ]
})

const userLocale = computed(() => CalendarMath.getDefaultBrowserLocale())

const dayNames = computed(() => CalendarMath.getFormattedWeekdayNames(userLocale.value, "long", 0))

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
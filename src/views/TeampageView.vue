<template>
    <LeftMenu />

    <div id="container">
        <div class="flex-left" v-if="project && project.teampageDetailResponseDto">
            <div class="project-info">
                <div class="team-info">
                    <h2>{{ project.teampageDetailResponseDto.projectName }}</h2>
                    <ButtonComponent msg="수정하기" @click="modalOpen" />
                </div>


                <div class="project-date">
                    <div class="project-start">
                        <h5>프로젝트 시작일</h5>
                        <div style="padding-left:10px">{{ formatYear(project.teampageDetailResponseDto.start) }}</div>
                    </div>
                    <div class="project-end">
                        <h5>프로젝트 마감일</h5>
                        <div style="padding-left:10px">{{ formatYear(project.teampageDetailResponseDto.end) }}</div>
                    </div>
                </div>

                <div class="end-bar">
                    <h5>프로젝트 마감까지</h5>
                    <div id="bar" ref="bar"></div>
                    <h5>D-{{ project.teampageDetailResponseDto.remainingDays }}</h5>
                </div>
                
                <div class="btn-container">
                    <ButtonComponent msg="북마크" @click="goToBookmarkPage(this.teampageUuid)"/>
                    <ButtonComponent msg="깃허브" @click="onclickgithub" />
                </div>
            </div>

            <div class="calendar-container">
                <div class="calendar">
                    <CalendarView
                        :items="state.items"
                        :show-date="state.showDate"
                        :disable-past="state.disablePast"
                        :disable-future="state.disableFuture"
                        :date-classes="myDateClasses()"
                        :display-period-uom="state.displayPeriodUom"
                        :display-period-count="state.displayPeriodCount"
                        :starting-day-of-week="state.startingDayOfWeek"
                        :class="themeClasses"
                        :period-changed-callback="periodChanged"
                        :current-period-label="state.useTodayIcons ? 'icons' : ''"
                        :displayWeekNumbers="state.displayWeekNumbers"
                        
                    >
                        <template #header="{ headerProps }">
                            <CalendarViewHeader :header-props="headerProps" @input="setShowDate" />
                        </template>
                    </CalendarView>
                </div>
            </div>
        </div>

        <div class="flex-right">
            <div class="right-menu-members" v-if="project">
                <h3>{{ project.teampageDetailResponseDto.teamName }}</h3>
                <hr>
                <div class="teammates-list">
                    <div class="members-right">
                        <ul>
                            <!-- <li v-for="item in teammates.slice(0,3)" :key="item.id"> -->
                            <li v-for="(item, index) in teammates" :key="index">
                                - {{ item.nickname }} / {{ item.teamRole }} / {{ item.teamAdmin }}
                            </li>
                        </ul>
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
                        <input type="text" :value="project.teampageDetailResponseDto.projectName" id="projectname" class="input-long" autocomplete='off'/>
                        </div>
                    </div>

                    <div class="input-container">
                        <div class="label-text">
                        <h4>팀명</h4>
                        </div>
                        <div>
                        <input type="text" :value="project.teampageDetailResponseDto.teamName" id="teamname" class="input-long" autocomplete='off'/>
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
                        <input type="text" id="githublink" :value="project.teampageDetailResponseDto.github" class="input-long"/>
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
                <div class="modal-info-add">
                    <h2>팀원 추가하기</h2>
                    <div class="container-modal-window-add" id="input-contain" v-for="(item, index) in teammates" :key="index">
                        <div class="input-container-add" >
                            <!-- <div class="label-text"><h4>팀원</h4></div> -->
                            <input type="text" class="input-short" v-model="item.nickname"/>
                            <input type="text" class="input-short" v-model="item.teamRole"/>
                            <input type="text" class="input-short" v-model="item.teamAdmin"/>
                        </div>
                    </div>
                    <button class="addmemberBtn-add" type="button" @click="addMembers(index)">+</button>
                </div>
            
                
                <div class="modal-btn">
                    <div class="close-btn" @click="modalOpen2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                
            </div>
            
            <div class="btn-container-right-add">
                <ButtonComponent msg="저장하기" @click="saveBtn_addMem"/>
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
    padding-top: 30px;
    padding-bottom: 30px;
  }


  #bar{
    height: 10px;
    background-color: #B1B2FF;
    border-radius: 10px;
  }

  .right-menu-addschedule{
    height: 240px;
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
    flex-direction: column;
    justify-content: center;
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
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
.container-modal-window-add{
    padding-top: 5px;
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
  /* 팀원추가수정사항 */
   .input-container-add{
    display: flex;
    align-items: center;
    height: 40px;
    width: 72vw;
    margin: 0px;
    padding: 0px;
  }
  .addmemberBtn-add{
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #D2DAFF;
    margin-left: 35vw;
    margin-top: 5px;
    border:0;
}
.btn-container-right-add{
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .input-long{
    width: 60vw;
  }

  .input-short{
    width: 20vw;
    margin: 10px;
  }

  .modal-info-add{
    width: 80vw;
    height: 70vh;
    overflow-y: auto;
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

    .teammates-list{
        display: block;
        height: 130px;
        /* justify-content: space-evenly; */
        flex-direction: row;
        /* align-items: center; */
        overflow-y: auto;
    }

    ul li{
        padding: 5px;
    }

    ul{
        list-style: none;
    }

    .modal-info h2{
        margin-left: 30px;
        margin-top: 30px;
    }

</style>

<script>
import api from '@/axios.js';
import { parseYearTime } from '@/utils/date.js';
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
import LeftMenu from "@/components/LeftMenu.vue"
import ButtonComponent from "@/components/ButtonComponent.vue"
import "../calendar-style/style.css"
import "../calendar-style/default.css"
import "../calendar-style/gcal.css"
import dayjs from "dayjs"

export default {
  name: 'TeampageView',
  props: ['teampageUuid'],
  data() {
    return {
        // inputMember_name:[],
        // inputMember_part:[],
        // inputMember_position:[],
        modalCheck: false,
        modalCheck2: false,
        // project: {
        //     exProjectName: '개발 전용 웹 페이지 만들기리기리기억되리',
        //     exTeamName: '스프링뷰트',
        //     newProjectStartDate: '',
        //     newProjectEndDate: '',
        //     ProjectStartDate: '2024-01-02', // 프로젝트 시작일 데이터
        //     ProjectEndDate: '2024-02-07', // 프로젝트 마감일 데이터
        // },
        project:{
            teampageDetailResponseDto: {
                projectName: '...',
                start: '...',
                end: '...',
                remainingDays: '...',
            },
        },
        // teammates:[
        //         {
        //             id: 1,
        //             nickname: "팀원1",
        //             part:'',
        //             position:'',

        //         },
        //         {
        //             id: 2,
        //             nickname: "팀원2",
        //             part:'',
        //             position:'',
        //         },
        //         {
        //             id: 3,
        //             nickname: "팀원3",
        //             part:'',
        //             position:'',
        //         },
        //         {
        //             id: 4,
        //             nickname: "팀원4",
        //             part:'',
        //             position:'',
        //         },
        //         {
        //             id: 5,
        //             nickname: "팀원5",
        //             part:'',
        //             position:'',
        //         },
        //         {
        //             id: 6,
        //             nickname: "팀원6",
        //             part:'',
        //             position:'',
        //         },
        // ],
        teammates: [
            {
                nickname: '',
                teamRole: '',
                teamAdmin: ''
            }
        ],
        state: {
            showDate: this.thisMonth(1),
            message: "",
            startingDayOfWeek: 0,
            disablePast: false,
            disableFuture: false,
            displayPeriodUom: "month",
            displayPeriodCount: 1,
            displayWeekNumbers: false,
            newItemTitle: "",
            newItemStartDate: "",
            newItemEndDate: "",
            useDefaultTheme: true,
            useHolidayTheme: true,
            useTodayIcons: "-",
            items: [],
        }
    }
    },
    created(){
        const teampageUuid = this.$route.params.teampageUuid;
        api.get(`/teampage/${teampageUuid}`)
        .then(response => {
        this.project = response.data || {} ;  // 응답 데이터를 project에 저장
        this.teamScheduleDto = response.data.teamScheduleDto.monthSchedules || {};
        this.teammates = response.data.teamMembersDtos || []; 
        for (let schedule of this.teamScheduleDto) {
                this.state.items.push({
                    id: schedule.scheduleUuid,  // scheduleUuid를 id로 사용
                    startDate: this.formatYear(schedule.scheduleStart),
                    endDate: this.formatYear(schedule.scheduleEnd),
                    title: schedule.scheduleContent
                });
            }
            console.log(this.state.items)
            })
        .catch(error => {
        console.error(error);
            });
    },

    computed:{
        todayDate(){
            return dayjs();
        },
        themeClasses(){
            return{
                "theme-default": this.state.useDefaultTheme
            }
        },
    },
    methods: {
        addMembers(index){
            var parentNode = document.getElementById("input-contain");
            console.log(parentNode);
            this.teammates.push({id: index, nickname:'', part:'', position:''});
       },
        modalOpen() {
            this.modalCheck = !this.modalCheck
            const projectNameInput = document.getElementById('projectname');
            const teamNameInput = document.getElementById('teamname');
            
            projectNameInput.value = this.exProjectName;
            teamNameInput.value = this.exTeamName;
        },

        modalOpen2() {
            this.modalCheck2 = !this.modalCheck2
            console.log("Modal open")
        },

        thisMonth(d, h = 0, m = 0) {
            const t = new Date()
            return new Date(t.getFullYear(), t.getMonth(), d, h, m)
        },

        isoYearMonthDay(date) {
            const y = date.getFullYear();
            const m = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
            const d = date.getDate();
            return `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`;
        },

        myDateClasses() {
            const o = {}
            const theFirst = this.thisMonth(1)
            const ides = [2, 4, 6, 9].includes(theFirst.getMonth()) ? 15 : 13
            const idesDate = this.thisMonth(ides)
            o[this.isoYearMonthDay(idesDate)] = ["ides"]
            o[this.isoYearMonthDay(this.thisMonth(21))] = ["do-you-remember", "the-21st"]
            return o
        },

        periodChanged(){

        },

        onClickItem(e){
            this.state.message = `You clicked: ${e.title}`
            
            if(confirm(`<${e.title}> 일정을 삭제하시겠습니까?`) == true){
                const index = this.state.items.findIndex(item => item.id === e.id);
                if (index !== -1) {
                    this.state.items.splice(index, 1);
                }
            }
        },

        setShowDate(d) {
            this.state.message = `Changing calendar view to ${d.toLocaleDateString()}`
            this.state.showDate = d
        },

        clickTestAddItem() {
            const url = `/teampage/${this.teampageUuid}/schedule/create`;
            const data = {
                scheduleContent: this.state.newItemTitle,
                scheduleStart: this.state.newItemStartDate,
                scheduleEnd: this.state.newItemEndDate
            }
            if (this.state.newItemTitle == "") alert("일정명을 입력해주세요!")

            else{
                this.state.items.push(data)

                api.post(url,data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
                this.state.newItemTitle = '';

            }

            // else{
            //     this.state.items.push({
            //         title: this.state.newItemTitle,
            //         startDate: CalendarMath.fromIsoStringToLocalDate(this.state.newItemStartDate),
            //         endDate: CalendarMath.fromIsoStringToLocalDate(this.state.newItemEndDate),
            //     })
            //     this.state.message = "You added a calendar item!"
            //     api.post(`/teampage/${this.teampageUuid}/schedule/create`, {
            //         title: this.state.newItemTitle,
            //         startDate: this.state.newItemStartDate,
            //         endDate: this.state.newItemSEndDate,
            //     })
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
            //     this.state.newItemTitle = '';
            // }
        },
        
        saveBtn() {
            // const projectNameInput = document.getElementById('projectname');
            // const teamNameInput = document.getElementById('teamname');
            // //const teamMemberInput = document.getElementById('teammember');
            // const projectStartDateInput = document.getElementById('startdate');
            // const projectEndDateInput = document.getElementById('enddate');
            // const githubLinkInput = document.getElementById('githublink');

            // const projectName = projectNameInput.value; // 값을 새로운 변수에 할당합니다.
            // const teamName = teamNameInput.value; // 값을 새로운 변수에 할당합니다.
            
            //teamMemberInput.value = '하암';
            // projectStartDateInput.value = this.newProjectStartDate;
            // projectEndDateInput.value = this.newProjectEndDate;
            // githubLinkInput.value = '흠';

            // console.log(projectName); //변경하는 이름
            // console.log(teamName); //이것도
            const url = `/teampage/${this.teampageUuid}/edit`; // teampageUuid는 적절한 값을 사용해야 합니다.

            // 입력된 값을 가져옵니다.
            const projectName = document.getElementById('projectname').value;
            const teamName = document.getElementById('teamname').value;
            const start = this.newProjectStartDate;
            const end = this.newProjectEndDate;
            const github = document.getElementById('githublink').value;

            const data = {
                    projectName,
                    teamName,
                    start,
                    end,
                    github
                };

                api.put(url, data)
                .then(response => {
                    console.log(response);
                    // 요청이 성공하면 실행되는 코드를 작성합니다.
                    // 예를 들어, 모달을 닫거나 성공 메시지를 표시할 수 있습니다.
                })
                .catch(error => {
                    console.log(error);
                    // 요청이 실패하면 실행되는 코드를 작성합니다.
                    // 예를 들어, 오류 메시지를 표시할 수 있습니다.
            });

        },
        saveBtn_addMem() {
            const url = `/teampage/${this.teampageUuid}/create/invite`;
            const data = {
                invitees: this.teammates
            };

            api.post(url, data)
            .then(response => {
                console.log(response);
                console.log(this.teammates);
            })
            .catch(error => {
                console.log(error);
            });
        },
        onclickgithub() {
            window.open('https://github.com/springvuet-front/')
        },
        formatYear(when) {
            let {year, month, date} = parseYearTime(when);
            return `${year}-${month}-${date}`;
        },
        goToBookmarkPage(teampageUuid){
            console.log(teampageUuid);
            this.$router.push({ name: 'bookmark', params: { teampageUuid: teampageUuid } });
        },

    },
    mounted() {
        this.state.newItemStartDate = this.isoYearMonthDay(new Date())
        this.state.newItemEndDate = this.isoYearMonthDay(new Date())
        this.state.newItemProjectStartDate = this.isoYearMonthDay(new Date())
        this.state.newItemProjectEndDate = this.isoYearMonthDay(new Date())

        if (this.$refs.bar) {
            const dDaywidth = this.$refs.bar
            dDaywidth.style.width = this.dDay * 5 + 'px'
        }
    },

    watch: {
    'project.teampageDetailResponseDto.remainingDays': function(newVal) {
        if (this.$refs.bar && !isNaN(newVal)) {
            const dDaywidth = this.$refs.bar;
            dDaywidth.style.width = newVal * 10 + 'px';
        }
    },
},

    components: {
        LeftMenu, ButtonComponent, CalendarView, CalendarViewHeader,
    }
}
</script>
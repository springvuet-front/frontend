<template>
  <div>
    <LeftMenu/>

      <div class ="container">
        <div id="back">
        <div class="bTitle">모집 커뮤니티
          <select
            v-model="partModel"
            class="part-select"
            v-bind:id="input_id"
            v-on:input="updateValue($event.target.value)"
          > 
            <option v-for="(item, index) in parts" :key="index">{{ item }}</option>
          </select>
          <select
            v-model="stateModel"
            class="state-select"
          > 
            <option v-for="(item, index) in states" :key="index">{{ item }}</option>
          </select>
          <SelectBox
            v-model="preselect_value"
            :items="somethings"
            :input_id="'my_selectbox'"
            @input="value => { preselect_value = value }"
        ></SelectBox>
        </div>
        
        <div class="new-post">
          <div class="bSelect">
            <select
              v-model="partModel2"
              class="part-select2"
              v-bind:id="input_id"
              v-on:input="updateValue($event.target.value)"
            > 
              <option v-for="(item, index) in parts" :key="index">{{ item }}</option>
            </select>
            <select
              v-model="stateModel2"
              class="state-select2"
            > 
              <option v-for="(item, index) in states" :key="index">{{ item }}</option>
            </select>
            <SelectBox
              v-model="preselect_value"
              :items="somethings"
              :input_id="'my_selectbox'"
              @input="value => { preselect_value = value }"
            ></SelectBox>
          </div>
          <div class="bInput">
            <input id="body" class="write-title" type="text">
            <input id="body" class="write-body" type="text">
          </div>
          <div class="bBtn">
            <ButtonComponent id="btn1" parameter="" msg="등록하기"/>
          </div>
        </div>
        <div class="posts" v-for="(item, index) in currentPosts" :key="index"> <!--기존 게시글 보이는 부분-->
          
            <div class="post-part">{{ item.data.post_part }}</div>
            <div class="post-state">{{ item.data.post_state }}</div>
            <div class="post-title">{{ item.data.post_title }}</div>
            <div class="post-body">{{ item.data.post_body }}</div>
            <div class="post-info">
              <div class="post-writer"> 작성자 : {{ item.data.post_writer }}</div>
              <div class="post-date"> 등록일 : {{ item.data.post_date }}</div>
            </div>
          
          <div class="comments">
            <div> {{ item.data.comments_num }} </div>
            <ButtonComponent msg="댓글 달기" @click="modalOpen"/>

            <div class="modal-wrap" v-show="modalCheck">
        <div class="modal-container">
            <div class="flex-box">
                <div class="modal-info">
                  <div class="post-title"> {{ item.data.post_title }} </div>
                  <div class="post-body">{{ item.data.post_body }}</div>
                  <div class="post-info">
                    <div class="post-writer"> 작성자 : {{ item.data.post_writer }}</div>
                    <div class="post-date"> 등록일 : {{ item.data.post_date }}</div>
                  </div>

                    <div class="container-modal-window">
                    <div class="input-container">
                        <div class="label-text">
                        <h4>프로젝트명</h4>
                        </div>
                        <div>
                        <input type="text" value="${exProjectName}" id="projectname" class="input-long"/>
                        </div>
                    </div>

                    <div class="input-container">
                        <div class="label-text">
                        <h4>팀명</h4>
                        </div>
                        <div>
                        <input type="text" id="teamname" class="input-long"/>
                        </div>
                    </div>

                    <div class="input-container">
                        <div class="label-text">
                        <h4>팀원</h4>
                        </div>
                        <div>
                        <input type="text" class="input-long"/>
                        </div>
                    </div>

                    <div class="input-container">
                        <div class="label-text">
                        </div>
                        <div>
                        <input type="text" id="write-comment" value="댓글 작성하기" class="input-long"/>
                        </div>
                    </div>

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

            
          </div>
        </div>   

        </div>
      </div>
    </div>
</template>

<style>
#back{
  margin-left: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height:2.0;
}
.bTitle{
  font-size: 30px;
  padding-left: 10px;
  text-align: left;
  font-weight: bold;
}
.part-select{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 10px;
  width: 90px; 
  height: 40px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 15pt;
}
.state-select{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 10px;
  margin-left: 130px;
  padding-left: 10px;
  width: 130px; 
  height: 40px;
  border-radius: 34px;
  border: none;
  color: white;
  font-size: 15pt;
}
.part-select2 {
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 25px; 
  margin-left: 20px;
  padding-left: 10px;
  width: 90px; 
  height: 40px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 13pt;
}
.state-select2 {
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 80px;
  margin-left: 20px;
  padding-left: 10px;
  width: 120px; 
  height: 40px;
  border-radius: 34px;
  border: none;
  color: white;
  font-size: 13pt;
}
.new-post{
  background-color: #D2DAFF;
  margin-left: 10px;
  margin-top: 20px;
  width: 1200px;
  height: 240px;
  display: flex; 
  flex-direction: row;
}
.bSelect{
  width: 30px;
  height: 200px;
}
.bInput{
  width: 1000px;
  height: 200px;
}
.bBtn{
  width: 150px;
  height: 200px;
}
.write-title{
  background-color: #B1B2FF;
  padding-inline: 10px;
  width: 750px;
  height: 35px;
  border-color: rgb(85, 85, 85); /*색이 일부분만 바뀜*/
  border-width: 1px;
  font-size: 15pt;
  margin-left: 80px;
  margin-top: 25px;
  
}
.write-body{
  background-color: #B1B2FF;
  margin-left: 80px;
  margin-top: 13px;
  padding-inline: 10px;
  width : 750px;
  height: 135px;
  border-color: rgb(85, 85, 85); /*색이 일부분만 바뀜*/
  border-width: 1px;
  font-size: 15pt;
}
.write-label {
  font-size: 15pt;
  margin-top: 5px;
  margin-bottom: 5px;
}
#btn1{
  margin-top: 170px;
  margin-left: 10px;
  width: 130px;
  height: 45px;
  font-size: 15pt;
}

/* 기존 커뮤니티 글 */
.posts{
  background-color: #D2DAFF;
  margin-left: 10px;
  margin-top: 30px;
  width: 1200px;
  height: 180px;
  display: flex; 
  flex-direction: row;
}
.comments{
  background-color: #B1B2FF;
  width: 1200px;
  height: 50px;
  margin-top: 10px;
  display: flex; 
  flex-direction: row;
  color: white;
}
.post-info{
  margin-right: 10px;
  font-weight: bold;
}
.post.title{
  font-size: 27pt;
  line-height:1.0;
  font-weight: bold;
  white-space: nowrap;
}
.post.body{
  font-size: 12pt;
  font-weight: medium;
}
.post-part{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 25px; 
  margin-left: 20px;
  width: 70px; 
  height: 40px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 13pt;
}
.post-state{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 80px;
  margin-left: 20px;
  width: 110px; 
  height: 40px;
  border-radius: 34px;
  border: none;
  color: white;
  font-size: 13pt;
}

/* 모달창 */
.modal-container{
  background-color: #D2DAFF;
  color: black;
}
.input-container{
  display: flex;
  align-items: center;
  height: 50px;
  margin: 10px;
  padding: 10px;
}
.label-text{
  width: 10vw;
}
.input-long{
  width: 60vw;
}

</style>

<style scoped>
.container{padding: 20px 90px}
</style>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import ButtonComponent from '@/components/ButtonComponent.vue';

  export default {
    name: 'CommunityView',
    components: {
      LeftMenu,
      ButtonComponent,
    },
    data() {
        return {
            partModel: '웹',
            stateModel: '모집중',
            partModel2: '웹',
            stateModel2: '모집중',
            parts: ['웹', '앱', '데분'],
            states:['모집중', '모집 완료'],
            message: "글을 입력하세요",
            currentPosts: [
              {data: {post_part: "앱",
                      post_state: "모집중",
                      post_title: "IOS 개발자 구합니다!",
                      post_body: "개발자 전용 커뮤니티 앱입니다.관심있으면 댓글 남겨주세요~",
                      post_writer: "우주최강개발자",
                      post_date: "2024-01-31",
                      comments_num: "3",
              }},
              {data: {post_part: "웹",
                      post_state: "모집중",
                      post_title: "웹 프론트엔드 개발자 구합니다.",
                      post_body: "Vue.js 능숙하신 분 환영합니다",
                      post_writer: "나송집가고싶송",
                      post_date: "2024-02-01",
              }},
            ],
            modalCheck: false,
        };
    },
    methods: {
      updateValue: function(value){
        this.$emit('input', value);
      },
      modalOpen() {
        this.modalCheck = !this.modalCheck
      },
    },
  };
</script>
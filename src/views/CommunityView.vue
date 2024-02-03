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
            <textarea type="text" id="title1" class="write-title" v-model="inputTitle_community" placeholder="여기에 제목을 작성하세요"></textarea>
            <textarea type="text" id="body1" class="write-body" v-model="inputBody_community" placeholder="여기에 본문을 작성하세요"></textarea>
          </div>
          <div class="bBtn">
            <ButtonComponent id="btn1" parameter="community" @click="addNewPost" msg="등록하기"/>
          </div>
        </div>

        <!--기존 게시글 보이는 부분-->
        <div v-for="(item, index) in currentPosts" :key="index">
          <div v-if="partModel===item.data.post_part && stateModel===item.data.post_state">
            <div class="posts">
              <div class="posts-part-state">
                <div class="post-part">{{ item.data.post_part }}</div>
                <div class="post-state">{{ item.data.post_state }}</div>
              </div>
              <div class="posts-contents">
                <div class="post-title">{{ item.data.post_title }}</div>
                <div class="post-body">{{ item.data.post_body }}</div>
              </div>
              <div class="posts-right">

                <!-- 수정하기 모달창-->
                <div class="modifying">
                  <div class="modifying-icon">
                    
                  </div>
                  <Button class="modifying-button" @click="modalOpen">수정하기</Button>

                  <div class="modal-wrap" v-show="modalCheck">
                    <div class="modal-container">
                      <div class="flex-box">
                        <div class="modal-info">
                          
                          <div class="container-modal-window">
                          <div class="currentComments" v-for="(item, index) in written_comments" :key="index">
                            <!-- 본문 있던 곳 -->
                          </div>

                          <div class="input-container">
                            <div class="label-text">
                            </div>
                            <!-- 댓글 작성하던 곳 -->
                          </div>

                        </div>
                        <div class="btn-container-right">
                          <ButtonComponent msg="저장하기" @click="saveBtn"/>
                        </div>
                      </div>
                      <div class="modal-btn">
                        <ButtonComponent msg="취소하기" class="close-btn" @click="modalOpen"></ButtonComponent>
                      </div>
                    </div>
                  </div>
                </div>        
              </div>
              <!-- 수정하기 모달창 끝 -->
              <!-- 삭제하기 -->
              <Button class="delete-button" @click="deletePost(index)">삭제하기</Button>

                <div class="post-info">
                  <div class="post-writer"> 작성자 : {{ item.data.post_writer }}</div>
                  <div class="post-date"> 등록일 : {{ item.data.post_date }}</div>
                </div>
              </div>
            
              <!-- 댓글달기 모달창-->
              <div class="comments">
                <div class="comment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </div>
                <div class="comment-number">{{ item.data.comments_num }} </div>
                <Button class="comment-button" @click="modalOpen">댓글 달기</Button>

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
                        <hr class="horizontal-divider" style="border-top: 3px solid #a10ffc;">
                        <div class="container-modal-window">
                        <div class="written-comments" v-for="(item, index) in written_comments" :key="index">
                          <div class="writer-id"> {{ item.data.writer_id }}</div>
                          <div class="written-text"> {{ item.data.written_text }}</div>
                          <div class="post-date"> 등록일 : {{ item.data.written_date }}</div>
                        </div>

                        <div class="input-container">
                          <div class="label-text">
                          </div>
                          <div> 
                            <input type="text" id="write-comment" value="댓글 작성하기" class="input-long"/>
                            <button @click="addNewComment" class="send-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                              </svg>
                            </button>
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
        </div> <!-- 게시물 보이는 부분 끝-->
        <!-- 댓글달기 모달창 끝 -->

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
  font-size: 40px;
  padding-left: 10px;
  text-align: left;
  font-weight: bold;
}
.part-select{
  position: absolute;
  background-color: #B1B2FF;
  margin-top: 8px;
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
  margin-top: 8px;
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
  font-size: 14pt;
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
  font-size: 14pt;
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
  width: 770px;
  height: 35px;
  border-width: 0px;
  font-size: 15pt;
  margin-left: 150px;
  margin-top: 25px;
  font-family: Arial, sans-serif;
}
.write-body{
  background-color: #B1B2FF;
  margin-left: 150px;
  margin-top: 5px;
  padding-inline: 10px;
  width : 770px;
  height: 135px;
  border-width: 0px;
  font-size: 15pt;
  font-family: Arial, sans-serif;
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
  height: 205px;
  display: grid;
  grid-template-columns: 185px 700px 320px;
  grid-template-rows: 155px 50px;
}
.post-title {
  font-weight: bold;
  font-size: 20pt;
  padding-top: 10px;
  text-align: left;
}
.post-body{
  text-align: left;
  font-size: 14pt;
}
.posts-right{
  text-align: right;
  padding: 20px 13px 0 0;
}
.comments{
  background-color: #B1B2FF;
  width: 1200px;
  height: 50px;
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
  width: 75px; 
  height: 40px;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 14pt;
  display: flex; 
  align-items: center;
  justify-content: center;
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
  font-size: 14pt;
  display: flex; 
  align-items: center;
  justify-content: center;
}

/* 댓글달기 모달창 */
.modal-container{
  background-color: #D2DAFF;
  color: black;
  padding-left: 20px;
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
  width: 1000px;
  height: 30px;
  color: white;
  font-size: 13pt;
}
.comment-button {
    background: none;
    border: none;
    color: white;
    font-size: 13pt;
    font-weight: bold;
    padding-left: 20px;
}
.written-comments {
  background-color: #B1B2FF;
  text-align: left;
  padding: 10px 0 10px 15px;
  width: 90%;
}
.writer-id{
  font-weight: bold;
}
.send-icon {
  background-color: #B1B2FF;
  width: 35px;
  height: 35px;
  transform: rotate(-90deg);
}
.comment-icon{
  width: 35px;
  height: 35px;
  padding: 10px 3px 0 15px;
}


/* 수정하기 모달창 */
.modifying-button {
    background: none;
    border: none;
    color: white;
    font-size: 13pt;
    font-weight: bold;
    text-decoration: underline;
}

.delete-button{
  background: none;
  border: none;
  color: white;
  font-size: 13pt;
  font-weight: bold;
  text-decoration: underline;
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
                  comments_num: "2",
          }},
        ],
          currentComments: [
            {data: {writer_id:"파송송계란탁",
                    written_text: "안녕하세요~ 어떤 웹페이지인지 설명 부탁드립니다",
                    written_date: "2024-02-01",
            }}
          ],
          modalCheck: false,
          inputTitle_community: '',
          inputBody_community:'',
      };
    },
    methods: {
      updateValue: function(value){
        this.$emit('input', value);
      },
      modalOpen() {
        this.modalCheck = !this.modalCheck
      },
      deletePost(index){
        this.currentPosts.splice(index, 1);
      },
      addNewPost() {
        const newPost = {
          data: {
            post_part: this.partModel2,
            post_state: this.stateModel2,
            post_title: this.inputTitle_community, // write-title input의 값을 가져옴
            post_body: this.inputBody_community,  // write-body input의 값을 가져옴
            post_writer: "새로운 작성자",  // 원하는 작성자 이름으로 변경
            post_date: new Date().toISOString().slice(0, 10),  // 현재 날짜로 설정
            comments_num: "0",  // 초기 댓글 개수를 0으로 설정
          }
        };
        // currentPosts 배열에 새로운 데이터 추가
        
        if(this.inputTitle_community && this.inputBody_community){
          this.currentPosts.push(newPost);
          // 등록 후 입력 필드 초기화 (선택 필드는 초기값으로 되돌리고, 텍스트 필드는 비움)
          this.partModel2 = '웹';
          this.stateModel2 = '모집중';
          this.inputTitle_community = '';
          this.inputBody_community = '';
        }
        else if(!this.inputTitle_community && !this.inputBody_community){
          alert("제목과 내용을 입력하세요");
        }
        else if(!this.inputTitle_community){
          alert("제목을 입력하세요")
        }
        else{
          alert("내용을 입력하세요");
        }
        
      },
      addNewComment() {
        const newComment = {
          data: {
            //아이디 가져오기 + 작성자일 경우 '작성자' 붙이기
            written_text: this.$refs.writtenText.value,  // written-text input의 값을 가져옴
            post_date: new Date().toISOString().slice(0, 10),  // 현재 날짜로 설정
          }
        };
        // currentPosts 배열에 새로운 데이터 추가
        this.currentComments.push(newComment);
        // 등록 후 입력 필드 초기화 (선택 필드는 초기값으로 되돌리고, 텍스트 필드는 비움)
        this.$refs.writtenText.value = '';
      },
      saveBtn() {

      },
    }
  }
</script>


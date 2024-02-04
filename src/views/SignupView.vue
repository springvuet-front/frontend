<template>
    <div id="app">
        <div class="background">
            <div class="input-view">
                <img alt="Prolog logo" src="../assets/prolog.png" />
                <div id="border-text">회원가입</div>
                <div class="field-view">
                    <div class="valid-view">
                        <div class="input-text">이메일</div>
                        <p
                            v-show="valid.email"
                            class="input-error">
                            이메일 형식이 올바르지 않습니다.
                        </p>
                    </div>
                    <div class="email-confirm-view">
                        <input
                            type="text"
                            v-model="email"
                            id="email" /> 

                        <ButtonComponent msg="이메일 확인" parameter = "" id="email-confirm-button"/>
                    </div>
                    
                    <div class="input-text">인증번호 입력</div>
                    <input type="text">
                    <div class="valid-view">
                        <div class="input-text">비밀번호</div>
                        <p
                            v-show="valid.memberPw"
                            class="input-error"> 
                            영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)
                        </p>
                    </div>
                    <input
                        type="password"
                        v-model="memberPw"
                    > 
                    <div class="valid-view">
                        <div class="input-text">비밀번호 확인</div>
                        <p
                            v-show="valid.password2"
                            class="input-error">
                            비밀번호가 일치하지 않습니다.
                        </p>
                    </div>
                    
                    <input
                        type="password"
                        v-model="password2"
                    >

                    <div class="input-text">닉네임</div>
                    <input type="text"
                            v-model="nickname">
                </div>
            </div>

            <div class="button-view">
                <ButtonComponent parameter="" msg="회원가입" @click="signup"/>
                <div>
                    <span id="sub-text">이미 계정이 있나요?</span>
                    <router-link to="login">
                        <span id="underline-text">로그인</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#app{
    display: flex;
    justify-content: center;
    margin-top: 10vh;
}

.background{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 460px;
    height: 80vh;
    background-color: #D2DAFF;
}

.input-view{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.button-view{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#sub-text{
    padding-right: 10px;
    font-size: small;
    color: #565656;
    font-weight: 600;
}

#border-text{
    font-weight: 800;
    font-size: 20px;
}

#underline-text{
    font-weight: 800;
    text-decoration: underline;
}

.input-text{
    width: 103px;
    margin-top: 2vh;
    color: #565656;
    font-weight: 600;
}

.field-view{
    display: flex;
    width: 362px;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 0 10px 0;
}

.email-confirm-view{
    display: flex;
    align-items: center;
}

input{
    width: 350px;
    height: 30px;
    border: 0;
    background-color: #C6C7FF;
    padding-left: 10px;
}

input:focus{
    outline: 0;
}

#email{
    width: 230px;
}

#email-confirm-button{
    width: 120px;
    height: 32px;
    margin: 0;
    padding: 1px 2px 1px 0px;
    border-radius: 0;
}

.input-error {
    line-height: 16px;
    font-size: 9.5px;
    color: #ff6060;
    margin: 0;
  }

  .valid-view{
    display: flex;
    width: 362px;
    align-items: flex-end;
    justify-content: space-between;
  }
</style>
    
<script>
import axios from 'axios';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
    name: 'SignupView',
    components: { ButtonComponent },
    data(){
        return{
        email: undefined,
        memberPw: undefined,
        password2: undefined,
        nickname: undefined,
            valid: {
                all: false,
                email: false,
                memberPw: false,
                password2: false,
            },
            emailHasError: false,
            passwordHasError: false,
            password2HasError: false,
        }
    },
    watch: {
        'email': function() {
            this.checkEmail()
        },
        'password': function() {
            this.checkPassword()
        },
        'password2' : function(){
            this.checkPassword2()
        }
    },
    methods: {
        checckAll(){
            if(!this.emailHasError && !this.passwordHasError){
                this.valid.all = true
                return
            }
        },
        checkEmail() {
        // 이메일 형식 검사
            const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/

            if (!validateEmail.test(this.email) || !this.email) {
                this.valid.email = true
                this.emailHasError = true
                return
            }
            this.valid.email = false
            this.emailHasError = false
        },
        checkPassword() {
        // 비밀번호 형식 검사(영문, 숫자, 특수문자)
            const validatePassword = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
            if (!validatePassword.test(this.memberPw) || !this.memberPw) {
                this.valid.memberPw = true
                this.passwordHasError = true
                return
            }
            this.valid.memberPw = false
            this.passwordHasError = false
        },
        checkPassword2(){
            if(this.memberPw !== this.password2){
                this.valid.password2 = true
                this.password2HasError = true
                return
            }
            this.valid.password2 = false
            this.password2HasError = false
        },
        signup(){
            if (!this.valid.email && !this.valid.memberPw && !this.valid.password2) {
                axios.post('/api/auth/signup', {
                    email: this.email,
                    memberPw: this.memberPw,
                    nickname: this.nickname
                })
                .then(response => {
                    console.log(response);
                    this.$router.push({name:'firstpage'});
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },
    },
}
</script>
    
<template>
    <div id="app">
        <div class="background">
            <div class="input-view">
                <img alt="Prolog logo" src="../assets/prolog.png" />
                <div id="border-text">회원가입</div>
                <div class="field-view">
                    <div class="input-text-left">이메일</div>

                    <div class="email-confirm-view">
                        <InputText id="email"/>
                        <ButtonComponent msg="이메일 확인" parameter = "" id="email-confirm-button"/>
                    </div>
                    
                    <div class="input-text-right">인증번호 입력</div>
                    <InputText />

                    <div class="input-text-left">비밀번호</div>
                    <InputPassword />

                    <div class="input-text-left">비밀번호 확인</div>
                    <InputPassword />

                    <div class="input-text-left">닉네임</div>
                    <InputText />
                </div>
            </div>

            <div class="button-view">
                <ButtonComponent parameter="" msg="회원가입"/>
                <div>
                    <span id="sub-text">이미 계정이 있나요?</span>
                    <router-link to="signin">
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

.input-text-left{
    width: 20vw;
    margin-top: 2vh;
    color: #565656;
    font-weight: 600;
}

.input-text-right{
    width: 20vw;
    margin-top: 2vh;
    color: #565656;
    font-weight: 600;
}

.field-view{
    display: flex;
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
</style>
    
<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputPassword from '@/components/InputPassword.vue';
import InputText from '@/components/InputText.vue';

export default {
    name: 'SignupView',
    components: { InputPassword, InputText, ButtonComponent }
}
</script>
    
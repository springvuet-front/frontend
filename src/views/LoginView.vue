<template>
    <div id="app">
        <div class="background">
            <div class="input-view">
                <img alt="Prolog logo" src="../assets/prolog.png" />
                <div id="border-text">로그인</div>
                <div class="field-view">
                    <div class="input-text">이메일</div>
                    <InputText />

                    <div class="input-text">비밀번호</div>
                    <InputPassword />
                </div>
            </div>

            <div class="button-view">
                <ButtonComponent parameter="" msg="로그인"/>
                <div>
                    <span id="sub-text">계정이 없나요?</span>
                        <router-link to="signup">
                            <span id="underline-text">회원가입</span>
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
    margin-top: 15vh;
}

.background{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 460px;
    height: 70vh;
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
    width: 20vw;
    margin-top: 3vh;
    color: #565656;
    font-weight: 600;
}

.field-view{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 0;
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
</style>
    
<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputPassword from '@/components/InputPassword.vue';
import InputText from '@/components/InputText.vue';

export default {
    name: 'LoginView',
    components: { InputPassword, InputText, ButtonComponent }
}
</script>
    
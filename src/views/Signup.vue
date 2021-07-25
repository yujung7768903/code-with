<template>
    <div id="signup">
        <LoginPopup
            v-if="loginPopupState == 1" 
            :_loginPopupState = "loginPopupState"
            @_loginClose = "loginClose"
        ></LoginPopup>
        <HeaderLight
            :_loginPopupState = "loginPopupState"
            @_loginOpen = "loginOpen"
        ></HeaderLight>
        <div class="signup-container">
            <div class="form-container">
                <p>이름</p>
                <input v-model="signupForm.signupName" type="text">
                <p>아이디</p>
                <input v-model="signupForm.signupId" type="text">
                <p>이메일</p>
                <input v-model="signupForm.signupEmail" type="text">
                <p>비밀번호</p>
                <input v-model="signupForm.signupPassword" type="password">
                <p>비밀번호 확인</p>
                <input v-model="signupPasswordConfirm" type="password">
                <p class="signup-guide" v-if="signupPasswordGuideDisplay == 1">입력한 비밀번호와 일치하지 않습니다.</p>
            </div>
            <img class="signup-btn" @click="signupConfirm" src="../assets/btn_signup.svg" alt="">
            <div class="login-guide-container">
                <span class="guide-to-login">이미 계정이 있으세요?</span>
                <button class="move-to-login">로그인</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderLight from "../components/layout/Header-light.vue"
import LoginPopup from "../components/layout/login-popup.vue"
import axios from "axios"

export default {
    name : 'Signup',
    components : {
        HeaderLight, LoginPopup
    },
    data() {
        return {
            loginPopupState : 0,
            signupForm : {
                signupId : '',
                signupName : '',
                signupEmail : '',
                signupPassword : '',
            },
            signupPasswordConfirm : '',
            signupPasswordGuideDisplay : 0 //1이 되면 비밀번호 중복 확인 메세지 띄움
        }
    },
    methods : {
        loginOpen() {
            this.loginPopupState = 1;
        },
        loginClose() {
            this.loginPopupState = 0;
        },
        passwordCheck() {
            if (this.signupForm.signupPassword != this.signupPasswordConfirm) { //일치하지 않는 경우
                this.signupPasswordGuideDisplay = 1
            } else { // 일치하는 경우
                this.signupPasswordGuideDisplay = 0
            }
        },
        signupConfirm() {
            console.log("signupConfirm 실행됨",Object.keys(this.signupForm).length );
            for (const key in this.signupForm) {
                if (this.signupForm[key] == '') { //모든 항목이 채워져 있는지 확인
                    alert("모든 항목을 입력해주세요.")
                    console.log("비어있는 항목이 있습니다.");
                    break;
                } else { // 비밀번호와 비밀번호 확인 칸이 일치하는지 확인
                    if (this.signupForm.signupPassword != this.signupPasswordConfirm) { //일치하지 않는 경우
                        this.signupPasswordGuideDisplay = 1
                    } else { // 일치하는 경우
                        this.signupPasswordGuideDisplay = 0
                        this.signupFormSubmit();
                    }
                    console.log("비어있는 항목이 없습니다.");
                }
            }
        },
        async signupFormSubmit() {
            const response = await axios.post('http://3.35.217.11/api/signup', {
                id : this.signupForm.signupId,
                name : this.signupForm.signupName,
                email : this.signupForm.signupEmail,
                password : this.signupForm.signupPassword
            })
            console.log("signupFormSubmit 함수 실행");
            console.log(response);
        }
    }
}
</script>

<style>
#signup {
    padding: 20px;
}
input {
    box-sizing: border-box;
}
.signup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    margin: auto;
}
.form-container{
    margin-top: 30px;
}
.form-container p{
  float: left;
  margin-left: 25px;
}
.form-container input{
  width: 100%; height: 35px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
}
#signup .signup-guide {
    display: block;
    float: left;
    margin: 5px 0 0 10px;
    color: #F93079;
    font-size: 12px;
}
.signup-btn {
    width: 350px;
    margin-top: 45px;
    cursor: pointer;
}
.login-guide-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}
#signup .login-guide-container .guide-to-login {
    margin: 0px;
    color: #606060;
}
#signup .move-to-login {
  display: inline-block;
  margin-left: 5px;
  color: #765FD7;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
</style>
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
                <input type="text">
                <p>닉네임</p>
                <input type="text">
                <p>이메일</p>
                <input type="text">
                <p>비밀번호</p>
                <input type="password">
                <p>비밀번호</p>
                <input type="password">
            </div>
            <img class="signup-btn" src="../assets/btn_signup.svg" alt="">
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

export default {
    name : 'Signup',
    components : {
        HeaderLight, LoginPopup
    },
    data() {
        return {
            loginPopupState : 0
        }
    },
    methods : {
        loginOpen() {
            this.loginPopupState = 1;
        },
        loginClose() {
            this.loginPopupState = 0;
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
    margin-top: 30px;
}
.form-container{
  width: 350px;
  margin: auto;
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
#signup .guide-to-login {
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
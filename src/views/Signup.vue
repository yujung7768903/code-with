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
.form-container{
  width: 350px;
  margin: auto;
}
.form-container p{
  float: left;
  margin-left: 25px;
}
.form-container input{
  width: 100%; height: 30px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
}
.signup-btn {
    width: 350px;
    margin-top: 45px;
}
</style>
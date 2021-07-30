<template>
<div id="login-popup">
  <div class="black-bg" @click="closeLoginPopup">
  </div>
  <form class="login-popup-content" @submit.prevent="onSubmit">
      <div class="login-form-hide">
        <img class="hide-btn" @click="closeLoginPopup" src="../../assets/btn_close.svg" alt="">
      </div>
      <h4 class="popup-title">Login</h4>
      <p class="guide-to-login">로그인을 하면 달력 만들기, 회원가입 창 만들기와 같은 실습을 통해<br>html, css, javascript에 대한 개념을 무료로 학습하실 수 있습니다.</p>
        <div class="form-container">
          <div class="user-inform">
            <!-- 아이디 -->
            <input type="text" v-model="loginId" placeholder="아이디">
            <div class="login-guide" v-if="idGuideDisplay == 1">아이디를 입력해주세요.</div>
          </div>
          <div class="user-inform">
            <!-- 비밀번호 -->
            <input type="password" v-model="loginPassword" placeholder="비밀번호">
            <div class="login-guide" v-if="passwordGuideDisplay == 1">비밀번호를 입력해주세요.</div>
          </div>
        </div>
        <div class="signup-guide-container">
          <span class="guide-to-signup">아직 회원이 아니세요?</span>
          <router-link to="/Signup" class="move-to-signup">회원가입</router-link>
        </div>
        <button type="submit"><img class="login-btn" src="../../assets/btn_login.svg" alt="btn_login"></button>
        <div class="find-container">
          <span class="id">아이디 찾기</span>
          <span> | </span>
          <span class="password">비밀번호 찾기</span>
        </div>
      <!-- <div class="form-container">
        <div class="user-inform">
          <input v-model="loginId" placeholder="아이디" type="text">
          <div class="login-guide" v-if="idGuideDisplay == 1">아이디를 입력해주세요.</div>
        </div>
        <div class="user-inform">
          <input v-model="userPassword" placeholder="비밀번호" type="password">
          <div class="login-guide" v-if="passwordGuideDisplay == 1">비밀번호를 입력해주세요.</div>
        </div>
      </div>
      <div class="signup-guide-container">
        <span class="guide-to-signup">아직 회원이 아니세요?</span>
        <router-link to="/Signup" class="move-to-signup">회원가입</router-link>
      </div>
      <img class="login-btn" @click="loginGuide" src="../../assets/btn_login.svg" alt="btn_login">
      <div class="find-container">
        <span class="id">아이디 찾기</span>
        <span> | </span>
        <span class="password">비밀번호 찾기</span>
      </div> -->
  </form>
</div>
</template>

<script>
import axios from "axios"
export default {
    name : 'login-popup',
    props : ['_loginPopupState'],
    data() {
      return {
        loginPopupState : this._loginPopupState,
        loginId : '',
        loginPassword : '',
        idGuideDisplay : 0, //1일 되면 아이디 입력 메세지 보여줌
        passwordGuideDisplay : 0, //1일 되면 비번 입력 메세지 보여줌
        loginNullcheck : true, //true : 아이디,비밀번호가 비어있음, false : 아이디, 비밀번호가 모두 입력됨(로그인 가능 상태)
      }
    },
    methods : {
      closeLoginPopup() {
        console.log("로그인 창 닫음");
        this.loginPopupState = 0;
        this.$emit('_loginClose');
      },
      loginGuide() {
        console.log("loginGuide 함수 실행됨");
        if (this.loginId == '' && this.loginPassword == '') {
          this.idGuideDisplay = 1;
          this.passwordGuideDisplay = 1;
        } else if(this.loginId == '') {
          this.idGuideDisplay = 1;
          this.passwordGuideDisplay = 0;
        } else if(this.loginPassword == '') {
          this.idGuideDisplay = 0;
          this.passwordGuideDisplay = 1;
        } else { // 아이디, 비밀번호가 모두 입력된 상태인 경우
          console.log("아아디, 비밀번호 모두 입력됨");
          this.idGuideDisplay = 0;
          this.passwordGuideDisplay = 0;
          this.loginNullcheck = false
        }
      },
      onSubmit() {
        console.log("onsubmit 함수 실행됨");
        this.loginGuide();
        if (this.loginNullcheck == false) {
          axios
          .post('http://3.35.217.11/api/login', {
            userId : this.loginId,
            password : this.loginPassword
          })
          .then(res => {
            console.log(res);
            if(res.data){
              // window.location.reload();
            }else{
              alert("아이디 또는 비밀번호가 틀렸습니다.");
            }
          })
          .catch(err => {
              console.log(err);
          })
        }
      }
    }
  }
</script>

<style>
#login-popup {
  position: relative;
  display: flex;
  align-items: center; 
  width: 100%; height: 100%;
  position: fixed;
  margin: -20px;
  z-index: 1;
}
#login-popup form{
  overflow: hidden;
}
#login-popup .black-bg {
  position: fixed;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
#login-popup .login-popup-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px; height: 500px;
  background: white;
  border-radius: 20px;
  margin: auto;
  padding: 0px 50px;
}
#login-popup .popup-title {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  border-bottom: 2px solid rgba(138, 101, 242, 0.44);
  color: #4D24A4;
  font-size: 20px;
  font-weight: 700;
}
#login-popup .login-form-hide {
  position: absolute;
  top: 24px; right: 50px;
  width: 19px; height: 19px;
  border-radius: 50px;
}
#login-popup .login-form-hide:hover {
  background-color: rgb(0, 0, 0, 0.08);
  cursor: pointer;
}
#login-popup .hide-btn {
  width: 12px; height: 12px;
  margin: auto;
}
#login-popup .guide-to-login {
  margin-top: 30px;
  color: #606060;
}

#login-popup .form-container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
}
#login-popup .form-container p{
  float: left;
  margin-left: 25px;
}
#login-popup .form-container input{
  width: 100%; height: 35px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
}
#login-popup .form-container .login-guide {
  display: block;
  float: left;
  margin: 5px 0 0 10px;
  color: #F93079;
  font-size: 12px;
}
.signup-guide-container {
  margin-top: 40px;
}
.guide-to-signup {
  color: #606060;
}
.move-to-signup {
  display: inline-block;
  margin-left: 5px;
  color: #765FD7;
  font-weight: 700;
  cursor: pointer;
}
.login-btn {
  margin-top: 20px;
  cursor: pointer;
}
.find-container {
  font-size: 14px;
  margin: 15px 0 35px;
}
.find-container .id {
  margin-right: 5px;
  cursor: pointer;
}
.find-container .password {
  margin-left: 5px;
  cursor: pointer;
}
</style>
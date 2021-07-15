<template>
<div class="login-popup" @click="closeLoginPopup">
    <div class="white-bg">
      <h4 class="popup-title">Login</h4>
      <p class="guide-to-login">로그인을 하면 달력 만들기, 회원가입 창 만들기와 같은 실습을 통해<br>html, css, javascript에 대한 개념을 무료로 학습하실 수 있습니다.</p>
      <div class="form-container">
        <p>아이디</p>
        <input type="text">
        <p>비밀번호</p>
        <input type="password">
      </div>
    </div>    
</div>
</template>

<script>

export default {
    name : 'login-popup',
    props : ['_loginPopupState'],
    data() {
      return {
        loginPopupState : this._loginPopupState
      }
    },
    methods : {
      closeLoginPopup() {
        console.log("로그인 창 닫음");
        this.loginPopupState = 0;
        this.$emit('_loginClose');
      }
    }
}
</script>

<style>
.login-popup {
  display: flex;
  align-items: center; 
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  margin: -20px;
}
.white-bg {
  width: 800px; height: 500px;
  background: white;
  border-radius: 20px;
  margin: auto;
  padding: 0px 50px;
}
.login-popup .white-bg .popup-title {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  border-bottom: 2px solid rgba(138, 101, 242, 0.44);
  font-size: 20px;
  font-weight: 500;
}
.login-popup .white-bg .guide-to-login {
  margin-top: 30px;
  color: #606060;
}

.login-popup .white-bg .form-container{
  width: 350px;
  margin: auto;
}
.login-popup .white-bg .form-container p{
  margin-left: 25px;
}
.login-popup .white-bg .form-container input{
  width: 100%; height: 30px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
}
</style>
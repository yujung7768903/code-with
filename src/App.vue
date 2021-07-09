<template>
  <Background />
  <LoginPopup v-if="loginPopup == 1"/>
  <div class="black-bg" v-if="windowState == 1" @click="windowState = 0">
    <div class="white-bg">
      <div class="windowTitle">
        <h4 class="select-course-name">{{selectWindow}}</h4> <h4 class="process">Process</h4>
      </div>
      <p class="guide-to-start">시작할 단계를 선택하세요<br>이미 진행중인 프로세스가 있다면, 이어 진행하기가 가능합니다</p>
      <div class="tutorial-container">
        <div class="tutorial">
          <div class="tutorial-moon"><img src="./assets/img_cresent-moon-purple.svg" alt=""></div>
          <p>step1</p>
          <button class="tutorial-step">튜토리얼</button>
        </div>
        <div class="tutorial">
          <div class="tutorial-moon"><img src="./assets/img_half-moon-purple.svg" alt=""></div>
          <p>step2</p>
          <button class="tutorial-step">달력 만들기</button>
        </div>
        <div class="tutorial">
          <div class="tutorial-moon"><img src="./assets/img_full-moon-purple.svg" alt=""></div>
          <p>step3</p>
          <button class="tutorial-step">회원가입 창 만들기</button>
        </div>
      </div>
      <img class="continue-btn" src="./assets/btn_continue.svg" alt="">
      <p class="start-first">처음부터 진행하기</p>
    </div>
  </div>
  <Header/>
  <div class="guide">
    <div class="greeting">
      <strong> Welcome!</strong><br>
      Free Course For Beginner<br>
      당신의 코딩학습에  코드윗이 함께할게요.
    </div>
    <img class="coco" src="./assets/coco_smile.svg" alt="">
  </div>
  <div class="course-container">
    <div class="course" style="align-self: flex-end">
      <img class="course-moon" src="./assets/img_cresent-moon-white.svg" alt="">
      <div class="course-box" @click="selectWindow = windowTitle[0]; windowState = 1">
        <img src="./assets/course/html.svg" alt="">
        <div class="course-name">HTML<br>Course</div>
      </div>
    </div>
    <div class="course" style="align-self: center">
      <img class="course-moon" src="./assets/img_half-moon-white.svg" alt="">
      <div class="course-box" @click="selectWindow = windowTitle[1]; windowState = 1">
        <img src="./assets/course/css.svg" alt="">
        <div class="course-name">CSS<br>Course</div>
      </div>
    </div>
    <div class="course" style="align-self: flex-start">
      <img class="course-moon" src="./assets/img_full-moon-white.svg" alt="">
      <div class="course-box" @click="selectWindow = windowTitle[2]; windowState = 1">
        <img src="./assets/course/js.svg" alt="">
        <div class="course-name">JavaScript<br>Course</div>
      </div>
    </div>
  </div>
  <div class="course-select">
    <span class="course-select-start">Learing Frontend Course<br></span>
    <span class="course-select-greeting">원하는 학습 단계를 선택하세요!</span>
  </div>

</template>

<script>
import Header from "./components/layout/Header-dark.vue"
import Background from "./components/layout/background-main.vue"
import LoginPopup from "./components/layout/login-popup.vue"
import {data} from "./components/layout/Header-dark.vue"

export default {
  name: 'App',
  components: {
    Header, Background, LoginPopup
  },
  data() {
    return {
      window : [
        {
          'login' : {
            'title' : 'Login',
            'explanation' : '',

          }, 
          'course' : {}
        }
      ],
      windowState : 0, //0은 창 닫힌 상태, 1은 창 열린 상태
      windowTitle : ['HTML', 'CSS', 'JavaScript'],
      selectWindow : '',
      courseImg : ['./assets/img_cresent-moon-white.svg', './assets/img_half-moon-white.svg', './assets/img_full-moon-white.svg'],
      courseStyle : ['align-self: flex-end' ,'align-self: center','align-self: flex-start'],
      loginPopup : data
    }
  }
}
</script>

<style>
:root {
    /* color */
    --color_main-purple : #8944FA;
    --color_light-purple : #8944FA;
    --color_dark-purple : #4C1993;
    --color_navy : #30355C;
    --color_point-mint : #00D1FF;

    --color_white : #FFFFFF;
    --color_black : #000000;
    --color_light-gray : #F5F5F5;
    --color_gray : #D2D2D2;
    --color_dark-gray : #898A8D;
}
body {
  /* min-width: 1040px; */
  background-image: url("./assets/background-main.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #F5F5F5;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 20px;
  text-align: center;
  color: #2c3e50;
}
div {
  box-sizing: border-box;
}
h4 {
  margin: 0px;
}
/* 코스 창 관련 */
.black-bg {
  display: flex;
  align-items: center; 
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  margin: -20px; padding: 20px;
}
.white-bg {
  width: 800px; height: 500px;
  background: white;
  border-radius: 20px;
  margin: auto;
  padding: 0px 50px;
}
.windowTitle {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  border-bottom: 2px solid rgba(138, 101, 242, 0.44);
  font-size: 20px;
  font-weight: 500;
}
.windowTitle .select-course-name {
  color: #4D24A4;
}
.windowTitle .process {
  color: #606060;
  margin-left: 10px;
}
.white-bg .guide-to-start {
  color: #606060;
  margin-top: 30px;
}
.white-bg .tutorial-container {
  display: flex;
  justify-content: center;
  gap: 160px;
  margin-top: 50px;
}
.white-bg .tutorial-container .tutorial {
  width: 115px;
}
.white-bg .tutorial-container .tutorial .tutorial-moon {
  width: 40px; height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.white-bg .tutorial-container .tutorial .tutorial-step {
  height: 30px;
  border: 1px solid #BDBDBD;
  border-radius: 10px;
}
.white-bg .continue-btn {
  margin-top: 60px;
}
.white-bg .start-first {
  width: 120px;
  color: #656565;
  border-bottom: 1px solid #848484;
  margin: 10px auto;
}
/* 안내 문구(with 코코) */
.guide {
  text-align: left;
  margin-top: 60px;
  margin-left: 190px;
}
.guide .greeting {
  display: inline-block;
  width: 350px;
  color: var(--color_white);
  text-align: left;
}
.guide .coco{
  width: 150px;
}
/* html, css, javascript 코스 박스들 css */
.course-container {
  height: 380px;
  display: flex; gap: 90px;
  justify-content: center;
  margin-top: 50px;
}
.course-container .course-box {
  width: 220px; height: 250px;
  background-color: var(--color_white);
  margin-top: 20px; padding: 25px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.11);
  cursor: pointer;
}
.course-container .course-box img{
  width: 100px;
}
.course-container .course .course-box .course-name {
  color: #818181;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 850;
}
/* 코스 선택하라는 안내 */
.course-select {
  width: 600px;
  float: right;
  margin: -30px 220px 0 0;
  text-align: right;
  font-size: 20px;
}
.course-select .course-select-start {
  color: #5D3CBB;
  font-weight: 600;
}
.course-select .course-select-greeting {
  color: #8B8B8C;
}
@media screen and (max-width : 1040px) {
  body {
    overflow-y: scroll;
  }
  .guide {
    display: flex;
    justify-content: center;
    margin: 60px 0px;
  }
  .guide .coco {
    display: none;
  }
  .course-container {
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    width: 220px;
    margin: auto;
  }
  .course-container .course {
    align-self: center;
  }
  .course-container .course-moon {
    display: none;
  }
  .course-select {
    display: none;
  }
}

</style>
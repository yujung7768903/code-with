<template>
  <Background />
  <div class="black-bg" v-if="windowState == 1">
    <div class="white-bg" @click="windowState = 0">
      <h4>{{selectWindow}}</h4>
      <p>상세페이지 내용</p>
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
  <div class="course">
    <div class="course-container" style="align-self: flex-end">
      <img class="course-moon" src="./assets/img_cresent-moon-white.svg" alt="">
      <div class="course-box" @click="selectWindow = windowTitle[0]; windowState = 1"></div>
    </div>
    <div class="course-container" style="align-self: center">
      <img class="course-moon" src="./assets/img_half-moon-white.svg" alt="">
      <div class="course-box" @click="selectWindow = windowTitle[1]; windowState = 1"></div>
    </div>
    <div class="course-container" style="align-self: flex-start">
      <img class="course-moon" src="./assets/img_full-moon-white.svg" alt="">
      <div class="course-box" @click="selectWindow = windowTitle[2]; windowState = 1"></div>
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

export default {
  name: 'App',
  components: {
    Header, Background
  },
  data() {
    return {
      windowState : 0, //0은 창 닫힌 상태, 1은 창 열린 상태
      windowTitle : ['HTML Process', 'CSS Process', 'JavaScript Process'],
      selectWindow : '',
      courseImg : ['./assets/img_cresent-moon-white.svg', './assets/img_half-moon-white.svg', './assets/img_full-moon-white.svg'],
      courseStyle : ['align-self: flex-end' ,'align-self: center','align-self: flex-start']
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 20px;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("./assets/background-main.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #F5F5F5;
  overflow: hidden;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  margin: -20px; padding: 20px;
}
.white-bg {
  width: 845px; height: 525px;
  background: white;
  border-radius: 8px;
  margin: auto;
  padding: 50px;
}
.guide {
  text-align: left;
  margin-top: 60px;
  margin-left: 140px;
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
.course {
  height: 380px;
  display: flex; gap: 90px;
  justify-content: center;
  margin-top: 50px;
}
.course .course-box {
  width: 220px; height: 250px;
  background-color: var(--color_white);
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.11);
}
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


</style>
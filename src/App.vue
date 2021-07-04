<template>
  <Header/>
  <div class="guide">
    <div class="greeting">
      Welcome!
      Free Course For Beginner - 
      당신의 코딩학습에  코드윗이 함께할게요.
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header-dark.vue"

export default {
  name: 'App',
  components: {
    Header
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
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("./assets/background-main.png");
  background-size: cover;
}
div {
  box-sizing: border-box;
}
.guide .greeting {
  color: var(--color_white);
}

</style>

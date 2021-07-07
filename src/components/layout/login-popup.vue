<template>
<div class="black-bg" @click="loginPopupState = 0">
    <div class="white-bg">
      <h4 class="popup-title">Login</h4>
      <p>상세페이지 내용</p>
    </div>    
</div>
</template>

<script>
export default {
    
}
</script>

<style>
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
.popup-title {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  border-bottom: 2px solid rgba(138, 101, 242, 0.44);
  font-size: 20px;
  font-weight: 500;
}
</style>
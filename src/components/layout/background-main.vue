<template>
    <img src="../../assets/background-tag-head.svg" :style="imgPosition[0]" alt="">
    <img src="../../assets/background-tag-body.svg" :style="imgPosition[1]" alt="">
    <img src="../../assets/background-tag-style.svg" :style="imgPosition[2]" alt="">
    <img src="../../assets/background-tag-head.svg" :style="imgPosition[3]" alt="">
    <img src="../../assets/background-tag-body.svg" :style="imgPosition[4]" alt="">
    <img src="../../assets/background-tag-style.svg" :style="imgPosition[5]" alt="">
</template>

<script>
export default {
    name : "background-main",
    data() {
        return {
            imgPosition : ['top: 200px; left: 80px;', 'top: 310px; left: 355px;', 'top: 130px; left: 280px;', 'top : 150px; right : 35px', 'top : 183px; right : 430px', 'bottom : 358px; right : -20px']
        }
    }
}
</script>

<style scoped>
img {
    width: 100px;
    position: absolute;
}
</style>
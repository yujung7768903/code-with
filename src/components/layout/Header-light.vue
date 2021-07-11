<template>
    <div id="header">        
        <div id="logo">
            <a href="../../App.vue"><img id="logo-letter" src="../../assets/logo-letter-purple.png" alt=""></a>
            <img id="logo-img" src="../../assets/sub-page-logo.svg" alt="">
        </div>
        <div class="nav-menu">
            <a href="" class="menu">Sign up</a>
            <img class="nav-menu-division" src="../../assets/nav-menu-division.svg" alt="">
            <button class="menu" @click="loginPopupState = 1">Login</button>
            <img class="nav-menu-division" src="../../assets/nav-menu-division.svg" alt="">
            <a href="" class="menu">My page</a>
            <div>{{loginPopupState}}</div>
        </div>
    </div>

</template>

<script>

export default {
    name: "header-light",
    components : {

    },
    data() {
        return {
            loginPopupState : 0 //0은 닫힌 상태, 1은 열린 상태
        }
    }
}
</script>

<style>
    body {
        margin: 0px;
    }
    div{
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    button {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        outline: 0;
    }
    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%; height: 70px;
        background-color: white;
        border-radius: 20px;
        padding: 0px 30px;
        font-weight: 500;
    }
    #logo {
        display: flex;
        align-items: center;
    }
    #logo-letter {
        width: 110px;
    }
    #logo-img {
        width: 100px;
        margin-left: 30px;
    }

    .nav-menu .menu {
        color: #4C1993;
        font-size: 18px;
    }
    .nav-menu .nav-menu-division {
        margin: 0px 14px;
    }
</style>
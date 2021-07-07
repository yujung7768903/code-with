<template>
    <div id="header">        
        <div id="logo">
            <img id="logo-letter" src="../../assets/logo-letter.png" alt="">
            <img id="logo-img" src="../../assets/main-page-logo.svg" alt="">
        </div>
        <div class="nav-menu">
            <a href="" class="menu">Sign up</a>
            <img class="nav-menu-division" src="../../assets/nav-menu-division.svg" alt="">
            <a class="menu" @click="loginPopupState = 1">Login</a>
            <img class="nav-menu-division" src="../../assets/nav-menu-division.svg" alt="">
            <a href="" class="menu">My page</a>
            <div>{{loginPopupState}}</div>
        </div>
    </div>

</template>

<script>

export default {
    name: "header-dark",
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
    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%; height: 70px;
        background-color: rgba(254, 249, 249, 0.1);
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
        color: #FFFFFF;
        font-size: 18px;
    }
    .nav-menu .nav-menu-division {
        margin: 0px 14px;
    }
</style>
<template>
    <div id="signup">
        <HeaderLight
            :_loginPopupState = "loginPopupState"
            @_loginOpen = "loginOpen"
        ></HeaderLight>
        <LoginPopup
            v-if="loginPopupState == 1" 
            :_loginPopupState = "loginPopupState"
            @_loginClose = "loginClose"
        ></LoginPopup>
        <div>signup page</div>
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
</style>
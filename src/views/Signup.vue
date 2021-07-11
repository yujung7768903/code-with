<template>
    <div id="My-page">
        <header-light />
        <div>signup page</div>
    </div>
</template>

<script>
import HeaderLight from "../components/layout/Header-light.vue"

export default {
    name : 'Mypage',
    components : {
        HeaderLight
    }
}
</script>

<style>
#nav-menu-page {
    padding: 20px;
}
</style>
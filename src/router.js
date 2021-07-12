import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue'
import MyPage from "./views/Mypage.vue";
import SignUp from "./views/Signup.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'Home',
            component : Home
        },
        {
            path : '/Mypage',
            name : 'Mypage',
            component : MyPage
        },
        {
            path : '/Signup',
            name : 'Signup',
            component : SignUp
        }
    ]
})

export default router;
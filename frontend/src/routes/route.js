import Vue from 'vue'
import VueRouter from 'vue-router'
import {validateAdmin} from "../apis/admin_api";
import store from "../store/store";

const isAdmin = (to, from, next) => {
    validateAdmin().then(() => next())
        .catch(() => store.commit('OPEN_MODAL', {
            title: '접속 권한 없음.',
            content: '관리자전용 페이지 입니다',
            option1: '닫기',
        }))
};

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../views/Calendar')
        },
        {
            path: '/admin',
            component: () => import('../views/Admin'),
            beforeEnter: (to, form, next) => isAdmin(to, form, next),
        },
    ]
});

export {router}
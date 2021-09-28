import Vue from 'vue'
import Router from 'vue-router'

import About from './component/About.vue'
import Home from './component/Home.vue'


Vue.use(Router)

export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/about', component: About
            },
            {
                path: '/home', component: Home
            },
        ]
    })
}

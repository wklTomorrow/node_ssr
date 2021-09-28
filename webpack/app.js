// const Vue = require('vue')
import Vue from 'vue'
// const App = require('./app')
import App from './App.vue'
// const createRouter = require('./route')
import createRouter from './route'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export default function createApp () {
    const router = createRouter()
    const store = createStore()

    sync(store, router)

    const app = new Vue({
        // 根实例简单的渲染应用程序组件。
        router,
        store,
        render: h => h(App)
    })
    return { app, router, store }
}
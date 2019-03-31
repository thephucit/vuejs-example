import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import routers from './router'

import 'framework7/css/framework7.bundle.min.css'
import 'framework7-icons'
import 'animate.css/animate.min.css'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
Framework7.use(Framework7Vue)

axios.defaults.baseURL   = 'http://localhost:8082/graphql'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routers,
    mode: 'history',
})

new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
})

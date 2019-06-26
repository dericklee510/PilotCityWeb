
import Vue from "vue"
import Router, { RouterOptions } from "vue-router"

import signup from "@/views/Signup"
import about from "@/views/About.vue"
Vue.use(Router)

export default new Router(<RouterOptions>{
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/signup",
            name: "signup",
            component: signup
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: about
        }
    ]
})

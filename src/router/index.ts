
import Vue from "vue"
import Router from "vue-router"

import signup from "@/views/Signup"
import login from "@/views/Login"
// import about from "@/views/About.vue"
import profile from "@/views/Profile"

import routes from "./routes"
Vue.use(Router)


export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/signup",
            name: "signup",
            component: signup
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        // {
        //     path: "/about",
        //     name: "about",
        //     component: about
        // },
        {
            path: "/profile",
            name: "citizenProfile",
            component: profile
        }
    ]
    // routes
})

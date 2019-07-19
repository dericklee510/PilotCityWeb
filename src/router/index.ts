
import Vue from "vue"
import Router from "vue-router"

import signup, * as signups from "@/views/Signup"
import login from "@/views/Login"
import about from "@/views/About.vue"
Vue.use(Router)

//signup routes
var container = new signups.Container()
var profile = new signups.Profile()

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/signup",
            name: "signup",
            component: container,
            children: [
                {
                    path:``,
                    name: "signup",
                    component: signup
                },
                {
                    path:`profile`,
                    name: "signup-profile",
                    component: profile
                    // children:[{
                    //     path: `1`,
                    //     name: `signup-number`,
                    //     component: signup.Phone
                    // }]
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/about",
            name: "about",
            component: about
        }
    ]
})

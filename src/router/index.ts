
import Vue from "vue"
import Router from "vue-router"

import signup, * as signups from "@/views/Signup"
import forgotPassword from "@/views/forgotPassword"
import login from "@/views/Login"
import about from "@/views/About.vue"
import doka from "@/components/uploadfiles/doka.vue"
Vue.use(Router)

//signup routes
var container = new signups.Container
var profile = new signups.Profile
var phone = new signups.Phone
var upload = new signups.Upload
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/signup",
            name: "signup-container",
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
                    component: profile,
                    children:[{
                        path: `1`,
                        name: `signup-number`,
                        component: phone
                    },
                    {
                        path: ``,
                        name: `signup-upload`,
                        component: upload
                    }]
                }
            ]
        },
        {
            path: `/test`,
            name: "test",
            component: doka
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/password-reset",
            name: "password-reset",
            component: forgotPassword
        },
        {
            path: "/about",
            name: "about",
            component: about
        }
    ]
})


import Vue from "vue"
import Router from "vue-router"

import 
signup, 
{
    profile, 
    container, 
    phone, 
    upload
} from "@/views/Signup"
import
{
    login,
    forgotPassword, 
    code,
    email
} from "@/views/Login"
import about from "@/views/About.vue"
import { ProfileUpload } from '@/components/Doka';
Vue.use(Router)

//signup routes
// var container = new signups.Container
// var profile = new signups.Profile
// var phone = new signups.Phone
// var upload = new signups.Upload
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
                    
                    children:[
                        {
                            path: ``,
                            name: `signup-upload`,
                            component: upload
                        },
                        {
                            path: `1`,
                            name: `signup-number`,
                            component: phone
                        }
                    ]
                }
            ]
        },
        {
            path: `/test`,
            name: "test",
            component: ProfileUpload
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: `/reset_password`,
            name: "recover-pass-container",
            component: forgotPassword,
            children: [{
                path: "",
                name: "reset-email",
                component: email
            },
            {
                path: "1",
                name: "reset-code",
                component: code
            }]
        },
        {
            path: "/about",
            name: "about",
            component: about
        }
    ]
})

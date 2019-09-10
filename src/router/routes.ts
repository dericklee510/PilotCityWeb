import { SET_USER } from './../store/Auth/mutation-types'

import {
    forgotPassword,
    code,
    email
} from "@/views/Login"
import {routes as SignupRoutes} from "@/views/Signup"
import {routes as LoginRoutes} from "@/views/Login"
let routes: RouteConfig [] = [
    ...SignupRoutes,
    ...LoginRoutes,
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
    }
]

import { ProfileBanner } from '@/components/Doka'
import { RouterOptions, RouteConfig } from 'vue-router'
if(process.env.NODE_ENV === "development")
    routes.push({
        path: `/test`,
        name: "test",
        component: ProfileBanner
    })
export default routes
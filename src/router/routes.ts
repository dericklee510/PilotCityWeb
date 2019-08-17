import { SET_USER } from './../store/Auth/mutation-types'

import {
    forgotPassword,
    code,
    email
} from "@/views/Login"
import {routes as Signup} from "@/views/Signup"
import {routes as Login} from "@/views/Login"
let routes: RouteConfig [] = [
    ...Signup,
    ...Login,
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

import { ProfileUpload } from '@/components/Doka'
import { RouterOptions, RouteConfig } from 'vue-router'
if(process.env.NODE_ENV === "development")
    routes.push({
        path: `/test`,
        name: "test",
        component: ProfileUpload
    })
export default routes
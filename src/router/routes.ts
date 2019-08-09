import { SET_USER } from './../store/Auth/mutation-types';

import {
    login,
    forgotPassword,
    code,
    email
} from "@/views/Login"
import {routes as Signup} from "@/views/Signup"
let routes: RouteConfig [] = [
    Signup,
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
    }
]

import { ProfileUpload } from '@/components/Doka'
import { RouterOptions, RouteConfig } from 'vue-router';
if(process.env.NODE_ENV === "development")
routes.push({
    path: `/test`,
    name: "test",
    component: ProfileUpload
})
export default routes
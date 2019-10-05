import { SET_USER } from './../store/Auth/mutation-types'
import { RouterOptions, RouteConfig } from 'vue-router'

import {
    forgotPassword,
    code,
    email
} from "@/views/Login"
import test from "@/views/Test"
import {routes as ProfileRoutes} from "@/views/Profile"
import {routes as SignupRoutes} from "@/views/Signup"
import {routes as LoginRoutes} from "@/views/Login"
let routes: RouteConfig [] = [
    ...SignupRoutes,
    ...LoginRoutes,
    ...ProfileRoutes,
    {
        path: `/reset_password`,
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
        path: `/test`,
        name: `test-page`,
        component: test
    }
]

// import { AutoComplete } from '@/components/GoogleMaps/'
// import { RouterOptions, RouteConfig } from 'vue-router'
// if(process.env.NODE_ENV === "development")
//     routes.push({
//         path: `/test`,
//         name: "test",
//         component: AutoComplete
//     })
export default routes
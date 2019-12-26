/* eslint-disable-next-line */
import { SET_USER } from './../store/Auth/mutation-types' //unsed
/* eslint-disable-next-line */
import { RouterOptions, RouteConfig } from 'vue-router' //routeroptions unused

import {
    code,
    email,
  routes as LoginRoutes,
  ForgotPassword
} from '@/views/Login'
import programbrief from "@/views/ProgramGuide/Brief/Brief.vue"
import introvideo from "@/views/ProgramGuide/Introvideo/Introvideo.vue"
import practicelog from "@/views/ProgramGuide/Practicelog/Practicelog.vue"
import test from '@/views/Test'
import Home from '@/views/Home.vue'
import { routes as ProfileRoutes } from '@/views/Profile'
import { routes as SignupRoutes } from '@/views/Signup'

const routes: RouteConfig [] = [
    ...SignupRoutes,
    ...LoginRoutes,
    ...ProfileRoutes,
    {
        path: '/reset_password',
        component: ForgotPassword,
        children: [{
            path: '',
            name: 'reset-email',
            component: email
        },
        {
            path: '1',
            name: 'reset-code',
            component: code
        }]
    },
    {
        path: '/test',
        name: 'test-page',
        component: test
    },
    {
        path: `/programbrief`,
        name: `program-brief`,
        component: programbrief
    },

    {
        path: `/introvideo`,
        name: `intro-video`,
        component: introvideo
    },

    {
        path: `/practicelog`,
        name: `practice-log`,
        component: practicelog
    },

    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '',
        redirect: '/'
    },
    {
        path: '*',
        redirect: '/'
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

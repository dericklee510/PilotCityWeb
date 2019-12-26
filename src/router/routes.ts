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
import introvideo_edit from "@/views/ProgramGuide/Introvideo/Introvideo_edit.vue"
import practicelog from "@/views/ProgramGuide/Practicelog/Practicelog.vue"
import agenda from "@/views/ProgramGuide/Agenda/Agenda.vue"
import presentation_enter from "@/views/ProgramGuide/Presentation/presentation_enter.vue"
import presentation_view from "@/views/ProgramGuide/Presentation/presentation_view.vue"
import demovideo_view from "@/views/ProgramGuide/Demovideo/demovideo_view.vue"
import demovideo_enter from "@/views/ProgramGuide/Demovideo/demovideo_enter.vue"
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
        path: `/introvideo_edit`,
        name: `intro-video-edit`,
        component: introvideo_edit
    },

    {
        path: `/practicelog`,
        name: `practice-log`,
        component: practicelog
    },

    {
        path: `/presentation_enter`,
        name: `presentation-enter`,
        component: presentation_enter
    },

    {
        path: `/presentation_view`,
        name: `presentation-view`,
        component: presentation_view
    },

    {
        path: `/demovideo_view`,
        name: `demovideo-view`,
        component: demovideo_view
    },

    {
        path: `/demovideo_enter`,
        name: `demovideo-enter`,
        component: demovideo_enter
    },

    {
        path: `/agenda`,
        name: `agenda`,
        component: agenda
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

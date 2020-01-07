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
import { routes as ProfileRoutes } from '@/views/Profile'
import { routes as SignupRoutes } from '@/views/Signup'

import myprograms from "@/views/Myprograms/myprograms.vue"
import test from '@/views/Test'
import Home from '@/views/Home.vue'
import login2 from "@/views/Login/Login2.vue"
import signup2 from "@/views/Signup/Signup2.vue"
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
    // {
    //     path: `/programbrief`,
    //     name: `program-brief`,
    //     component: programbrief
    // },

    // {
    //     path: `/programbrief_edit`,
    //     name: `programbrief-edit`,
    //     component: programbrief_edit
    // },

    // {
    //     path: `/introvideo`,
    //     name: `intro-video`,
    //     component: introvideo
    // },

    // {
    //     path: `/introvideo_edit`,
    //     name: `intro-video-edit`,
    //     component: introvideo_edit
    // },

    // {
    //     path: `/practicelog`,
    //     name: `practice-log`,
    //     component: practicelog
    // },

    // {
    //     path: `/practicelog_manage`,
    //     name: `practicelog-manage`,
    //     component: practicelog_manage
    // },

    // {
    //     path: `/processlog`,
    //     name: `processlog`,
    //     component: processlog
    // },

    // {
    //     path: `/presentation_enter`,
    //     name: `presentation-enter`,
    //     component: presentation_enter
    // },

    // {
    //     path: `/presentation_view`,
    //     name: `presentation-view`,
    //     component: presentation_view
    // },

    // {
    //     path: `/demovideo_view`,
    //     name: `demovideo-view`,
    //     component: demovideo_view
    // },

    // {
    //     path: `/demovideo_enter`,
    //     name: `demovideo-enter`,
    //     component: demovideo_enter
    // },

    // {
    //     path: `/pitch_enter`,
    //     name: `pitch-enter`,
    //     component: pitch_enter
    // },

    // {
    //     path: `/pitch_view`,
    //     name: `pitch-view`,
    //     component: pitch_view
    // },

    // {
    //     path: `/elevator_enter`,
    //     name: `elevator-enter`,
    //     component: elevator_enter
    // },

    // {
    //     path: `/elevator_view`,
    //     name: `elevator-view`,
    //     component: elevator_view
    // },

    // {
    //     path: `/elevator_view2`,
    //     name: `elevator-view2`,
    //     component: elevator_view2
    // },

    // {
    //     path: `/businessmodelcanvas_enter`,
    //     name: `businessmodelcanvas-enter`,
    //     component: businessmodelcanvas_enter
    // },

    // {
    //     path: `/businessmodelcanvas_view2`,
    //     name: `businessmodelcanvas-view2`,
    //     component: businessmodelcanvas_view2
    // },

    // {
    //     path: `/agenda`,
    //     name: `agenda`,
    //     component: agenda
    // },

    // {
    //     path: `/agenda_view`,
    //     name: `agenda-view`,
    //     component: agenda_view
    // },

    // {
    //     path: `/externshipagenda_edit`,
    //     name: `externshipagenda-edit`,
    //     component: externshipagenda_edit
    // },

    // {
    //     path: `/externshipagenda_view`,
    //     name: `externshipagenda-view`,
    //     component: externshipagenda_view
    // },

    // {
    //     path: `/hackagenda_edit`,
    //     name: `hackagenda-edit`,
    //     component: hackagenda_edit
    // },

    // {
    //     path: `/hackagenda_view`,
    //     name: `hackagenda-view`,
    //     component: hackagenda_view
    // },

    // {
    //     path: `/demoagenda_edit`,
    //     name: `demoagenda-edit`,
    //     component: demoagenda_edit
    // },

    // {
    //     path: `/demoagenda_view`,
    //     name: `demoagenda-view`,
    //     component: demoagenda_view
    // },

    // {
    //     path: `/login2`,
    //     name: `login2`,
    //     component: login2
    // },

    // {
    //     path: `/signup2`,
    //     name: `signup2`,
    //     component: signup2
    // },

    // {
    //     path: `/myprograms`,
    //     name: `my-programs`,
    //     component: myprograms
    // },

    // {
    //     path: `/launcher`,
    //     name: `launcher`,
    //     component: launcher
    // },

    // {
    //     path: `/guide`,
    //     name: `guide`,
    //     component: guide
    // },

    // {
    //     path: `/viewcasestudies`,
    //     name: `view-case-studies`,
    //     component: viewcasestudies
    // },
    // {
    //     path: `/editcasestudies`,
    //     name: `edit-case-studies`,
    //     component: editcasestudies
    // },
    {
        path: `/editcasestudies`,
        name: `edit-case-studies`,
        component: editcasestudies
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

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
import programbrief_edit from "@/views/ProgramGuide/Brief/programbrief_edit.vue"
import introvideo from "@/views/ProgramGuide/Introvideo/Introvideo.vue"
import introvideo_edit from "@/views/ProgramGuide/Introvideo/Introvideo_edit.vue"
import practicelog from "@/views/ProgramGuide/Practicelog/Practicelog.vue"
import practicelog_manage from "@/views/ProgramGuide/Practicelog/Practicelog_manage.vue"
import presentation_enter from "@/views/ProgramGuide/Presentation/presentation_enter.vue"
import presentation_view from "@/views/ProgramGuide/Presentation/presentation_view.vue"
import demovideo_view from "@/views/ProgramGuide/Demovideo/demovideo_view.vue"
import demovideo_enter from "@/views/ProgramGuide/Demovideo/demovideo_enter.vue"
import pitch_enter from "@/views/ProgramGuide/Pitch/pitch_enter.vue"
import pitch_view from "@/views/ProgramGuide/Pitch/pitch_view.vue"
import elevator_enter from "@/views/ProgramGuide/Elevator/elevator_enter.vue"
import elevator_view from "@/views/ProgramGuide/Elevator/elevator_view.vue"
import elevator_view2 from "@/views/ProgramGuide/Elevator/elevator_view2.vue"
import businessmodelcanvas_enter from "@/views/ProgramGuide/Businessmodelcanvas/businessmodelcanvas_enter.vue"
import businessmodelcanvas_view2 from "@/views/ProgramGuide/Businessmodelcanvas/businessmodelcanvas_view2.vue"
import agenda from "@/views/ProgramGuide/Agenda/agenda.vue"
import agenda_view from "@/views/ProgramGuide/Agenda/agenda_view.vue"
import externshipagenda_edit from "@/views/ProgramGuide/Externship/externshipagenda_edit.vue"
import externshipagenda_view from "@/views/ProgramGuide/Externship/externshipagenda_view.vue"
import hackagenda_edit from "@/views/ProgramGuide/Hack/hackagenda_edit.vue"
import hackagenda_view from "@/views/ProgramGuide/Hack/hackagenda_view.vue"
import demoagenda_edit from "@/views/ProgramGuide/Demo/demoagenda_edit.vue"
import demoagenda_view from "@/views/ProgramGuide/Demo/demoagenda_view.vue"
import processlog from "@/views/ProgramGuide/Process/processlog.vue"
import login2 from "@/views/Login/Login2.vue"
import signup2 from "@/views/Signup/Signup2.vue"
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
        path: `/programbrief_edit`,
        name: `programbrief-edit`,
        component: programbrief_edit
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
        path: `/practicelog_manage`,
        name: `practicelog-manage`,
        component: practicelog_manage
    },

    {
        path: `/processlog`,
        name: `processlog`,
        component: processlog
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
        path: `/pitch_enter`,
        name: `pitch-enter`,
        component: pitch_enter
    },

    {
        path: `/pitch_view`,
        name: `pitch-view`,
        component: pitch_view
    },

    {
        path: `/elevator_enter`,
        name: `elevator-enter`,
        component: elevator_enter
    },

    {
        path: `/elevator_view`,
        name: `elevator-view`,
        component: elevator_view
    },

    {
        path: `/elevator_view2`,
        name: `elevator-view2`,
        component: elevator_view2
    },

    {
        path: `/businessmodelcanvas_enter`,
        name: `businessmodelcanvas-enter`,
        component: businessmodelcanvas_enter
    },

    {
        path: `/businessmodelcanvas_view2`,
        name: `businessmodelcanvas-view2`,
        component: businessmodelcanvas_view2
    },

    {
        path: `/agenda`,
        name: `agenda`,
        component: agenda
    },

    {
        path: `/agenda_view`,
        name: `agenda-view`,
        component: agenda_view
    },

    {
        path: `/externshipagenda_edit`,
        name: `externshipagenda-edit`,
        component: externshipagenda_edit
    },

    {
        path: `/externshipagenda_view`,
        name: `externshipagenda-view`,
        component: externshipagenda_view
    },

    {
        path: `/hackagenda_edit`,
        name: `hackagenda-edit`,
        component: hackagenda_edit
    },

    {
        path: `/hackagenda_view`,
        name: `hackagenda-view`,
        component: hackagenda_view
    },

    {
        path: `/demoagenda_edit`,
        name: `demoagenda-edit`,
        component: demoagenda_edit
    },

    {
        path: `/demoagenda_view`,
        name: `demoagenda-view`,
        component: demoagenda_view
    },

    {
        path: `/login2`,
        name: `login2`,
        component: login2
    },

    {
        path: `/signup2`,
        name: `signup2`,
        component: signup2
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

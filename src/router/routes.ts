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
import { routes as ProgramRoutes } from '@/views/ProgramGuide'
import myprograms from "@/views/Myprograms/myprograms.vue"
import RFPPrompt from "@/views/ProgramGuide/views/RFP/Prompt.vue"
import RFPRequirements from "@/views/ProgramGuide/views/RFP/Requirements.vue"
import test from '@/views/Test'
import Home from '@/views/Home.vue'
import login2 from "@/views/Login/Login2.vue"
import signup2 from "@/views/Signup/Signup2.vue"
import launcher from "@/views/Myprograms/launcher.vue"
import Brief from "@/views/ProgramGuide/views/RFP/Brief/Brief.vue"

const routes: RouteConfig [] = [
    ...SignupRoutes,
    ...LoginRoutes,
    ...ProfileRoutes,
    ...ProgramRoutes,
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
        path: '/home',
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

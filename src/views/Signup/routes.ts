import { RouteConfig } from 'vue-router'
import { AuthStore } from '../../store/index'
import * as Signup from '.'

const routes: RouteConfig[] = [
    {
        name: 'signup',
        path: '/signup',
        component: Signup.Main,
        beforeEnter(to, from, next): void{
            AuthStore.user ? next({ name: 'signup.type' }) : next()
        }
    },
    {
        name: 'signup.type',
        path: '/signup/citizen-id',
        component: Signup.children.CitizenID,
        beforeEnter(to, from, next): void{
            AuthStore.user ? next() : next({ name: 'login' })
        }
    },
    // {
    //     name: 'signup.data',
    //     path: 'data',
    //     component: Signup.children.CitizenData,
    //     beforeEnter(to, from, next): void{
    //         AuthStore.user ? next() : next({ name: 'signup' })
    //     }
    // }
]
export default routes

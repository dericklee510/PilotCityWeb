import { RouteConfig } from 'vue-router'
import { AuthStore } from '../../store/index'
import * as Signup from '.'
import EmployerSignup from '@/views/Test/Test.vue'

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
        path: '/signup/citizen-id',
        component: Signup.children.CitizenID,
        children: [
            {
                name: 'signup.type',
                path: '',
                component: Signup.children.CitizenType
            },
            {
                name: 'signup.data',
                path: 'data',
                component: Signup.children.CitizenData
            }
        ],
        beforeEnter(to, from, next): void{
            AuthStore.user ? next() : next({ name: 'signup' })
        }
    }
]
export default routes

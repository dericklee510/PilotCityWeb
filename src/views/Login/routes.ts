import { RouteConfig } from 'vue-router'
import { AuthStore } from '@/store'
import Login from './Login.vue'

const routes: RouteConfig[] = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { layout: 'simple' },
        beforeEnter(to, from, next): void{
            AuthStore.user ? next({ name: 'signup.type' }) : next()
        }

    }
]
export default routes

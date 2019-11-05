import { AuthStore } from '@/store'
import Login from "./Login.vue"
import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {layout: "simple"},
        beforeEnter(to,from,next): void{
            AuthStore.user?next({name:'signup.profile'}):next()
        }

    },
    {
        path: ``,
        name: 'landing',
        beforeEnter(to,from,next): void{
            AuthStore.user?next({name:'signup.profile'}):next(`/login`)
        }
    }
    // {
    //     path: `/*`,
    //     name: `404`,
    //     beforeEnter(to,from,next): void{
    //         AuthStore.user?next({name:'signup.profile'}):next(`/login`)
    //     }
    // }
]
export default routes
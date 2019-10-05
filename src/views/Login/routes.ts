import { AuthStore } from '@/store'
import Login from "./Login.vue"
import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter(to,from,next): void{
            AuthStore.user?next({name:'signup.profile'}):next()
        }

    }
]
export default routes
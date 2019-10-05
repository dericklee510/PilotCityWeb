import { AuthStore } from './../../store/index'
import * as Profile from "../Profile"
import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
    {
        name: "public-profile",
        path: "/profile/public",
        component: Profile.Public,
        beforeEnter(to,from,next): void{
            AuthStore.user?next():next({name:''})
        }
    },
    {
        name: "private-profile",
        path: `/profile/private`,
        component: Profile.Private,
        beforeEnter(to,from,next): void{
            AuthStore.user?next():next({name:'login'})
        }
    }
]
export default routes
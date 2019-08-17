import { AuthStore } from '@/store';
import Login from "./Login.vue"
import { RouteConfig } from 'vue-router';
const routes:RouteConfig[] = [{
    path: "/login",
    name: "login",
    component: Login,
    /**
     *Should send user to home if logged in
     *For now stops navigation
     * @param {*} to
     * @param {*} from
     * @param {*} next
     */
    beforeEnter(to,from,next){
        AuthStore.user?next({name:'signup.profile'}):next()
    }

}]
export default routes
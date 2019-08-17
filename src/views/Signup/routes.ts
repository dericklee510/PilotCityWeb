import { AuthStore } from './../../store/index';
import * as Signup from "../Signup"
import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [{
    name: "signup",
    path: "/signup",
    component: Signup.Main,
    beforeEnter(to,from,next){
        AuthStore.user?next({name:'signup.profile'}):next()
    }
},
{
    name: "signup.profile",
    path: `/signup/profile`,
    component: Signup.children.Upload,
    beforeEnter(to,from,next){
        AuthStore.user?next():next({name:'signup'})
    }
},
{
    name: `signup.number`,
    path: `/signup/verifyphone`,
    component: Signup.children.Phone,
    beforeEnter(to,from,next){
        AuthStore.user?next():next({name:'signup'})
    }
}
]

// const routes:RouteConfig = {
//     path: "/signup",
//     component: Signup.App,
//     children: [
//         {
//             name: "signup",
//             path: ``,
//             component: Signup.Main
//         },
//         {
//             name: "signup.profile",
//             path: `profile`,
//             component: Signup.children.Upload
//         },
//         {
//             name: `signup.number`,
//             path: `profile/1`,
//             component: Signup.children.Phone
//         }

//     ]
// }
export default routes
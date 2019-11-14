import { AuthStore } from './../../store/index'
import * as Profile from "../Profile"
import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [
    {
        path: "/profile",
        component: Profile.Main,
        children: [
            {
                name: "profile.private",
                path: "/profile",
                components: {
                    Employer: Profile.Private.EmployerQuestions,
                    Teacher: Profile.Private.TeacherQuestions 
                }
            }
        ]
    },
    {
        name: "profile.public",
        path: `/profile/:id`,
        component: Profile.Public.PublicProfile,
    }
]
export default routes
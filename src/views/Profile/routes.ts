import { RouteConfig } from 'vue-router'
import { AuthStore } from '../../store/index'
import * as Profile from '.'

const routes: RouteConfig[] = [
    {
        path: '/profile',
        component: Profile.Main,
        children: [
            {
                name: 'profile.private',
                path: '/profile',
                components: {
                    Employer: Profile.Private.EmployerQuestions,
                    Teacher: Profile.Private.TeacherQuestions
                }
            }
        ]
    },
    {
        name: 'profile.public',
        path: '/profile/public',
        component: Profile.Public.PublicProfile
    }
    // {
    //     name: "profile.public",
    //     path: `/profile/:id`, view public profile(s)
    //     component: Profile.Public.PublicProfile
    // }
]
export default routes

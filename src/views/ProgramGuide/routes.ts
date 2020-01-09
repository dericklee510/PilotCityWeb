import { RouteConfig } from 'vue-router'
import { AuthStore } from '@/store'
import * as Guide from '.'

const routes: RouteConfig[] = [
    {
        path: '/program',
        component: Guide.Main,
        children: [
            {
                path: 'agenda',
                name: 'program-agenda',
                components: {
                    ExternshipAgenda: Guide.Program.ExternshipAgenda,
                    TrainingAgenda: Guide.Program.TrainingAgenda,
                    HackAgenda: Guide.Program.HackAgenda,
                    DemoAgenda: Guide.Program.DemoAgenda
                }        
                /* BEFORE ROUTE ENTER, CHECK ROLE? */
            },
            {
                path: 'brief',
                name: 'program-brief',
                component: Guide.Program.Brief,
            },
            // {
            //     path: 'Manage',
            //     name: 'program-manage',
            //     components:{
            //         ManageClass:
            //         ManageStudents:
            //         ManageTeams:
            //         ManageTeam:  
            //     }
            // },
            // {
            //     path: 'internship',
            //     name: 'internship-guide',
            //     components: {
            //     }
            // }
        ],
        meta: { layout: 'simple' },
        beforeEnter(to, from, next): void{
            AuthStore.user ? next():next({ name: 'signup.type' });
        }

    }
]

export default routes
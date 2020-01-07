import { RouteConfig } from 'vue-router'
import { AuthStore } from '@/store'
import * as Guide from '../ProgramGuide'

const routes: RouteConfig[] = [
    {
        path: '/program',
        name: 'program-guide',
        component: Guide.Main,
        components:{
            Brief: Guide.Program.Brief,
            TrainingDay: Guide.Program.TrainingDay,
            ManageTeams: Guide.Program.ManageTeams,
            ManageClass: Guide.Program.ManageClass,


        }, // can make this programatic by using saving a key balue pair for program order program page
        meta: { layout: 'simple' },
        beforeEnter(to, from, next): void{
            AuthStore.user ? next({ name: 'signup.type' }) : next()
        }

    }
]

export default routes
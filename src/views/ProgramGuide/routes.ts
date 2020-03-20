import { RouteConfig } from 'vue-router'
import { AuthStore } from '@/store'
import * as Guide from '.'
import RFPGen from "@/views/ProgramGuide/views/RFP/Prompt.vue"
import StudentID from "@/views/ProgramGuide/views/Profile/StudentID.vue"
import Brief from "@/views/ProgramGuide/views/RFP/Brief/Brief.vue"
const routes: RouteConfig[] = [
    {
      path: '/',
      name: 'program.programlist'  ,
      component: Guide.MyPrograms.ProgramList,
    },
    {
        path: '/program/launch',
        name: 'program.launch'  ,
        component: Guide.MyPrograms.ProgramLaunch
    },
    {
        path: '/program',
        component: Guide.Main,
        children: [
            {
                path: 'externship/agenda',
                name: 'externship-agenda',
                component: Guide.Program.ExternshipAgenda,
            },
            {
                path: 'teacher/externship/brief',
                name: 'teach-externship-brief', 
                component: Guide.Program.BriefView,
            },
            {
                path: 'employer/externship/brief/edit',
                name: 'emp-externship-brief-edit',
                component: Guide.Program.BriefEdit,
            },
            {
                path:'student/project/profile',
                name: 'stud-project-profile',
                component:StudentID
            },
            {
                path: 'student/project/brief',
                name: 'stud-project-brief',
                component: Guide.Program.BriefView,
            },
            {
                path: '/program/rfp',
                name: 'rfp-brief',
                component: Brief
            },
            {
                path:'teacher/externship/brief/generator',
                name:'teach-externship-brief-gen',
                component:RFPGen,
            },
            {
                path: 'teacher/externship/manage/class',
                name: 'teach-externship-manage-class',
                component: Guide.Program.ManageClass,
            },
            {
                path: 'teacher/externship/manage/students',
                name: 'teach-externship-manage-students',
                component: Guide.Program.ManageStudents,
            },
            {
                path: 'teacher/externship/manage/teams',
                name: 'teach-externship-manage-teams',
                component: Guide.Program.ManageTeams,
            },
            {
                path:'teacher/externship/manage/program',
                name:'teach-externship-manage-program',
                component:Guide.Program.ManageProgram
            },
            {
                path: 'student/project/team/join',
                name: 'stud-project-team-join',
                component: Guide.Program.TeamJoin
            },
            {
                path: 'student/project/team',
                name: 'stud-project-team',
                component: Guide.Program.ManageTeam
            },
            {
                path: 'employer/project/intro/edit',
                name: 'emp-project-intro-edit',
                component: Guide.Program.IntroVideoSubmit
            },
            {
                path: 'teacher/project/intro',
                name: 'teach-project-intro',
                component: Guide.Program.IntroVideoView
            },
            {
                path: 'student/project/intro',
                name: 'stud-project-intro',
                component: Guide.Program.IntroVideoView
            },
            {
                path: 'project/training/agenda',
                name: 'project-training',
                component: Guide.Program.TrainingAgenda
            },
            {
                path: 'teacher/project/practice',
                name: 'teach-project-practicelog',
                component: Guide.Program.PracticeLogManage
            },
            {
                path: 'student/project/practice',
                name: 'stud-project-practicelog',
                component: Guide.Program.PracticeLogEdit
            },
            {
                path: 'teacher/project/casestudy/edit',
                name: 'teach-project-casestudy-edit',
                component: Guide.Program.CaseStudyEdit
            },
            {
                path: 'teacher/project/casestudy',
                name: 'teach-project-casestudy',
                component: Guide.Program.CaseStudyView
            },
            {
                path: 'employer/project/casestudy/edit',
                name: 'emp-project-casestudy-edit',
                component: Guide.Program.CaseStudyEdit
            },
            {
                path: 'employer/project/casestudy',
                name: 'emp-project-casestudy',
                component: Guide.Program.CaseStudyView
            },
            {
                path: 'student/project/casestudy',
                name: 'stud-project-casestudy',
                component: Guide.Program.CaseStudyView
            },
            {
                path: 'teacher/project/canvas',
                component: Guide.Program.BusinessCanvasView,
                children: [
                    {
                        path: '',
                        name: 'teach-project-canvas',
                        components: {
                            view: Guide.Canvas.BusinessCanvasView1,
                            detail: Guide.Canvas.BusinessCanvasView2,
                        }
                    }
                ]
            },
            {
                path: 'employer/project/canvas',
                component: Guide.Program.BusinessCanvasView,
                children: [
                    {
                        path: '',
                        name: 'emp-project-canvas',
                        components: {
                            view: Guide.Canvas.BusinessCanvasView1,
                            detail: Guide.Canvas.BusinessCanvasView2,
                        }
                    }
                ]
            },
            // {
            //     path: 'student/project/canvas',
            //     name: 'stud-project-canvas',
            //     component: Guide.Program.BusinessCanvasView
            // },
            {
                path: 'student/project/canvas/edit',
                name: 'stud-project-canvas-edit',
                component: Guide.Program.BusinessCanvasEdit
            },
            {
                path: 'teacher/project/shortpitch',
                name: 'teach-project-ospitch',
                component: Guide.Program.OSPitchView
            },
            {
                path: 'employer/project/shortpitch',
                name: 'emp-project-ospitch',
                component: Guide.Program.OSPitchView
            },
            // {
            //     path: 'student/project/shortpitch',
            //     name: 'stud-project-ospitch',
            //     component: Guide.Program.OSPitchView
            // },
            {
                path: 'student/project/shortpitch/edit',
                name: 'stud-project-ospitch-edit',
                component: Guide.Program.OSPitchSubmit
            },
            {
                path: 'teacher/project/elevatorpitch',
                component: Guide.Program.ElevatorView,
                children: [
                    {
                        path: '',
                        name: 'teach-project-elevator',
                        components: {
                            view: Guide.Elevator.ElevatorView1,
                            detail: Guide.Elevator.ElevatorView2,
                        }
                    }
                ]
            },
            {
                path: 'employer/project/elevatorpitch',
                component: Guide.Program.ElevatorView,
                children: [
                    {
                        path: '',
                        name: 'emp-project-elevator',
                        components: {
                            view: Guide.Elevator.ElevatorView1,
                            detail: Guide.Elevator.ElevatorView2,
                        }
                    }
                ]
            },
            {
                path: 'student/project/elevatorpitch/edit',
                name: 'stud-project-elevator-edit',
                component: Guide.Program.ElevatorSubmit
            },
            {
                path: 'project/hack/agenda',
                name: 'project-hack',
                component: Guide.Program.HackAgenda
            },
            {
                path: 'student/project/hack/reflect',
                name: 'stud-project-hack-reflect',
                component: Guide.Program.HackReflection
            },
            {
                path: 'student/project/process',
                name: 'stud-project-processlog',
                component: Guide.Program.ProcessLog
            },
            {
                path: 'teacher/project/demo',
                name: 'teach-project-demo',
                component: Guide.Program.DemoVideoView
            },
            {
                path: 'employer/project/demo',
                name: 'emp-project-demo',
                component: Guide.Program.DemoVideoView
            },
            {
                path: 'student/project/demo/edit',
                name: 'stud-project-demo-edit',
                component: Guide.Program.DemoVideoSubmit
            },
            // {
            //     path: 'student/project/demo',
            //     name: 'stud-project-demo',
            //     component: Guide.Program.DemoVideoView
            // },
            {
                path: 'teacher/project/presentation',
                name: 'teach-project-presentation',
                component: Guide.Program.PresentationView
            },
            {
                path: 'employer/project/presentation',
                name: 'emp-project-presentation',
                component: Guide.Program.PresentationView
            },
            {
                path: 'student/project/presentation/edit',
                name: 'stud-project-presentation-edit',
                component: Guide.Program.PresentationSubmit
            },
            // {
            //     path: 'student/project/presentation',
            //     name: 'stud-project-presentation',
            //     component: Guide.Program.PresentationView
            // },
            {
                path: 'project/demo/agenda',
                name: 'project-demo-agenda',
                component: Guide.Program.DemoAgenda
            },
            {
                path:'student/project/exitsurvey',
                name: 'stud-project-exitsurvey',
                component: Guide.Program.ExitSurvey
            },
        ],
        meta: { layout: 'simple' },
        // beforeEnter(to, from, next): void{
        //     localStorage.citizenType && AuthStore.user ? next(): AuthStore.user ? next({ name: 'signup.type' }) : next({name: 'login'});
        // }

    }
]

export default routes
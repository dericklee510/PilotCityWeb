import { RouteConfig } from 'vue-router'
import { AuthStore } from '@/store'
import * as Guide from '.'

const routes: RouteConfig[] = [
    {
      path: '/myprograms',
      name: 'program.programlist'  ,
      component: Guide.MyPrograms.ProgramList
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
                path: 'teacher/externship/agenda',
                name: 'teach-externship-agenda',
                component: Guide.Program.ExternshipAgendaView,
            },
            {
                path: 'teacher/externship/agenda/edit',
                name: 'teach-externship-agenda-edit',
                component: Guide.Program.ExternshipAgendaEdit,
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
            // { // DON'T THINK EMPLOYERS EVER VIEW
            //     path: 'employer/externship/brief',
            //     name: 'emp-externship-brief',
            //     component: Guide.Program.BriefView,
            // },
            {
                path: 'student/project/brief',
                name: 'stud-project-brief',
                component: Guide.Program.BriefView,
            },
            {
                path: 'teacher/externship/manage/class',
                name: 'teach-externship-manage-class',
                components: Guide.Program.ManageClass,
            },
            {
                path: 'teacher/externship/manage/students',
                name: 'teach-externship-manage-students',
                components: Guide.Program.ManageStudents,
            },
            {
                path: 'teacher/externship/manage/teams',
                name: 'teach-externship-manage-teams',
                components: Guide.Program.ManageTeams,
            },
            {
                path: 'student/project/team/join',
                name: 'student-project-team-join',
                component: Guide.Program.TeamJoin
            },
            {
                path: 'student/project/team',
                name: 'student-project-team',
                component: Guide.Program.ManageTeam
            },
            {
                path: 'employer/project/intro/edit',
                name: 'emp-project-intro-edit',
                component: Guide.Program.IntroVideoSubmit
            },
            // { //DONT USE?
            //     path: 'employer/project/intro',
            //     name: 'emp-project-intro',
            //     component: Guide.Program.IntroVideoView
            // },
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
                path: 'teacher/project/training',
                name: 'teach-project-training',
                component: Guide.Program.TrainingAgendaView
            },
            {
                path: 'teacher/project/training/edit',
                name: 'teach-project-training-edit',
                component: Guide.Program.TrainingAgendaEdit
            },
            {
                path: 'student/project/training',
                name: 'stud-project-training',
                component: Guide.Program.TrainingAgendaView
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
                name: 'teach-project-canvas',
                component: Guide.Program.BusinessCanvasView
            },
            {
                path: 'employer/project/canvas',
                name: 'emp-project-canvas',
                component: Guide.Program.BusinessCanvasView
            },
            {
                path: 'student/project/canvas',
                name: 'stud-project-canvas',
                component: Guide.Program.BusinessCanvasView
            },
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
            {
                path: 'student/project/shortpitch',
                name: 'stud-project-ospitch',
                component: Guide.Program.OSPitchView
            },
            {
                path: 'student/project/shortpitch/edit',
                name: 'stud-project-ospitch-edit',
                component: Guide.Program.OSPitchSubmit
            },
            {
                path: 'teacher/project/elevatorpitch',
                name: 'teach-project-elevator',
                component: Guide.Program.ElevatorView
            },
            {
                path: 'employer/project/elevatorpitch',
                name: 'emp-project-elevator',
                component: Guide.Program.ElevatorView
            },
            {
                path: 'student/project/elevatorpitch',
                name: 'stud-project-elevator',
                component: Guide.Program.ElevatorView
            },
            {
                path: 'student/project/elevatorpitch/edit',
                name: 'stud-project-elevator-edit',
                component: Guide.Program.ElevatorSubmit
            },
            {
                path: 'teacher/project/hack/edit',
                name: 'teach-project-hack-edit',
                component: Guide.Program.HackEdit
            },
            {
                path: 'teacher/project/hack',
                name: 'teach-project-hack',
                component: Guide.Program.HackView
            },
            {
                path: 'employer/project/hack/edit',
                name: 'emp-project-hack-edit',
                component: Guide.Program.HackEdit
            },
            {
                path: 'employer/project/hack',
                name: 'emp-project-hack',
                component: Guide.Program.HackView
            },
            {
                path: 'student/project/hack',
                name: 'stud-project-hack',
                component: Guide.Program.HackView
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
            {
                path: 'student/project/demo',
                name: 'stud-project-demo',
                component: Guide.Program.DemoVideoView
            },
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
            {
                path: 'student/project/presentation',
                name: 'stud-project-presentation',
                component: Guide.Program.PresentationView
            },
            {
                path: 'teacher/project/demoagenda/edit',
                name: 'teach-project-demoagenda-edit',
                component: Guide.Program.DemoAgendaEdit
            },
            {
                path: 'teacher/project/demoagenda',
                name: 'teach-project-demoagenda',
                component: Guide.Program.DemoAgendaView
            },
            {
                path: 'employer/project/demoagenda/edit',
                name: 'emp-project-demoagenda-edit',
                component: Guide.Program.DemoAgendaEdit
            },
            {
                path: 'employer/project/demoagenda',
                name: 'teach-project-demoagenda',
                component: Guide.Program.DemoAgendaView
            },
            {
                path: 'student/project/demoagenda',
                name: 'stud-project-demoagenda',
                component: Guide.Program.DemoAgendaView
            }

            
        ],
        meta: { layout: 'simple' },
        beforeEnter(to, from, next): void{
            AuthStore.user ? next():next({ name: 'signup.type' });
        }

    }
]

export default routes
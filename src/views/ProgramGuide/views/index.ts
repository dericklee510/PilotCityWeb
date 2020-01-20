import DemoVideoEdit from "@/views/ProgramGuide/views/Demovideo/demovideo_enter.vue"

/* TEACHER */
import BriefEdit from "@/views/ProgramGuide/views/Brief/programbrief_edit.vue"
import BriefView from "@/views/ProgramGuide/views/Brief/Brief.vue"
import ExternshipAgendaEdit from "@/views/ProgramGuide/views/Agenda/externshipagenda_edit.vue"
import ExternshipAgendaView from "@/views/ProgramGuide/views/Agenda/externshipagenda_view.vue"
import ManageTeams from "@/views/ProgramGuide/views/Manage/Manageteam.vue"
import ManageClass from "@/views/ProgramGuide/views/Manage/Manageclass.vue"
import ManageStudents from "@/views/ProgramGuide/views/Manage/managestudents.vue"
import IntroVideoView from "@/views/ProgramGuide/views/Introvideo/Introvideo.vue"
import TrainingAgendaEdit from "@/views/ProgramGuide/views/TrainingAgenda/TrainingAgenda.vue"
import TrainingAgendaView from "@/views/ProgramGuide/views/TrainingAgenda/agenda_view.vue"
import PracticeLogManage from '@/views/ProgramGuide/views/Practicelog/Practicelog_manage.vue'
import CaseStudyView from "@/views/ProgramGuide/views/Viewcasestudies/Viewcasestudies.vue"
import CaseStudyEdit from "@/views/ProgramGuide/views/Editcasestudies/Editcasestudies.vue"
import BusinessCanvasView from "@/views/ProgramGuide/views/Businessmodelcanvas/BusinessCanvasView.vue"
import BusinessCanvasView1 from "@/views/ProgramGuide/views/Businessmodelcanvas/businessmodelcanvas_view1.vue"
import BusinessCanvasView2 from "@/views/ProgramGuide/views/Businessmodelcanvas/businessmodelcanvas_view2.vue"
import OSPitchView from "@/views/ProgramGuide/views/Pitch/pitch_view.vue"
import ElevatorView from "@/views/ProgramGuide/views/Elevator/elevator_view.vue"
import ElevatorView1 from "@/views/ProgramGuide/views/Elevator/elevator_view1.vue"
import ElevatorView2 from "@/views/ProgramGuide/views/Elevator/elevator_view2.vue"
import HackEdit from "@/views/ProgramGuide/views/Hack/hackagenda_edit.vue"
import HackView from "@/views/ProgramGuide/views/Hack/hackagenda_view.vue"
import DemoVideoView from "@/views/ProgramGuide/views/Demovideo/demovideo_view.vue"
import PresentationView from "@/views/ProgramGuide/views/Presentation/presentation_view.vue"
import DemoAgendaEdit from "@/views/ProgramGuide/views/Demo/demoagenda_edit.vue"
import DemoAgendaView from "@/views/ProgramGuide/views/Demo/demoagenda_view.vue"
/* EMPLOYER */
import IntroVideoSubmit from "@/views/ProgramGuide/views/Introvideo/Introvideo_edit.vue"
/* STUDENT */
import BusinessCanvasEdit from "@/views/ProgramGuide/views/Businessmodelcanvas/businessmodelcanvas_enter.vue"
import PracticeLogEdit from "@/views/ProgramGuide/views/Practicelog/Practicelog.vue"
import PresentationSubmit from "@/views/ProgramGuide/views/Presentation/presentation_enter.vue"
import OSPitchSubmit from "@/views/ProgramGuide/views/Pitch/pitch_enter.vue"
import ElevatorSubmit from "@/views/ProgramGuide/views/Elevator/elevator_enter.vue"
import TeamJoin from "@/views/ProgramGuide/views/Team/jointeam.vue"
import ManageTeam from "@/views/ProgramGuide/views/Team/Team.vue"
import HackReflection from "@/views/ProgramGuide/views/Posthack/Posthack.vue"
import ProcessLog from "@/views/ProgramGuide/views/Process/processlog.vue"
import DemoVideoSubmit from "@/views/ProgramGuide/views/Demovideo/demovideo_enter.vue"

import ProgramList from "@/views/Myprograms/myprograms.vue"
import ProgramLaunch from "@/views/Myprograms/launcher.vue"

export const MyPrograms = {
    ProgramList,
    ProgramLaunch
}
export const Elevator = {
    ElevatorView1,
    ElevatorView2
}
export const Canvas = {
    BusinessCanvasView1,
    BusinessCanvasView2
}
export const Program = {
    // Agenda,
    // IntroVid,
    HackReflection,
    TeamJoin,
    ManageTeam,
    BriefEdit,
    BriefView,
    ExternshipAgendaEdit,
    ExternshipAgendaView,
    ManageClass,
    ManageTeams,
    ManageStudents,
    IntroVideoView,
    IntroVideoSubmit,
    TrainingAgendaView,
    TrainingAgendaEdit,
    PracticeLogManage,
    PracticeLogEdit,
    CaseStudyView,
    CaseStudyEdit,
    BusinessCanvasView,
    OSPitchView,
    ElevatorView,
    HackEdit,
    HackView,
    DemoVideoView,
    PresentationView,
    DemoAgendaEdit,
    DemoAgendaView,
    PresentationSubmit,
    OSPitchSubmit,
    ElevatorSubmit,
    ProcessLog,
    DemoVideoSubmit,
    BusinessCanvasEdit,
}

export const TEACHERMODULES = {
    'Agenda': [
        'teach-externship-agenda',
        // 'teach-externship-agenda-edit',
    ],
    'Brief': [
        'teach-externship-brief',
    ],
    'Manage': [
        'teach-externship-manage-class',
        'teach-externship-manage-students',
        'teach-externship-manage-teams',
    ],
    'Launch Day': [
        'teach-project-intro'
    ],
    'Train': [
        'teach-project-training-edit',
        'teach-project-training',
    ],
    'Practice': [
        'teach-project-practicelog',
    ],
    'Research': [
        'teach-project-casestudy',
    ],
    'Ideate': [
        'teach-project-canvas',
        'teach-project-ospitch',
        'teach-project-elevator',
    ],
    'Hack Day': [
        // 'teach-project-hack-edit',
        'teach-project-hack',
    ],
    'Package': [
        'teach-project-demo',
        'teach-project-presentation',
    ],
    'Demo Day': [
        // 'teach-project-demoagenda-edit',
        'teach-project-demoagenda',
    ]
}

export const EMPLOYERMODULES = {
    'Agenda': [
        'emp-externship-agenda-edit',
        'emp-externship-agenda',
    ],
    'Brief': [
        'emp-externship-brief-edit',
    ],
    'Intro Video': [
        'emp-project-intro-edit'
    ],
    'Research': [
        'emp-project-casestudy-edit',
    ],
    'Ideate': [
        'emp-project-canvas',
        'emp-project-ospitch',
    ],
    'Hack Day': [
        'emp-project-hack-edit',
        'emp-project-hack',
    ],
    'Package': [
        'emp-project-demo',
        'emp-project-presentation',
    ],
    'Demo Day': [
        'emp-project-demoagenda-edit',
        'emp-project-demoagenda',
    ]
}

export const STUDENTMODULES = {
    'Launch Day': [
        'stud-project-brief',
        'stud-project-intro',
        'stud-project-team',
        'stud-project-team-join',
    ],
    'Train': [
        'stud-project-training',
    ],
    'Practice & Research': [
        'stud-project-practicelog',
        'stud-project-casestudy',
    ],
    'Ideate': [
        'stud-project-canvas-edit',
        'stud-project-ospitch-edit',
        'stud-project-elevator-edit',
    ],
    'Hack Day': [
        'stud-project-hack',
    ],
    'Reflection': [
        'stud-project-hack-reflect',
    ],
    'Design & Prototype': [
        'stud-project-processlog',
    ],
    'Package': [
        'stud-project-demo-edit',
        'stud-project-presentation-edit',
    ],
    'Demo Day': [
        'stud-project-demoagenda',
    ]
}
export const TEACHERSEQUENCE = {
    Externship: {
        'Agenda': [
            // 'teach-externship-agenda-edit',
            'teach-externship-agenda',
        ],
        'Brief': [
            'teach-externship-brief',
        ],
        'Manage': [
            'teach-externship-manage-class',
            'teach-externship-manage-students',
            'teach-externship-manage-teams',
        ]
    },
    Project: {
        'Launch Day': [
            'teach-project-intro'
        ],
        'Train': [
            'teach-project-training-edit',
            'teach-project-training',
        ],
        'Practice': [
            'teach-project-practicelog',
        ],
        'Research': [
            'teach-project-casestudy',
        ],
        'Ideate': [
            'teach-project-canvas',
            'teach-project-ospitch',
            'teach-project-elevator',
        ],
        'Hack Day': [
            'teach-project-hack',
            // 'teach-project-hack-edit',
        ],
        'Package': [
            'teach-project-demo',
            'teach-project-presentation',
        ],
        'Demo Day': [
            'teach-project-demoagenda',
            // 'teach-project-demoagenda-edit',
        ]
    },
}

export const EMPLOYERSEQUENCE = {
    Externship: {
        'Agenda': [
            'emp-externship-agenda-edit',
            'emp-externship-agenda',
            
        ],
        'Brief': [
            'emp-externship-brief-edit',
        ],
        'Intro Video': [
            'emp-project-intro-edit'
        ],
        'Research': [
            'emp-project-casestudy',
            'emp-project-casestudy-edit',
        ],

    },
    Project: {
        'Ideate': [
            'emp-project-canvas',
            'emp-project-ospitch',
        ],
        'Hack Day': [
            'emp-project-hack',
            'emp-project-hack-edit',
        ],
        'Package': [
            'emp-project-demo',
            'emp-project-presentation',
        ],
        'Demo Day': [
            'emp-project-demoagenda',
            'emp-project-demoagenda-edit',
        ]
    },
}

export const STUDENTSEQUENCE = {
    Project: {
        'Launch Day': [
            'stud-project-brief',
            'stud-project-intro',

            'stud-project-team-join',
            'stud-project-team',
        ],
        'Train': [
            'stud-project-training',
        ],
        'Practice & Research': [
            'stud-project-practicelog',
            'stud-project-casestudy',
        ],
        'Ideate': [
            'stud-project-canvas-edit',
            'stud-project-ospitch-edit',
            'stud-project-elevator-edit',
        ],
        'Hack Day': [
            'stud-project-hack',
        ],
        'Reflection': [
            'stud-project-hack-reflect',
        ],
        'Design & Prototype': [
            'stud-project-processlog',
        ],
        'Package': [
            'stud-project-demo-edit',
            'stud-project-presentation-edit',
        ],
        'Demo Day': [
            'stud-project-demoagenda',
        ]
    },
    Internship: {

    }
}
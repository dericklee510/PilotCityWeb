import Brief from "@/views/ProgramGuide/views/Brief/Brief.vue"
import TrainingDay from "@/views/ProgramGuide/TrainingDay/TrainingDay.vue"
import ManageTeams from "./Manageteam/Manageteam.vue"
import ManageClass from "./Manageclass/Manageclass.vue"
import viewcasestudies from "@/views/ProgramGuide/Viewcasestudies/Viewcasestudies.vue"
import editcasestudies from "@/views/ProgramGuide/Editcasestudies/Editcasestudies.vue"
import programbrief_edit from "@/views/ProgramGuide/Brief/programbrief_edit.vue"
import introvideo from "@/views/ProgramGuide/Introvideo/Introvideo.vue"
import introvideo_edit from "@/views/ProgramGuide/Introvideo/Introvideo_edit.vue"
import practicelog from "@/views/ProgramGuide/Practicelog/Practicelog.vue"
import practicelog_manage from "@/views/ProgramGuide/Practicelog/Practicelog_manage.vue"
import presentation_enter from "@/views/ProgramGuide/Presentation/presentation_enter.vue"
import presentation_view from "@/views/ProgramGuide/Presentation/presentation_view.vue"
import demovideo_view from "@/views/ProgramGuide/Demovideo/demovideo_view.vue"
import demovideo_enter from "@/views/ProgramGuide/Demovideo/demovideo_enter.vue"
import pitch_enter from "@/views/ProgramGuide/Pitch/pitch_enter.vue"
import pitch_view from "@/views/ProgramGuide/Pitch/pitch_view.vue"
import elevator_enter from "@/views/ProgramGuide/Elevator/elevator_enter.vue"
import elevator_view from "@/views/ProgramGuide/Elevator/elevator_view.vue"
import elevator_view2 from "@/views/ProgramGuide/Elevator/elevator_view2.vue"
import businessmodelcanvas_enter from "@/views/ProgramGuide/Businessmodelcanvas/businessmodelcanvas_enter.vue"
import businessmodelcanvas_view2 from "@/views/ProgramGuide/Businessmodelcanvas/businessmodelcanvas_view2.vue"
import agenda from "@/views/ProgramGuide/Agenda/Agenda.vue"
import agenda_view from "@/views/ProgramGuide/Agenda/agenda_view.vue"
import externshipagenda_edit from "@/views/ProgramGuide/Externship/externshipagenda_edit.vue"
import externshipagenda_view from "@/views/ProgramGuide/Externship/externshipagenda_view.vue"
import hackagenda_edit from "@/views/ProgramGuide/Hack/hackagenda_edit.vue"
import hackagenda_view from "@/views/ProgramGuide/Hack/hackagenda_view.vue"
import demoagenda_edit from "@/views/ProgramGuide/Demo/demoagenda_edit.vue"
import demoagenda_view from "@/views/ProgramGuide/Demo/demoagenda_view.vue"
import processlog from "@/views/ProgramGuide/Process/processlog.vue"
import launcher from "@/views/Myprograms/launcher.vue"
import Guide from './Guide.vue'

export { default as routes } from './routes'
export { Guide as Main } from './Guide.vue'

export const Program = {
    Brief,
    TrainingDay,
    ManageTeams,
    ManageClass,
    CaseStudy,
    IntroVid,
    Practice,
    Presentation,
    DemoVid,
    Pitch,
    Elevator,
    Canvas,
    Externship,
    Hack,
    Demo,
    Process,
}
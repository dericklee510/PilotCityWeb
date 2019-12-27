import { Date } from './../../../utilities/validation/Date/index';

//#region 
// interfaces not stored on firebase
interface NamedLink {
    link: string
    name: string
}

interface Event {
    eventName: string
    duration: number
    description: string
    checked: boolean
}

interface Agenda {
    date: Date
    time: number
    location: string
    events: Event[]
}

interface PostHackReflection {
    feedback: string
    checked: boolean
}

interface DesignLog { 
    description: string
    date: Date
    time: number
    link: string
}
//#endregion

interface Classroom {
    id: string
    hackAgenda: Agenda
}

interface EmployerProgram {
    id: string
    pdfLink: string
    introLink?: string
    introLinkAck?: boolean
    caseStudies: NamedLink[]
    projectKeys: string[]
}

interface StudentProject {
    id: string
    teamName: string
    problemStatement: string
    problemSolution: string
    presentationLink: string
    oneSentencePitch: string
    elevatorPitch: string
    oneMinDemoLink: string
    innovation: string
    postHackReflection: PostHackReflection[]
    designLog: DesignLog[]
    employerRating: number
    teacherRating: number
}

interface Employer {
    id:string
    programKeys: string[]   

}
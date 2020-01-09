import { AutoCompleteAddress } from './../../components/GoogleMaps/Autocomplete/types';


//#region 
// interfaces not stored on firebase
export interface NamedLink {
    name: string
    link: string
}
<<<<<<< HEAD
interface Event {
=======
interface EventItem {
>>>>>>> origin/page/program_guide.firebase
    name: string
    duration: number
    description: string
    completed: boolean
}
interface AgendaTemplate {
    name: string
    date: Date
    time: number
    location: string
<<<<<<< HEAD
    events: Event[]
=======
    events: EventItem[]
>>>>>>> origin/page/program_guide.firebase
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
interface Timelog {
    minutes: number
    timestamp: firebase.firestore.Timestamp
}
interface generalUser{
    firstName:string
    lastName:string
    profilePicture:string
    phoneNumber:string
    dob: Date
    address: AutoCompleteAddress
    
}
//#endregion
export interface Classroom {
    id: string
    hackAgenda: AgendaTemplate
}
export interface EmployerProgram {
    id: string
    programBriefName: string
    programBriefUrl: string
    projectKeys?: string[]
    introVideo?: string
    caseStudies?: NamedLink[] 
}
export interface StudentProject {
    id: string
    lastTimestamp: firebase.firestore.Timestamp
    teacherName: string
    period: string
    teamMembers: string[]
    teamName: string
    practiceLog: {
        [uid:string]:Timelog[]
    }
    problem: string
    solution: string
    innovation: string
    customer: string 
    SentencePitch: string
    elevatorPitch: string    
    demoLink: string
    presentationLink: string
    postHackReflection: PostHackReflection[]
    designLog: DesignLog[]
    problemRatingT: number
    solutionRatingT: number
    innovationRatingT: number
    customerRatingT: number
    sentencePitchRatingT: number
    elevatorPitchRatingT: number
    demoRatingT: number
    presentationRatingT: number
    problemRatingE: number
    solutionRatingE: number
    innovationRatingE: number
    customerRatingE: number
    sentencePitchRatingE: number
    elevatorPitchRatingE: number
    demoRatingE: number
    presentationRatingE: number
}
export interface Employer extends generalUser {
    id: string
    programKeys: string[]   
}

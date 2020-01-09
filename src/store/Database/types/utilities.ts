<<<<<<< HEAD
//#region 
// interfaces not stored on firebase
export interface NamedLink {
    name: string
    link: string
}
export interface ReviewedLink extends NamedLink {
    reviewed:boolean
}
export interface Event {
    name: string
    duration: number
=======
import { AutoComplete, AutoCompleteAddress } from '@/components/GoogleMaps';

//#region 
// interfaces not stored on firebase
export interface NamedLink {
    linkName: string
    link: string
}
export interface ReviewedLink extends NamedLink {
    reviewed: boolean
}
export interface EventItem {
    name: string
    duration: string
>>>>>>> origin/page/program_guide.firebase
    description: string
    completed: boolean
}
export interface AgendaTemplate {
<<<<<<< HEAD
    id: string
    authorKey: string
    name: string
    date: Date
    time: number
    location: string
    events: Event[]
=======
    agendaTitle: string
    date: Date
    startTime: number
    address: AutoCompleteAddress
    events: Event[]
    lastUpdate: firebase.firestore.Timestamp
    eventTimestamp: firebase.firestore.Timestamp[]
>>>>>>> origin/page/program_guide.firebase
}
export interface PostHackReflection {
    feedback: string
    checked: boolean
<<<<<<< HEAD
} 
export interface DesignLog { 
    description: string
    date: Date
    time: number
    link: string
}
export interface Timelog {
    minutes: number
    projectId: string
    timestamp: firebase.firestore.Timestamp
}
export interface generalUser{
    id:string 
    firstName:string
    lastName:string
    profilePicture:string
    phoneNumber:string
    dob: Date
    address: AutoCompleteAddress
}
//#endregion
=======
}
export interface DesignLog {
    description: string
    link: string
    lastUpdate: firebase.firestore.Timestamp
}
export interface TimeLog {
    minutes: number
    lastUpdate: firebase.firestore.Timestamp
}
export interface ProgramEvent {
    header: string
    startDate: Date
    /**
     * Dynamic Class by Font Awesome
     * i.e. "fas fa-user"
     * @type {string}
     * @memberof ProgramEvent
     */
    dynamicClass: string

}
export interface CompletedEvent {
    completed: boolean

}
//#endregion
>>>>>>> origin/page/program_guide.firebase

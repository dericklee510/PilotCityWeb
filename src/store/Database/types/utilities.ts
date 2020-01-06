import { AutoComplete, AutoCompleteAddress } from '@/components/GoogleMaps';

//#region 
// interfaces not stored on firebase
export interface NamedLink {
    namedLinkId: string
    userId: string
    linkName: string
    link: string
}
export interface ReviewedLink extends NamedLink {
    reviewedLinkId: string
    namedLinkId: string
    userId: string
    reviewed:boolean
    lastUpdate: firebase.firestore.Timestamp
}
export interface EventItem {
    name: string
    duration: number
    description: string
    completed: boolean
}
export interface AgendaTemplate {
    agendaId: string
    userId: string
    agendaTitle: string
    date: Date
    startTime: number
    address: AutoCompleteAddress
    events: Event[]
    lastUpdate: firebase.firestore.Timestamp
    eventTimestamp: firebase.firestore.Timestamp[]
}
export interface PostHackReflection {
    projectId: string
    feedback: string
    checked: boolean
} 
export interface DesignLog { 
    designLogId: string
    projectId: string
    userId: string
    description: string
    link: string
    lastUpdate: firebase.firestore.Timestamp
}
export interface TimeLog {
    timeLogId: string
    projectId: string
    userId: string
    minutes: number
    lastUpdate: firebase.firestore.Timestamp
}
export interface GeneralUser{
    userId:string
    classroomIds: string[] 
    employerProgramIds: string[]
    firstName:string
    lastName:string
    citizenType: string
    dob: Date
    address: AutoCompleteAddress
    phoneNumber:string
    profilePicture:string
    lastUpdate: firebase.firestore.Timestamp
}
//#endregion

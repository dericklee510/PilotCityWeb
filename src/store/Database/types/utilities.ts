import { AutoCompleteAddress } from './../../../components/GoogleMaps/Autocomplete/types';
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
    duration: string
    description: string
    completed: boolean
}
export interface AgendaTemplate {
    id: string
    authorKey: string
    name: string
    date: Date
    time: number
    location: string
    events: Event[]
}
export interface PostHackReflection {
    feedback: string
    checked: boolean
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
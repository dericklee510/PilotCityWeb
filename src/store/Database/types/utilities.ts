<<<<<<< HEAD

=======
>>>>>>> page/program.firebase
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
    description: string
    completed: boolean
}
export interface AgendaTemplate {
    agendaTitle: string
    date: Date
    startTime: number
    address: AutoCompleteAddress
    events: EventItem[]
    lastUpdate: firebase.firestore.Timestamp
    eventTimestamp: firebase.firestore.Timestamp[]
}
export interface PostHackReflection {
    feedback: string
    checked: boolean
}
export interface DesignLog {
    description: string
    fileLinks: NamedLink[]
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
<<<<<<< HEAD
export interface BusinessModelCanvas{
    problem:string
    solution:string
    innovation:string
    customer:string
  }
=======
>>>>>>> page/program.firebase
//#endregion

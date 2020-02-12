import { RawLocation } from 'vue-router'

export {default as Agenda} from "./Agenda.vue"
export {default as Locks} from "./Locks.vue"
export {default as Nav} from "./Nav.vue"
export {default as Rating} from "./Rating.vue"
export {default as TextEnter} from "./TextEnter.vue"
export {default as AgendaView} from "./AgendaView.vue"
export {default as LinkChecker} from "./LinkChecker.vue"
export {default as Oops} from "./Oops.vue"
export {default as SnackTime} from "./SnackTime.vue"
export {default as NextNode} from "./NextNode.vue"
export  interface team_snippet {
    projectId:string
    name:string
    item_preview?:string
    router_params?:RawLocation
    href?:string
    rating:number
} 
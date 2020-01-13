
import {flatMapDeep} from 'lodash'
import { LinkedList } from 'linked-list-typescript';

export class RouteList {
    createLinkedList(){
        const map = flatMapDeep(this.module, (names) => [...Object.values(names)])
        return new LinkedList<string>(...map)
    }
    constructor(private type:"employer" |"teacher" | "student", private module:Record<string,Record<string,string[]>>){

    }
}

export interface ProgramNode {
    type:"employer" |"teacher" | "student"
    sequence:string // i.e. Externship Project
    page:string // i.e. Agenda Brief
    routeName:string // i.e.emp-externship-agenda
}
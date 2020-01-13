import { STUDENTMODULES, EMPLOYERMODULES, TEACHERMODULES } from './views/index';

import {flatMapDeep} from 'lodash'
import { LinkedList, LinkedListItem } from 'linked-list-typescript';
import {RequiredKeys} from "utility-types"
export class RouteList {
    private module:Record<string,string[]>
    createLinkedList(){
        const map = flatMapDeep(this.module, (page,key) => {
            return page.map(route => ({
                type:this.type,
                page:key,
                routeName:route
            }))
        })
        
        const module = this.module
        return new LinkedList<LinkedListItem<ProgramNode<typeof module>>>(...map)
    }
    
    constructor(private type:"employer" |"teacher" | "student"){
        switch(type){
            case("employer"):
                this.module = EMPLOYERMODULES
                break;
            case("teacher"):
                this.module = TEACHERMODULES
                break;
            case("student"):
                this.module = STUDENTMODULES
                break
        }
    }
}

export interface ProgramNode<Module> {
    type:"employer" |"teacher" | "student"
    page:keyof Module // i.e. Agenda Brief
    routeName:string // i.e.emp-externship-agenda
}

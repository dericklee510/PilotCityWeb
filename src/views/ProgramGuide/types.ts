import { STUDENTMODULES, EMPLOYERMODULES, TEACHERMODULES } from './views/index';

import { flatMapDeep } from 'lodash'
import { LinkedList, LinkedListItem } from 'linked-list-typescript';
import { RequiredKeys } from "utility-types"
export class RouteList {
    private module: Record<string, string[]>
    createLinkedList() {
        const module = this.module
        var map: ProgramNode<typeof module>[] = flatMapDeep(this.module, (page, key) => {
            return page.map(route => ({
                value: {
                    type: this.type,
                    page: key,
                    routeName: route,
                },
                next: null,
                prev: null
            }))
        })
       for(let index =0;index < map.length -1;index++){
           map[index].prev = (index-1)?map[(index-1)]:null
           map[index].next = map[index +1]?map[index +1]:null
       }
       
        return new LinkedList<ProgramNode<typeof module>>(...map)
    }

    constructor(private type: "employer" | "teacher" | "student") {
        switch (type) {
            case ("employer"):
                this.module = EMPLOYERMODULES
                break;
            case ("teacher"):
                this.module = TEACHERMODULES
                break;
            case ("student"):
                this.module = STUDENTMODULES
                break
        }
    }
}

export interface ProgramNode<Module> {
    value: {
        type: "employer" | "teacher" | "student"
        page: keyof Module // i.e. Agenda Brief
        routeName: string // i.e.emp-externship-agenda
    }
    next:ProgramNode<Module> | null
    prev: ProgramNode<Module> | null
}

import { Module } from 'vuex-module-decorators';
import { STUDENTSEQUENCE, EMPLOYERSEQUENCE, TEACHERSEQUENCE } from './views/index';

import { flatMapDeep, flatMap } from 'lodash'
import { LinkedList, LinkedListItem } from 'linked-list-typescript';
import { RequiredKeys } from "utility-types"
export class RouteList {
    private module:   typeof EMPLOYERSEQUENCE | typeof STUDENTSEQUENCE | typeof TEACHERSEQUENCE
    createLinkedList() {
        const module = this.module
        // var map: ProgramNode<typeof module>[] = flatMapDeep(this.module, (page, key) => {
        //     return page.map(route => ({
        //         value: {
        //             type: this.type,
        //             page: key,
        //             routeName: route,
        //         },
        //         next: null,
        //         prev: null
        //     }))
        // })
        var map: ProgramNode[] = flatMapDeep(this.module, (sequence, key) => {
            return flatMap(sequence, (page,pageName) => {
                return page.map((route):ProgramNode => ({
                    value: {
                        sequence:key,
                        type: this.type,
                        page: pageName,
                        routeName: route,
                    },
                    next: null,
                    prev: null
                }))
            })
        })
        for (let index = 0; index < map.length; index++) {
            if (index > 0)
                map[index].prev = map[index - 1]
            else map[index].prev = null
            if (index < map.length - 1)
                map[index].next = map[index + 1]
            else map[index].next = null
        }

        return new LinkedList<ProgramNode>(...map)
    }

    constructor(private type: "Employer" | "Teacher" | "Student") {
        switch (type) {
            case ("Employer"):
                this.module = EMPLOYERSEQUENCE
                break;
            case ("Teacher"):
                this.module = TEACHERSEQUENCE
                break;
            case ("Student"):
                this.module = STUDENTSEQUENCE
                break
        }
    }
}

export interface ProgramNode {
    value: {
        type: "employer" | "teacher" | "student"
        sequence: string
        page: string // i.e. Agenda Brief
        routeName: string // i.e.emp-externship-agenda
    }
    next: ProgramNode | null
    prev: ProgramNode | null
}


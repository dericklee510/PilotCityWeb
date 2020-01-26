import { TeacherProgramData, studentClassroom, Project } from './../../store/Database/types/types';
import { FbStore } from '@/store/index';
import { Module } from 'vuex-module-decorators';
import { STUDENTSEQUENCE, EMPLOYERSEQUENCE, TEACHERSEQUENCE } from './views/index';

import { flatMapDeep, flatMap } from 'lodash'
import { LinkedList, LinkedListItem } from 'linked-list-typescript';
import { RequiredKeys } from "utility-types"
import moment from 'moment'
export class RouteList {
    private module:   typeof EMPLOYERSEQUENCE | typeof STUDENTSEQUENCE | typeof TEACHERSEQUENCE
    public get studentSequenceRouteHash():Record<string,Boolean | firebase.firestore.Timestamp | firebase.firestore.FieldValue | Date | undefined>{
        return {'stud-project-brief':(FbStore.currentTeacherProgramData?.programSequence.programBrief) || true ,
    'stud-project-intro':FbStore.currentStudentClassroom?.finishedProgramBrief,
    'stud-project-team-join':FbStore.currentStudentClassroom?.finishedIntrovideo,
    // 'stud-project-team':FbStore.currentStudentClassroom!.finishedIntrovideo && !!FbStore.currentProject,
    'stud-project-training':FbStore.currentTeacherProgramData?.programSequence.train || !!FbStore.currentProject,
    'stud-project-practicelog': FbStore.currentTeacherProgramData?.programSequence.practice || FbStore.currentProject?.programSequence.train,
    'stud-project-casestudy':FbStore.currentTeacherProgramData?.programSequence.caseStudies || true /*|| FbStore.currentProject?.programSequence.practice ?*/,
    'stud-project-canvas-edit':FbStore.currentTeacherProgramData?.programSequence.bmc || FbStore.currentProject?.programSequence.caseStudies,
    'stud-project-ospitch-edit':FbStore.currentTeacherProgramData?.programSequence.sentencePitch || FbStore.currentProject?.programSequence.bmc,
    'stud-project-elevator-edit':FbStore.currentTeacherProgramData?.programSequence.elevatorPitch || FbStore.currentProject?.programSequence.sentencePitch,
    'stud-project-hack':FbStore.currentTeacherProgramData?.programSequence.hackDay || FbStore.currentProject?.programSequence.elevatorPitch,
    'stud-project-hack-reflect':FbStore.currentTeacherProgramData?.programSequence.reflection || FbStore.currentProject?.programSequence.hackDay,
    'stud-project-processlog':FbStore.currentTeacherProgramData?.programSequence.processLog || FbStore.currentProject?.programSequence.reflection,
    'stud-project-demo-edit':FbStore.currentTeacherProgramData?.programSequence.demoVideo || FbStore.currentProject?.programSequence.reflection,
    'stud-project-presentation-edit':FbStore.currentTeacherProgramData?.programSequence.presentation || FbStore.currentProject?.programSequence.demoVideo,
    'stud-project-demoagenda':FbStore.currentTeacherProgramData?.programSequence.demoDay || FbStore.currentProject?.programSequence.presentation,}
    }
    public get linkedList() {
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
                        unlocked:(this.type == "student")?this.studentSequenceRouteHash[route]:true,
                        isUnlocked: () => {
                            const unlocked = (this.type == "student")?this.studentSequenceRouteHash[route]:true
                            if(unlocked instanceof Date){
                                return moment(unlocked).isBefore(moment())
                            }else{
                                return !!unlocked
                            }
                        }
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

    constructor(private type: "employer" | "teacher" | "student", private teacherProgramData?: TeacherProgramData | null,
    private studentClassroom?: studentClassroom | null,
    private project?:Project | null) {
        switch (type) {
            case ("employer"):
                this.module = EMPLOYERSEQUENCE
                break;
            case ("teacher"):
                this.module = TEACHERSEQUENCE
                break;
            case ("student"):
                this.module = STUDENTSEQUENCE
                break
        }
    }
}

export interface ProgramNode {
    value: {
        type: "employer" | "teacher" | "student"
        sequence: string // Externship
        page: string // i.e. Agenda Brief
        routeName: string // i.e.emp-externship-agenda
        unlocked:Boolean | firebase.firestore.Timestamp | firebase.firestore.FieldValue | Date | undefined
        isUnlocked: () => boolean
    }
    next: ProgramNode | null
    prev: ProgramNode | null
}


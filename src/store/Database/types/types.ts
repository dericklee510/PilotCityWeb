import { AgendaTemplate, ProgramEvent, DesignLog, TimeLog, NamedLink } from './utilities';
import { AutoCompleteAddress } from '@/components/GoogleMaps';
export interface Classroom {
    classroomId: string
    projectIds: string []
    teacherId: string
    studentIds: string[]
    teacherProgramId: string
    employerProgramId: string
    className: string
    shareCode?: string  //  create  hash  code
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
export interface studentClassroom {
    studentClassroomId:string // classroomId + studentId
    studentId:string
    classroomId:string
    finishedProgramBrief?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    finishedIntrovideo?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
export interface GeneralUser {
    userId: string

    /**
     * Only for use by students
     */
    classroomIds: string[]

    /**
     *Only for use by Employers
     */
    employerProgramIds: string[]

    /**
     *Only for use by Teachers
     */
    teacherProgramDataIds:{
        [employerProgramId:string]:string
    }
    projectIds: string[]
    initializeProgram: {
        [employerProgramId: string]: firebase.firestore.Timestamp
    }
    firstName: string
    lastName: string
    citizenType?: "employer" | "teacher" | "student"
    dob?: Date
    title?:string
    address?: AutoCompleteAddress
    phoneNumber?: string
    profilePicture?: string
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
export interface EmployerProgram {
    employerProgramId: string
    programName: string
    employerId?: string
    programLauncher: ProgramEvent[]
    externshipDayAgenda?: AgendaTemplate
    demoDayAgenda?: AgendaTemplate
    masterHackDayAgenda?: AgendaTemplate    //  Employer  cannot  modify  this
    programBrief?: NamedLink[]
    introVideo?: string
    caseStudies?: NamedLink[]
    projectIds?: string[]
    shareCode: string
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}


export interface TeacherProgramData {
    teacherProgramId: string
    classroomIds: string[]
    employerProgramId: string
    caseStudies: NamedLink[]
    trainingDayAgenda?: AgendaTemplate
    hackDayAgenda?: AgendaTemplate    //  Modified  version  of  HackDayAgenda  Master  Template
    problemOrOpportunity?: string
    solution?: string
    keyMetric?: string
    productOrService?: string
    promptTemplate?: "tech" | "solution" | "product" | "metric"
    finalPrompt?: string
    programSequence: {
        programBrief?:Date | Boolean
        introVideo?:Date | Boolean
        train?:Date | Boolean
        practice?:Date | Boolean
        caseStudies?:Date | Boolean
        bmc?:Date | Boolean
        sentencePitch?:Date | Boolean
        elevatorPitch?:Date | Boolean
        hackDay?:Date | Boolean
        reflection?:Date | Boolean
        demoVideo?:Date | Boolean
        presentation?:Date | Boolean
        demoDay?:Date | Boolean
        exitForm?:Date | Boolean
        interviewOffer?:Date | Boolean
    }
    created: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
//  StudentProject  should  be  an  extension  of  a  Team
export interface Project {
    projectId: string
    classroomId: string 
    teamMembersIds: string[]
    teamName: string
    createdByTeacher: boolean
    programSequence: {
        train?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        practice?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        caseStudies?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        bmc?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        sentencePitch?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        elevatorPitch?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        hackDay?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        reflection?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        demoVideo?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        presentation?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        demoDay?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        exitForm?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        interviewOffer?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    }
    caseStudiesReviewed?: boolean[]
    practiceLog: {
        [userId: string]: TimeLog[]
    }
    problem?: string
    solution?: string
    innovation?: string
    customer?: string
    sentencePitch?: string
    elevatorPitch?: string
    demoLink?: string
    presentationLink?: string
    postHackReflection?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    designLog?: DesignLog[]
    problemRatingT?: number
    solutionRatingT?: number
    innovationRatingT?: number
    customerRatingT?: number
    sentencePitchRatingT?: number
    elevatorPitchRatingT?: number
    demoRatingT?: number
    presentationRatingT?: number
    problemRatingE?: number
    solutionRatingE?: number
    innovationRatingE?: number
    customerRatingE?: number
    sentencePitchRatingE?: number
    elevatorPitchRatingE?: number
    demoRatingE?: number
    presentationRatingE?: number
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}

export type RatingTag = "customerRatingT"|
"demoRatingT"|
"elevatorPitchRatingT"|
"innovationRatingT"|
"presentationRatingT"|
"problemRatingT"|
"sentencePitchRatingT"|
"solutionRatingT"|
"customerRatingE"|
"demoRatingE"|
"elevatorPitchRatingE"|
"innovationRatingE"|
"presentationRatingE"|
"problemRatingE"|
"sentencePitchRatingE"|
"solutionRatingE";

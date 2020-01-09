<<<<<<< HEAD
import { AgendaTemplate, generalUser, ReviewedLink, PostHackReflection, DesignLog, Timelog, NamedLink } from './utilities';

export interface Classroom {
    id: string
    teacherKey: string
    teacherProgramKey: string
    employerProgramKey: string
    className: string
    shareCode: string // create hash code
}
export interface EmployerProgram {
    id: string
    externshipDayAgenda:AgendaTemplate
    programBrief?:NamedLink[]
    masterHackDayAgenda: AgendaTemplate  // Employer cannot modify this
    projectKeys?: string[]
    introVideo?: string
    caseStudies?: NamedLink[] 
}
export interface TeacherProgramData{
    id: string 
    teacherKey: string
    employerProgramKey: string
    trainingDayAgenda: AgendaTemplate
    hackDayAgenda: AgendaTemplate  // Modified version of HackDayAgenda Master Template
}
export interface Student extends generalUser{
    classroomKey: string[]
}
export interface StudentProject {
    id: string
    classroomKey: string
    teamName: string
    createdByTeacher:boolean
    lastTimestamp: firebase.firestore.Timestamp
    teacherName: string
    period: string
    teamMembers: string[]
    caseStudies: ReviewedLink
    practiceLog: {
        [uid:string]:Timelog[]
    }
    problem: string
    solution: string
    innovation: string
    customer: string 
    SentencePitch: string
    elevatorPitch: string    
    demoLink: string
    presentationLink: string
    postHackReflection: PostHackReflection[]
    designLog: DesignLog[]
    problemRatingT: number
    solutionRatingT: number
    innovationRatingT: number
    customerRatingT: number
    sentencePitchRatingT: number
    elevatorPitchRatingT: number
    demoRatingT: number
    presentationRatingT: number
    problemRatingE: number
    solutionRatingE: number
    innovationRatingE: number
    customerRatingE: number
    sentencePitchRatingE: number
    elevatorPitchRatingE: number
    demoRatingE: number
    presentationRatingE: number
}
export interface Employer extends generalUser {
    programKeys: string[]   
}

export interface Teacher extends generalUser {
    classroomKeys: string []
    programKeys: string[]
=======
import { AgendaTemplate, ReviewedLink, ProgramEvent, PostHackReflection, DesignLog, TimeLog, NamedLink } from './utilities';
import { AutoComplete, AutoCompleteAddress } from '@/components/GoogleMaps';

export interface Classroom {
    classroomId: string
    teacherId: string
    teacherProgramId: string
    employerProgramId: string
    className: string
    shareCode: string  //  create  hash  code
    lastUpdate: firebase.firestore.Timestamp
}
export interface GeneralUser {
    userId: string
    classroomIds: string[]
    employerProgramIds: string[]
    initializeProgram: {
        [employerProgramId: string]: firebase.firestore.Timestamp
    }
    firstName: string
    lastName: string
    citizenType: string
    dob: Date
    address: AutoCompleteAddress
    phoneNumber: string
    profilePicture: string
    lastUpdate: firebase.firestore.Timestamp
}
export interface EmployerProgram {
    employerProgramId: string
    employerId: string
    programLauncher: ProgramEvent[]
    externshipDayAgenda: AgendaTemplate
    masterHackDayAgenda: AgendaTemplate    //  Employer  cannot  modify  this
    programBrief?: NamedLink[]
    introVideo?: string
    caseStudies?: NamedLink[]
    projectIds?: string[]
    lastUpdate: firebase.firestore.Timestamp
}
export interface TeacherProgramData {
    teacherProgramId: string
    classroomId: string
    employerProgramId: string
    caseStudies: NamedLink[]
    trainingDayAgenda: AgendaTemplate
    hackDayAgenda: AgendaTemplate    //  Modified  version  of  HackDayAgenda  Master  Template
}
//  StudentProject  should  be  an  extension  of  a  Team
export interface Project {
    projectId: string
    classroomId: string
    teamMembersIds: string[]
    teamName: string
    createdByTeacher: boolean
    teacherName: string
    period: string
    timeline: {
        programBrief?: firebase.firestore.Timestamp
        introVideo?: firebase.firestore.Timestamp
        train?: firebase.firestore.Timestamp
        practice?: firebase.firestore.Timestamp
        caseStudies?: firebase.firestore.Timestamp
        bmc?: firebase.firestore.Timestamp
        sentencePitch: firebase.firestore.Timestamp
        elevatorPitch: firebase.firestore.Timestamp
        hackDay?: firebase.firestore.Timestamp
        reflection?: firebase.firestore.Timestamp
        demoVideo?: firebase.firestore.Timestamp
        presentation?: firebase.firestore.Timestamp
        demoDay?: firebase.firestore.Timestamp
        exitForm?: firebase.firestore.Timestamp
        interviewOffer?: firebase.firestore.Timestamp
    }
    caseStudies: ReviewedLink
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
    postHackReflection?: PostHackReflection[]
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
    lastUpdate: firebase.firestore.Timestamp
>>>>>>> origin/page/program_guide.firebase
}

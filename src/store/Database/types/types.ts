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
}

import { AgendaTemplate, GeneralUser, ReviewedLink, PostHackReflection, DesignLog, TimeLog, NamedLink } from './utilities';

export interface Classroom {
    classroomId: string
    teacherId: string
    teacherProgramId: string
    employerProgramId: string
    className: string
    shareCode: string // create hash code
    lastUpdate: firebase.firestore.Timestamp
}
export interface EmployerProgram {
    employerProgramId: string
    employerId: string
    externshipDayAgenda:AgendaTemplate
    programBrief?:NamedLink[]
    masterHackDayAgenda: AgendaTemplate  // Employer cannot modify this
    introVideo?: string
    caseStudies?: NamedLink[] 
    projectIds?: string[]
    lastUpdate: firebase.firestore.Timestamp
}
export interface TeacherProgramData{
    teacherProgramId: string 
    classroomId: string
    employerProgramId: string
    caseStudies: NamedLink[]
    trainingDayAgenda: AgendaTemplate
    hackDayAgenda: AgendaTemplate  // Modified version of HackDayAgenda Master Template
}
// StudentProject should be an extension of a Team
export interface Project {
    projectId: string
    classroomId: string
    teamMembersIds: string[]
    teamName: string
    createdByTeacher:boolean
    teacherName: string
    period: string
    caseStudies: ReviewedLink
    practiceLog: {
        [userId:string]:TimeLog[]
    }
    problem: string
    solution: string
    innovation: string
    customer: string 
    sentencePitch: string
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
    lastUpdate: firebase.firestore.Timestamp
}



import { AgendaTemplate, ReviewedLink, ProgramEvent, PostHackReflection, DesignLog, TimeLog, NamedLink } from './utilities';
import { AutoComplete, AutoCompleteAddress } from '@/components/GoogleMaps';

export interface Classroom {
    projectIds: string []
    teacherId: string
    teacherProgramId: string
    employerProgramId: string
    className: string
    shareCode: string  //  create  hash  code
    lastUpdate: firebase.firestore.Timestamp
}

export interface GeneralUser {
    classroomIds: string[]
    employerProgramIds: string[]
    projectIds: string[]
    initializeProgram: {
        [employerProgramId: string]: firebase.firestore.Timestamp
    }
    firstName: string
    lastName: string
    citizenType: "employer" | "teacher" | "student"
    dob?: Date
    address?: AutoCompleteAddress
    phoneNumber?: string
    profilePicture?: string
    lastUpdate: firebase.firestore.Timestamp
}
export interface EmployerProgram {
    employerId: string
    programLauncher: ProgramEvent[]
    externshipDayAgenda: AgendaTemplate
    masterHackDayAgenda: AgendaTemplate    //  Employer  cannot  modify  this
    programBrief?: NamedLink[]
    introVideo?: string
    caseStudies?: NamedLink[]
    projectIds?: string[]
    shareCode: string
    lastUpdate: firebase.firestore.Timestamp
}
export interface TeacherProgramData {
    classroomId: string
    employerProgramId: string
    caseStudies: NamedLink[]
    trainingDayAgenda: AgendaTemplate
    hackDayAgenda: AgendaTemplate    //  Modified  version  of  HackDayAgenda  Master  Template
}
//  StudentProject  should  be  an  extension  of  a  Team
export interface Project {
    classroomId: string
    teamMembersIds: string[]
    teamName: string
    createdByTeacher: boolean
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
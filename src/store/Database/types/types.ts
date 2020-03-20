import { AgendaTemplate, ProgramEvent, DesignLog, TimeLog, NamedLink } from './utilities';
import { AutoCompleteAddress } from '@/components/GoogleMaps';

export interface Classroom {
    classroomId: string
    projectIds: string[]
    teacherId: string
    studentIds: string[]
    teacherProgramId: string
    employerProgramId: string
    className: string
    shareCode?: string  //  create  hash  code
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
export interface studentClassroom {
    studentClassroomId: string // classroomId + studentId
    studentId: string
    classroomId: string
    finishedProgramBrief?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    finishedIntrovideo?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    finishedSignupForm?: firebase.firestore.Timestamp | firebase.firestore.FieldValue,
    finishedExitForm?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
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
    teacherProgramDataIds: {
        [employerProgramId: string]: string
    }
    projectIds: string[]
    initializeProgram: {
        [employerProgramId: string]: firebase.firestore.Timestamp
    }
    firstName: string
    lastName: string
    citizenType?: "employer" | "teacher" | "student"
    dob?: Date
    title?: string
    address?: AutoCompleteAddress
    phoneNumber?: string
    profilePicture?: string
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
export interface EmployerProgram {
    employerProgramId: string
    programName: string
    employerId?: string,
    launchImg?: string, // link
    // rfpCompany?:string,
    // rfpPromptTemplate?:string,
    // rfpRequirementsList?:{[id:string]:string},
    // rfpAbout?:string,
    // rfpResource?:string
    programLauncher: ProgramEvent[]
    externshipDayAgenda?: AgendaTemplate
    demoDayAgenda?: AgendaTemplate
    demoDayVideoLink?: string
    masterHackDayAgenda?: AgendaTemplate    //  Employer  cannot  modify  this
    hackDayVideoLink?:string
    trainingDayTemplate?: AgendaTemplate // Employer cannot modify this
    programBrief?: NamedLink[]
    introVideo?: string
    caseStudies?: NamedLink[]
    projectIds?: string[]
    shareCode: string
    launched?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}


export interface TeacherProgramData {
    teacherProgramId: string
    classroomIds: string[]
    employerProgramId: string
    caseStudies: NamedLink[]
    // rfpPrompt:string
    // rfpRequirements:string []// ids from Employer.rfpRequirementsList
    trainingDayAgenda?: AgendaTemplate
    hackDayAgenda?: AgendaTemplate    //  Modified  version  of  HackDayAgenda  Master  Template
    problemOrOpportunity?: string
    solution?: string
    keyMetric?: string
    productOrService?: string
    promptTemplate?: "tech" | "solution" | "problem" | "metric"
    finalPrompt?: string
    programSequence: {
        launchDay?: Date | firebase.firestore.Timestamp | Boolean
        programBrief?: Date | firebase.firestore.Timestamp | Boolean
        introVideo?: Date | firebase.firestore.Timestamp | Boolean
        train?: Date | firebase.firestore.Timestamp | Boolean
        practice?: Date | firebase.firestore.Timestamp | Boolean
        caseStudies?: Date | firebase.firestore.Timestamp | Boolean
        bmc?: Date | firebase.firestore.Timestamp | Boolean
        sentencePitch?: Date | firebase.firestore.Timestamp | Boolean
        elevatorPitch?: Date | firebase.firestore.Timestamp | Boolean
        hackDay?: Date | firebase.firestore.Timestamp | Boolean
        reflection?: Date | firebase.firestore.Timestamp | Boolean
        processLog?: Date | firebase.firestore.Timestamp | Boolean
        demoVideo?: Date | firebase.firestore.Timestamp | Boolean
        presentation?: Date | firebase.firestore.Timestamp | Boolean
        demoDay?: Date | firebase.firestore.Timestamp | Boolean
        exitForm?: Date | firebase.firestore.Timestamp | Boolean
        interviewOffer?: Date | firebase.firestore.Timestamp | Boolean
    }
    created: firebase.firestore.Timestamp | firebase.firestore.FieldValue
    lastUpdate: firebase.firestore.Timestamp | firebase.firestore.FieldValue
}
export namespace TeacherProgramData {
    export type programSequence = {
        programBrief?: Date | Boolean
        introVideo?: Date | Boolean
        train?: Date | Boolean
        practice?: Date | Boolean
        caseStudies?: Date | Boolean
        bmc?: Date | Boolean
        sentencePitch?: Date | Boolean
        elevatorPitch?: Date | Boolean
        hackDay?: Date | Boolean
        reflection?: Date | Boolean
        processLog?: Date | Boolean
        demoVideo?: Date | Boolean
        presentation?: Date | Boolean
        demoDay?: Date | Boolean
        exitForm?: Date | Boolean
        interviewOffer?: Date | Boolean
    }
    export namespace programSequence {
        export type programBrief = undefined | Date | Boolean
        export type introVideo = undefined | Date | Boolean
        export type train = undefined | Date | Boolean
        export type practice = undefined | Date | Boolean
        export type caseStudies = undefined | Date | Boolean
        export type bmc = undefined | Date | Boolean
        export type sentencePitch = undefined | Date | Boolean
        export type elevatorPitch = undefined | Date | Boolean
        export type hackDay = undefined | Date | Boolean
        export type reflection = undefined | Date | Boolean
        export type processLog = undefined | Date | Boolean
        export type demoVideo = undefined | Date | Boolean
        export type presentation = undefined | Date | Boolean
        export type demoDay = undefined | Date | Boolean
        export type exitForm = undefined | Date | Boolean
        export type interviewOffer = undefined | Date | Boolean
    }
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
        processLog?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        demoVideo?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        presentation?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
        demoDay?: firebase.firestore.Timestamp | firebase.firestore.FieldValue
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
    hackDayCompletedBy?:string // uid of student that completed hackday
    demoDayCompletedBy?:string 
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
export interface StudentForm{
    signupForm:StudentForm.signupForm
    programForm?:StudentForm.programForm
    exitForm?:StudentForm.exitForm
}
export namespace StudentForm {
    export interface signupForm {
        gradeLevel: string
        teacher: string
        schoolName: string
        schoolDistrict: string
        birthDate: Date | firebase.firestore.Timestamp
        superGender: string
        ethnicity: string
        guardianFirstName: string
        guardianLastName: string
        guardianRelationship: string
        primaryHomeLanguage: string
        address: string
    }
    export interface programForm{
        internshipInterest: string
        compensationType: string[],
        freeLunch: string,
        resume: string[],
        postHighPlan: string
        agricultureNaturalResources: number
        artsMediaAndEntertainment: number
        buildingAndConstructionTrades: number
        businessAndFinance: number
        educationChildhoodDevelopmentFamilyServices: number
        energyEnvironmentUtilities: number
        engineeringArchitecture: number
        fashionInteriorDesign: number
        healthScienceMedicalTechnology: number
        hospitalityTourismRecreation: number
        informationCommunicationTechnologies: number
        manufacturingProductDevelopment: number
        marketingSalesService: number
        publicServices: number
        transportation: number
        technicianEngineer: number
        marketingSales: number
        researchDevelopment: number
        operationsManagement: number
        communityCustomerSuccess: number
        transport: string
        ownedTech: string
        internetAccessMethod: string
    }
    export interface exitForm {
        traditional: number
        joinAgain: number
        recommend: number
        graduating: boolean
        postHighPlan:string
        communityCollegeOffer: boolean
        csOffer: boolean
        csFuture: string
        autoApp: boolean
        internshipApplication:StudentForm.exitForm.internshipApplication
    }
    export namespace exitForm{
        export interface internshipApplication {
            summerVacation: boolean
            summerSchedule: [string,string]
            summerJob: boolean
            summerJobHours: number
            summerCollegeClasses: boolean
            summerCollegeName: string
            summerCollegeSchedule:[string,string]
            summerSchool: boolean
            summerSchoolSchedule:[string,string]
        }
    }
}


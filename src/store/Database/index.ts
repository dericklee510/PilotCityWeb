import { AgendaTemplate, NamedLink, EventItem } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators" //action unused
import { firebaseApp as fb } from '@/firebase/init'
import { EmployerProgram } from './types/types' 
const _ = require('lodash');


@Module({ namespaced: true, name: 'Fb' })
export default class Fb extends VuexModule {
    public firestore = fb.firestore()
    public storage = fb.storage()
    private employerProgram: EmployerProgram | null = null;

    get userDocRef() { //no return type
        let user = this.context.rootState.Auth.user as firebase.User | null
        return (user) ? this.firestore.collection('users').doc(user.uid) : null
    }
    get storageRef() {
        let user = this.context.rootState.Auth.user as firebase.User | null
        return (user) ? this.storage.ref() : null
    }
    get getCurrentEmployerProgram() {
        return this.employerProgram;
    }

    @Mutation
    initEmployerProgram(program: EmployerProgram | null) {
        this.employerProgram = program;
    }

    @Mutation
    async updateEmployerProgram(property: any) {
        let user = this.context.rootState.Auth.user as firebase.User | null
        if (!user) throw new Error('User not logged in')
        await this.firestore.collection('EmployerProgram').doc(user.uid).update(property);
        this.employerProgram = Object.assign(property, this.employerProgram);
    }

    @Mutation
    async updateProject(property: any) {
        let user = this.context.rootState.Auth.user as firebase.User | null
        if (!user) throw new Error('User not logged in')
        await this.firestore.collection('Project').doc(currentProjectID).update(property);
        
        // this.employerProgram = Object.assign(property, this.employerProgram);
    }

    @Action({ commit: 'initEmployerProgram'})
    async fetchEmployerProgram() {
        let user = this.context.rootState.Auth.user as firebase.User | null
        if (!user) throw new Error('Not authorized')
        const snapshot = await this.firestore.collection('EmployerProgram').doc(user.uid).get();
        if (!snapshot.exists) { 
            return null ;
        } else {
            return snapshot.data()
        }
    }

    @Action({ commit: 'updateEmployerProgram' })
    async createProgramBrief(file: File) {
        let user = this.context.rootState.Auth.user as firebase.User | null
        if (!user)
            throw new Error('User not logged in')
        if (!this.getCurrentEmployerProgram)
            throw new Error('Current EmployerProgram is not initialized')
        if (!this.storageRef)
            throw new Error('Can\'t find cloud storage ref')
        // File name
        // Store file in FB Storage
        const fileName = file.name; // should validate the name of the file on the frontend
        const filePath = `program_briefs/${user.uid}/${fileName}`;
        const fileRef = this.storageRef.child(filePath);
        await fileRef.put(file);
        const index = _.findIndex(this.getCurrentEmployerProgram.programBrief!, ['name', fileName]);
        if (index < 0) {
            const newProgramBrief = [...this.getCurrentEmployerProgram.programBrief!, {
                name: fileName,
                link: filePath
            }]
            return {
                programBrief: newProgramBrief
            };
        } else {
            this.getCurrentEmployerProgram.programBrief![index].link = filePath;
            const newProgramBrief = [...this.getCurrentEmployerProgram.programBrief!]
            return {
                programBrief: newProgramBrief
            };
        }
    }

    async reuploadProgramBrief(file:File) {
        // upload new file
        await this.createProgramBrief(file)
    }

    @Action({ commit: 'updateEmployerProgram' })
    async deleteProgramBrief (fileName: string){
        let user = this.context.rootState.Auth.user as firebase.User | null
        if (!user)
            throw new Error('User not logged in')
        if (!this.getCurrentEmployerProgram)
            throw new Error('Current EmployerProgram is not initialized')
        if (!this.storageRef)
            throw new Error('Can\'t find cloud storage ref')

        const index = _.findIndex(this.getCurrentEmployerProgram.programBrief, ['name', fileName]);
        if (index < 0) {
            throw new Error('file with associated name does not exist')
        } else {
            await this.storageRef.child(`program_briefs/${user.uid}/${fileName}`).delete();
            const newProgramBriefs = _.remove(this.getCurrentEmployerProgram.programBrief, (n: any)  => n.name === fileName);
            return newProgramBriefs;  
        }
    }

    // we have to ask them to resubmit the brief because firebase storage doesnt support rename
    @Action({ commit: 'updateEmployerProgram' })
    async renameBrief(newFile: File, originalFileName: string){
        await this.createProgramBrief(newFile);
        await this.deleteProgramBrief(originalFileName);
    }

    @Action( { commit: 'updateProject'})
    async addRating(ratingName: string, rating:number) {
        // StudentProject.rating = rating
        return {
            [ratingName]: rating
        }
    }

    @Action({ commit: 'updateEmployerProgram' })
    async externshipAgenda(textEntry:AgendaTemplate, employerProgramUID:string){
        return {
            externshipAgenda: textEntry
        }
    }
}    


const uploadVideo = async (url:string):void => {
    // check link
    if(!doesLinkexist(url))
        throw("link does not exist")
    // upload video
}

/**
 * Updates Case Study for creation and removal
 * User: Employer or Teacher
 * @param {NamedLink[]} link
 * @param {string} uid
 */
const updateCaseStudy = async (link: NamedLink[], uid: string): Promise<void> => {
    // update EmployerProgram.caseStudies with link
    // update TeacherProgramData.caseStudies with link
}

type addRatingArg = "customerRatingT"|
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
/**
 * Enables user to rate student work 
 * User: Employer, Teacher
 * @param {number} rating
 * @param {string} uid
 * @returns {Promise<void>}
 */
const addRating = async (rating: number, projectuid: string, arg:addRatingArg, uid: string): Promise<void> => {
    // assert(usertype, employer) || assert(usertype, teacher)
    // throw if employer tries to modify teacher data, vice versa
    // StudentProject[arg] = rating
}

/**
 * Enables User to create an Agenda
 * User: Employer
 * @param {AgendaTemplate} textEntry
 * @param {string} uid
 * @returns {Promise<void>}
 */
const createExternshipAgenda = async (textEntry: AgendaTemplate, EmployerProgramId: string): Promise<void> => {
    // assert(programType, employer)
    // EmployerProgram.externshipDayAgenda = textEntry
}

/**
 * Check completed Agenda Items
 * User: Employer, Teacher, Student
 * @param {EventItem[]} checkItem
 * @param {string} uid
 * @returns {Promise<void>}
 */
const checkAgendaItem = async (checkItem: EventItem[], uid: string): Promise<void> => {
    // Employer: EmployerProgram.
    // EventItem.boolean = 1
}

/**
 * Uncheck incomplete Agenda Items
 * User: Employer, Teacher, Student
 * @param {EventItem[]} uncheckItem
 * @param {string} uid
 * @returns {Promise<void>}
 */
const uncheckAgendaItem = async (uncheckItem: EventItem[], uid: string): Promise<void> => {
    // EventItem.boolean = 0
}

/**
 * Allows the User to confirm a Program Brief
 * User: Teacher, Student
 * @returns {Promise<void>}
 */
const confirmProgramBrief = async (uid: string): Promise<void> => { //REVIEW LATER
    // ONLY ONE CAN BE CONFIRMED
    // ReviewedLink.reviewd = 1
    // lastUpdate = timestamp
}

/**
 * Allows User to create a classroom 
 * User: Teacher
 * @param {string} uid
 * @returns {Promise<voiv>}
 */
const createClassroom = async (className: string, teacherProgramId: string, employerProgramId: string, uid: string): Promise<void> => {
    // Classroom.id = string
    // Classroom.teacherId = uid
    // Classroom.teacherProgramId = TeacherProgramData.id
    // Classroom.employerProgramId = EmployerProgram.id
    // Classroom.className = className
    // Classroom.lastUpdate = timestamp
    // Teacher.classroomIds.push(Classroom.id)
}

/**
 * Allows User to rename a classroom
 * User: Teacher
 * @param {string} className
 * @param {string} uid
 * @returns {Promise<void>}
 */
const renameClassroom = async (classroomId: string, className: string, uid: string): Promise<void> => {
    // Classroom.className = className
    // Classroom.lastUpdate = timestamp
}

/**
 * Allows User to delete a classroom
 * User: Teacher
 * @param {string} classroomId
 * @param {string} uid
 * @returns {Promise<void>}
 */
const deleteClassroom = async (classroomId: string, uid:string): Promise<void> => { 
    // kick all students from Classroom.projectIds
    // delete all assosciated projects
    // delete classroom id from all students in Student.classroomID
    // remove classroomId from projectIds
    // delete classroom table
    // remove classroom id from teacher
}

/**
 * Allows User to change a student's classroom
 * User: Teacher
 * @param {string} classroomId
 * @param null uid
 */
const switchClassroom = async (oldClassroomId: string, newClassroomId: string, uid: string, studentId: string): Promise<void> => {
    // kick student from project
    // remove classroomId from Student.projectIds
    // remove classroomID from the student
    // Add student with StudentId to classroom with newClassroomId
}

/**
 * Allows User to change a student's team (ie. Project)
 * New Team and Old Team must be of the same classroom
 * User: Teacher
 * @param {string} oldProjectId
 * @param {string} newProjectId
 * @param {string} uid
 * @param {string} studentId
 * @returns {Promise<void>}
 */
const switchTeam = async (oldProjectId: string, newProjectId: string, uid: string, studentId: string): Promise<void> => {
    // remove student.id with studentId from Project.teamMembers with oldProjectId
    // Student.projectIds[clasroomID] = newProjectId
    // add student.id with studentId to Project.teamMembers with newProjectId
}

/**
 * Allows User to create a team
 * User: Teacher, Student
 * @param {string} teamName
 * @param {string} uid
 */
const createTeam = async (teamName: string, classroomId: string, uid: string): Promise<void> => {
    // Project.id = projectId
    // Project.teamName = teamName
    // Project.classroomId = classroomId
    // if created by Teacher
        // Project.createdByTeacher = 1
    // Project.teamMembers = []
    // add projectId to employer.projectId
}

/**
 * Allows User to rename a team
 * User: Teacher or Student
 * @param {string} newTeamName
 * @param {string} projectId
 * @param {string} uid
 * @returns {Promise<void>}
 */
const renameTeam = async (newTeamName: string, projectId: string, uid: string): Promise<void> => {
    // Project.teamName = newTeamName
}

/**
 * Allows User to delete a team
 * User: Teacher 
 * @param {string} projectId
 * @param {string} uid
 * @returns {Promise<void>}
 */
const deleteTeam = async (projectId: string, uid: string): Promise<void> => { 
    // remove projectId from every student's student.projectId interface
    // remove projectId from classroom.projectId 
    // remove projectId from employerProgram.Id
    // delete project with Project.Id = projectId
    // User must be a teacher
}
/**
 * Allows User to join a Team
 * User: Student
 * @param {string} projectId
 * @param {string} uid
 * @returns {Promise<void>}
 */
const joinTeam = async (projectId: string, uid: string): Promise<void> => {
    // append Student.id to Project.teamMembers where Project.Id = projectId 
    // add projectId to Student.projectIds
}
/**
 * Allows User to leave a Team
 * User: Student
 * @param {string} projectId
 * @param {string} uid
 * @returns {Promise<void>}
 */
const leaveTeam = async (projectId: string, uid: string): Promise<void> => {
    // remove student with Student.id = uid from Project.teamMembers where Project.id = projectId
    // remove projectId from Student.projectIds
}




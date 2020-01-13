import { isLinkValid } from './../../api';
import { AgendaTemplate, NamedLink, EventItem } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators" //action unused
import { firebaseApp as fb } from '@/firebase/init'
import { EmployerProgram, GeneralUser, Project, RatingTag, TeacherProgramData } from './types/types' 
import { Dependency } from '../../utilities/Dependency'
const _ = require('lodash');
const assert = require('assert')

@Module({ namespaced: true, name: 'Fb' })
export default class Fb extends VuexModule {
    public firestore = fb.firestore()
    public storage = fb.storage()
    private currentTeacherProgramUID? :string
    private currentTeacherProgramData?: TeacherProgramData
    private currentEmployerProgramUID? :string
    private currentEmployerProgram?: EmployerProgram
    private FBUser:firebase.User | null = fb.auth().currentUser;
    private currentUserProfile?: GeneralUser
    private currentProject?: Project

    @Dependency('FBUser')
    get userDocRef() {
        return this.firestore.collection('users').doc(this.FBUser!.uid);
    }

    @Dependency('FBUser')
    get storageRef() {
        return this.storage.ref();
    }
    get getCurrentEmployerProgram() {
        return this.currentEmployerProgram;
    }
    get getCurrentUserProfile() {
        return this.currentUserProfile
    }

    @Dependency('currentUserProfile')
    get userCitizenType() {
        return this.currentUserProfile!.citizenType;
    }

    @Dependency('FBUser')
    @Mutation
    async initCurrentUserProfile() {
        const snapshot = await this.firestore.collection('GeneralUser').doc(this.FBUser!.uid).get();
        if (!snapshot.exists)
            throw new Error("User profile is not found on the GeneralUser Collection");
        this.currentUserProfile = snapshot.data<GeneralUser>()
    }

    @Dependency('FBUser')
    @Mutation
    async initCurrentEmployerProgram(program: EmployerProgram) {
        this.currentEmployerProgramUID = program.employerProgramId;
        this.currentEmployerProgram = program;
    }
    
    @Dependency('currentEmployerProgramUID', 'currentEmployerProgram')
    @Mutation
    async updateCurrentEmployerProgram(property: any) {
        await this.firestore.collection('EmployerProgram').doc(this.currentEmployerProgramUID).update(property);
        this.currentEmployerProgram = Object.assign(property, this.currentEmployerProgram);
    }

    @Dependency('currentEmployerProgramUID', 'currentTeacherProgramData')
    @Mutation
    async updateCurrentTeacherProgramData(property: any) {
        await this.firestore.collection('TeacherProgramData').doc(this.currentTeacherProgramUID).update(property);
        this.currentTeacherProgramData = Object.assign(property, this.currentTeacherProgramData);
    }

    @Dependency('currentProject')
    @Mutation
    async updateProject(property: any) {
        await this.firestore.collection('Project').doc(this.currentProject!.projectId).update(property);
        this.currentProject = Object.assign(property, this.currentProject)
    }
    
    @Action({ commit: 'initEmployerProgram'})
    async fetchEmployerProgram(employerProgramUID: string) {
        const snapshot = await this.firestore.collection('EmployerProgram').doc(employerProgramUID).get();
        if (!snapshot.exists)
            throw new Error(`Failed to fetch employer program with uid of ${employerProgramUID}`);
        return snapshot;
    }

    @Action({ commit: 'initEmployerProgram'})
    async switchCurrentEmployerProgramWithProgramUID(employerProgramUID: string) {
        return await this.fetchEmployerProgram(employerProgramUID)
    }

    @Action({ commit: 'initEmployerProgram'})
    async switchCurrentEmployerProgramWithProgramObject(program : EmployerProgram) {
        return program;
    }

    @Dependency('FBUser', 'employerProgram', 'storage')
    @Action({ commit: 'updateCurrentEmployerProgram' })
    async createProgramBrief(file: File) {
        const fileName = file.name; // should validate the name of the file on the frontend
        const filePath = `program_briefs/${this.FBUser!.uid}/${fileName}`;
        const fileRef = this.storageRef!.child(filePath);
        await fileRef.put(file);
        const index = _.findIndex(this.getCurrentEmployerProgram!.programBrief!, ['name', fileName]);
        if (index < 0) {
            const newProgramBrief = [...this.getCurrentEmployerProgram!.programBrief!, {
                name: fileName,
                link: filePath
            }]
            return {
                programBrief: newProgramBrief
            };
        } else {
            this.getCurrentEmployerProgram!.programBrief![index].link = filePath;
            const newProgramBrief = [...this.getCurrentEmployerProgram!.programBrief!]
            return {
                programBrief: newProgramBrief
            };
        }
    }

    async reuploadProgramBrief(file:File) {
        await this.createProgramBrief(file); // it's the same shit
    }

    @Dependency('FBUser', 'employerProgram', 'storageRef')
    @Action({ commit: 'updateCurrentEmployerProgram' })
    async deleteProgramBrief (fileName: string){
        const index = _.findIndex(this.getCurrentEmployerProgram!.programBrief, ['name', fileName]);
        if (index < 0) {
            throw new Error('file with associated name does not exist')
        } else {
            await this.storageRef!.child(`program_briefs/${this.FBUser!.uid}/${fileName}`).delete();
            const newProgramBriefs = _.remove(this.getCurrentEmployerProgram!.programBrief, (n: any)  => n.name === fileName);
            return newProgramBriefs;  
        }
    }

    @Action({ commit: 'updateCurrentEmployerProgram' }) // we have to ask them to resubmit the brief because firebase storage doesnt support rename
    async renameBrief(newFile: File, originalFileName: string){
        await this.createProgramBrief(newFile);
        await this.deleteProgramBrief(originalFileName);
    }
  
    @Action( { commit: 'updateProject'})
    async addRating(ratingName: RatingTag, rating:number) {
        return {
            [ratingName]: rating 
        }
    }

   
    /**
     * Enables User to create an Agenda
     * User: Employer
     * @param {AgendaTemplate} textEntry
     * @param {string} uid
     */
    @Action({ commit: 'updateCurrentEmployerProgram' })
    async createExternshipAgenda(textEntry: AgendaTemplate, EmployerProgramId: string){
        assert(this.userCitizenType === 'employer', 'User type not emplyer');
        return {
            externshipAgenda: textEntry
        }
    }

    // @Action({ commit: 'updateCurrentEmployerProgram' })
    // async uploadVideo(url:string){
    //     // check link
    //     if(isLink(url)) {
    //         return{
    //             link: url
    //         }
    //     }
    //         throw("link does not exist")
    //     // upload video
    // }
   
    @Action({ commit: 'updateCurrentEmployerProgram' })
    async updateCurrentEmployerProgramCaseStudy(caseStudies: NamedLink[]) {
        return { caseStudies }
    }

    @Action({ commit: 'updateCurrentTeacherProgramData' })
    async updateCurrentTeacherProgramCaseStudy(caseStudies: NamedLink[]) {
        return { caseStudies }
    }

    /**
     * Updates Case Study for creation and removal
     * User: Employer or Teacher
     * @param {NamedLink[]} link
     */
    @Dependency('currentUserProfile')
    async updateCaseStudy(link: NamedLink[]){
        if (this.currentUserProfile!.citizenType == 'teacher') {
            await this.updateCurrentEmployerProgramCaseStudy(link)
        } else if (this.currentUserProfile!.citizenType == 'employer') {
            await this.updateCurrentTeacherProgramCaseStudy(link)
        } else {
            throw new Error('wrong user type');
        }
    }
    
    // /**
    //  * Check completed Agenda Items
    //  * User: Employer, Teacher, Student
    //  * @param {EventItem[]} checkItem
    //  * @param {string} uid
    //  * @returns {Promise<void>}
    //  */
    // async checkAgendaItem(checkItem: EventItem[], uid: string) {
    //     // Employer: EmployerProgram.
    //     // EventItem.boolean = 1

    //     // wtf?
    // }
        

}


const uploadVideo = async (url: string): void => {
    // check link
    if (!isLinkValid(url))
        throw ("link does not exist")
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


type addRatingArg = "customerRatingT" |
    "demoRatingT" |
    "elevatorPitchRatingT" |
    "innovationRatingT" |
    "presentationRatingT" |
    "problemRatingT" |
    "sentencePitchRatingT" |
    "solutionRatingT" |
    "customerRatingE" |
    "demoRatingE" |
    "elevatorPitchRatingE" |
    "innovationRatingE" |
    "presentationRatingE" |
    "problemRatingE" |
    "sentencePitchRatingE" |
    "solutionRatingE";
/**
 * Enables user to rate student work 
 * User: Employer, Teacher
 * @param {number} rating
 * @param {string} uid
 * @returns {Promise<void>}
 */
const addRating = async (rating: number, projectuid: string, arg: addRatingArg, uid: string): Promise<void> => {
    // assert(usertype, employer) || assert(usertype, teacher)
    // throw if employer tries to modify teacher data, vice versa
    // StudentProject[arg] = rating
}


// /**
//  * Uncheck incomplete Agenda Items
//  * User: Employer, Teacher, Student
//  * @param {EventItem[]} uncheckItem
//  * @param {string} uid
//  * @returns {Promise<void>}
//  */
// const uncheckAgendaItem = async (uncheckItem: EventItem[], uid: string): Promise<void> => {
//     // EventItem.boolean = 0
// }

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
const deleteClassroom = async (classroomId: string, uid: string): Promise<void> => {
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
    // add projectId to employer.projectId (employer program) project->classroom -> employerProgram
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
/**
 * Allows User to add an Employer Program using a shareCode
 * User: Teacher or Student
 * @param {string} shareCode
 * @param {string} uid
 * @returns {Promise<void>}
 */
const addProgram = async (shareCode: string, uid: string): Promise<void> => {
    if (!shareCode) {
        throw new Error('invalid sharecode')
    } 
    // add employerProgramId to GeneralUser's employerProgramIds array 
        // GeneralUser.employerProgramIds.push(employerProgramId), where GeneralUser.userId == uid
    // GeneralUser.initializeProgram = timestamp
}
/**
 * Allows User to remove an Employer Program
 * User: Teacher or Student
 * @param {string} employerProgramId
 * @returns {Promise<void>}
 */
const removeProgram = async (uid: string, employerProgramId: string): Promise<void> => {
    // remove employerProgramId from GeneralUser employerProgramIds array, where GeneralUser.userId == uid
    // delete timestamp from GeneralUser.initializeProgram that corresponds to employerProgramId 
}

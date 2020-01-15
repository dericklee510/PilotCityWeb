import { SET_USER } from './../Auth/mutation-types';
import { Dependency } from '@/utilities/dependency';
import { isLinkValid } from './../../api';
import { AgendaTemplate, NamedLink, EventItem } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action, Mutation, MutationAction } from "vuex-module-decorators" //action unused
import firestore,{ firebaseApp as fb } from '@/firebase/init'
import { Classroom, EmployerProgram, GeneralUser, Project, RatingTag, TeacherProgramData } from './types/types' 
const _ = require('lodash');
const assert = require('assert')

@Module({ namespaced: true, name: 'Fb' })
export default class Fb extends VuexModule {
    public firestore = firestore
    public storage = fb.storage()
    public currentTeacherProgramUID    : string                | null = null 
    public currentTeacherProgramData   : TeacherProgramData    | null = null
    public currentEmployerProgramUID   : string                | null = null
    public currentEmployerProgram      : EmployerProgram       | null = null
    public FBUser                      : firebase.User         | null = fb.auth().currentUser;
    public currentUserProfile          : GeneralUser           | null = null
    public currentProject              : Project               | null = null

//  @Dependency('FBUser')
    get userDocRef() {
        return this.firestore.collection('users').doc(this.FBUser!.uid);
    }

//  @Dependency('FBUser')
    get storageRef() {
        return this.storage.ref();
    }
    get getCurrentEmployerProgram() {
        return this.currentEmployerProgram;
    }
    get getCurrentUserProfile() {
        return this.currentUserProfile
    }

//  @Dependency('currentUserProfile')
    get userCitizenType() {
        return this.currentUserProfile!.citizenType;
    }

    @Mutation 
    [SET_USER](userDoc: firebase.User | null): void {
        this.FBUser = userDoc
    }
//  @Dependency('FBUser')
    @MutationAction({ mutate: ['currentUserProfile']})
    async initCurrentUserProfile() {
        const snapshot = await this.firestore.collection('GeneralUser').doc(this.FBUser!.uid).get();
        if (!snapshot.exists)
            throw new Error("User profile is not found on the GeneralUser Collection");
        return { currentUserProfile : snapshot.data<GeneralUser>() }
    }

//  @Dependency('FBUser')
    @Mutation
    initCurrentEmployerProgram(program: EmployerProgram) {
        this.currentEmployerProgramUID = program.employerProgramId,
        this.currentEmployerProgram = program
    }
    
//  @Dependency('currentEmployerProgramUID', 'currentEmployerProgram')
    @MutationAction({ mutate: ['currentEmployerProgram']})
    async updateCurrentEmployerProgram(property: any) {
        await this.firestore.collection('EmployerProgram').doc(this.currentEmployerProgramUID!).update(property);
        return { currentEmployerProgram: Object.assign(property, this.currentEmployerProgram) };
    }

//  @Dependency('currentEmployerProgramUID', 'currentTeacherProgramData')
    @MutationAction({ mutate: ['currentTeacherProgramData']})
    async updateCurrentTeacherProgramData(property: any) {
        await this.firestore.collection('TeacherProgramData').doc(this.currentTeacherProgramUID!).update(property);
        return { currentTeacherProgramData: Object.assign(property, this.currentTeacherProgramData) }
    }

//  @Dependency('currentProject')
    @MutationAction( {mutate: ['currentProject']})
    async updateProject(property: any) {
        await this.firestore.collection('Project').doc(this.currentProject!.projectId).update(property);
        return { currentProject: Object.assign(property, this.currentProject) }
    }
    
    @Action({ commit: 'initCurrentEmployerProgram '})
    async fetchEmployerProgram(employerProgramUID: string) {
        const snapshot = await this.firestore.collection('EmployerProgram').doc(employerProgramUID).get();
        if (!snapshot.exists)
            throw new Error(`Failed to fetch employer program with uid of ${employerProgramUID}`);
        return snapshot.data<EmployerProgram>();
    }

    async switchCurrentEmployerProgramWithProgramUID(employerProgramUID: string) {
        await this.fetchEmployerProgram(employerProgramUID)
    }

    @Action({ commit: 'initCurrentEmployerProgram'})
    async switchCurrentEmployerProgramWithProgramObject(program : EmployerProgram) {
        return program;
    }

//  @Dependency('FBUser', 'employerProgram', 'storage')
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
            await this.updateCurrentEmployerProgram({ programBrief: newProgramBrief });
        } else {
            this.getCurrentEmployerProgram!.programBrief![index].link = filePath;
            const newProgramBrief = [...this.getCurrentEmployerProgram!.programBrief!]
            await this.updateCurrentEmployerProgram({ programBrief: newProgramBrief });
        }
    }

    async reuploadProgramBrief(file:File) {
        await this.createProgramBrief(file); // it's the same shit
    }

//  @Dependency('FBUser', 'employerProgram', 'storageRef')
    async deleteProgramBrief (fileName: string){
        const index = _.findIndex(this.getCurrentEmployerProgram!.programBrief, ['name', fileName]);
        if (index < 0) {
            throw new Error('file with associated name does not exist')
        } else {
            await this.storageRef!.child(`program_briefs/${this.FBUser!.uid}/${fileName}`).delete();
            const newProgramBrief = _.remove(this.getCurrentEmployerProgram!.programBrief, (n: any)  => n.name === fileName);
            await this.updateCurrentEmployerProgram({ programBrief: newProgramBrief });
        }
    }

    async renameBrief(newFile: File, originalFileName: string){
        await this.createProgramBrief(newFile);
        await this.deleteProgramBrief(originalFileName);
    }
  
    async addRating(ratingName: RatingTag, rating:number) {
        await this.updateProject({ [ratingName]: rating })
    }

   
    /**
     * Enables User to create an Agenda
     * User: Employer
     * @param {AgendaTemplate} textEntry
     * @param {string} uid
     */
    async createExternshipAgenda(externshipAgenda: AgendaTemplate, EmployerProgramId: string){
        assert(this.userCitizenType === 'employer', 'User type not emplyer');
        await this.updateCurrentEmployerProgram({ externshipAgenda })
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
   
    async updateCurrentEmployerProgramCaseStudy(caseStudies: NamedLink[]) {
        await this.updateCurrentEmployerProgram({ caseStudies })
    }

    async updateCurrentTeacherProgramCaseStudy(caseStudies: NamedLink[]) {
        await this.updateCurrentTeacherProgramData({ caseStudies })
    }

    /**
     * Updates Case Study for creation and removal
     * User: Employer or Teacher
     * @param {NamedLink[]} link
     */
//  @Dependency('currentUserProfile')
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
    
    /**
     * Allows User to create a classroom 
     * User: Teacher
     * @param {string} uid
     * @returns {Promise<voiv>}
     */
    async createClassroom(className: string, teacherProgramId: string, employerProgramId: string) {
        assert(this.userCitizenType === 'teacher', 'User type not teacher');
        const classroomID = this.firestore.collection('Classroom').doc().id;
        const classroom = {
            classroomID,
<<<<<<< HEAD
            teacherId : this.currentUserProfile!.userId,
=======
            teacherId : this.FBUser!.uid,
>>>>>>> page/program.firebase
            teacherProgramId,
            employerProgramId,
            className,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }
        await this.firestore.collection('Classroom').doc(classroomID).set(classroom);
        // update current classroom ?
    }

    

    /**
     * Allows User to rename a classroom
     * User: Teacher
     * @param {string} className
     * @param {string} uid
     * @returns {Promise<void>}
     */
    async renameClassroom(classroomId: string, className: string, uid: string){
        // Classroom.className = className
        // Classroom.lastUpdate = timestamp
        await this.firestore.collection('Classroom').doc(classroomId).update({ className });
        // update current classroom ?
    }


        
    /**
     * Allows User to delete a classroom
     * User: Teacher
     * @param {string} classroomId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    async deleteClassroom(classroomId: string, uid: string){
        const classroomRef = this.firestore.collection('Classroom').doc(classroomId);
        const classroomSnapshot = await classroomRef.get();
        const studentsSnapshot = await this.firestore.collection('GeneralUser').where("classroomIds", 'array-contains', classroomId).get();
        if (!classroomSnapshot.exists)
            throw "classroom does not exist!"

        const classroomData = classroomSnapshot.data<Classroom>();
        const projectList = classroomData.projectIds;
        const teacherId  = classroomData.teacherId;
        if (projectList.length)
            throw "classroom doesnt have projectIds"

    
        const batch = this.firestore.batch();
        projectList.forEach(pid => {
            const projectRef = this.firestore.collection("Project").doc(pid);
            batch.delete(projectRef);
        });
        studentsSnapshot.forEach(sRef => {
            batch.update(sRef.ref, {
                classroomIds: firebase.firestore.FieldValue.arrayRemove(classroomId)
            })
            projectList.forEach( pid => {
                batch.update(sRef.ref, {
                    projectIds: firebase.firestore.FieldValue.arrayRemove(pid)
                })
            })
        })
        const teacherRef = this.firestore.collection('GeneralUser').doc(teacherId);
        batch.update(teacherRef, {
            classroomIds: firebase.firestore.FieldValue.arrayRemove(classroomId)
        })
        projectList.forEach( pid => {
            batch.update(teacherRef, {
                projectIds: firebase.firestore.FieldValue.arrayRemove(pid)
            })
        })
        batch.delete(classroomRef);
        await batch.commit();
        // kick all students from Classroom.projectIds
        // delete all assosciated projects X
        // delete classroom id from all students in Student.classroomID X
        // remove classroomId(should be project id) from projectIds X
        // delete classroom table X
        // remove classroom id from teacher X

    }

    /**
     * Allows User to change a student's classroom
     * User: Teacher
     * @param {string} classroomId
     * @param null uid
     */
    @Dependency('currentUserProfile')
    async switchClassroom(oldClassroomId: string, newClassroomId: string, uid: string, studentId: string){
        // kick student from project
<<<<<<< HEAD
        const myuid = uid ? uid : this.currentUserProfile!.userId;
=======
        const myuid = uid ? uid : this.FBUser!.uid;
>>>>>>> page/program.firebase
        const batch = this.firestore.batch();
        const classroomRef = this.firestore.collection('Classroom').doc(oldClassroomId);
        const studentRef = this.firestore.collection('GeneralUser').doc(uid);
        
        const classroomDocRef = await classroomRef.get();
        const studentDocRef = await studentRef.get();
        if (!studentDocRef.exists || !classroomDocRef.exists)
            throw "Student / classroom not exist"
        
        const projectIds = classroomDocRef.data<Classroom>()!.projectIds; // get all project ids under old classroom
        projectIds.forEach(pid => { // remove this user from all those project
            const projectRef = this.firestore.collection('Project').doc(pid);
            batch.update(projectRef, {
                teamMembersIds: firebase.firestore.FieldValue.arrayRemove(myuid)
            })
        })
        batch.update(studentRef, { // remove old classroom uid from user's classroomIds
            classroomIds: firebase.firestore.FieldValue.arrayRemove(oldClassroomId)
        })
        batch.update(studentRef, { // add the new one, i think there's something wrong with the db design, should add user's uid into classroom 
            classroomIds: firebase.firestore.FieldValue.arrayUnion(newClassroomId)
        })
        await batch.commit();

        // remove classroomId from Student.projectIds
        // remove classroomID from the student
        // Add student with StudentId to classroom with newClassroomId
    }

    /**
     * Allows User to change a student's team (ie. Project)
     * New Project and Old Project must be of the same classroom
     * User: Teacher
     * @param {string} oldProjectId
     * @param {string} newProjectId
     * @param {string} uid
     * @param {string} studentId
     * @returns {Promise<void>}
     */
    async switchProject(oldProjectId: string, newProjectId: string, uid: string, studentId: string){
        // remove student.id with studentId from Project.teamMembers with oldProjectId
        // Student.projectIds[clasroomID] = newProjectId
        await this.leaveProject(oldProjectId);
        await this.joinProject(newProjectId);
    }

    /**
     * Allows User to create a team
     * User: Teacher, Student
     * @param {string} teamName
     * @param {string} uid
     */
    // Project.id = projectId
    // Project.teamName = teamName
    // Project.classroomId = classroomId
    // if created by Teacher
    // Project.createdByTeacher = 1
    // Project.teamMembers = []
    // add projectId to (employer program) project->classroom -> employerProgram
    async createProject(teamName: string, classroomId: string, uid: string) {
        let createdByTeacher: boolean = false;
        let teacherName: string | null = null;
        if ((this.currentUserProfile as GeneralUser).citizenType == 'teacher')
            createdByTeacher = true;
        const projectId = this.firestore.collection('Project').doc().id;
        const project = {
            projectId,
            classroomId,
            createdByTeacher,
            teamMembersIds : [],
        }
        await this.firestore.runTransaction(async transaction => {
            const classroomRef = this.firestore.collection('Classroom').doc(classroomId);
            let doc = await transaction.get(classroomRef);
            if (!doc.exists) {
                throw `Document does not exist`
            }
            const classroomData = doc.data()
            const projectRef = this.firestore.collection('Project').doc(projectId);
            const employerProgramRef = this.firestore.collection('EmployerProgram').doc(classroomData!.EmployerProgramId);

            transaction
                .set(projectRef, project)
                .update(employerProgramRef, {
                    projectIds: firebase.firestore.FieldValue.arrayUnion(projectId)
                });
        })
    }

    /**
     * Allows User to rename a team
     * User: Teacher or Student
     * @param {string} newProjectName
     * @param {string} projectId
     */
    async renameProject(newProjectName: string, projectId: string) {
        // Project.teamName = newProjectName
        await this.firestore.collection('Project').doc(projectId).update({ teamName: newProjectName });
        // update current Project
    }

    /**
     * Allows User to delete a team
     * User: Teacher 
     * @param {string} projectId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    @Dependency('currentUserProfile')
    async deleteProject(projectId: string, uid?: string) {
        // remove projectId from every student's student.projectId interface X 
        // remove projectId from classroom.projectId  X 
        // remove projectId from employerProgram.Id 
        // delete project with Project.Id = projectId X
        // User must be a teacher X
        assert(this.userCitizenType === 'teacher', 'User type not teacher');
        const batch = this.firestore.batch();
<<<<<<< HEAD
        const myuid = uid ? uid : this.currentUserProfile!.userId
=======
        const myuid = uid ? uid : this.FBUser!.uid
>>>>>>> page/program.firebase
        const studentsSnapshot = await this.firestore.collection('GeneralUser').where('projectIds', 'array-contains', projectId).get();
        const projectDocSnapshot = await this.firestore.collection('Project').doc(projectId).get();
        if (!projectDocSnapshot.exists) throw "project does not exist"
        
        const projectData = projectDocSnapshot.data<Project>()
        const classroomDocSnapshot = await this.firestore.collection('Classroom').doc(projectData!.classroomId).get();
        const classroomData = await classroomDocSnapshot.data<Classroom>();
        const employerPuid = classroomData!.employerProgramId;
        const employerProgramRef = this.firestore.collection('EmployerProgram').doc(employerPuid);

        batch.update(classroomDocSnapshot.ref, {
            projectIds: firebase.firestore.FieldValue.arrayRemove(projectId)
        })
        studentsSnapshot.forEach(sss => {
            batch.update(sss.ref, {
                projectIds: firebase.firestore.FieldValue.arrayRemove(projectId)
            })
        })
        batch.update(employerProgramRef, {
            projectIds: firebase.firestore.FieldValue.arrayRemove(projectId)
        })
        batch.delete(projectDocSnapshot.ref)
        await batch.commit();
        
    }

    /**
     * Allows User to join a Project
     * User: Student
     * @param {string} projectId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    @Dependency('currentUserProfile')
    async joinProject(projectId: string, uid?: string){
        // append Student.id to Project.teamMembers where Project.Id = projectId 
        // add projectId to Student.projectIds
<<<<<<< HEAD
        const myuid = uid ? uid : this.currentUserProfile!.userId
=======
        const myuid = uid ? uid : this.FBUser!.uid
>>>>>>> page/program.firebase
        const batch = this.firestore.batch();
        const projectRef = this.firestore.collection('Project').doc(projectId);
        const studentRef = this.firestore.collection('GeneralUser').doc(myuid);

        batch.update(projectRef, {
            teamMemberIds: firebase.firestore.FieldValue.arrayUnion(myuid)
        });
        batch.update(studentRef, {
            projectIds: firebase.firestore.FieldValue.arrayUnion(projectId)
        });
        await batch.commit();
        // await this.firestore.collection('Project').doc(projectId).update({
<<<<<<< HEAD
        //     teamMemberIds: firebase.firestore.FieldValue.arrayUnion(this.currentUserProfile!.userId)
=======
        //     teamMemberIds: firebase.firestore.FieldValue.arrayUnion(this.FBUser!.uid)
>>>>>>> page/program.firebase
        // })
    }
    /**
     * Allows User to leave a Project
     * User: Student
     * @param {string} projectId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    @Dependency('currentUserProfile')
    async leaveProject(projectId: string, uid? : string ){
        if (this.currentUserProfile!.citizenType != 'student') {
            throw "Wrong citizen type";
        }
        // remove student with Student.id = uid from Project.teamMembers where Project.id = projectId
        // remove projectId from Student.projectIds
<<<<<<< HEAD
        const myuid = uid ? uid : this.currentUserProfile!.userId
=======
        const myuid = uid ? uid : this.FBUser!.uid
>>>>>>> page/program.firebase
        const batch = this.firestore.batch();
        const projectRef = this.firestore.collection('Project').doc(projectId);
        const studentRef = this.firestore.collection('GeneralUser').doc(myuid);

        batch.update(projectRef, {
            teamMemberIds: firebase.firestore.FieldValue.arrayRemove(myuid)
        });
        batch.update(studentRef, {
            projectIds: firebase.firestore.FieldValue.arrayRemove(projectId)
        });
        await batch.commit();
        // change local
    }
    /**
     * Allows User to add an Employer Program using a shareCode
     * User: Teacher or Student
     * @param {string} shareCode
     * @param {string} uid
     * @returns {Promise<void>}
     */
    async addProgram(shareCode: string, uid: string){
        // add employerProgramId to GeneralUser's employerProgramIds array 
            // GeneralUser.employerProgramIds.push(employerProgramId), where GeneralUser.userId == uid
        // GeneralUser.initializeProgram = timestamp
        const snapshot = await this.firestore.collection('EmployerProgram').where("shareCode", "==",  shareCode).limit(1).get();
        const employerProgram = snapshot.docs[0].data();
        const emppid = employerProgram.employerProgramId;
<<<<<<< HEAD
        await this.firestore.collection('GeneralUser').doc(this.currentUserProfile!.userId).update({
=======
        await this.firestore.collection('GeneralUser').doc(this.FBUser!.uid).update({
>>>>>>> page/program.firebase
            employerProgramIds: firebase.firestore.FieldValue.arrayUnion(emppid),
            [`initializeProgram/${emppid}`]: firebase.firestore.FieldValue.serverTimestamp()
        });
        // await this.firestore.runTransaction( async transaction => {
<<<<<<< HEAD
        //         const meRef = this.firestore.collection('GeneralUser').doc(this.currentUserProfile!.userId);
=======
        //         const meRef = this.firestore.collection('GeneralUser').doc(this.FBUser!.uid);
>>>>>>> page/program.firebase
        //         await transaction.update(meRef, {
        //             employerProgramIds: firebase.firestore.FieldValue.arrayUnion(emppid),
        //             [`initializeProgram/${emppid}`]: firebase.firestore.FieldValue.serverTimestamp()
        //         })
        // });
    }
    /**
     * Allows User to remove an Employer Program
     * User: Teacher or Student
     * @param {string} employerProgramId
     * @returns {Promise<void>}
     */
    async removeProgram(uid: string, employerProgramId: string) {
        const batch = this.firestore.batch();
<<<<<<< HEAD
        const userRef = this.firestore.collection('GeneralUser').doc(this.currentUserProfile!.userId);
=======
        const userRef = this.firestore.collection('GeneralUser').doc(this.FBUser!.uid);
>>>>>>> page/program.firebase

        batch.update(userRef, {
            employerProgramIds: firebase.firestore.FieldValue.arrayRemove(employerProgramId)
        });
        batch.update(userRef, {
            [`initializeProgram/${employerProgramId}`] : firebase.firestore.FieldValue.delete()
        });
        await batch.commit();
        // remove employerProgramId from GeneralUser employerProgramIds array, where GeneralUser.userId == uid
        // delete timestamp from GeneralUser.initializeProgram that corresponds to employerProgramId 

<<<<<<< HEAD
        // await this.firestore.collection('GeneralUser').doc(this.currentUserProfile!.userId).update({
=======
        // await this.firestore.collection('GeneralUser').doc(this.FBUser!.uid).update({
>>>>>>> page/program.firebase
        //     [`initializeProgram/${employerProgramId}`] : firebase.firestore.FieldValue.delete()
        // })
    }

}


// const uploadVideo = async (url: string): Promise<void> => {
//     // check link
//     if (!isLinkValid(url))
//         throw ("link does not exist")
//     // upload video
// }

// /**
//  * Updates Case Study for creation and removal
//  * User: Employer or Teacher
//  * @param {NamedLink[]} link
//  * @param {string} uid
//  */
// const updateCaseStudy = async (link: NamedLink[], uid: string): Promise<void> => {
//     // update EmployerProgram.caseStudies with link
//     // update TeacherProgramData.caseStudies with link

    
// }


// type addRatingArg = "customerRatingT" |
//     "demoRatingT" |
//     "elevatorPitchRatingT" |
//     "innovationRatingT" |
//     "presentationRatingT" |
//     "problemRatingT" |
//     "sentencePitchRatingT" |
//     "solutionRatingT" |
//     "customerRatingE" |
//     "demoRatingE" |
//     "elevatorPitchRatingE" |
//     "innovationRatingE" |
//     "presentationRatingE" |
//     "problemRatingE" |
//     "sentencePitchRatingE" |
//     "solutionRatingE";
// /**
//  * Enables user to rate student work 
//  * User: Employer, Teacher
//  * @param {number} rating
//  * @param {string} uid
//  * @returns {Promise<void>}
//  */
// const addRating = async (rating: number, projectuid: string, arg: addRatingArg, uid: string): Promise<void> => {
//     // assert(usertype, employer) || assert(usertype, teacher)
//     // throw if employer tries to modify teacher data, vice versa
//     // StudentProject[arg] = rating
// }


// // /**
// //  * Uncheck incomplete Agenda Items
// //  * User: Employer, Teacher, Student
// //  * @param {EventItem[]} uncheckItem
// //  * @param {string} uid
// //  * @returns {Promise<void>}
// //  */
// // const uncheckAgendaItem = async (uncheckItem: EventItem[], uid: string): Promise<void> => {
// //     // EventItem.boolean = 0
// // }

// /**
//  * Allows the User to confirm a Program Brief
//  * User: Teacher, Student
//  * @returns {Promise<void>}
//  */
// const confirmProgramBrief = async (uid: string): Promise<void> => { //REVIEW LATER
//     // ONLY ONE CAN BE CONFIRMED
//     // ReviewedLink.reviewd = 1
//     // lastUpdate = timestamp
<<<<<<< HEAD
// }
=======
// }
>>>>>>> page/program.firebase

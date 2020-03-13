import { NonFunctionKeys } from 'utility-types';
import { FbStore } from './../index';
import { SET_USER } from './../Auth/mutation-types';
import { Dependency } from '@/utilities/dependency';
import { AgendaTemplate, NamedLink } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action, Mutation, MutationAction } from "vuex-module-decorators"
import firestore, { firebaseApp as fb, firebase } from '@/firebase/init'
import { Classroom, EmployerProgram, GeneralUser, Project, TeacherProgramData, studentClassroom } from './types/types'
const _ = require('lodash');
const assert = require('assert')
import * as collections from '@/store/Database/types/types.ts'
type coll = typeof  collections
let col:coll = ""

@Module({ namespaced: true, name: 'Fb' })
export default class Fb extends VuexModule {
    public firestore = firestore
    public storage = fb.storage()
    // public currentTeacherProgramUID: string | null = nullD
    public currentTeacherProgramData: TeacherProgramData | null = null
    // public currentEmployerProgramUID: string | null = null
    public currentEmployerProgram: EmployerProgram | null = null
    public currentClassroom: Classroom | null = null
    public FBUser: firebase.User | null = null
    public currentUserProfile: GeneralUser | null = null
    public currentProject: Project | null = null
    public currentStudentClassroom: studentClassroom | null = null
    

    //  @Dependency('FBUser')
    get userDocRef() {
        return firestore.collection('GeneralUser').doc(this.FBUser!.uid);
    }
    get userUid() {
        return this.FBUser?.uid
    }
    get currentEmployerProgramUID() {
        return this.currentEmployerProgram?.employerProgramId
    }
    get currentTeacherProgramUID() {
        return this.currentTeacherProgramData?.teacherProgramId || this.currentUserProfile?.teacherProgramDataIds[this.currentEmployerProgramUID!]
    }
    //  @Dependency('FBUser')
    get storageRef() {
        return this.storage.ref();
    }
    // get getCurrentEmployerProgram() {
    //     return this.currentEmployerProgram;
    // }
    // get getCurrentUserProfile() {
    //     return this.currentUserProfile
    // }

    //  @Dependency('currentUserProfile')
    get userCitizenType() {
        return this.currentUserProfile?.citizenType;
    }
   
    @Mutation
    [SET_USER](userDoc: firebase.User | null): void {
        this.FBUser = userDoc
    }
    
    @MutationAction({ mutate: ['currentUserProfile'] })
    async initCurrentUserProfile(arg: GeneralUser | string) {
        return {
            currentUserProfile: (typeof arg === "string")
                ? (await firestore.collection("GeneralUser").doc(arg).get()).data<GeneralUser>()
                : arg
        }
    }
    //  @Dependency('FBUser')
    @MutationAction({ mutate: ['currentEmployerProgram'] })
    async initCurrentEmployerProgram(arg: EmployerProgram | string) {
        if (typeof arg === "string") {
            let programData = (await (firestore.collection("EmployerProgram").doc(arg).get())).data<EmployerProgram>()
            return { currentEmployerProgram: programData }
        }
        else {
            return { currentEmployerProgram: arg }
        }
    }
    @MutationAction({ mutate: ['currentTeacherProgramData'] })
    async initCurrentTeacherProgramData(arg: TeacherProgramData | string | null) {
        if (typeof arg === "string")
            return { currentTeacherProgramData: (await (firestore.collection("TeacherProgramData").doc(arg).get())).data<TeacherProgramData>() }
        else
            return { currentTeacherProgramData: arg }
    }
    @MutationAction({ mutate: ['currentClassroom'] })
    async initcurrentClassroom(arg: Classroom | string) {
        if (typeof arg === "string")
            return { currentClassroom: (await (firestore.collection("Classroom").doc(arg).get())).data<Classroom>() }
        else
            return { currentClassroom: arg }
    }
    @MutationAction({ mutate: ['currentProject'] })
    async initCurrentProject(arg: Project | string | null) {
        if (typeof arg === "string")
            return { currentProject: (await (firestore.collection("Project").doc(arg).get())).data<Project>() }
        else if (arg)
            return { currentProject: arg }
        else {
            return { currentProject: arg }
        }
    }
    @MutationAction({ mutate: ['currentStudentClassroom'] })
    async initCurrentStudentClassroom(arg: studentClassroom | string | null) {
        if (typeof arg === "string")
            return { currentStudentClassroom: (await (firestore.collection("studentClassroom").doc(arg).get())).data<Project>() }
        else if (arg)
            return { currentStudentClassroom: arg }
        else {
            return { currentStudentClassroom: arg }
        }
    }
    @MutationAction({ mutate: ['currentUserProfile'], rawError: true })
    async updateCurrentUserProfile(property: Partial<GeneralUser>) {
        const state = (this.state as Pick<Fb, NonFunctionKeys<Fb>>)
        const uid = state.FBUser?.uid
        await firestore.collection('GeneralUser').doc(uid).update<GeneralUser>({ ...property, lastUpdate: firebase.firestore.FieldValue.serverTimestamp() });
        return { currentUserProfile: Object.assign(property, state.currentUserProfile) };
    }
    //  @Dependency('currentEmployerProgramUID', 'currentEmployerProgram')
    @MutationAction({ mutate: ['currentEmployerProgram'] })
    async updateCurrentEmployerProgram(property: Partial<EmployerProgram>) {
        const state = (this.state as Pick<Fb, NonFunctionKeys<Fb>>)
        const uid = state.currentEmployerProgram?.employerProgramId
        await firestore.collection('EmployerProgram').doc(uid).update<EmployerProgram>({ ...property, lastUpdate: firebase.firestore.FieldValue.serverTimestamp() });
        // console.log(Object.assign(property, this.currentEmployerProgram))
        // console.log({ property, currentEmployerProgram: this.currentEmployerProgram,})
        return { currentEmployerProgram: Object.assign(property, state.currentEmployerProgram) };
    }

    //  @Dependency('currentEmployerProgramUID', 'currentTeacherProgramData')
    @MutationAction({ mutate: ['currentTeacherProgramData'] })
    async updateCurrentTeacherProgramData(property: Partial<TeacherProgramData>) {
        const state = (this.state as Pick<Fb, NonFunctionKeys<Fb>>)
        const uid = state.currentTeacherProgramData?.teacherProgramId
        await firestore.collection('TeacherProgramData').doc(uid).update<TeacherProgramData>({ ...property, lastUpdate: firebase.firestore.FieldValue.serverTimestamp() });
        return { currentTeacherProgramData: Object.assign(property, state.currentTeacherProgramData) }
    }

    //  @Dependency('currentProject')
    @MutationAction({ mutate: ['currentProject'] })
    async updateCurrentProject(property: Partial<Project>) {
        const state = (this.state as Pick<Fb, NonFunctionKeys<Fb>>)
        const uid = state.currentProject?.projectId
        await firestore.collection('Project').doc(uid).update<Project>({ ...property, lastUpdate: firebase.firestore.FieldValue.serverTimestamp() });
        return { currentProject: Object.assign(property, state.currentProject) }
    }
    @MutationAction({ mutate: ['currentStudentClassroom'] })
    async updateCurrentStudentClassroom(property: Partial<studentClassroom>) {
        const state = (this.state as Pick<Fb, NonFunctionKeys<Fb>>)
        const uid = state.currentStudentClassroom?.studentClassroomId
        await firestore.collection('studentClassroom').doc(uid).update<studentClassroom>(Object.assign({}, { ...property, lastUpdate: firebase.firestore.FieldValue.serverTimestamp() }));
        return { currentStudentClassroom: Object.assign(property, state.currentStudentClassroom) }
    }
    @Action({rawError:true})
    getMyDoc(collection:firebase.firestore.Collection){
        return firestore.collection(collection).doc(this.FBUser!.uid)
    }
    @Action({ commit: 'initCurrentEmployerProgram ' })
    async fetchEmployerProgram(employerProgramUID: string) {
        const snapshot = await firestore.collection('EmployerProgram').doc(employerProgramUID).get();
        if (!snapshot.exists)
            throw new Error(`Failed to fetch employer program with uid of ${employerProgramUID}`);
        return snapshot.data<EmployerProgram>();
    }

    async switchCurrentEmployerProgramWithProgramUID(employerProgramUID: string) {
        await this.fetchEmployerProgram(employerProgramUID)
    }

    @Action({ commit: 'initCurrentEmployerProgram' })
    async switchCurrentEmployerProgramWithProgramObject(program: EmployerProgram) {
        return program;
    }

    //  @Dependency('FBUser', 'employerProgram', 'storage')
    async createProgramBrief(file: File) {
        const fileName = file.name; // should validate the name of the file on the frontend
        const filePath = `program_briefs/${this.FBUser!.uid}/${fileName}`;
        const fileRef = this.storageRef!.child(filePath);
        await fileRef.put(file);
        const index = _.findIndex(this.currentEmployerProgram!.programBrief!, ['name', fileName]);
        if (index < 0) {
            const newProgramBrief = [...this.currentEmployerProgram!.programBrief!, {
                linkName: fileName,
                link: filePath
            }]
            await this.updateCurrentEmployerProgram({ programBrief: newProgramBrief });
        } else {
            this.currentEmployerProgram!.programBrief![index].link = filePath;
            const newProgramBrief = [...this.currentEmployerProgram!.programBrief!]
            await this.updateCurrentEmployerProgram({ programBrief: newProgramBrief });
        }
    }

    async reuploadProgramBrief(file: File) {
        await this.createProgramBrief(file); // it's the same shit
    }

    //  @Dependency('FBUser', 'employerProgram', 'storageRef')
    async deleteProgramBrief(fileName: string) {
        const index = _.findIndex(this.currentEmployerProgram!.programBrief, ['name', fileName]);
        if (index < 0) {
            throw new Error('file with associated name does not exist')
        } else {
            await this.storageRef!.child(`program_briefs/${this.FBUser!.uid}/${fileName}`).delete();
            const newProgramBrief = _.remove(this.currentEmployerProgram!.programBrief, (n: any) => n.name === fileName);
            await this.updateCurrentEmployerProgram({ programBrief: newProgramBrief });
        }
    }

    async renameBrief(newFile: File, originalFileName: string) {
        await this.createProgramBrief(newFile);
        await this.deleteProgramBrief(originalFileName);
    }


    /**
     * Enables User to create an Agenda
     * User: Employer
     * @param {AgendaTemplate} textEntry
     * @param {string} uid
     */
    async createExternshipAgenda(externshipDayAgenda: AgendaTemplate, EmployerProgramId: string) {
        assert(this.userCitizenType === 'employer', 'User type not emplyer');
        await this.updateCurrentEmployerProgram({ externshipDayAgenda })
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
    async updateCaseStudy(link: NamedLink[]) {
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
    @Action({ rawError: true })
    async createTeacherProgramData(employerProgramId: string) {
        let uid = this.currentEmployerProgram ? this.currentUserProfile?.teacherProgramDataIds[this.currentEmployerProgram.employerProgramId] : undefined

        if (uid) {
            this.initCurrentTeacherProgramData((await this.firestore.collection("TeacherProgramData").doc(uid).get()).data())
        } else {
            uid = await this.firestore.collection("TeacherProgramData").doc().id
            let emptyTeacherProgramData: TeacherProgramData = {
                programSequence:{},
                teacherProgramId: uid,
                classroomIds: [],
                employerProgramId,
                caseStudies: [],
                created: firebase.firestore.FieldValue.serverTimestamp(),
                lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
            }
            this.firestore.collection("TeacherProgramData").doc(uid).set<TeacherProgramData>(emptyTeacherProgramData)
            this.updateCurrentUserProfile({
                [`teacherProgramDataIds.${employerProgramId}`]: uid
            })
            this.initCurrentTeacherProgramData(emptyTeacherProgramData)
        }

    }
    /**
     * Allows User to create a classroom 
     * User: Teacher
     * @param {string} uid
     * @returns {Promise<voiv>}
     */
    @Action({ rawError: true })
    async createClassroom({ teacherProgramId, className, employerProgramId }: { className: string, teacherProgramId: string, employerProgramId: string }) {
        assert(this.context.getters["userCitizenType"] === 'teacher', 'User type not teacher');
        const batch = firestore.batch();
        const classroomId = firestore.collection('Classroom').doc().id;
        const classroom: Classroom = {
            studentIds: [],
            projectIds: [],
            classroomId,
            teacherId: this.FBUser!.uid,
            teacherProgramId,
            employerProgramId,
            className,
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }
        batch.update(firestore.collection("TeacherProgramData").doc(teacherProgramId), { classroomIds: firebase.firestore.FieldValue.arrayUnion(classroomId) })
        batch.set(firestore.collection('Classroom').doc(classroomId), classroom)
        await batch.commit()
        return firestore.collection('Classroom').doc(classroomId)
        // update current classroom ?
    }
    @Action({ rawError: true })
    async joinClassroom({ classroomUid, studentUid }: { classroomUid: string, studentUid: string }) {
        const batch = firestore.batch()
        const classroomRef = firestore.collection('Classroom').doc(classroomUid);
        const studentRef = firestore.collection('GeneralUser').doc(studentUid);

        batch.update<Classroom>(classroomRef, {
            studentIds: firebase.firestore.FieldValue.arrayUnion(studentUid)
        })
        batch.update<GeneralUser>(studentRef, {
            classroomIds: firebase.firestore.FieldValue.arrayUnion(classroomUid)
        })
        batch.set<studentClassroom>(firestore.collection("studentClassroom").doc(classroomUid+studentUid),{
            studentClassroomId:classroomUid+studentUid,
            studentId:studentUid,
            classroomId:classroomUid,
        })
        await batch.commit()
    }



    /**
     * Allows User to rename a classroom
     * User: Teacher
     * @param {string} className
     * @param {string} uid
     * @returns {Promise<void>}
     */
    async renameClassroom(classroomId: string, className: string, uid: string) {
        // Classroom.className = className
        // Classroom.lastUpdate = timestamp
        await firestore.collection('Classroom').doc(classroomId).update({ className });
        // update current classroom ?
    }
    @Action({ rawError: true }) 
    async getFileLink({ file, filePath, index }: { file: File, filePath: string, index?: number }): Promise<NamedLink> {
        let childPath: string
        if (filePath.charAt(filePath.length - 1) === "/")
            childPath = filePath + file.name
        else
            childPath = `${filePath}/${file.name}`
        if (index)
            childPath = `${childPath}(${index})`
        let fileRef = FbStore.storageRef.child(childPath)
        try {
            let res = await FbStore.storageRef.child(childPath).getDownloadURL();
            // file exists already
            return await this.getFileLink({ file, filePath, index: index ? index + 1 : 1 })
        } catch{
            // file doesnt exist yet
            let snapshot = await fileRef.put(file)
            return {
                linkName: index ? `${file.name}(${index})` : file.name,
                link: await snapshot.ref.getDownloadURL()
            }
        }
    }


    /**
     * Allows User to delete a classroom
     * User: Teacher
     * @param {string} classroomId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    @Action({ rawError: true })
    async deleteClassroom(classroomId: string) {

        const classroomRef = firestore.collection('Classroom').doc(classroomId);
        const classroomSnapshot = await classroomRef.get();
        const studentsSnapshot = await firestore.collection('GeneralUser').where("classroomIds", 'array-contains', classroomId).get();
        // console.log(studentsSnapshot)
        if (!classroomSnapshot.exists)
            throw "classroom does not exist!"

        const classroomData = classroomSnapshot.data<Classroom>();
        const projectList = classroomData.projectIds;
        const teacherId = classroomData.teacherProgramId;
        const batch = firestore.batch();
        if (projectList?.length) {

            projectList.forEach(pid => {
                const projectRef = firestore.collection("Project").doc(pid);
                batch.delete(projectRef);
            });
        }
        studentsSnapshot.forEach(sRef => {
            batch.update(sRef.ref, {
                classroomIds: firebase.firestore.FieldValue.arrayRemove(classroomId)
            })
            projectList.forEach(pid => {
                batch.update(sRef.ref, {
                    projectIds: firebase.firestore.FieldValue.arrayRemove(pid)
                })
            })
        })
        const teacherRef = firestore.collection("TeacherProgramData").doc(teacherId);
        batch.update(teacherRef, {
            classroomIds: firebase.firestore.FieldValue.arrayRemove(classroomId)
        })
        // projectList.forEach(pid => {
        //     batch.update(teacherRef, {
        //         projectIds: firebase.firestore.FieldValue.arrayRemove(pid)
        //     })
        // })
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
    // @Dependency('currentUserProfile')
    @Action({ rawError: true }) 
    async switchClassroom({ oldClassroomId, newClassroomId, studentId }: { oldClassroomId: string, newClassroomId: string, studentId: string }) {
        // kick student from project
        const batch = firestore.batch();
        const oldClassroomRef = firestore.collection('Classroom').doc(oldClassroomId);
        const newClassroomRef = firestore.collection('Classroom').doc(newClassroomId);
        const studentRef = firestore.collection('GeneralUser').doc(studentId);
        const oldStudentClassroomRef = firestore.collection("studentClassroom").doc(oldClassroomId + studentId)
        const newStudentClassroomRef = firestore.collection("studentClassroom").doc(newClassroomId+studentId)

        const classroomDocRef = await oldClassroomRef.get();
        const studentDocRef = await studentRef.get();
        const oldStudentClassroomData=  (await oldStudentClassroomRef.get()).data()
        if (!studentDocRef.exists || !classroomDocRef.exists)
            throw "Student / classroom not exist"

        const projectIds = classroomDocRef.data<Classroom>()!.projectIds; // get all project ids under old classroom
        projectIds.forEach(pid => { // remove this user from all those project
            const projectRef = firestore.collection('Project').doc(pid);
            batch.update(projectRef, {
                teamMembersIds: firebase.firestore.FieldValue.arrayRemove(studentId)
            })
        })
        batch.update(studentRef, { // remove old classroom uid from user's classroomIds
            classroomIds: firebase.firestore.FieldValue.arrayRemove(oldClassroomId)
        })
        batch.update(oldClassroomRef, { // remove studentuid from old classroom
            studentIds: firebase.firestore.FieldValue.arrayRemove(studentId)
        })
        batch.update(studentRef, { // add the new one, i think there's something wrong with the db design, should add user's uid into classroom 
            classroomIds: firebase.firestore.FieldValue.arrayUnion(newClassroomId)
        })

        batch.update(newClassroomRef, { // add studentuid to new classroom
            studentIds: firebase.firestore.FieldValue.arrayUnion(studentId)
        })
        batch.delete(oldStudentClassroomRef)

        batch.update(newStudentClassroomRef,{
            ...Object.assign(oldStudentClassroomData,{studentClassroomId:newStudentClassroomRef.id,classroomId:newClassroomId})
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
    @Action({ rawError: true })
    async switchProject({ oldProjectId, newProjectId, studentId }: { oldProjectId?: string, newProjectId: string, studentId: string }) {
        // remove student.id with studentId from Project.teamMembers with oldProjectId
        // Student.projectIds[clasroomID] = newProjectId
        if (oldProjectId)
            await this.leaveProject({ projectId: oldProjectId, uid: studentId });
        await this.joinProject({ projectId: newProjectId, uid: studentId });
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
    @Action({ rawError: true }) 
    async createProject({ teamName, classroomId }: { teamName: string, classroomId: string }) {
        let createdByTeacher: boolean = false;
        if ((this.currentUserProfile as GeneralUser).citizenType == 'teacher')
            createdByTeacher = true;
        const projectId = firestore.collection('Project').doc().id;
        const project: Project = {
            teamName,
            programSequence: {},
            practiceLog: {},
            projectId,
            classroomId,
            createdByTeacher,
            teamMembersIds: [],
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        }
        await firestore.runTransaction(async transaction => {
            const classroomRef = firestore.collection('Classroom').doc(classroomId);
            return transaction.get(classroomRef).then(doc => {
                if (!doc.exists) {
                    throw `Document does not exist`
                }
                const classroomData = doc.data<Classroom>()
                const projectRef = firestore.collection('Project').doc(projectId);
                const employerProgramRef = firestore.collection('EmployerProgram').doc(classroomData!.employerProgramId);

                transaction
                    .set(projectRef, project)
                    .update(employerProgramRef, {
                        projectIds: firebase.firestore.FieldValue.arrayUnion(projectId)
                    }).update(classroomRef, {
                        projectIds: firebase.firestore.FieldValue.arrayUnion(projectId)
                    })
            })

        })
        return projectId
    }
    @Action({ rawError: true })
    async getStudentName({ studentUid, studentName }: { studentUid?: string, studentName?: { firstName: string, lastName: string } }): Promise<string> {
        if ((studentUid && studentName) || !(studentUid || studentName))
            throw ("Only one parameter must be defined")
        return (({ firstName, lastName }) => (_.startCase(_.lowerCase(firstName + " " + lastName))))(studentUid ? (await firestore.collection("GeneralUser").doc(studentUid).get()).data<GeneralUser>() : studentName!)
    }
    /**
     * Allows User to rename a team
     * User: Teacher or Student
     * @param {string} newProjectName
     * @param {string} projectId
     */
    @Action({ rawError: true })
    async renameProject({ newProjectName, projectId }: { newProjectName: string, projectId: string }) {
        // Project.teamName = newProjectName
        await firestore.collection('Project').doc(projectId).update({ teamName: newProjectName });
        // update current Project
    }
    @Action({ rawError: true })
    async findRelativeProject({ classroomId, studentId }: {
        classroomId: string,
        studentId: string
    }): Promise<Project | null> {
        return new Promise(async (resolve) => {
            let studentDoc = await firestore.collection("GeneralUser").doc(studentId).get()
            await Promise.all(studentDoc.data<GeneralUser>().projectIds.map(async id => {
                let projectDoc = await firestore.collection("Project").doc(id).get()
                if (projectDoc.data<Project>().classroomId === classroomId)
                    resolve(projectDoc.data())
            }))
            resolve(null)
        })

    }
    @Action({ rawError: true })
    async findRelativeClassroom({ employerProgramId, studentId }: { employerProgramId: string, studentId: string }) {
        let studentDoc = await FbStore.firestore.collection("GeneralUser").doc(studentId).get()
        return (await Promise.all(studentDoc.data<GeneralUser>().classroomIds.map(
            async classId => ( await FbStore.firestore.collection("Classroom").doc(classId).get()).data<Classroom>() 
            ))).filter(
                classData => classData.employerProgramId == employerProgramId
            )[0]

    }
    /**
     * Allows User to delete a team
     * User: Teacher 
     * @param {string} projectId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    // @Dependency('currentUserProfile')
    @Action({ rawError: true }) 
    async deleteProject(projectId: string) {
        // remove projectId from every student's student.projectId interface X 
        // remove projectId from classroom.projectId  X 
        // remove projectId from employerProgram.Id 
        // delete project with Project.Id = projectId X
        // User must be a teacher X
        assert(this.userCitizenType === 'teacher', 'User type not teacher');
        const batch = firestore.batch();
        const studentsSnapshot = await firestore.collection('GeneralUser').where('projectIds', 'array-contains', projectId).get();
        const projectDocSnapshot = await firestore.collection('Project').doc(projectId).get();
        if (!projectDocSnapshot.exists) throw "project does not exist"

        const projectData = projectDocSnapshot.data<Project>()
        const classroomDocSnapshot = await firestore.collection('Classroom').doc(projectData!.classroomId).get();
        const classroomData = await classroomDocSnapshot.data<Classroom>();
        const employerPuid = classroomData!.employerProgramId;
        const employerProgramRef = firestore.collection('EmployerProgram').doc(employerPuid);

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
    // @Dependency('currentUserProfile')
    @Action({ rawError: true }) 
    async joinProject({ projectId, uid }: { projectId: string, uid?: string }) {
        // append Student.id to Project.teamMembers where Project.Id = projectId 
        // add projectId to Student.projectIds
        const myuid = uid || this.FBUser!.uid
        const batch = firestore.batch();
        const projectRef = firestore.collection('Project').doc(projectId);
        const studentRef = firestore.collection('GeneralUser').doc(myuid);

        batch.update(projectRef, {
            teamMembersIds: firebase.firestore.FieldValue.arrayUnion(myuid)
        });
        batch.update(studentRef, {
            projectIds: firebase.firestore.FieldValue.arrayUnion(projectId)
        });
        await batch.commit();
        // await firestore.collection('Project').doc(projectId).update({
        //     teamMembersIds: firebase.firestore.FieldValue.arrayUnion(this.FBUser!.uid)
        // })
    }
    /**
     * Allows User to leave a Project
     * User: Student
     * @param {string} projectId
     * @param {string} uid
     * @returns {Promise<void>}
     */
    // @Dependency('currentUserProfile')
    @Action({ rawError: true }) 
    async leaveProject({ projectId, uid }: { projectId: string, uid?: string }) {
        // remove student with Student.id = uid from Project.teamMembers where Project.id = projectId
        // remove projectId from Student.projectIds
        const myuid = uid || this.FBUser!.uid
        const batch = firestore.batch();
        const projectRef = firestore.collection('Project').doc(projectId);
        const studentRef = firestore.collection('GeneralUser').doc(myuid);

        batch.update(projectRef, {
            teamMembersIds: firebase.firestore.FieldValue.arrayRemove(myuid)
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
    async addProgram(shareCode: string, uid: string) {
        // add employerProgramId to GeneralUser's employerProgramIds array 
        // GeneralUser.employerProgramIds.push(employerProgramId), where GeneralUser.userId == uid
        // GeneralUser.initializeProgram = timestamp
        const snapshot = await firestore.collection('EmployerProgram').where("shareCode", "==", shareCode).limit(1).get();
        const employerProgram = snapshot.docs[0].data();
        const emppid = employerProgram.employerProgramId;
        await firestore.collection('GeneralUser').doc(this.FBUser!.uid).update({
            employerProgramIds: firebase.firestore.FieldValue.arrayUnion(emppid),
            [`initializeProgram/${emppid}`]: firebase.firestore.FieldValue.serverTimestamp()
        });
        // await firestore.runTransaction( async transaction => {
        //         const meRef = firestore.collection('GeneralUser').doc(this.FBUser!.uid);
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
        const batch = firestore.batch();
        const userRef = firestore.collection('GeneralUser').doc(this.FBUser!.uid);

        batch.update(userRef, {
            employerProgramIds: firebase.firestore.FieldValue.arrayRemove(employerProgramId)
        });
        batch.update(userRef, {
            [`initializeProgram/${employerProgramId}`]: firebase.firestore.FieldValue.delete()
        });
        await batch.commit();
        // remove employerProgramId from GeneralUser employerProgramIds array, where GeneralUser.userId == uid
        // delete timestamp from GeneralUser.initializeProgram that corresponds to employerProgramId 

        // await firestore.collection('GeneralUser').doc(this.FBUser!.uid).update({
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
// }
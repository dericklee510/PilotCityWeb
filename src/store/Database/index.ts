import { AgendaTemplate, NamedLink } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators" //action unused
import { firebaseApp as fb } from '@/firebase/init'
import { EmployerProgram } from './types/types' 

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
    updateEmployerProgram(property: any) {
        
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

    createProgramBrief = async (file:File):Promise<void> => {
        if (!this.getCurrentEmployerProgram)
            throw new Error('Current EmployerProgram is not initialized')
        if (!this.storageRef)
            throw new Error('Can\'t find cloud storage ref')
        // File name
        // Store file in FB Storage
        const fileName = file.name; // should validate the name of the file on the frontend
        const filePath = `program_briefs/${fileName}`;
        const fileRef = this.storageRef.child(filePath);
        const snapshot = await fileRef.put(file);
        
    }
        
    reuploadProgramBrief = async (file:File, uid:string):Promise<void> => {
        // delete file in FB Storage
        // upload new file
        await this.createProgramBrief(file);
    }

    deleteProgramBrief = async (empProgramId:string):Promise<void> => {
        if (!this.storageRef)
            return;
        let path: string;
        const snapshot = await this.firestore.collection('EmployerProgram').doc(empProgramId).get();
        if (snapshot.exists) {
            const d = snapshot.data()!
            // get that stupid ass link 
            path = "temp"
        } else {
            throw new Error("err msg")
        }
        // call a rest api to delete that file: https://cloud.google.com/storage/docs/deleting-objects
    }
}    

const renameBrief = async (name:string, uid:string):Promise<void> => {}

const uploadVideo = async (url:string):void => {
    // check link
    if(!doesLinkexist(url))
        throw("link does not exist")
    // upload video
}


/**
 *Updates Case Study for creation and removal
 *
 * @param {NamedLink[]} link
 * @param {string} uid
 */
const updateCaseStudy = async (link:NamedLink[], uid:string) => {
    // update EmployerProgram.programBrief with link
}

const addRating = async (rating:number, uid:string):Promise<void> => {
    // StudentProject.rating = rating
}

const externshipAgenda = async (textEntry:AgendaTemplate, uid:string):Promise<void></void> => {
    // EmployerProgram.externshipDayAgenda = textEntry
}

const viewExternshipAgenda = async (eventCompleted:Event, uid:string) => {
    // Event
}
 






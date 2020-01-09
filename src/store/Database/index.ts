import { AgendaTemplate, NamedLink } from './types/utilities';
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
    async addRating(rating:number, uid:string) {
        // StudentProject.rating = rating
    }

    @Action({ commit: 'updateEmployerProgram' })
    async externshipAgenda(textEntry:AgendaTemplate, employerProgramUID:string){
        return {
            externshipAgenda: textEntry
        }
    }

    async viewExternshipAgenda(eventCompleted:Event, uid:string){
        // Event
    }
}    

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

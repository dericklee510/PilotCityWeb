import { AgendaTemplate, NamedLink } from './types/utilities';
/* eslint-disable-next-line */
import { Module, VuexModule, Action } from "vuex-module-decorators" //action unused
import firestore from '@/firebase/init'



@Module({ namespaced: true, name: 'Fb' })
export default class Fb extends VuexModule {
    public firestore = firestore

    get userDocRef() { //no return type
        let user = this.context.rootState.Auth.user as firebase.User | null
        return (user) ? firestore.collection('users').doc(user.uid) : null
    }
    
    public 
}    





const createProgramBrief = async (file:File):Promise<void> => {
    // File name
    // Store file in FB Storage
    // Create Employer Program 
    return
}

const reuploadProgramBrief = async (file:File, uid:string):Promise<void> => {
    // delete file in FB Storage
    // upload new file
    return 
}

const deleteProgramBrief = async (uid:string):Promise<void> => {}

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
 






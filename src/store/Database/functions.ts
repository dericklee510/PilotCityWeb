import { NamedLink } from './types';

class EmployerProgram implements EmployerProgram {
    id:string
    programBriefName?:string
    programBriefUrl?:string

    getProgramInfo():EmploåyerProgram{

    }
    constructor(uid:string){
        this.id = uid
    }
    async init(){
        let {programBriefName,programBriefUrl} = this.getProgramInfo()
        this.programBriefName = programBriefName
        this.programBriefUrl = programBriefUrl
    }
}


const createProgramBrief = async (file:File):EmployerProgram => {
    // File name
    // Store file in FB Storage
    // Create Employer Program 
    return program
}

const reuploadProgramBrief = async (file:File, uid:string):EmployerProgram => {
    // delete file in FB Storage
    // upload new file
    return program
}

const deleteProgramBrief = async (uid:string):void => {}

const renameBrief = async (name:string, uid:string):EmployerProgram => {}

const uploadVideo = async (url:string):void => {
    // check link
    if(!doesLinkexist(url))
        throw("link does not exist")
    // upload video
}

const uploadCaseStudies = async (link:NamedLink, uid):


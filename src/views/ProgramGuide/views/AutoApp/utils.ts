import { Project } from './../../../../store/Database/types/types';
export const validateArr = (arr: any[]) => (arr.length ? arr.length > 2 ? 'complete' : 'incomplete' : 'missing')
export const validateStr = (str: string | undefined) => str ? str.split(' ').length > 2 ? 'complete' : 'incomplete' : 'missing'
export const validateBool = (bool: boolean | undefined) => bool ? 'complete' : 'missing'
export function validateBmc(bmc: Project): "complete" | "incomplete" | "missing" {
    let bmcFields = [bmc.problem, bmc.solution, bmc.innovation, bmc.customer]
    return bmcFields.some(field => validateStr(field)) ? bmcFields.every(field => validateStr(field)) ? "complete" : "incomplete" : "missing"
}
export function assignValidator(field: AutoAppValue['value']) {
    if (Array.isArray(field)) {
        return validateArr(field)
    }
    else if (typeof field === 'string' || typeof field === "undefined") {
        return validateStr(field)
    }
    else if (typeof field === 'boolean') {
        return validateBool(field)
    }
    else {
        return validateBmc(field)
    }
}
export type AutoAppKeys = "Get Started" |
    "Request for Pilot (RFP)" |
    "Introduction Video" |
    "Team" |
    "Training Day" |
    "Practice Log" |
    "Research" |
    "Business Model Canvas" |
    "One Sentence Pitch" |
    "Elevator Pitch" |
    "Hack Day" |
    "Reflection" |
    "Design & Prototype Process Log" |
    "Prototype Video" |
    "Presentation Link" |
    "Demo Day"
export type AutoAppValue = {
    value: boolean | string | any[] | undefined | Project
    weight?:number
    status:"complete" | "incomplete" | "missing"
}
export function assignWeights(AutoApp:Record<AutoAppKeys,AutoAppValue>){
    let unassignedCount = 0
    let assignedWeights = Object.keys(AutoApp).reduce((total,field) => {
        if(AutoApp[field as AutoAppKeys].weight){
            return total += AutoApp[field as AutoAppKeys].weight!
        }
        else {
            unassignedCount++
            return total
        }
    },0)
    if(assignedWeights > 1)
        throw("Assigned Weights cannot be greater than one")
    Object.keys(AutoApp).forEach(key => {
        if(!AutoApp[key as AutoAppKeys].weight)
            AutoApp[key as AutoAppKeys].weight = 1/unassignedCount*(1-assignedWeights)
    })
}
export function getCompletion(AutoApp:Record<AutoAppKeys,AutoAppValue>):number{
    assignWeights(AutoApp)
    return Object.keys(AutoApp).reduce((total,field)=> {
        switch(AutoApp[field as AutoAppKeys].status){
            case 'complete':
                return total += AutoApp[field as AutoAppKeys].weight!
            case 'incomplete':
                return total += .25*AutoApp[field as AutoAppKeys].weight!
            default:
                return total
        }
    },0)
}
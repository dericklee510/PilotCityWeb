import { ITeacherQuery, IPublicCitizenProfile, IEmployerQuery } from './types'
/* eslint-disable */
import { EMPLOYER_QUERY, PUBLIC_PROFILE_MUTATION } from './const';
import {
    Module,
    VuexModule,
    Action,
    Mutation,
    MutationAction
} from "vuex-module-decorators"
import * as firebase from 'firebase/app'
import { validateEmployerQuery, validateTeacherQuery } from "./validation"
import { GraphQLClient } from 'graphql-request'

export { tableToDecimal, findOther } from "../../utilities/graphql"
import { idToken } from 'rxfire/auth/dist/auth';
import { getSdk } from './global_types';
@Module({ namespaced: true, name: "Graphql" })
export default class Graphql extends VuexModule {
    public client = new GraphQLClient("https://20191119t140110-dot-pilotcity-firestore.appspot.com/graphql")
    
    public sdk = getSdk(this.client)

    public citizenProfileData: IPublicCitizenProfile | null = null

    async getPublicProfile(){
        let currentUser = firebase.auth().currentUser
        if(!currentUser)
            throw("not logged in")
        return this.sdk.publicProfileFetch({user_id:await currentUser.getIdToken()})
    }

    @MutationAction({mutate:['citizenProfileData']})
    async fetchCitizenProfile(publicProfile:(Omit<IPublicCitizenProfile,'id_token'>)){
        let currentUser = firebase.auth().currentUser
        if(!currentUser)
            throw("not logged in")
        return {
            citizenProfileData:{
                id_token:await currentUser.getIdToken(),
                ...publicProfile
            }
        }
    }
    @Action({})
    async createCitizenProfile(){
        if(!this.citizenProfileData)
            throw("citizenProfileData is undefined")
        let data;
        try {
            console.log(PUBLIC_PROFILE_MUTATION, this.citizenProfileData.id_token)
            data = await this.client.request(PUBLIC_PROFILE_MUTATION, this.citizenProfileData);
            console.log(data)
        } catch (err) {
            console.error(err.response.errors)
        }
    }
    public employerQueryData: IEmployerQuery | null = null
    public teacherQueryData: ITeacherQuery | null = null
    @MutationAction({ mutate: ['employerQueryData'] })
    async fetchQueryData() {
        let currentUser = firebase.auth().currentUser
        console.log(currentUser, "USER")
        if (currentUser) {
            return {
                employerQueryData: {
                    id_token: await currentUser.getIdToken(),
                    citizen_first_name: localStorage.citizen_first_name,
                    citizen_last_name: localStorage.citizen_last_name,
                    citizen_position: localStorage.citizen_position,
                    citizen_organization: localStorage.citizen_organization,
                    organization_division: localStorage.organization_division,
                    organization_location_text: localStorage.organization_location_text,
                    organization_location_lng: Number.parseFloat(localStorage.organization_location_lng),
                    organization_location_lat: Number.parseFloat(localStorage.organization_location_lat),
                    organization_industry: Number.parseInt(localStorage.organization_industry),
                    organization_industry_other: localStorage.organization_industry_other,
                    organization_product_list: ((localStorage.organization_product_list)as string).replace("[","{").replace("]","}"),
                    organization_product_employee_count: localStorage.organization_product_employee_count,
                    program_externship_time_first: localStorage.program_externship_time_first,
                    program_externship_time_second: localStorage.program_externship_time_second,
                    program_externship_time_third: localStorage.program_externship_time_third,
                    program_externship_options: Number.parseInt(localStorage.program_externship_options),
                    program_externship_options_other: localStorage.program_externship_options_other,
                    projects_min: Number.parseInt(localStorage.projects_min),
                    projects_max: Number.parseInt(localStorage.projects_max),
                    projects_engagement: Number.parseInt(localStorage.projects_engagement),
                    projects_engagement_2: Number.parseInt(localStorage.projects_engagement_2),
                    projects_solutions: ((localStorage.projects_solutions)as string).replace("[","{").replace("]","}"),
                    internships_project: Number.parseInt(localStorage.internships_project),
                    internships_project_other: localStorage.internships_project_other,
                    internships_hiring_adult: JSON.parse(localStorage.internships_hiring_adult),
                    internships_travel: Number.parseInt(localStorage.internships_travel),
                    internships_education: Number.parseInt(localStorage.internships_education),
                    internships_education_other: localStorage.internships_education_other,
                    internships_talent: Number.parseInt(localStorage.internships_talent),
                    internships_hours_week: Number.parseInt(localStorage.internships_hours_week),
                    internships_hours_day: Number.parseInt(localStorage.internships_hours_day),
                    internships_employer_of_record: Number.parseInt(localStorage.internships_employer_of_record),
                    internships_compensation: Number.parseInt(localStorage.internships_compensation),
                    internships_budget_min: Number.parseInt(localStorage.internships_budget_min),
                    internships_budget_max: Number.parseInt(localStorage.internships_budget_max),
                    internships_interview_option1: localStorage.internships_interview_option1,
                    internships_interview_option2: localStorage.internships_interview_option2,
                    internships_interview_option3: localStorage.internships_interview_option3,
                    internships_employment: JSON.parse(localStorage.internships_employment),
                    internships_position: Number.parseInt(localStorage.internships_position),
                }
            }
        }
        else
            return {
                employerQueryData: null
            }
    }

    get EmployerQueryisValid(): boolean {
        return (this.employerQueryData) ? validateEmployerQuery(this.employerQueryData) : false
    }
    @Action({ rawError: true })
    async SubmitEmployerQuery() {
        if (this.employerQueryData && validateEmployerQuery(this.employerQueryData)){
        let data;
        try {
            data = await this.client.request(EMPLOYER_QUERY, this.employerQueryData as IEmployerQuery);
        } catch (err) {
            console.error(err.response.errors)
        }}
    }
    get TeacherQueryisValid(): boolean {
        return this.teacherQueryData ? validateTeacherQuery(this.teacherQueryData) : false
    }

    @MutationAction({ mutate: ['teacherQueryData'] })
    async fetchTeacherQuery(teacherQuery: ITeacherQuery) {
        let {
            id_token,
            ...rest
        } = teacherQuery
        let currentUser = firebase.auth().currentUser
        if (currentUser)
            return {
                teacherQueryData: {
                    id_token: await currentUser.getIdToken(),
                    ...rest
                }
            }
        else
            return { teacherQueryData: null }
    }
}
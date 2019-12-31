import { tableToDecimal } from './../../../../utilities/graphql/index';
import { assert } from './../../../../utilities/types/index.d';
import { Test } from './../../../../utilities/types/index';
import { omitBy, isUndefined } from 'lodash'
import {
    CreateEmployerProfileMutationVariables
} from '../../../../store/Graphql/global_types'
import { jsToSQL, findOther } from '@/utilities/graphql'

import { AuthStore, GraphqlStore } from '../../../../store/index'

import { AutoCompleteAddress } from '@/components/GoogleMaps'
import { ICitizenBase } from '../../types'
import { CONST } from './const'
import {
    Employer_Profile_V1,
    Public_Citizen_Profile,
    MutationCreatePublicCitizenProfileArgs
} from '@/store/Graphql/global_types'


export interface Citizen {
    first_name: string;
    last_name: string;
    position: string;
    organization: string;
}

export interface Organization {
    department: string;
    location: AutoCompleteAddress;
    industry: string[];
    products_services: string[];
    employee_count: string;
}

export interface ProgramDetails {
    externship: {
        prefered_date: {
            primary: string;
            secondary: string;
            final: string;
        };
        contribution: string[];
    };
    project: {
        solutions: string[];
        capacity: {
            maximum: string;
            minimum: string;
        };
        engagement: {
            type: string;
            radius: string;
        };
    };
}
export interface Internship {
    project: string[];
    hiring_adult: boolean;
    travel: string;
    education_level: string[];
    talent: string[];
    days_week: string;
    hours_day: string;
    employer_of_record: string;
    compensation: string[];
    budget_min: number;
    budget_max: number;
    interview_1: string;
    interview_2: string;
    interview_3: string;
    employment: boolean;
    position_type: string[];

}

export interface EmployerPage {
    Base: ICitizenBase;
    Citizen: Citizen;
    Organization: Organization;
    ProgramDetails: ProgramDetails;
    Internship: Internship;
}
/**
 * Used to initialize properties for connecting to GraphQL
 *
 * @export
 * @class EmployerQueryForm
 * @extends {CONST}
 * @implements {Employer_Profile_V1}
 * @implements {MutationCreatePublicCitizenProfileArgs}
 */
export class EmployerQueryForm extends CONST implements Employer_Profile_V1, MutationCreatePublicCitizenProfileArgs {
    id_token!: string;

    // initially undefined
    // Base properties
    first_name: string

    last_name: string

    title: string

    profile_img_url?: string

    citizen_type: string

    citizen_first_name: string;

    citizen_last_name: string;

    citizen_position: string;

    citizen_organization: string;

    organization_division: string;

    organization_location_text: string;

    organization_location_lng: number;

    // float
    organization_location_lat: number;

    // float
    organization_industry: number;

    organization_industry_other: string;

    organization_product_list: string[];

    organization_product_employee_count: string;

    program_externship_time_first: string;

    // date YYYY-MM-DD
    program_externship_time_second: string;

    // date YYYY-MM-DD
    program_externship_time_third: string;

    // date YYYY-MM-DD
    program_externship_options: number;

    program_externship_options_other: string;

    projects_min: number;

    projects_max: number;

    projects_engagement: number;

    projects_engagement_2: number;

    projects_solutions!: string[]

    // CURRENTLY UNDEFINED JEROLD FIX THIS
    internships_project: number;

    internships_project_other: string;

    internships_hiring_adult: boolean;

    internships_travel: number;

    internships_education: number;

    internships_education_other: string;

    internships_talent: number;

    internships_hours_week: number;

    internships_hours_day: number;

    internships_employer_of_record: number;

    internships_compensation: number;

    internships_budget_min: number;

    internships_budget_max: number;

    internships_interview_option1: string;

    // date YYYY-MM-DD
    internships_interview_option2: string;

    // date YYYY-MM-DD
    internships_interview_option3: string;

    // date YYYY-MM-DD
    internships_employment: boolean;

    internships_position: number;

    [key: string]: any,

    /**
     * Loads the id_token and converts array to gql type.
     * Must be called after constructor.
     */
    init = async () => {
        if (!AuthStore.user) throw ('Not logged in')
        this.id_token = await AuthStore.user.getIdToken()
        jsToSQL(this)
    }


    async submitQuery() {
        if (await GraphqlStore.sdk.publicEmployerFetch({
            user_id: this.id_token
        })) { // if public citizen request is true then use create system
            await GraphqlStore.sdk.createPublicCitizenProfile({
                id_token: this.id_token,
                first_name: this.citizen_first_name,
                last_name: this.citizen_last_name,
                citizen_type: this.citizen_type,
                title: this.title,
                ...(this.profile_img_url && {
                    profile_img_url: this.profile_img_url
                })
            })
        // GraphqlStore.sdk.updateEmployerProfile({user_id:this.id_token})
        } else {
            await GraphqlStore.sdk.updatePublicProfile({
                id_token: this.id_token,
                first_name: this.citizen_first_name,
                last_name: this.citizen_last_name,
                citizen_type: this.citizen_type,
                title: this.title,
                ...(this.profile_img_url && {
                    profile_img_url: this.profile_img_url
                })
            })
            await GraphqlStore.sdk.createEmployerProfile(this)
        }
    }

    constructor(EmployerForm: EmployerPage) {
        super()

        /* #region  Syncs Base */
        this.first_name = EmployerForm.Base.firstName
        this.last_name = EmployerForm.Base.lastName
        this.citizen_type = EmployerForm.Base.citizenType
        this.title = EmployerForm.Base.honorific
        this.profile_img_url = EmployerForm.Base.profilePicture
        /* #endregion */

        /* #region  Syncs Citizen */
        this.citizen_first_name = EmployerForm.Citizen.first_name
        this.citizen_last_name = EmployerForm.Citizen.last_name
        this.citizen_position = EmployerForm.Citizen.position
        this.citizen_organization = EmployerForm.Citizen.organization

        /* #endregion */

        /* #region  Syncs Organization */
        let { location } = EmployerForm.Organization
        this.organization_division = EmployerForm.Organization.department
        this.organization_location_text = `${location.name} ${location.street_number} ${location.route}, ${location.locality}, ${location.administrative_area_level_1} ${location.postal_code}, ${location.country}`
        this.organization_location_lng = Number.parseFloat(EmployerForm.Organization.location.longitude)
        this.organization_location_lat = Number.parseFloat(EmployerForm.Organization.location.latitude)
        this.organization_industry = (tableToDecimal(this.ORGANIZATION_INDUSTRY_OPTIONS, EmployerForm.Organization.industry))
        this.organization_industry_other = findOther(this.ORGANIZATION_INDUSTRY_OPTIONS, EmployerForm.Organization.industry)
        this.organization_product_list = (EmployerForm.Organization.products_services)
        this.organization_product_employee_count = EmployerForm.Organization.employee_count
        /* #endregion */

        /* #region Syncs ProgramDetails   */
        this.program_externship_time_first = EmployerForm.ProgramDetails.externship.prefered_date.primary
        this.program_externship_time_second = EmployerForm.ProgramDetails.externship.prefered_date.secondary
        this.program_externship_time_third = EmployerForm.ProgramDetails.externship.prefered_date.final
        this.program_externship_options = tableToDecimal(this.PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS, EmployerForm.ProgramDetails.externship.contribution)
        this.program_externship_options_other = findOther(this.PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS, EmployerForm.ProgramDetails.externship.contribution)
        /* #endregion */

        /* #region Syncs Project  */
        this.projects_min = Number.parseInt(EmployerForm.ProgramDetails.project.capacity.minimum)
        this.projects_max = Number.parseInt(EmployerForm.ProgramDetails.project.capacity.maximum)
        this.projects_engagement = tableToDecimal(this.PROGRAMDETAILS_PROJECT_ENGAGEMENT_TYPE_OPTIONS, [
            EmployerForm.ProgramDetails.project.engagement.type
        ])
        this.projects_engagement_2 = tableToDecimal(this.PROGRAMDETAILS_PROJECT_ENGAGEMENT_RADIUS_OPTIONS, [
            EmployerForm.ProgramDetails.project.engagement.radius
        ])
        /* #endregion */

        /* #region Syncs Internship */
        // this.projects_solutions = ((EmployerForm.projects_solutions)as string).replace("[","{").replace("]","}")
        this.internships_project = tableToDecimal(this.INTERNSHIP_PROJECT_TYPE, EmployerForm.Internship.project)
        this.internships_project_other = findOther(this.INTERNSHIP_PROJECT_TYPE, EmployerForm.Internship.project)
        this.internships_hiring_adult = EmployerForm.Internship.hiring_adult
        this.internships_travel = tableToDecimal(this.ΙΝΤΕRN_TRAVEL_OPTIONS, [
            EmployerForm.Internship.education_level
        ])
        this.internships_education = tableToDecimal(this.INTERNSHIP_EDUCATION_OPTIONS, EmployerForm.Internship.education_level)
        this.internships_education_other = findOther(this.INTERNSHIP_EDUCATION_OPTIONS, EmployerForm.Internship.education_level)
        this.internships_talent = tableToDecimal(this.INTERNSHIP_TALENT_OPTIONS, EmployerForm.Internship.talent)
        this.internships_hours_week = Number.parseInt(EmployerForm.Internship.days_week)
        this.internships_hours_day = Number.parseInt(EmployerForm.Internship.hours_day)
        this.internships_employer_of_record = tableToDecimal(this.INTERNSHIP_EMPLOYER_OF_RECORD_OPTIONS, [
            EmployerForm.Internship.employer_of_record
        ])
        this.internships_compensation = tableToDecimal(this.INTERNSHIP_COMPENSATION_OPTIONS, EmployerForm.Internship.compensation)
        this.internships_budget_min = EmployerForm.Internship.budget_min
        this.internships_budget_max = EmployerForm.Internship.budget_max
        this.internships_interview_option1 = EmployerForm.Internship.interview_1
        this.internships_interview_option2 = EmployerForm.Internship.interview_2
        this.internships_interview_option3 = EmployerForm.Internship.interview_3
        this.internships_employment = EmployerForm.Internship.employment
        this.internships_position = tableToDecimal(this.INTERNSHIP_POSITION_TYPE_OPTIONS, EmployerForm.Internship.position_type)
        /* #endregion */
    }
}
let ref = new CONST()
let hashmap = {
    internships_compensation: {
        key:'Intership.compensation',
        ref:ref.INTERNSHIP_COMPENSATION_OPTIONS
    }
}
/**
 *This map is used to define conversions from query to page
 *
 * @interface SqlMap
 * @function conversionFunc
 * Used to convert key to key.to
 */
interface SqlMap{
    [key:string]: {
        to:string,
        ref?:string[]
        conversionFunc?: (<T1,T2>(from:T1,to:T2,ref_table:any[]) => T2 )
    }
}

function flipMap(hashMap:SqlMap):SqlMap {
    let map:SqlMap = {}
    Object.keys(hashMap).forEach(prop => {
        map[hashMap[prop].to] = {
            to:prop,
            ref:hashMap[prop].ref
        }
    })
    Object.assign(map,hashMap)
    return map
}


class SQLConversion<Query extends Record<string,any>,Page extends Record<string,any>>{
    toQuery(EmployerPage:Page) {
        let query:Record<string,any> = {}
        
        Object.keys(this.toQueryMap).forEach(prop => {
            type propType = typeof prop
            type queryType = Query[propType];
            let pageProp = EmployerPage[this.toQueryMap[prop].to]
            type pageType =  typeof pageProp;
            let conversionRef = this.toQueryMap[prop].ref
            if(conversionRef){
                if(Array.isArray(pageProp)){
                    try{
                        type T1 = Test<queryType,string>; // assume conversion from string[] to string
                        query[prop] = findOther(conversionRef,pageProp)
                    }catch { // only other case is conversoin from string[] to int
                        query[prop] = tableToDecimal(conversionRef,pageProp)
                    }
                }
            }
            else { // if conversionRef

            }
            try{ //if types are equal perform a direct assignment
                type T1 = Test<pageType,queryType>;
                query[prop] = pageProp
            } catch{ // will throw error if types are not equal
                try{
                    type T2 = Test<queryType,number>;   //Assume queryType is of type number
                let conversionRef = this.toQueryMap[prop].ref
                    if (conversionRef) // if conversion table is defined use it to convert
                        query[prop] = tableToDecimal(conversionRef,(Array.isArray(pageProp))?pageProp:[pageProp])
                    else {//if conversion table is not defined assume conversion of type string to number
                        query[prop] = Number.parseFloat(pageProp)
                    }
                } catch {
                    type T3 = Test<queryType,string>; // assume queryType is a string. Only case is string arr to string conversion
                    
                    
                }
                
            }
        })
        
    }
    flipMap(hashMap:SqlMap):SqlMap {
        let map:SqlMap = {}
        Object.keys(hashMap).forEach(prop => {
            map[hashMap[prop].to] = {
                to:prop,
                ref:hashMap[prop].ref
            }
        })
        Object.assign(map,hashMap)
        return map
    }
    get toQueryMap(){
        return flipMap(this.toPageMap)
    }
    
    constructor (private toPageMap:SqlMap){}
}
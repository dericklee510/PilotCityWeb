/* eslint-disable */
import { EMPLOYER_QUERY } from './const';
import { 
    Module, 
    VuexModule, 
    Action, 
    Mutation 
} from "vuex-module-decorators"
import {every} from "lodash"
import {GraphQLClient} from 'graphql-request'
import { IEmployerQuery } from './types'
@Module({ namespaced: true, name: "Graphql" })
export default class Storage extends VuexModule {
    private client = new GraphQLClient("http://localhost:8080/graphql")
    get EmployerQueryData(): IEmployerQuery & object {
        return {
            id_token: this.context.rootState.Auth.idToken,
            citizen_first_name: localStorage.citizen_first_name,
            citizen_last_name:localStorage.citizen_last_name,
            citizen_position:localStorage.citizen_position,
            citizen_organization:localStorage.citizen_organization,
            organization_division:localStorage.organization_division,
            organization_location_text:localStorage.organization_location_text,
            organization_location_lng:localStorage.organization_location_lng,
            organization_location_lat:localStorage.organization_location_lat,
            organization_industry:localStorage.organization_industry,
            organization_industry_other:localStorage.organization_industry_other,
            organization_product_list:localStorage.organization_product_list,
            organization_product_employee_count:localStorage.organization_product_employee_count,
            program_externship_time_first:localStorage.program_externship_time_first,
            program_externship_time_second:localStorage.program_externship_time_second,
            program_externship_time_third:localStorage.program_externship_time_third,
            program_externship_options:localStorage.program_externship_options,
            program_externship_options_other:localStorage.program_externship_options_other,
            projects_min:localStorage.projects_min,
            projects_max:localStorage.projects_max,
            projects_engagement:localStorage.projects_engagement,
            projects_engagement_2:localStorage.projects_engagement_2,
            projects_requests:localStorage.projects_requests,
            projects_missions:localStorage.projects_missions,
            projects_specifications:localStorage.projects_specifications,
            internships_project:localStorage.internships_project,
            internships_project_other:localStorage.internships_project_other,
            internships_hiring_adult:localStorage.internships_hiring_adult,
            internships_travel:localStorage.internships_travel,
            internships_education:localStorage.internships_education,
            internships_education_other:localStorage.internships_education_other,
            internships_talent:localStorage.internships_talent,
            internships_hours_week:localStorage.internships_hours_week,
            internships_hours_day:localStorage.internships_hours_day,
            internships_employer_of_record:localStorage.internships_employer_of_record,
            internships_compensation:localStorage.internships_compensation,
            internships_budget_min:localStorage.internships_budget_min,
            internships_budget_max:localStorage.internships_budget_max,
            internships_interview_option1:localStorage.internships_interview_option1,
            internships_interview_option2:localStorage.internships_interview_option2,
            internships_interview_option3:localStorage.internships_interview_option3,
            internships_employment:localStorage.internships_employment,
            internships_position:localStorage.internships_position,
        }
    }
    get EmployerQueryisValid():boolean{
       return every(this.EmployerQueryData, (field => field !== undefined))
    }
    @Action
    async SubmitEmployerQuery(){
        let data;
        try {
            data = await this.client.request(EMPLOYER_QUERY, this.EmployerQueryData);
          } catch(err) {
            console.error(err.response.errors)
          }
    }
}
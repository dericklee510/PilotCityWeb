import gql from 'graphql-tag'
import { AuthStore, GraphqlStore } from '@/store/index'


export const EmployerFetch = `
query getEmployerProfile($user_id:String!){
    EmployerProfile(user_id:$user_id){
citizen_first_name
citizen_last_name
citizen_position
citizen_organization
organization_division
organization_location_text
organization_location_lng
organization_location_lat
organization_industry
organization_industry_other
organization_product_list
organization_product_employee_count
program_externship_time_first
program_externship_time_second
program_externship_time_third
program_externship_options
program_externship_options_other
projects_min
projects_max
projects_engagement
projects_engagement_2
projects_solutions
internships_project
internships_project_other
internships_hiring_adult
internships_travel
internships_education
internships_education_other
internships_talent
internships_hours_week
internships_hours_day
internships_employer_of_record
internships_compensation
internships_budget_min
internships_budget_max
internships_interview_option1
internships_interview_option2
internships_interview_option3
internships_employment
internships_position
    }
}
`

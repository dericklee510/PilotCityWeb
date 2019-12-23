import { IEmployerQuery, ITeacherQuery } from './types'

const rules_hash = {
    id_token: 'string',
    citizen_first_name: 'string',
    citizen_last_name: 'string',
    citizen_position: 'string',
    citizen_organization: 'string',
    organization_division: 'string',
    organization_location_text: 'string',
    organization_location_lng: 'number',
    organization_location_lat: 'number',
    organization_industry: 'number',
    organization_industry_other: 'string',
    organization_product_list: 'string[]',
    organization_product_employee_count: 'string',
    program_externship_time_first: 'string',
    program_externship_time_second: 'string',
    program_externship_time_third: 'string',
    program_externship_options: 'number',
    program_externship_options_other: 'string',
    projects_min: 'number',
    projects_max: 'number',
    projects_engagement: 'number',
    projects_engagement_2: 'number',
    projects_solutions: 'string[]',
    internships_project: 'number',
    internships_project_other: 'string',
    internships_hiring_adult: 'boolean',
    internships_travel: 'number',
    internships_education: 'number',
    internships_education_other: 'string',
    internships_talent: 'number',
    internships_hours_week: 'number',
    internships_hours_day: 'number',
    internships_employer_of_record: 'number',
    internships_compensation: 'number',
    internships_budget_min: 'number',
    internships_budget_max: 'number',
    internships_interview_option1: 'string',
    internships_interview_option2: 'string',
    internships_interview_option3: 'string',
    internships_employment: 'boolean',
    internships_position: 'number'
}

const teacher_hash = {
    id_token: 'string',
    school_district: 'string', // int
    school_name: 'string',
    school_location: 'string',
    bell_schedule: 'string',
    classroom_room_location: 'string',
    classroom_room_phone: 'string',
    extension: 'string',
    preferred: 'number', // int
    preferred_other: 'string',
    tool_equipment: 'string[]',
    courses_school_year: 'string',
    prep_period: 'number', // int
    course_information: 'string',
    enrolled_courses: 'string',
    enagement_alternative: 'boolean',
    purchase_emp_product: 'number' // int,
}

const rules_hash1 = rules_hash as ((typeof rules_hash) & {[key: string]: string})
const teacher_hash1 = teacher_hash as ((typeof teacher_hash) & {[key: string]: string})
function isNonEmptyArrayOfStrings(value: any): boolean {
    return !!(Array.isArray(value) && value.length && value.every(item => typeof item === 'string'))
}
function ezvalidate(value: any, type: string) {
  if (type === 'string[]' && isNonEmptyArrayOfStrings(JSON.parse((value as string).replace('{', '[').replace('}', ']')))) return true
  return (typeof value) === type
}
export function validateEmployerQuery(obj: IEmployerQuery): boolean {
    var obj1 = obj as IEmployerQuery & {[key: string]: string}
    for (const key in obj1) {
        if (!ezvalidate(obj1[key], rules_hash1[key])) throw (`${key} is not ${rules_hash1[key]}`)
    }
    return true
}
export function validateTeacherQuery(obj: ITeacherQuery): boolean {
    var obj1 = obj as ITeacherQuery & {[key: string]: string}
    for (const key in obj1) {
        if (!ezvalidate(obj1[key], teacher_hash1[key])) throw (`${key} is not ${rules_hash1[key]}`)
    }
    return true
}

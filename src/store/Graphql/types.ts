export interface IEmployerQuery {
    id_token: string;
    citizen_first_name: string;
    citizen_last_name: string;
    citizen_position: string;
    citizen_organization: string;
    organization_division: string [];
    organization_location_text: string;
    organization_location_lng: number; //float
    organization_location_lat: number; //float
    organization_industry: number;
    organization_industry_other: string;
    organization_product_list: string [];
    organization_product_employee_count: string;
    program_externship_time_first: string; //date YYYY-MM-DD
    program_externship_time_second: string; //date YYYY-MM-DD
    program_externship_time_third: string; //date YYYY-MM-DD
    program_externship_options: number;
    program_externship_options_other: string;
    projects_min: number;
    projects_max: number;
    projects_engagement: number;
    projects_engagement_2: number;
    projects_requests: string []; //BROKEN FIX THIS
    projects_missions: string []; //BROKEN FIX THIS
    projects_specifications: string []; //BROKEN FIX THIS
    internships_project: number;
    internships_project_other: string;
    internships_hiring_adult: boolean;
    internships_travel: number; //BROKEN FIX THIS
    internships_education: number;
    internships_education_other: string;
    internships_talent: number;
    internships_hours_week: number;
    internships_hours_day: number;
    internships_employer_of_record: number;
    internships_compensation: number;
    internships_budget_min: number;
    internships_budget_max: number;
    internships_interview_option1: string; //date YYYY-MM-DD
    internships_interview_option2: string; //date YYYY-MM-DD
    internships_interview_option3: string; //date YYYY-MM-DD
    internships_employment: boolean;
    internships_position: number;
}

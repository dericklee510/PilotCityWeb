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
    organization_industry: bigint;
    organization_industry_other: string;
    organization_product_list: string [];
    organization_product_employee_count: string;
    program_externship_time_first: string; //date YYYY-MM-DD
    program_externship_time_second: string; //date YYYY-MM-DD
    program_externship_time_third: string; //date YYYY-MM-DD
    program_externship_options: bigint;
    program_externship_options_other: string;
    projects_min: bigint;
    projects_max: bigint;
    projects_engagement: bigint;
    projects_engagement_2: bigint;
    projects_requests: string []; //BROKEN FIX THIS
    projects_missions: string []; //BROKEN FIX THIS
    projects_specifications: string []; //BROKEN FIX THIS
    internships_project: bigint;
    internships_project_other: string;
    internships_hiring_adult: boolean;
    internships_travel: bigint; //BROKEN FIX THIS
    internships_education: bigint;
    internships_education_other: string;
    internships_talent: bigint;
    internships_hours_week: bigint;
    internships_hours_day: bigint;
    internships_employer_of_record: bigint;
    internships_compensation: bigint;
    internships_budget_min: bigint;
    internships_budget_max: bigint;
    internships_interview_option1: string; //date YYYY-MM-DD
    internships_interview_option2: string; //date YYYY-MM-DD
    internships_interview_option3: string; //date YYYY-MM-DD
    internships_employment: boolean;
    internships_position: bigint;
}
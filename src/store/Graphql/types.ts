export interface IEmployerQuery {
        id_token: string
        citizen_first_name: string,
        citizen_last_name: string,
        citizen_position: string,
        citizen_organization: string,
        organization_division: string [],
        organization_location_text: string,
        organization_location_lng: number //float
        organization_location_lat: number //float
        organization_industry: number //int,
        organization_industry_other: string,
        organization_product_list: string [],
        organization_product_employee_count: string,
        program_externship_time_first: string, //date YYYY-MM-DD
        program_externship_time_second: string, //date YYYY-MM-DD
        program_externship_time_third: string, //date YYYY-MM-DD
        program_externship_options: number //int,
        program_externship_options_other: string,
        projects_min: number //int,
        projects_max: number //int,
        projects_engagement: number //int,
        projects_engagement_2: number //int, //NOT SURE WHAT ENGAGEMENT 2 / Engagement distance?
        // projects_requests: string [], //BROKEN FIX THIS
        // projects_missions: string [], //BROKEN FIX THIS
        // projects_specifications: string [], //BROKEN FIX THIS
        internships_project: number //int,
        internships_project_other: string,
        internships_hiring_adult: boolean,
        internships_travel: number //int, //BROKEN FIX THIS
        internships_education: number //int,
        internships_education_other: string,
        internships_talent: number //int,
        internships_hours_week: number //int,
        internships_hours_day: number //int,
        internships_employer_of_record: number //int,
        internships_compensation: number //int,
        internships_budget_min: number //int,
        internships_budget_max: number //int,
        internships_interview_option1: string, //date YYYY-MM-DD
        internships_interview_option2: string, //date YYYY-MM-DD
        internships_interview_option3: string, //date YYYY-MM-DD
        internships_employment: boolean,
        internships_position: number //int
      }
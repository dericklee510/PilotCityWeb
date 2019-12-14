export interface IEmployerQuery {
    id_token: string;
    citizen_first_name: string;
    citizen_last_name: string;
    citizen_position: string;
    citizen_organization: string;
    organization_division: string;
    organization_location_text: string;
    organization_location_lng: number; // float
    organization_location_lat: number; // float
    organization_industry: number;
    organization_industry_other: string;
    organization_product_list: string[];
    organization_product_employee_count: string;
    program_externship_time_first: string; // date YYYY-MM-DD
    program_externship_time_second: string; // date YYYY-MM-DD
    program_externship_time_third: string; // date YYYY-MM-DD
    program_externship_options: number;
    program_externship_options_other: string;
    projects_min: number;
    projects_max: number;
    projects_engagement: number;
    projects_engagement_2: number;
    projects_solutions: string[];
    internships_project: number;
    internships_project_other: string;
    internships_hiring_adult: boolean;
    internships_travel: number; // BROKEN FIX THIS
    internships_education: number;
    internships_education_other: string;
    internships_talent: number;
    internships_hours_week: number;
    internships_hours_day: number;
    internships_employer_of_record: number;
    internships_compensation: number;
    internships_budget_min: number;
    internships_budget_max: number;
    internships_interview_option1: string; // date YYYY-MM-DD
    internships_interview_option2: string; // date YYYY-MM-DD
    internships_interview_option3: string; // date YYYY-MM-DD
    internships_employment: boolean;
    internships_position: number;
}

export interface ITeacherQuery {
    id_token: string;
    school_district: string;
    school_name: string;
    school_location: string;
    bell_schedule: string;
    classroom_room_location: string;
    classroom_room_phone: string;
    extension: string;
    preferred: number; // int
    preferred_other: string;
    tool_equipment: string[];
    courses_school_year: string;
    prep_period: number; // int
    course_information: string;
    enrolled_courses: string;
    enagement_alternative: boolean;
    purchase_emp_product: number; // int
}

export interface IPublicCitizenProfile {
    id_token: string;
    // creation_date: string,
    // last_update: string,
    first_name: string;
    last_name: string;
    citizen_type: string;
    citizen_description: string | null;
    title: string;
    profile_img_url: string | null;
}

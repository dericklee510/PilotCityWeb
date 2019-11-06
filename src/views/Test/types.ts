export interface Citizen {
    first_name: string,
    last_name: string,
    position: string
    organization: string,
}

export interface Organization {
    department: string[];
    location: string;
    industry: string[];
    products_services: string[];
    employee_count: string;
}

export interface ProgramDetails {
    year: string;
    externship: {
        prefered_date: {
            primary: string;
            secondary: string;
            final: string;
        };
        contribution: string[];
    }
    project: {
        capacity: {
            maximum: number;
            minimum: number;
        };
        engagement: {
            type: string;
            radius: string;
        };
    }
    internship: {
        type: string;
        travel_distance: string;
        education: string
        hosting: {
            frequency: string;
            duration: string;
        };
        official_employer: string;
        compensation: string[];
        prefered_interview_date: {
            primary: string;
            secondary: string;
            final: string;
        };
        employment: {
            continued: boolean;
            positions: string[];
        };
    }
}
export interface Intership {
    project: string[]
    hiring_adult: boolean,
    travel: string,
    education_level: string,
    talent: string[]
    hours_week: string
    hours_day: string
    employer_of_record: string,
    compensation: string,
    budget_min: number
    budget_max: number
    interview_1: string
    interview_2: string
    interview_3: string
    employment: boolean
    position_type: string

}






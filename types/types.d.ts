declare namespace model{
    export interface Name{
        first_name: string;
        last_name: string;
    }
}
declare namespace model.auth{
    export interface UserCredentials{
        email: string;
        password: string;
    }
    class SignupTypes implements Name, UserCredentials{}
    class LoginTypes implements UserCredentials{}
}
declare namespace model.profile{
    interface BaseInfo extends Name{
        citizenType: string;
        honorific: string;
    }
    export interface Teacher extends BaseInfo, Classes{
        //includes program qualifications and UserInfo
        semester: string;
        grade: string[];
        question: boolean;
        school: School;
        classroom: Classroom;
        course: Courses[];

    }
    interface School extends Schedule{
        district: string;
        name: string;
        address: string;
    }
    interface Schedule{
        period: string;
        frequency: string[];
        s_time: string;
        e_time: string;
    }
    interface Classroom{
        number: string;
        telephone: string[2]; // for phone number ans phone extention
        contact: boolean;
        tools: string[];
    }
    interface Courses extends Classes{
        school_year: string;
        prep: string[];
        industry: string;
        size: number;
        enroll: boolean;
    }
    interface Classes{
        period: string;
        subject: string;
    }
    export interface Employer extends BaseInfo, ProgramDetails{
        organization: Organization;
    }
    interface Organization{
        position: string;
        department: string[];
        address: string;
        industry: string[];
        products: string[];
        size: string;
    }
    interface ProgramDetails{
        year: string;
        externship: Externship;
        project: Project;
        internship: Internship;
    }
    interface Externship{
        prefered_date: {
            primary: string;
            secondary: string;
            final: string;
        };
        contribution: string[];

    }
    interface Project{
        capacity: {
            maximum: number;
            minimum: number;
        };
        engagement: {
            type: string;
            radius: string;
        };
        program: Programs[];
    }
    interface Programs{
        idea: string;
        objective: string;
        specification: string;
    }
    interface Internship{
        type: string;
        travel_distance: string;
        intern: InternType;
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
    interface InternType{
        adult: boolean;
        education: string[];
        student_type: string[];
    }




}
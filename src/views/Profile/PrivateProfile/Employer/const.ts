import { Constructable } from './../../../../utilities/classes/index';

export class CONST {
    ORGANIZATION_INDUSTRY_OPTIONS = [
        'Agriculture and Natural Resources',
        'Arts, Media, and Entertainment',
        'Building and Construction Trades',
        'Business and Finance',
        'Education, Child Development, and Family Services',
        'Energy, Environment, and Utilities',
        'Engineering and Architecture',
        'Fashion and Interior Design',
        'Health Science and Medical Technology',
        'Hospitality, Tourism, and Recreation',
        'Information and Communication Technologies',
        'Manufacturing and Product Development',
        'Marketing Sales and Service',
        'Public Services',
        'Transportation'
    ]

    public WORKFORCE_COUNT = [
        '1 - 10',
        '11 - 25',
        '26 - 50',
        '51 - 100',
        '101 - 500',
        '501 - 1000',
        '1000 + '
    ]

    public CLASSROOM_COUNT = [
        "1 Classroom",
        "2 Classrooms",
        "3 Classrooms",
        "4 Classrooms",
        "5 Classrooms",
        "6 Classrooms",
        "7 Classrooms",
        "8 Classrooms",
        "9 Classrooms",
        "10 Classrooms"
    ]

    public PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS = [
        'Donation',
        'Loan',
        'Purchase'
    ]

    public PROGRAMDETAILS_PROJECT_ENGAGEMENT_TYPE_OPTIONS = [
        'In-person',
        'Digital',
        'Either'
    ]

    public PROGRAMDETAILS_PROJECT_ENGAGEMENT_RADIUS_OPTIONS = [
        '5 Miles',
        '10 Miles',
        '25 Miles',
        '50 Miles'
    ]

    public INTERNSHIP_PROJECT_TYPE = [
        'Further development of project started in the classroom',
        'Work on newly assigned projects and tasks'
    ]

    public INTERNSHIP_EDUCATION_OPTIONS = [
        'High School',
        'Specialty Training',
        'Community College',
        'Bachelors',
        'Doctorate'
    ]

    public INTERNSHIP_TALENT_OPTIONS = [
        'Worker',
        'Intern',
        'Innovator',
        'Entrepreneur'
    ]

    public INTERNSHIP_EMPLOYER_OF_RECORD_OPTIONS = [
        'Our own organization',
        'PilotCity'
    ]

    public INTERNSHIP_COMPENSATION_OPTIONS = [
        'Salary',
        'Hourly',
        'Stipend',
        'Unpaid'
    ]

    public INTERNSHIP_POSITION_TYPE_OPTIONS = [
        'Part-Time',
        'Full-Time',
        'Contractor',
        'None'
    ]

    public HOST_SCHED = [
        "5 Days / Week",
        "4 Days / Week",
        "3 Days / Week",
        "2 Days / Week",
        "1 Days / Week",
        "None"
    ]

    public HOST_FREQ = [
        "8 Hours / Day",
        "7 Hours / Day",
        "6 Hours / Day",
        "5 Hours / Day",
        "4 Hours / Day",
        "3 Hours / Day",
        "2 Hours / Day",
        "1 Hours / Day",
        "None"
    ]

    public EOR = [
        "Our own organization",
        "PilotCity"
    ]

    public INTERN_COMP = [
        "Salary",
        "Hourly",
        "Stipend",
        "Unpaid"
    ]

    public ΙΝΤΕRN_TRAVEL_OPTIONS = [
        'No',
        'both',
        'license'
    ]
    static addConst<BC extends Constructable>(BaseClass:BC){
        return class extends BaseClass {
            ORGANIZATION_INDUSTRY_OPTIONS = [
                'Agriculture and Natural Resources',
                'Arts, Media, and Entertainment',
                'Building and Construction Trades',
                'Business and Finance',
                'Education, Child Development, and Family Services',
                'Energy, Environment, and Utilities',
                'Engineering and Architecture',
                'Fashion and Interior Design',
                'Health Science and Medical Technology',
                'Hospitality, Tourism, and Recreation',
                'Information and Communication Technologies',
                'Manufacturing and Product Development',
                'Marketing Sales and Service',
                'Public Services',
                'Transportation'
            ]
        
            public WORKFORCE_COUNT = [
                '1 - 10',
                '11 - 25',
                '26 - 50',
                '51 - 100',
                '101 - 500',
                '501 - 1000',
                '1000 + '
            ]
        
            public CLASSROOM_COUNT = [
                "1 Classroom",
                "2 Classrooms",
                "3 Classrooms",
                "4 Classrooms",
                "5 Classrooms",
                "6 Classrooms",
                "7 Classrooms",
                "8 Classrooms",
                "9 Classrooms",
                "10 Classrooms"
            ]
        
            public PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS = [
                'Donation',
                'Loan',
                'Purchase'
            ]
        
            public PROGRAMDETAILS_PROJECT_ENGAGEMENT_TYPE_OPTIONS = [
                'In-person',
                'Digital',
                'Either'
            ]
        
            public PROGRAMDETAILS_PROJECT_ENGAGEMENT_RADIUS_OPTIONS = [
                '5 Miles',
                '10 Miles',
                '25 Miles',
                '50 Miles'
            ]
        
            public INTERNSHIP_PROJECT_TYPE = [
                'Further development of project started in the classroom',
                'Work on newly assigned projects and tasks'
            ]
        
            public INTERNSHIP_EDUCATION_OPTIONS = [
                'High School',
                'Specialty Training',
                'Community College',
                'Bachelors',
                'Doctorate'
            ]
        
            public INTERNSHIP_TALENT_OPTIONS = [
                'Worker',
                'Intern',
                'Innovator',
                'Entrepreneur'
            ]
        
            public INTERNSHIP_EMPLOYER_OF_RECORD_OPTIONS = [
                'Our own organization',
                'PilotCity'
            ]
        
            public INTERNSHIP_COMPENSATION_OPTIONS = [
                'Salary',
                'Hourly',
                'Stipend',
                'Unpaid'
            ]
        
            public INTERNSHIP_POSITION_TYPE_OPTIONS = [
                'Part-Time',
                'Full-Time',
                'Contractor',
                'None'
            ]
        
            public HOST_SCHED = [
                "5 Days / Week",
                "4 Days / Week",
                "3 Days / Week",
                "2 Days / Week",
                "1 Days / Week",
                "None"
            ]
        
            public HOST_FREQ = [
                "8 Hours / Day",
                "7 Hours / Day",
                "6 Hours / Day",
                "5 Hours / Day",
                "4 Hours / Day",
                "3 Hours / Day",
                "2 Hours / Day",
                "1 Hours / Day",
                "None"
            ]
        
            public EOR = [
                "Our own organization",
                "PilotCity"
            ]
        
            public INTERN_COMP = [
                "Salary",
                "Hourly",
                "Stipend",
                "Unpaid"
            ]
        
            public ΙΝΤΕRN_TRAVEL_OPTIONS = [
                'No',
                'both',
                'license'
            ]
        }
    }
}

import Vue from 'vue'

export class CONST extends Vue {
    public CLASSROOM_COMMUNICATION = [
        'Before School',
        'Prep Period',
        'Lunch',
        'After School'
    ]

    public COURSES_AVAILABLE_SCHOOLYEARS = [
        '2018-2019'
    ]

    public COURSES_PREP_PERIODS = [
        'P0',
        'P1',
        'P2',
        'P3',
        'P4',
        'P5',
        'P6',
        'P7',
        'P8'
    ]

    public COURSES_PATHWAYS = [
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

    public PROGRAM_ENGAGEMENT = [
        'Yes, I am okay with digital engagement as an alternative',
        'No, I strongly prefer in-person engagement'
    ]

    public PROGRAM_PURCHASE = [
        'Yes, our school can purchase',
        'No, our school cannot purchase',
        'It is possible, but not guaranteed'
    ]
}

import { ICourses } from '../CourseInput/types'

export interface ICoursePrograms {
    period: string;
    course: string;
    grades: string[];
    semester: string;
}

export class CoursePrograms implements ICoursePrograms {
    public period: string = '';

    public course: string = '';

    public grades: string[] = [];

    public semester: string = '';

    public constructor(coursePrograms: ICourses, optional_args?: { grades: string[]; semester: string }) {
        this.period = coursePrograms.period
        this.course = coursePrograms.course
        if (optional_args) {
            this.grades = optional_args.grades ? optional_args.grades : []
            this.semester = optional_args.semester ? optional_args.semester : ''
        }
    }
}

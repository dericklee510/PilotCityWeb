import { ICourses } from './../CourseInput/types';
export interface ICoursePrograms {
    period: string;
    course: string;
    grades: string[];
    semester: string;
}

export class CoursePrograms implements ICoursePrograms{
    public period: string = ""
    public course: string = ""
    public grades: string[] = []
    public semester: string  = ""
    private constructor (coursePrograms:ICourses){
        this.period = coursePrograms.period
        this.course = coursePrograms.course
    }
}
import { ICourses } from './../CourseInput/types';
export interface ICoursePrograms {
    period:string
    course:string
    grades:string []
    semester:string 
}

export class CoursePrograms implements ICoursePrograms{
    period:string = ""
    course:string =""
    grades:string[] = []
    semester:string  = ""
    constructor (coursePrograms:ICourses){
        this.period = coursePrograms.period
        this.course = coursePrograms.course
    }
}
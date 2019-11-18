import { IBellSchedule } from './components/BellScheduleInput/types'
import { ICourses } from './components/CourseInput/types.ts'
export interface TeacherProfile{
    classSchedules: IBellSchedule[];
    enrolledClasses: ICourses[];
}
import { AutoCompleteAddress } from '@/components/GoogleMaps'
import { IBellSchedule } from './components/BellScheduleInput/types'
import { ICourses } from './components/CourseInput/types'
export interface TeacherProfile{
    citizen: {
        title: string;
        first_name: string;
        last_name: string;
    }
    school: {
        district: string;
        name: string;
        location: AutoCompleteAddress;
        BellSchedules: IBellSchedule[];
    }
    classroom: {
        location: string;
        phone_number: string;
        extension: string;
        preferred_communication: string;
        available_equipment: string[];
    }
    courses: {
        school_year: string;
        classSchedules: ICourses[];
    }
}
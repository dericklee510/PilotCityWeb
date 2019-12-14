import { CoursePrograms } from './components/CoursePrograms/types'
import { ICourses } from './components/CourseInput/types'
import { AutoCompleteAddress } from '@/components/GoogleMaps'
import { IBellSchedule } from './components/BellScheduleInput/types'

export { ICitizenBase } from '../../types'
export interface TeacherProfile{
    citizen: {
        title: string;
        first_name: string;
        last_name: string;
    };
    school: {
        district: string;
        name: string;
        location: AutoCompleteAddress;
        bellSchedules: IBellSchedule[];
    };
    classroom: {
        location: string;
        phone_number: string;
        extension: string;
        preferredCommunication: [];
        available_equipment: string[];
    };
    courses: {
        schoolYear: string;
        prepPeriod: string;
        classSchedules: ICourses[];
    };
    programDetails: {
        coursePrograms: CoursePrograms[];
        engagement_alternative: boolean;
        purchase_emp_product: string;
    };
}
